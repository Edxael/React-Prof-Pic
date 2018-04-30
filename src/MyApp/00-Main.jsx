import React from 'react'

import ImagesUploader from 'react-images-uploader'
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

// https://github.com/aleksei0807/react-images-uploader


export default class extends React.Component{
    render(){
        return(
            <div>
                <h1>My Profile Page</h1>

                <p>Data here... 1</p>
                <hr/>

                <ImagesUploader
                    url="http://localhost:9090/notmultiple"
                    optimisticPreviews
                    multiple={false}
                    onLoadEnd={(err) => {
                        if (err) {
                            console.error(err);
                        }
                    }}
				    label="Upload a picture"
				/>
               
            </div>
        )
    }
}


// =======================================================
// import UploadImage from 'react-upload-images'
// <UploadImage uploadLink="https://www.demo.com" />
// =======================================================