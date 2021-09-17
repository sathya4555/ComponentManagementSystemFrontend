import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import { useSelector } from "react-redux";
import axios from 'axios';
import "./UploadPage.css"
import { ProgressBar } from 'react-bootstrap';


// import akshu from'../img/';


const api = axios.create({
    baseURL: `http://localhost:3000`
})

function UploadPage() {
    const [percentage, setpercentage] = useState(1);
    const [description, setdescription] = useState('')

    const options = {
        onUploadProgress: (progressEvent:any) => {
          const {loaded, total} = progressEvent;
          let percent = Math.floor( (loaded * 100) / total )
          console.log( `${loaded}kb of ${total}kb | ${percent}%` );
  
          if( percent < 100 ){
            setpercentage(percent)
          }
        }
      }

    const [FilePath, setFilePath] = useState("")
    const [setimage, setsetimage] = useState("")

    const onDrop = (files: any) => {
        let formData = new FormData();
        formData.append("myfile", files[0])
        const config: any = {
            header: { 'content-type': 'multipart/form-data', }
        }
        console.log(files)


        api.post('component/upload',formData,options)
            .then(response => {
                if (response.data.success) {

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }
                    setFilePath(response.data.filePath)
                } else {
                    alert('Video saved')
                }
            })

    }
const [watchEnd, setwatchEnd] = useState(false)

    const [watchcomplete, setwatchcomplete] = useState(false)
    const handleWatchComplete = (state: any) =>{
        if(!watchcomplete){
            setwatchcomplete(true)

        }
        api.get(`http://localhost:3000/component/played?time=${state.played}&name=1`)
        console.log(state.played);
    }
    const { Title } = Typography;
    const { TextArea } = Input;

const [videoname, setvideoname] = useState('')
const [mark, setmark] = useState(1)
const [desc, setdesc] = useState('')

    const onSubmit = (event:any) => {
        event.preventDefault();
        const response = fetch(`http://localhost:3000/video-data/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        //   credentials: 'include',
          body: JSON.stringify({
             "videoname": videoname,
             "mark": mark,
             "desc": desc
          })
    
      }).then(response => response.json())
      .then(json => sessionStorage.setItem("token", json.accessToken.jwtToken));

    };
    
  
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>

                <Title level={2} > Upload Video</Title>
            </div>
            <img src={setimage} />
            {/* { percentage > 0 && <ProgressBar now={percentage}  label={`${percentage}%`} /> } */}
            {/* <ProgressBar now={percentage}  label={`${percentage}%`} /> */}
            {/* {(percentage > 0? <ProgressBar now={percentage}  label={`${percentage}%`} />: "")} */}
            <Form >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '700px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}

                            </div>
                        )}
                    </Dropzone>
                </div>
          <form onSubmit={onSubmit}>
          <div className='formDiv'>
                    <div className="form-group">
                    {/* <label >Email address</label> */}
                    <input type="text" className="form-control"  onChange={(event) => setdesc(event.target.value)} aria-describedby="emailHelp" placeholder="Enter Description"/>
                 </div>
                 </div>
                 <div className='betweenIputs'>
                    <div className="form-group">
                    {/* <label >Email address</label> */}
                    <input type="text" className="form-control"   onChange={(event) => setmark(parseInt(event.target.value))} aria-describedby="emailHelp" placeholder="Enter Alloted marks"/>
                 </div>
                 </div>
                 <div className='betweenIputs'>
                 <button type="submit" className="btn btn-success">Submit</button>
                 </div>

              </form>
                   
                   

               
            </Form>
        </div>
    )
}

export default UploadPage
