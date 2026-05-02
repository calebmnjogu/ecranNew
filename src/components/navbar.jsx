import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
       <section className="row">
            <div className="col-md-12">
                {/* <!-- The nav tag will carry all the content of the nav bar --> */}
                <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#fe9102ff' }}>
                   <Link to='/' className="navbar-brand"><img src="images/Potential logo.jpeg" alt="" style={{ width: "100px" }} /></Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Div carries navbar links --> */}
                    <div className="collapse navbar-collapse" id="navbarcollapse">
                        <div className="navbar-nav">
                           <Link to='/signup'className="nav-link">Signup</Link>
                           <Link to='/signin'className="nav-link">Signin</Link>
                           <Link to='/addproduct'className="nav-link">Addproduct</Link>
                           <Link to='/'className="nav-link">Getproducts</Link>
                        </div>
                        <div className=" ms-auto">
                            <button className="btn" style={{ backgroundColor: '#fe9102ff' }}><img src="images/login icon.jpg" alt="" style={{width: "40px"}}/></button>
                        </div>
                    </div>


                </nav>
            </div>
        </section>
    );
}

export default Navbar;