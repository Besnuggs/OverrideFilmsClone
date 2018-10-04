import React, {Component} from 'react'
import './about.css'
import {Parallax} from 'react-scroll-parallax'



class About extends Component {
    render() { 
        return (
        <div className="about">
        <Parallax
        className="background-image-forest"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
            <img src="https://scontent-lax3-1.cdninstagram.com/vp/a595d8254749761804cf3ff41b6e9134/5BCAEC69/t51.2885-15/e35/c0.135.1080.1080/s480x480/32006588_215993399179957_78361910243753984_n.jpg" />
        </Parallax>
        
        <div className="overrideFilms">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo</p>
            </div>

            <img
            src="https://air-vid.com/wp-content/uploads/job-manager-uploads/main_image/2018/02/Override_Pix-01-SolarFarm-1067x800.jpg" />
            <div className="Expertise">
            <h1>Expertise</h1>
            <p>
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.   
            </p>
            </div>

            <img
            src="https://scontent-sea1-1.cdninstagram.com/vp/35f5fc4ae6de6a9914cedf06985332a4/5C4DB2F7/t51.2885-15/e35/38721610_784900085234656_2049843759868280832_n.jpg?se=7&ig_cache_key=MTg0ODc3MDQ1NDA1Mzg0NTQ2NQ%3D%3D.2"/>
            <div className="Production">
            <h1>Production</h1>
            <p>
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
            </p>
            </div>
        
        
        
        
        
        </div>  
        );
    }
}
 
export default About;