import React, {Component} from 'react'
import Expertise from '../expertise/expertise'
import Production from '../production/production'

class About extends Component {
    render() { 
        return (
        <div>
            <Expertise />
            <Production />
        </div>  
        );
    }
}
 
export default About;