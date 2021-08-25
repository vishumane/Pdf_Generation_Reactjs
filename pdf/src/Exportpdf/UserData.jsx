import React,{useState} from 'react';
import PDF from'./PDF';

 const UserData=()=> {
     const [title,setTitle]=useState('');
     const [content,setContent]=useState('');
     const [body,setBody]=useState('');
     const[date,setDate]=useState([]);
     const [postpublish,setPostpublish]=useState(false);


   const  submitData = (e) => {
        if(!title || !date || !content ||!body){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            setPostpublish(true);

        }
    }

    return (
        <>
                {  !postpublish ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">**save you data as pdf**</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={(e)=>setTitle(e.target.value)} name="title" type="text" placeholder=" Title" className="form-control" />
                                                </div>

                                                <div>
                                                    <input type="date" onChange={(e)=>setDate(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={(e)=>setContent(e.target.value)} name="image" type="text" placeholder="Enter Content" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={(e)=>setBody(e.target.value)} className="form-control" name="content" placeholder="Enter your data" rows="7"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <button type="button" onClick={submitData} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={title} content={content} body={body} date={date} />
                    )
                }
            </>
        );
    }
 

export default UserData;




