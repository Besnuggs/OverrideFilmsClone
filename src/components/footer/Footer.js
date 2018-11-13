import React, {Component} from 'react'
import './footer.css'
import facebook from '../../imgs/facebook.png'
import instagram from '../../imgs/instagram.png'
import twitter from '../../imgs/twitter.png'
import youtube from '../../imgs/youtube.png'
import vimeo from '../../imgs/vimeo.png'
import overrideOGLogo from '../../imgs/OverridefilmsLogoWhite.png'
import {pulse} from 'animate.css'

class Footer extends Component {
    render() { 
        return (
            <div className="footer">
            <div className="social-media">
            <a href="https://www.facebook.com/overridefilms"><img src={facebook} alt="facebook" className="facebook" /></a>
            <a href="https://www.instagram.com/overridefilms/"><img src={instagram} alt="instagram" className="instagram" /></a>
            <a href="https://twitter.com/overridefilms"><img src={twitter} alt="twitter" className="twitter" /></a>
            <a href="https://www.youtube.com/user/FlyingSensors"><img src={youtube} alt="youtube" className="youtube" /></a>
            <a href="https://vimeo.com/overridefilms" className="${pulse}"><img src={vimeo} alt="vimeo" className="vimeo" /></a>
            </div>

            <div className="OG-website">
            <a href="http://overridefilms.com/"><img className="OverrideLogo" src={overrideOGLogo} alt="original-site"></img></a>
            </div>

           

            </div>
        )
        };
    }

 
export default Footer;