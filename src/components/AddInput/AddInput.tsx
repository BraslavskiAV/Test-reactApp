import React, { useState } from 'react';


function AddInput() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    console.log('File Add:', file);
  };


  return (
    <>
      <div className="add_post_container">
        <p className="title_inputs">Add post</p>
        <div className="add_input">
          <div className="add_title">
            <p className='input_name'>Title</p>
            <input className="input_title"
            placeholder='Enter title ...'/>
          </div>
          <div className="input_media">
            <div className='media_lesson'>
              
            </div>
            <div className='media_image'>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {file && (
                <button onClick={handleRemoveFile}>
                  Remove File
                </button>
              )}
              <button onClick={handleSubmit} disabled={!file}>
              Upload new
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInput;

