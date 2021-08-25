import React from 'react';
import QRCode from'qrcode';
import {useState,useEffect} from 'react';

const QrCode=({text})=> {
    const[src,setSrc]=useState('');

    useEffect(() => {
      QRCode.toDataURL(text).then((setSrc));
    //     setSrc(data);
    //   })
    },[])

    return (
        <div>
            <p>your Qrcode is available here for your data :<b>{text}</b></p>
            <img src={src}  alt="qrcode"/>
        </div>
    )
}
export default QrCode;