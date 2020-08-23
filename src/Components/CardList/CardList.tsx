import React,{FC} from 'react';
import Card from '../Card/Card';
import {Pokemon, CartItem} from '../../Objects/PokemonInterface';
import "./CardList.css"
interface Props{
  PokemonList: Pokemon[];
  UpdateCart: (Cart: CartItem,IncOrDec: number) => void;

}

const  CardList:FC<Props> = ({PokemonList, UpdateCart}) =>  {

  return (
    <div className="PokemonList" >
      {PokemonList.map(({PokemonID,Name,ATK,DEF,HP})=> {
        return(<Card key={PokemonID} Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} UpdateCart={UpdateCart}/>)
      })
    }
    </div>
  );
}

export default CardList;

/*<Card Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} /> /**/

