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
                    <a href="https://vimeo.com/100607532" >IRG | Rainbow Spring</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/118293267" >The Cabin @ Oakley</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/83739112" >Red Ledges | Real Estate</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/72234598" >Lexus New Dealership</a>
                    </div>
                </section>

                <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/81212583" >Mitsubishi Outlander</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/113410786" >Lexus December to Remember</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/114349608" >SuperSonic</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/113151291" >Crewe SuperCar</a>
                    </div>
                </section>

                <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/97860446" >Aston Martin Black Tie</a>
                    </div>
                    
                    <div className="videoBox" >
                    <a href="https://vimeo.com/124531398" >McCorvey Sheet Metal</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://www.youtube.com/watch?v=iUo6GwEw_Bw" >The North Face</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/117356070" >Thrillseeker 5K | Obstacles</a>
                    </div>
                    </section>
                    
                    <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/117553885" >Vintage on the River</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/82837814" >IRG | R Fishing Ranch</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://www.youtube.com/watch?v=XHndjxF84_E" >Doritos</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/97046377" >Mesquite Paralong Drive Nationals Trailer</a>
                    </div>
                    </section>

                    <section className="videoGrid">
                    <div className="videoBox" >
                    <a href="https://vimeo.com/129610347" >Uplift | Aerial Reel</a>
                    </div>

                    <div className="videoBox" >
                    <a href="https://vimeo.com/86747776" >Influence | Walker Estate Utah</a>
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
                    <a href="https://vimeo.com/126025578" >Way Engineering</a>
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
            <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2016/08/Rio2016_App_Main_1.jpg" onClick={this.openModal} />
            </div>
               
        
           

            </div>
          );
    }
}
 
export default Portfolio;