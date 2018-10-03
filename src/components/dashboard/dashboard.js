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
            

            <div className="background-video">
            <Vimeo
            video="129610347"
            autoplay="true"
            muted="true"
            background="true"
            loop="true"
            width="1922"
            />
            </div>
           
           
            
            </div>
          );
    }
}
 
export default Dashboard;