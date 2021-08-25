import React from 'react';
import Pdf from "react-to-pdf";
import image from'../image.webp';

const ref = React.createRef();

const PDF = (props) => {

  return (
    <>
      <div className="Post" ref={ref}>
          <h5>Summary of your data:</h5>
        <h1><b>title :</b>{props.title}</h1>
        <img src={image} alt='sample' />
        <p> <b>date:</b>{props.date}</p>
        <p><b>subject:</b>{props.content}</p>
        <p><b>data:</b>{props.body}</p>
      </div>
      <Pdf targetRef={ref} filename="vm44_test.pdf">
        {({ toPdf }) => <button onClick={toPdf} password='vishal@123'>get as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;