import './Navbar.css';
import { Link } from "react-router-dom";
import { BsSearch, BsCart3, BsHeart, BsPerson } from "react-icons/bs";

function Navbar () {
    return (
        <nav className='Navbar'>
            <ul>

                <li className='Logo'>
                    <Link to={"#"}>ARKHEMARKET</Link>
                </li>

                <li className='SearchBar'>
                    <input type="search" placeholder='Search'/>
                    <button><BsSearch /></button>
                </li>

                <li className='Items'>

                    <div className='FirstItem'>
                        <Link to={"#"} className='Icon'><BsPerson /></Link>
                        <Link to={"#"} className='IconText'> Account </Link>
                    </div>

                    <div className='FirstItem'>
                        <Link to={"#"} className='Icon'><BsHeart /></Link>
                        <Link to={"#"} className='IconText'> Favorites </Link>
                    </div>

                    <div className='FirstItem'>
                    <Link to={"#"} className='Icon'><BsCart3 /> </Link>
                        <Link to={"#"} className='IconText'> Cart </Link>
                    </div>

                </li>

            </ul>
        </nav>
    )
}

export default Navbar;