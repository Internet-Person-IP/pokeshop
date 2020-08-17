import React,{FC} from 'react';
import './CartItem.css'
import {CartItem} from '../../Objects/PokemonInterface';

interface Props{
  CartItem: CartItem;
  UpdateCart: (Cart: CartItem,IncOrDec: number) => void;
}

const  CartItemView:FC<Props> = ({CartItem, UpdateCart}) =>  {
  const {Name, PokemonID, Price, Quantity} = CartItem
  return (
    <div className="CartItem">
    <div className="CartImgBox">
      <img className="CartImg" src={require(`../../Pictures/sprites/${PokemonID}.png`)} alt=""/>
    </div>
    <div className="NameAndPrice">
    <span>{Name}</span>
    <span>{Price}$</span>
    </div>
    <div className="Quantity">
    <a onClick={(e)=>{ e.preventDefault(); UpdateCart(CartItem, -1)}}><i className="fas fa-minus"></i></a>
    <span>{Quantity}</span>
    <a onClick={(e)=>{ e.preventDefault(); UpdateCart(CartItem, 1)}}><i className="fas fa-plus"></i></a>
    </div>
  </div>
  );
}

export default CartItemView;
