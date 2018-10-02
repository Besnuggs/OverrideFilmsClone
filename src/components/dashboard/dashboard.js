import React, {Component} from 'react'
import './dashboard.css'
import ReactPlayer from 'react-player'



class Dashboard extends Component {
constructor(){
    super()
        this.state={
            videoURL: "https://player.vimeo.com/video/129610347",
        }
}



    render() { 
        return (
            
            <div className="dashboard">
                

            <div className='react-wrapper'>
            <ReactPlayer
            className='react-player'
            url={this.state.videoURL} 
            config={{
                vimeo: {
                    playerOptions: {autoplay: true}
                }
            }}
            width='100%'
            height='100%'
            controls="false"
            muted={true}
            autoPlay={true}
            />
            </div>

            <div className="about-section">

            </div>
            </div>
          );
    }
}
 
export default Dashboard;