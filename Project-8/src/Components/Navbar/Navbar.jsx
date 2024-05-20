import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ()=>{
    return(
        <nav className='container'>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Program</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Campus</a></li>
                <li><a href="#">Testinomials</a></li>
                <li><a href="#"><button className='btn'>Contact us</button></a></li>


                

            </ul>
        </nav>
    )
}

export default Navbar