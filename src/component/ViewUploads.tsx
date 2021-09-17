import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import '../CSS/ViewUploads.css'


const api = axios.create({
    baseURL: `http://localhost:3000`
})
export const ViewUploads = (props: { getall: any[] }) => {


    const [videioId, setvideioId] = useState('')
    const [watchcomplete, setwatchcomplete] = useState(false)
    const [watchEnd, setwatchEnd] = useState(false)
    const handleWatchComplete = (state: any) => {
        if (!watchcomplete) {
            setwatchcomplete(true)
        }
        api.get(`http://localhost:3000/component/played?time=${state.played}&name=${videioId}`)
        console.log(state.played);
        console.log("Video ID",videioId);
        
    }



    const  VideoPlayer = async (videoname:any) =>{

    }
    const  DeleteData = async (videoname:any) =>{
        console.log("Inside delete",videoname);

        // let SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('http://localhost:3000/component/delete-image', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
            body: JSON.stringify({
                "videoname": videoname,

    
            })
        });
        
    }

    return (
        <div >

            <div style={{textAlign: 'center'}} >
            {props.getall && props.getall.map((row =>

<div className="mainDiv"  >
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <div className="card-body">
    <h5 className="card-title">Video ID : {row.videoid}</h5>
    
                    <div style={{justifyContent: "center",alignItems: "center",}}>
                        {/* <p>{row.videoid}</p> */}
                        <ReactPlayer light={true} controls playing url={`http://localhost:3000/component/read-image?filename=${row.videoname}`} onSeek={e => console.log('onSeek', e)}
                            onProgress={handleWatchComplete}
                            onEnded={() => setwatchEnd(true)}
                            // onPause={setvideioId(row.videioId)}
                            onPause={() => setvideioId(row.videoid)}
                    
                        />
                        
                        <div className={watchcomplete ? "complete" : " notcomplete"}>
                            {watchcomplete ? (watchEnd ? "Completed" : "some left") : "Not Comeplete"}

                           
                        </div>
                    </div>
               
    <p className="card-text">Video description</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a>
     */}
      <button type="button" onClick={()=>DeleteData(row.videoname)}  className="btn btn-danger">Delete</button> 
   {/* <button type="button" onClick={()=>VideoPlayer(row.videoname)}  className="btn btn-danger">View Video on separate screen</button>  */}
  </div>
</div>
))

}
            </div>

        </div>
    )
}
