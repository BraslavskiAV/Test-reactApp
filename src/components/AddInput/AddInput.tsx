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
              <p className='lesson_number'>Lesson number</p>
              <input className='lesson_input'
              placeholder='Enter lesson ...'>
              </input>
            </div>
            <div className='media_image'>
              <p className='image_lesson'>Image</p>
              <div className='input-image_block'>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className='image_input'
                />
                {file && (
                  <button onClick={handleRemoveFile} className='button_remove'>
                    Remove File
                  </button>
                )}
                <button onClick={handleSubmit} disabled={!file} className='button_load'>
                Upload new
                </button>
              </div>
            </div>
          </div>
          <div className='add_description'>
            <p className='description_title'>Description</p>
            <textarea className="desription_input"
            placeholder='Add your text ...'/>
          </div>
          <div className='add_text'>
            <p className='text_title'>Text</p>
            <textarea className="text_input"
            placeholder='Add your text ...'/>
          </div>
        </div>
        <div className='control_butons'>
          <button className='del_post'>Delete post</button>
          <div className='buttons_right'>
            <button className='button_cancel'>Cancel</button>
            <button className='button_add'>Add post</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInput;

