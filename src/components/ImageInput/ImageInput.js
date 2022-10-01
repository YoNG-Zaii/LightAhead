import React, {useState, useEffect, usRef, useRef} from "react";
import image from "../../images/gallery.png";
import "./ImageInput.css";

const ImageInput = () => {
    const inputRef = useRef()
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
    const handleChoose = () => {
        inputRef.current.click();
    }
    return <div className="imageInput-box">
        <h1 className="image-title">Upload Your Image here!</h1>
        <img className="image-icon" src={image} alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       <input className="imageInput" ref={inputRef} type="file" multiple accept="image/*" onChange={onImageChange} />
       <button className="btn" onClick={handleChoose}>Upload Image</button>
    </div>
}

export default ImageInput;