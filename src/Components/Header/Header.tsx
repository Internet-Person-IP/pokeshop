import React,{FC} from 'react';
import PokeShopLogo from './PokeShop.png';
import './Header.css'


interface Props{
  setDisplayCart: (DisplayCart: boolean) => void;
  DisplayCart: boolean;
  setSearch: (Search: string) => void;
  amountInCart: number;
}
const  Header:FC<Props> = ({setDisplayCart, DisplayCart,setSearch, amountInCart}) =>  {
    
    
  return (
    <nav className="navbar">
        <img className="brand-logo" src={PokeShopLogo} alt="brand-logo"/>
        <div className="search-box">
        <input className="search-text" type="text" name="" onChange={(e) => setSearch(e.target.value)} placeholder="Search Pokemon"/>
        <a className="search-button" href="#"><i className="fas fa-search"></i></a>
      </div>
      <div className="navbar-links">
      <ul>
  <li><a className="CartButton" href="#" onClick={(e) =>{ e.preventDefault(); setDisplayCart(!DisplayCart)}}><i className="fas fa-shopping-cart">{amountInCart!==0 ? <span className="amountInCart">{amountInCart}</span>: ""}</i></a></li>
      </ul>
    </div>
    </nav>
  );
}

export default Header;
