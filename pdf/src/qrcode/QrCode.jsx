import React from 'react';
import QRCode from'qrcode';
import {useState,useEffect} from 'react';

const QrCode=({text})=> {
    const[src,setSrc]=useState('');
    // const[txt,setTxt]=useState([]);

    useEffect(() => {
        // if(txt){
        //     QRCode.toDataURL(txt).then((setSrc));
        // }
     
        QRCode.toDataURL(text).then((setSrc));
    //     setSrc(data);
    //   })
    },[])
    
    return (
        <div>
            {/* <input type="text" onChange={(e)=>setTxt(e.target.value)}></input> */}
            <p>your Qrcode is available here for your data :<b>{text}</b></p>
            <img src={src}  alt="qrcode"/>
        </div>
    )
}
export default QrCode;