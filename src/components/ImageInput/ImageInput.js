import React, {useState, useEffect} from "react";
import "./ImageInput.css";

const ImageInput = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([[]]);

    useEffect(()=>{
        if(images.length <1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    } ,[images])

    const onImageChange = (event) =>{
        setImages([...event.target.files]);
        console.log(event);
    }
    return <div className="imageInput-box">
       <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
}

export default ImageInput;