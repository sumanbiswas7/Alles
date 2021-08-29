import React, { useState } from 'react';
import axios from "axios";

const ImageForm = () => {

const [file, setFile] = useState(null);


const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file)
}


const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for(var x = 0; x<file.length; x++) {
        data.append('file', file[x])
    }
    axios.post("http://localhost:5000/upload", data)
    .then(res => { 
        console.log(res.statusText)
      })
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  console.log(images)
  
return ( 
    <div>
       <form >
        <div className="form-group" >

            <label htmlFor="file">Upload File:</label>
            <input 
            className="form-control-file mb-3" 
            type="file" id="file" 
            accept=".jpg"
            multiple
            onChange={handleFileChange}
            />

            <button 
            className="btn btn-primary mt-3" 
            onClick={handleSubmit}
            >Upload</button>
        </div>
       </form>
       {/* Display Image Here */}
    </div>
 );
}

export default ImageForm;