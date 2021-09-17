import row from 'antd/lib/row'
import axios from 'axios'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const api = axios.create({
    baseURL: `http://localhost:3000`
})
import '../CSS/ViewUploads.css'
export const VideoPlayer = () => {

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



    return (
        <div>
             
        </div>
    )
}
