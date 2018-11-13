import React, {Component} from 'react'
import './about.css'
import {Link} from 'react-router-dom'
import $ from 'jquery'




class About extends Component {
    render() {
        

    // Jquery Counter code
    var a = 0;
    $(document).scroll(function () {
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
          countTo = $this.attr('data-count');
          $({
            countNum: $this.text() }).
          animate({
            countNum: countTo },
          {
            duration: 4000,
            easing: 'swing',
            step: function step() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function complete() {
              $this.text(this.countNum);
              //alert('finished');
            } });
        });
        a = 1;
      }
    });
   

        return (
        <div className="about-wrapper">
                
                <div className="pimg1">
                    <div className="ptext">
                     <Link to="/portfolio"><span className="border">
                       
                        </span></Link>
                    </div>
                </div>

                <section className="section">
                    <h1 className="section-titles">Films You Feel. Films That Fascinate.</h1>
                         <p className="section-descriptions">
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                        </p>
                </section>

                <div className="pimg2">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <section className="section">
                    <h1 className="section-titles">AERIAL CINEMATOGRAPHY
+
SO MUCH MORE.</h1>
                         <p>
                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        </p>
                </section>

                <div className="pimg3">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <div id="counter">
                         <h1 className="counter-text">Combined years in production:</h1>
                        <div className="counter-value" data-count="22">0</div>
                        <h1 className="counter-text">Combined years in aerial production</h1>
                         <div className="counter-value" data-count="10">0</div>
                         <h1 className="counter-text">Logged flights on projects</h1>
                        <div className="counter-value" data-count="2280">0</div>
                        <h1 className="counter-text">Happy Customers</h1>
                        <div className="counter-value" data-count="312">0</div>
                        </div>

{/* Team Section - Many Flip cards ahead.  "ontouchstart" allows mobile flipping */}
            <div className="team">
        <h2 className="section-titles">Team</h2>
<div className="The-Team-Cards">
{/* Card 1 */}
<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
            <img src="https://cdn.vox-cdn.com/thumbor/nooV9CHw3TGpRVF210T8XXO6X3Q=/71x0:570x374/1200x800/filters:focal(71x0:570x374)/cdn.vox-cdn.com/uploads/chorus_image/image/49958765/kit-harington-sad-jon-snow-game-of-thrones.0.0.jpg" alt="employee" />
			<h1>Jon Snow</h1>
            <h2>"King Crow"</h2>
		</div>
		<div className="back">
			<h1>Jon Snow</h1>
            <h2>"Defender of The North"</h2>
            <p>
            Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised by Eddard alongside his lawful children at Winterfell but his true parentage is kept secret from everyone, including Jon himself. In order to escape his bastard status, Jon joins the Night's Watch and is eventually chosen as Lord Commander.
            </p>
            <a href="mailto:JonSnow@hotmail.com?Subject=You%20know%20nothing,%20Jon%20Snow."><i className="fas fa-envelope"></i></a>
		</div>
	</div>
</div>

{/* Card 2 */}
<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
            <img src="https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png" alt="employee" />
			<h1>Daenerys Targaryen</h1>
            <h2>"The Dragon Queen"</h2>
		</div>
		<div className="back">
			<h1>Daenerys Targaryen</h1>
            <h2>"Protector of the Seven Kingdoms"</h2>
            <p>Queen Daenerys Targaryen, also known as Dany and Daenerys Stormborn, is the younger sister of Rhaegar Targaryen and Viserys Targaryen and only daughter of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion.</p>
            <a href="mailto:DaenerysTargaryen@hotmail.com?Subject=Everyone's%20cheering%20for%20your%20return%20to%20the%20Iron%20Throne."><i className="fas fa-envelope"></i></a>
		</div>
	</div>
</div>

{/* Card 3 */}
<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
            <img src="https://static.toiimg.com/thumb/62981209/Peter-Dinklage-aka-Tyrion-Lannister-is-in-Kashmir-and-we-cannot-keep-calm.jpg?width=748&height=499" alt="employee" />
			<h1>Tyrion Lannister</h1>
            <h2>"Imp"</h2>
		</div>
		<div className="back">
			<h1>Tyrion Lannister</h1>
            <h2>"Lord of Casterly Rock"</h2>
            <p>Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.</p>
            <a href="mailto:tyrionlannister@hotmail.com?Subject=You're%20my%20favorite%20character."><i className="fas fa-envelope"></i></a>
		</div>
	</div>
</div>

{/* Card 4 */}
<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
            <img src="https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest?cb=20170818052054" alt="employee" />
			<h1>Jaime Lannister</h1>
            <h2>"Kingslayer"</h2>
		</div>
		<div className="back">
			<h1>Jaime Lannister</h1>
            <h2>"Head of the King's Guard"</h2>
            <p>Jaime previously served in the Kingsguard of Aerys Targaryen, known as the Mad King, before infamously backstabbing him during the Sack of King's Landing, earning Jaime the nickname of the Kingslayer. He continued to serve in the Kingsguard of Robert Baratheon, and as Lord Commander for Robert's alleged sons Joffrey and Tommen. However, a confrontation with the Faith of the Seven led to his dismissal from the sworn order.</p>
            <a href="mailto:Jaimelannister@hotmail.com?Subject=What's%20up,%20King%20Slayer?"><i className="fas fa-envelope"></i></a>
		</div>
	</div>
</div>

{/* Card 5 */}
<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
            <img src="https://i.ytimg.com/vi/O2J5Ft0h-68/maxresdefault.jpg" alt="employee" />
			<h1>Cersei Lannister</h1>
            <h2>"Lady of Casterly Rock"</h2>
		</div>
		<div className="back">
			<h1>Cersei Lannister</h1>
            <h2>"Queen of the Seven  Kingdoms"</h2>
            <p>
                After the assassinations of Joffrey and Myrcella and Tommen's suicide in the wake of the destruction of the Great Sept of Baelor, Cersei assumed the throne under the name of Cersei of the House Lannister, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.
            </p>
            <a href="mailto:Cerseilannister@hotmail.com?Subject=How's%20life%20at%20Casterly%20Rock?"><i className="fas fa-envelope"></i></a>
		</div>
	</div>
</div>
</div>

{/* End of Team Cards */}
                        </div>
        
        <div className="clone">
        <h1 className="section-titles">Clone</h1>
            <p>
                This website is a quasi-clone of Override Films's main website.  The social media icons in the footer redirect to their company's respective social media pages, and their original logo at the center of the footer redirects to their actual website. The products and data used on this site is dumby data for the sole purpose of emulating the stylistic elements of the original website while adding the functionality required for an online store and cart.
            </p> 
        </div>
        </div>  
        );
    }
}
 
export default About;