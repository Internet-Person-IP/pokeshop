import React,{FC} from 'react';
import Card from '../Card/Card';
import {Pokemon, CartItem} from '../../Objects/PokemonInterface';
import "./CardList.css"
interface Props{
  PokemonList: Pokemon[];
  UpdateCart: (Cart: CartItem,IncOrDec: number) => void;
  SearchQuery: string;

}

const  CardList:FC<Props> = ({PokemonList, UpdateCart, SearchQuery}) =>  {

  return (
    <div className="PokemonList" >
      {PokemonList.filter(({Name})=>  Name.toLowerCase().includes(SearchQuery))
      .map(({PokemonID,Name,ATK,DEF,HP})=> {
        return(<Card key={PokemonID} Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} UpdateCart={UpdateCart}/>)
      })
    }
    </div>
  );
}

export default CardList;

/*<Card Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} /> /**/

