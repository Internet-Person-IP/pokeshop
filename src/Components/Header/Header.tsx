import React,{ useState} from 'react';
import PokeShopLogo from './PokeShop.png';
import './Header.css'
const  Header = () =>  {
    const [showSearchBar , setShowSeachBar] = useState(false);

  return (
    <nav className="navbar">
        <img className="brand-logo" src={PokeShopLogo} alt="brand-logo"/>
        <div className="search-box">
        <input className="search-text" type="text" name="" placeholder="Search Pokemon"/>
        <a className="search-button" href="#"><i className="fas fa-search"></i></a>
      </div>
      <div className="navbar-links">
      <ul>
        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
      </ul>
    </div>


    </nav>
  );
}

export default Header;
