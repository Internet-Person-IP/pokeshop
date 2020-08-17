import React,{FC} from 'react';
import './Card.css'
import {CartItem} from '../../Objects/PokemonInterface';

interface Props{
  Id: number;
  Name: string;
  ATK: number;
  DEF:number;
  HP:number;
  UpdateCart: (CartItem: CartItem, IncOrDec: number)=> void;

}


const  Card:FC<Props> = ({Id, Name,ATK,DEF,HP, UpdateCart}) =>  {
  const Price: number = Number((ATK/10 + DEF/10 + HP/10).toFixed(2));
  const CartItem: CartItem ={Name, PokemonID: Id, Price: Price, Quantity: 1};
  return (
    <div className="card">
      <div className="imgBox">
        <img className="pokemonImg" src={require(`../../Pictures/sprites/${Id}.png`)} alt=""/>
      </div>
      <div className="contentBox">
      <h2>{Name}</h2>
        <div className="BaseStats">
        <h2>Base Stats</h2>
        <table className="baseStatTable">
          <tbody>
          <tr>
            <td>ATK</td>
            <td>{ATK}</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>{DEF}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{HP}</td>
          </tr>
          </tbody>
        </table>
        </div>
        <a onClick={(e)=>{ e.preventDefault(); UpdateCart(CartItem, 1)}}> {Price}$ Add To Cart</a>
      </div>
    </div>
  );
}

export default Card;
