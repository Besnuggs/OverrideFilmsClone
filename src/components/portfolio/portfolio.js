import React, {Component} from 'react'
import Vimeo from '@u-wave/react-vimeo'
import ModalVideo from 'react-modal-video'


class Portfolio extends Component {
constructor(){
    super()
        this.state={
            isOpen: false
        }
    this.openModal = this.openModal.bind(this)
}

openModal(){
    this.setState({isOpen: true})
}

render() {
        return (
            <div className="portfolio">
                <h1>Portfolio</h1>

                <div className="filter-buttons">
                <span>All</span>
                <span>Aerial</span>
                <span>Luxury</span>
                <span>Commercial</span>
                <span>Tourism</span>
                <span>Sport</span>
                </div>

                <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/100607532" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F482145383_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />
                    IRG | Rainbow Spring</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/118293267" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/505297831_1280x720.jpg"
                    />
                    The Cabin @ Oakley</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/83739112" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/505297831_1280x720.jpg"
                    />
                    Red Ledges | Real Estate</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/72234598" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F482145383_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />Lexus New Dealership</a>
                    </div>
                </section>

                <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/81212583" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F482145383_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />Mitsubishi Outlander</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/113410786" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F482145383_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />Lexus December to Remember</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/114349608" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F482145383_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />SuperSonic</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/113151291" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/508486788_1280x720.jpg"
                    />
                    Crewe SuperCar</a>
                    </div>
                </section>

                <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/97860446" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/478418293_1280x720.jpg"
                    />
                    Aston Martin Black Tie</a>
                    </div>
                    
                    <div className="videoBox" >
                    <a href="https://vimeo.com/124531398" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/514565137_1280x720.jpg"
                    />
                    McCorvey Sheet Metal</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://www.youtube.com/watch?v=iUo6GwEw_Bw" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/514565137_1280x720.jpg"
                    />The North Face</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/117356070" >Thrillseeker 5K | Obstacles</a>
                    </div>
                    </section>
                    
                    <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/117553885" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/514565137_1280x720.jpg"
                    />Vintage on the River</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/82837814" >IRG | R Fishing Ranch</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://www.youtube.com/watch?v=XHndjxF84_E" >Doritos</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/97046377" >
                    <img className="img-display" src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F477281801_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
                    />
                    Mesquite Paralong Drive Nationals Trailer</a>
                    </div>
                    </section>

                    <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/129610347"><img className="img-display" src="http://i.vimeocdn.com/video/521183979_1280x720.jpg"
                    />Uplift | Aerial Reel</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/86747776" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/462708881_1280x720.jpg"
                    />Influence | Walker Estate Utah</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/107013780" >Wolf Creek Ranch</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/101576612" >Red Ledges | Brown Duck Residence</a>
                    </div>
                    </section>

                    <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/126025578" >
                    <img className="img-display" src="https://i.vimeocdn.com/video/462708881_1280x720.jpg"
                    />Way Engineering</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/83740923" >Red Ledges</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/51181307" >Kanab Utah</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/84255304" >Samsung Olympic's Aerials</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/95635641" >Wekopa Golf Club</a>
                    </div>
                    </section>
                    
{/* <a href="https://vimeo.com/122164605" >SarahTime | Revelstoke BC</a> */}
{/* <a href="https://vimeo.com/100607532" >Snowball(Fall)</a> */}
{/* <a href="https://vimeo.com/116730513" >Crescent Dunes Solar Farm</a> */}
            <div>
            <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='83740923' onClose={() => this.setState({isOpen: false})} />
            </div>
               
        
           

            </div>
          );
    }
}
 
export default Portfolio;