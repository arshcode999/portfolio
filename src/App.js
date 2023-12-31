import './App.css';
import b1 from './images/p1.png';
import b2 from './images/p2.png';
import b3 from './images/p3.png';
import uichange from './icons/uichange.svg';
import menu from './icons/menu.svg';
import close from './icons/close.svg';
import './style.css';

function menfire(){
  document.getElementById("mu").style.height="10%";
  document.getElementById("navele").style.visibility="visible";
  document.querySelector(".App").style.zIndex="1";
  document.getElementById("navele").style.zIndex="999";
  document.getElementById("muroc").style.visibility="hidden";
  document.getElementById("muroclose").style.visibility="visible";
}
function menclose(){
  document.getElementById("muroclose").style.visibility="hidden";
  document.getElementById("mu").style.height="auto";
  document.getElementById("navele").style.visibility="hidden";
  document.getElementById("muroc").style.visibility="visible";
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
          <img id='muroc' onClick={menfire} src={menu}/>
          <img id='muroclose' onClick={menclose} src={close}/>
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
          <div>
          <img id='photo' src='https://arshcode999.github.io/portfolio/images/profile.jpg' />
          <center>
          <hr id='hra' />
          <h1>Arsh</h1>
        </center>
        </div>
        </div>
      </div>

      <div id='projects'>
        <center>
          <h1>Projects</h1>

          <hr id='hra' />
        </center>
        <div id='backg'>
          <img className="imgbac" id="img1" src={b1} />
          <img className="imgbac" id="img2" src={b2} />
          <img className="imgbac" id="img3" src={b3} />
        </div>

        <div id='gallery'>
            <img className='iconui' href='#img3' id='ui1' src={uichange} />
            <img className='iconui' id='ui2' src={uichange} />
            <img className='iconui' id='ui3' src={uichange} />
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
              <span className='boldhead'>Aspiring IT Professional:</span> I am deeply passionate about technology and business, constantly seeking new knowledge. Currently, I am pursuing a BCA from JIMS, Vasant Kunj (IP University)1.
<br/>
<span className='boldhead'>Continuous Learner:</span> My confidence in learning new skills and adapting quickly to new situations has been a cornerstone of my educational journey.
<br/>
<span className='boldhead'>Certifications and Courses:</span> I have completed several certifications, including a Crash Course on Python from Google, Data Analysis with Python from IBM, and Introduction to Cyber Attacks from New York University, among others.
<br/>
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
          <br/>
          <p>
            Hey, i am Currently looking for part-time job or intenship as a student, learning the technology.
            <br/>
            <br/>
            Kindly reach out me on my email at<br/>
            <br/><a id='emailme' href='/' target='mailto:arsh.devloper@gamil.com'>arsh.devloper@gamil.com</a>
          </p>
        </div>
        <div id='contactform'>
        <center>
          <h1>Contact me</h1>

          <hr id='hra' />
        </center>
          <form id='conform'>
          <div className='formgroup'>
            <label className='formlab'>Name :</label><input className="forminput" type='text' placeholder='Enter Name' required/>
            </div>
            <div className='formgroup'>
            <label className='formlab'>Email :</label><input className="forminput" type='email' placeholder='Enter Email' required/>
            </div>
            <div className='formgroup'>
            <label className='formlab'>Company :</label><input className="forminput" type='text' placeholder='Enter Company' required/>
            </div>
            <div className='formgroup removforem'>
              <textarea cols="42" rows="5" id='teareafo' placeholder='Enter the message'></textarea>
            </div>
            <div className='formgroup removforem'>
              <input type='submit' id='forbutton'/>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
