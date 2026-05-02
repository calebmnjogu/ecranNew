import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <section className="row p-4 mt-4" style={{backgroundColor: '#f48d07ff'}}>

            <div className="col-md-6">
                {/* <!-- Part 1 (Social Media Handle) --> */}
                <h4 className="text-light">Stay in the loop?</h4>
                <a href="https://www.facebook.com" className="me-4"><img src="images/fb.png" alt="fb"/></a>
                <a href="https://www.instagram.com" className="me-4"><img src="images/in.png" alt="ig"/></a>
                <a href="https://www.x.com" className="me-4"><img src="images/x.png" alt="x"/></a>
                <a href="https://www.youtube.com"><img src="images/YT-logo.webp.png" alt="YouTube" width="15%"
                        className="me-4"/></a>
                <a href="https://www.tiktok.com"><img src="images/Tiktok-logo.png" alt="tiktok" width="8%"/></a>

                {/* <!-- Part 2 (Help Section) --> */}
                <h3>Frequently asked questions</h3>
                <span style={{color: 'aqua'}}>
                    <pre><Link to="">Trending phones in 2025</Link>
                    </pre>
                    <pre>
                        <Link to="">Where can I get quality ANC Headphones</Link>
                    </pre>
                    <pre>
                        <Link to="">Affordable Flat screen TVs</Link>
                    </pre>
                </span>

                {/* <!-- Part 3 (COntact Us) --> */}
                <a href="Contact Us.html" className="btn btn-info">Contact Us</a>

                {/* <!-- Part 4 (Customer Service) --> */}
                <p>
                       Service Hours<br /> 
                       Monday - Friday 9AM to 6PM <br />
                       Saturday 10AM to 4PM <br />
                       Sunday Closed <br /><br />
                       Customer Service <br />
                       Phone: 0727 535 595 / 0721 899 999 <br />
                       Whatsapp: 0728 810 810 / 0797 288 388 <br />
                       Email: Care.ke@ecran.com
                </p>
                
            </div>

            <div className="col-md-6 text-light">
                <h4>Subscribe to get the latest news and giveaways</h4>
                <form>
                    <input type="email" placeholder="Enter your email" className="form-control"/>
                    <input type="button" value="Subscribe" className="btn btn-success text-light"/>
                    <textarea name="" id="" placeholder="Leave a comment" rows="8"
                        className="form-control mt-3"></textarea>
                    <input type="submit" value="Send Message" className="btn btn-success text-light"/>
                </form>



            </div>
        </section>
    );
}

export default Footer;