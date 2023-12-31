import './App.css';
import b1 from './images/p1.png';
import b2 from './images/p2.png';
import b3 from './images/p3.png';
import uichange from './icons/uichange.svg';
import linkedin from './icons/linkedin.svg';
import gicon from './icons/github.svg';
import menu from './icons/menu.svg';
import close from './icons/close.svg';
import './style.css';

function menfire() {
  document.getElementById("mu").style.height = "10%";
  document.getElementById("navele").style.visibility = "visible";
  document.querySelector(".App").style.zIndex = "1";
  document.getElementById("navele").style.zIndex = "999";
  document.getElementById("muroc").style.visibility = "hidden";
  document.getElementById("muroclose").style.visibility = "visible";
}
function menclose() {
  document.getElementById("muroclose").style.visibility = "hidden";
  document.getElementById("mu").style.height = "auto";
  document.getElementById("navele").style.visibility = "hidden";
  document.getElementById("muroc").style.visibility = "visible";
}

function App() {
  return (
    <div className="App">

      <div id='navbar'>
        <div id='logo'>
          <p id='logoh'>Portfolio</p>
        </div>
        <ul id='navele'>
          <li className='navli'><a className='nava' href='#header'>Home</a></li>
          <li className='navli'><a className='nava' href='#aboutme'>About</a></li>
          <li className='navli'><a className='nava' href='#projects'>Projects</a></li>
          <li className='navli'><a className='nava' href='#achive'>Achievements</a></li>
          <li className='navli'><a className='nava' href='#contact'>Contact me</a></li>
        </ul>
        <div id='mu'>
          <img alt="controle-button-icons" id='muroc' onClick={menfire} src={menu} />
          <img alt="controle-button-icons" id='muroclose' onClick={menclose} src={close} />
        </div>
      </div>
      <div id='header'>
        <br />
        <br />
        <br />
        <br />
        <p id='greet'>Hello, my name is</p>
        <p id='name'>Ar<span id='namefor'>sh</span></p>
        <p id='ifo'>I'm a constant learner with a <span className='spani'>passion for Technology and Business.</span>
          <br />I'm <span className='spani'>always looking</span> for new ways to <span className='spani'>expand my knowledge</span>.<br />
          Currently, pursuing BCA from JIMS, Vasant Kunj (IP University).<br />
          I'm <span className='spani'>confident</span> in my ability to <span className='spani'>learn new skills</span> and to apply them to my work. I'm also a quick learner and I'm able to adapt to new situations quickly.</p>
        <br />
        <a href='/' id='hireme'>Hire me</a>
      </div>

      <div id='aboutme'>
        <h1>About me</h1>
        <center>
          <hr id='hra' />
        </center>

        <div id='groupabout'>
          <div id='des'>
            <p>
              Welcome to my personal website!
              <br />I am a passionate learner with a keen interest in Technology and Business, always seeking new opportunities to broaden my horizons.
              <br />As a student of BCA at JIMS, Vasant Kunj (IP University), I'm dedicated to acquiring new skills and applying them effectively. My quick learning ability and adaptability are my strengths.
              <br />Designing simple yet professional designs is my forte, and coding is not just a task for me, it’s an enjoyable journey. My family’s unwavering support fuels my aspirations.
              <br />This website is my first venture into the digital world, a testament to my learning and growth during my college years. It’s a work in progress, but stay tuned for its official launch.
              <br />Feel free to reach out and connect with me!
            </p>
          </div>
          <div id='profilebg'>
            <img alt="profile image" id='photo' className='bgresvg' src="https://media.licdn.com/dms/image/D4E03AQEGzU446nLasg/profile-displayphoto-shrink_200_200/0/1688484460420?e=2147483647&v=beta&t=2K8DHyPxNy_IQ1Ig-3xyifF7XlV096SY_Czls0gOvRs" />
            <center>
              <hr id='hra' />
              <h1>Arsh</h1>
            </center>
          </div>
          <br/>
          <div>
            <center>
              <h1 id='diffren'>Articles</h1><p><sub>by me</sub></p>
              <hr id='hra' />
            </center>
            <div id="card">
              <img alt="article bg image" src="https://media.licdn.com/dms/image/D4D12AQHsRQCEI8BFrQ/article-cover_image-shrink_720_1280/0/1697107212321?e=2147483647&v=beta&t=rbk1zwrxhfM54piuh4RTk7WxIhUIODGFPK9ov67xseM" class="img-card" />
              <div id="info-a">
                <h6 class="card-h">BPM: A Cornerstone of Modern Business Success</h6>
                <hr />
                <p class="card-p">Lack of systematic business processes can lead to challenges in managing operations effectively</p>
              </div>
              <a href="https://www.linkedin.com/pulse/bpm-cornerstone-modern-business-success-md-arsh?trk=public_profile_article_view" class="explore" target="_blank">Explore More</a>
            </div>
          </div>
        </div>
      </div>

      <div id='projects'>
        <center>
          <h1>Projects</h1>

          <hr id='hra' />
        </center>
        <div id='backg'>
          <img alt="project-sample image" className="imgbac" id="img1" src={b1} />
          <img alt="project-sample image" className="imgbac" id="img2" src={b2} />
          <img alt="project-sample image" className="imgbac" id="img3" src={b3} />
        </div>

        <div id='gallery'>
          <img alt="icons" className='iconui' href='#img3' id='ui1' src={uichange} />
          <img alt="icons" className='iconui' id='ui2' src={uichange} />
          <img alt="icons" className='iconui' id='ui3' src={uichange} />
        </div>
      </div>

      <div id='achive'>
        <center>
          <h1>Achievements</h1>

          <hr id='hra' />
        </center>
        <div id='groupskilldes'>
          <div id='descript'>
            <p id='dsecf'>
              <span className='boldhead'>Aspiring IT Professional:</span> I am deeply passionate about technology and business, constantly seeking new knowledge. Currently, I am pursuing a BCA from <span className='boldbody'>JIMS, Vasant Kunj (IP University)</span>.
              <br />
              <span className='boldhead'>Continuous Learner:</span> My confidence in <span className='boldbody'>learning new skills and adapting quickly</span> to new situations has been a cornerstone of my educational journey.
              <br />
              <span className='boldhead'>Certifications and Courses:</span> I have completed several certifications, including a <span className='boldbody'>Crash Course on Python from Google</span>, <span className='boldbody'>Data Analysis with Python from IBM</span>, and <span className='boldbody'>Introduction to Cyber Attacks from New York University</span>, <span className='boldbody'>Frontend Web Development from Meta</span>, among others.
              <br />
              <span className='boldhead'>Contributions to Web Development:</span> I have shared insights on problem-solving techniques in web development that are crucial for staying ahead of the curve, emphasizing testing, clear coding practices, strategic thinking, and systematic approaches.
            </p>
          </div>

          <div id='skillgroup'>
            <center>
              <h1>Skills</h1>

              <hr id='hra1' />
            </center>
            <div className='skillitem'>
              <h2 className='skhead'>HTML</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni1'>
                  </div>
                </div>
                <h2 className='skhead1'>90%</h2>
              </div>
            </div>

            <div className='skillitem'>
              <h2 className='skhead'>CSS</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni2'>
                  </div>
                </div>
                <h2 className='skhead1'>80%</h2>
              </div>
            </div>

            <div className='skillitem'>
              <h2 className='skhead'>Javascript</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni3'>
                  </div>
                </div>
                <h2 className='skhead1'>70%</h2>
              </div>
            </div>

            <div className='skillitem'>
              <h2 className='skhead'>C</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni4'>
                  </div>
                </div>
                <h2 className='skhead1'>90%</h2>
              </div>
            </div>

            <div className='skillitem'>
              <h2 className='skhead'>React</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni5'>
                  </div>
                </div>
                <h2 className='skhead1'>60%</h2>
              </div>
            </div>

            <div className='skillitem'>
              <h2 className='skhead'>UI/UX</h2>
              <div id='skills'>
                <div id='rangeo'>
                  <div className='rangei' id='uni6'>
                  </div>
                </div>
                <h2 className='skhead1'>85%</h2>
              </div>
            </div>

          </div>
        </div>
        <a id='read' href='/'>Read More</a>
      </div>

      <div id='contact'>
        <div id='getintouch'>
          <h1>Get in Touch</h1>
          <br />
          <p>
            Hey, i am Currently looking for part-time job or intenship as a student, learning the technology.
            <br />
            <br />
            Kindly reach out me on my email at<br />
            <br /><a id='emailme' href='/' target='mailto:arsh.devloper@gamil.com'>arsh.devloper@gamil.com</a>
          </p>
          <div>
            <a href='https://in.linkedin.com/in/arshmd' target='_blank'>
            <img id='linkedicon' className='socialconnt' alt='social-media-icon' src={linkedin}/>
            </a>
            <a href='https://github.com/arshcode999' target='_blank'>
            <img id='gicon' className='socialconnt' alt='social-media-icon' src={gicon}/>
            </a>
          </div>
        </div>
        <div id='contactform'>
          <center>
            <h1>Contact me</h1>

            <hr id='hra' />
          </center>
          <form id='conform'>
            <div className='formgroup'>
              <label className='formlab'>Name :</label><input className="forminput" type='text' placeholder='Enter Name' required />
            </div>
            <div className='formgroup'>
              <label className='formlab'>Email :</label><input className="forminput" type='email' placeholder='Enter Email' required />
            </div>
            <div className='formgroup'>
              <label className='formlab'>Company :</label><input className="forminput" type='text' placeholder='Enter Company' required />
            </div>
            <div className='formgroup removforem'>
              <textarea cols="42" rows="5" id='teareafo' placeholder='Enter the message'></textarea>
            </div>
            <div className='formgroup removforem'>
              <input type='submit' id='forbutton' />
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
