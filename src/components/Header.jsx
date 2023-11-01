import {Link} from "react-router-dom"

const Header = () => {
    return(
        <header>
            <ul>
                <div>
                    <li>
                        <Link to="/">
                            <div className="logo"></div>
                        </Link>
                    </li>
                    <li className="marginLeft90"><Link to="/about">About Us</Link></li>
                    <li><Link to="/mission">Our mission & Vision</Link></li>
                    <li><Link to="/leadership">Leadership</Link></li>
                </div>
                <div>
                    <li><Link to="/clients">Private clients & Family Offices</Link></li>
                    <li><Link to="/corporations">Corporations</Link></li>
                </div>
            </ul>
        </header>
    )
}

export {Header}