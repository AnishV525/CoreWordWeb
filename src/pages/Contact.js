import ContactForm from "./contactForm";
import '../styles/styles.css'




const Contact = () => {
    return (

        <>

        <div className="container" />
        <div className="blur" />
            <br />
            <br />
        <div className="contact-box">
            <div className="contact-left">
                <h3>Send Us Your Questions</h3>
                <form name="contact-form">
                    <div className="input-row">

                        <div className="input-group">
                            <label><i className='bx bxs-user'></i> Name</label>
                            <input name="name" type="text" placeholder="Name" required
                                oninvalid="this.setCustomValidity('Please Enter Your Name')"
                                oninput="this.setCustomValidity('')" />
                        </div>

                        <div className="input-group">
                            <label><i className='bx bxs-phone'></i> Phone</label>
                            <input name="phone" type="text" placeholder="123 456 7890" required
                                oninvalid="this.setCustomValidity('Please Enter Your Phone Number')"
                                oninput="this.setCustomValidity('')" />
                        </div>
                    </div>

                    <div className="input-row">

                        <div className="input-group">
                            <label><i className='bx bxs-envelope'></i> Email</label>
                            <input name="email" type="email" placeholder="test@gmail.com" required
                                oninvalid="this.setCustomValidity('Please Enter Your Email')"
                                oninput="this.setCustomValidity('')" />
                        </div>

                        <div className="input-group">
                            <label><i className='bx bxs-pin'></i> Subject</label>
                            <select name="subject" required
                                oninvalid="this.setCustomValidity('Please Select a Subject')"
                                oninput="this.setCustomValidity('')">
                                <option value="">Choose a subject</option>
                                <option value="sales">Sales</option>
                                <option value="support">Technical Support</option>
                                <option value="billing">Billing</option>
                            </select>
                        </div>
                    </div>

                    <label><i className='bx bxs-message'></i> Message</label>
                    <textarea name="message" rows="5" placeholder="Your Message" required
                        oninvalid="this.setCustomValidity('Please Enter A Message')"
                        oninput="this.setCustomValidity('')"></textarea>

                    <button type="submit" required> Send</button>
                    <span id="msg"></span>

                </form>

            </div>
            <div className="contact-right">
                <h3>Reach Us</h3>

                <table>
                    <tr>
                        <td>Email</td>
                        <td>CoreBoard23@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Phone</td>
                        <td>123-456-7890</td>
                    </tr>

                </table>

                <div className="social-icons">
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="#"><i className='bx bxl-youtube'></i></a>
                </div>

            </div>
            {/* <footer>

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
</footer> */}
        </div>
        <br />
        <br />


    </>
    );
};

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzV7_UgyiDAd21q0Y50SYeAjnRVq_tQUNkUgLZfnuxDt-aAkSQPoh_g0BDK2TidjMzYRQ/exec';
// const form = document.forms['contact-form'];
// const msg = document.getElementById('msg');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {

//             msg.innerHTML = "Thanks for your message"
//             setTimeout(function () {
//                 msg.innerHTML = ''
//             }, 3000)
//             form.reset();
//         })
//         .catch(error => console.error('Error!', error.message))
// });
            

export default Contact;