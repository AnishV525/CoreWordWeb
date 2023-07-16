import '../styles/Home.css';
import '../styles/nav2.css';
import mainContent from './resources/mainContent.png';
import edit from './resources/edit.png';
import puzzle from './resources/puzzle.png';
import convo from './resources/convo.png';


const Home = () => {
    return (
        <>
        
        <div className="about">
            <div className="info">
                <h1>The CoreBoard</h1>
                <p>Revolutionizing communication with technology.</p>
                <button>Get Started</button>
            </div>
        </div>
        
        <div className="content">
                <div className="text">
                    <h1>The CoreBoard</h1>
                    <p>The first free, digital AAC device (talker).</p>
                </div>

                <hr className="rounded" />

                    <img id="img" src={mainContent} />
        </div>

        <div className="s1">
            <h1>Features</h1>
            <hr className="rounded" />
                <div className="row">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={edit} />
                                    <p className="title">Adaptable</p> 
                            </div>
                            <div className="flip-card-back">
                                <p className="title">Adaptable</p>
                                <p>Seamlessly edit the CoreBoard to integrate into any cirriculum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img src={puzzle} />
                                    <p className="title">Teachable</p>
                                </div>
                            <div className="flip-card-back">
                                <p className="title">Teachable</p>
                                <p>Easily teach spelling, grammar, or prononciation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={convo} />
                                    <p className="title">Accessible</p>
                            </div>
                        <div className="flip-card-back">
                            <p className="title">Accessible</p>
                            <p>Access the CoreBoard anytime, anywhere, from any device.</p>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="s2">
                        <div className="row2">
                            <div className="column2">
                                <h2>Customize with the Click of a Button</h2>
                                <p>Customize all 84 words of your board with ease and choose the words you use.</p>
                                <button>View More</button>
                            </div>

                            <div className="column2">
                                <img src={mainContent} />   
                            </div>
                        </div>

                        <div className="row2">
                            <div className="column2">
                                <img src={mainContent} />   
                            </div>

                            <div className="column2">
                                <h2>For Students, by Students</h2>

                                <p>Developed by students, for nonverbal or speech disorders.</p>
                                <button>View More</button>
                            </div>
                        </div>
        </div>

        <footer>

            <div class="footer_content">

                <div class="footer-main">
                    <div class="footer-side">
                        <img src="resources/logo2.png" alt="Vital Applications Logo" />
                        <p>Devloping applications to change lives; this is Vital.</p>
                    </div>
        
        
                    <div class="footer-side">
                        <h2>Quick Links</h2>
                        <div class="footer-links">
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                            </ul>
                        </div>                
                    </div>
                

                    <div class="footer-side">
                        <h2>Socials</h2>
                        <ul class="socials">
                            <li><a href="#"><i class='bx bxl-instagram-alt'> Instagram</i></a></li>
                            <li><a href="#"><i class='bx bxl-twitter'> Twitter</i></a></li>
                            <li><a href="#"><i class='bx bxl-facebook-circle'> Facebook</i></a></li>
                            <li><a href="#"><i class='bx bxl-youtube'> YouTube</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p class="copyright">
                &copy; 2023 Your Company. All rights reserved.
            </p>
        </footer>

        </>);
};

export default Home;