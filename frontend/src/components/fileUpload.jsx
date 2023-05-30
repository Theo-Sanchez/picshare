import React from 'react';

const FileUpload = () => {

    const [imageUrl, setImageUrl] = React.useState("");
    const [input, setInput] = React.useState({
        "file" : "",
        "filename" : "",
    });
    const setSpecifiedInput = (key, value) => {
        setInput({
            ...input,
            [key] : value 
        })
    }

    const handleUploadImage = (event) => {
        event.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        fetch('http://localhost:8000/upload', {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState(setImageUrl(`http://localhost:8000/${body.file}`))
          });
        })
      }
      
    return (
      <form onSubmit={handleUploadImage}>
        <div>
          <input ref={(ref) => { setSpecifiedInput("file", ref); }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { setSpecifiedInput("filename", ref); }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={imageUrl} alt="uploaded img" />
      </form>
    )
};

export default FileUpload;
