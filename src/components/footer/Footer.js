import React, {Component} from 'react'
import './footer.css'
import titleImg from './overridetitle.png'

class Footer extends Component {
    render() { 
        return (
            <div className="footer">
            <div className="social-media">
            <p>social media links</p>
            <p>facebook</p>
            <p>instagram</p>
            <p>youtube</p>
            <p>vimeo</p>
            <p>twitter</p>
            </div>

            <div className="contact">
            <h1>Contact</h1>
            </div>

            <div className="address">
            <p>In a room named after a mountain @</p> 
            <p>560 S 100 W St, Provo, UT 84601</p>
            </div> 

            </div>
        )
        };
    }

 
export default Footer;