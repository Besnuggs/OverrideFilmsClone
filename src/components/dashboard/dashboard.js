import React, {Component} from 'react'
import './dashboard.css'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const AppDiv = styled.div`
    text-align: center;
    color:red;
    font-size: 72px;
    `

class Dashboard extends Component {
constructor(){
    super()
        this.state={
            videoURL: "https://player.vimeo.com/video/129610347",
        }
}



    render() { 
        return (
            <AppDiv>
            <div className="dashboard">
                <h1>home</h1>

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
            </AppDiv>
          );
    }
}
 
export default Dashboard;