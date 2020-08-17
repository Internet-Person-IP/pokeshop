import React,{FC} from 'react';
import './Cart.css';
import {CartItem} from '../../Objects/PokemonInterface';
import CartItemView from "../CartItem/CartItem";
interface Props{
  Cart: CartItem[];
  UpdateCart: (Cart: CartItem,IncOrDec: number) => void;

}


const Cart:FC<Props> = ({Cart, UpdateCart}) =>  {
  const TotalPrice: number = Number((Cart.reduce<number>((acc: number,{Price,Quantity}) => {return (acc+Price*Quantity)},0)).toFixed(2));
  return (
    <div className="Cart">
      {Cart.map((PokemonInCart) => {
        return <CartItemView key={PokemonInCart.PokemonID} CartItem={PokemonInCart} UpdateCart={UpdateCart}/>
        }) 
        }
      <div className="TotalPrice">
          <span>Total Price</span>
          <span>{TotalPrice}$</span>
      </div>
    </div>
  );
}

export default Cart;
