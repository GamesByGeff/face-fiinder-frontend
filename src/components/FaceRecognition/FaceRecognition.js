import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    console.log(box);
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' 
                    style={{ top: box.top, right: box.right, left: box.left, bottom: box.bottom }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;