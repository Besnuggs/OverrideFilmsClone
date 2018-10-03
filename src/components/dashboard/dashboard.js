import React, {Component} from 'react'
import './dashboard.scss'
import Vimeo from '@u-wave/react-vimeo'


class Dashboard extends Component {
constructor(){
    super()
        this.state={
            
        }
}

    render() { 
        return (
            <div className="dashboard">

         

            <Vimeo
            className="background-video"
            video="129610347"
            autoplay="true"
            muted="true"
            background="true"
            loop="true"
            />
            
            <div id="about-modal">
            <h1>dfsdfsdfsdfs</h1>
            </div>
            
            </div>
          );
    }
}
 
export default Dashboard;