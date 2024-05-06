import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"



const Navbar = ()=>{
    return(
        <section className="navBarSection">
            <header className="hear flex">


                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdTravelExplore className="icon" />Travel.</h1>
                    </a>
                </div>

                <div className="navBar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div className="toggleNavbar">
                <FaBars className="icon"/>
                </div>

            </header>
        </section>
    )
}

export default Navbar