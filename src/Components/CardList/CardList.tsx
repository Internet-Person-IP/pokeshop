import React,{FC} from 'react';
import Card from '../Card/Card';
import {Pokemon, CartItem} from '../../Objects/PokemonInterface';
import "./CardList.css"
import ReactPaginate from 'react-paginate';
interface Props{
  PokemonList: Pokemon[];
  UpdateCart: (Cart: CartItem,IncOrDec: number) => void;
  AmountOfPokemon: number;
  Page: number;
  ItemsPerPage: number;
  SetPage:(Page:number)=> void;

}

const  CardList:FC<Props> = ({PokemonList, UpdateCart,AmountOfPokemon, Page,ItemsPerPage,SetPage}) =>  {

  return (
    <div className="listandpagination">
    <div className="PokemonList" >
      {PokemonList.map(({PokemonID,Name,ATK,DEF,HP})=> {
        return(<Card key={PokemonID} Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} UpdateCart={UpdateCart}/>)
      })
    }
    </div>
    <ReactPaginate
          previousLabel={'previous'}
          nextClassName={"nextPage"}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(AmountOfPokemon/ItemsPerPage)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={(data)=> SetPage(data.selected+1)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
    </div>
  );
}

export default CardList;

/*<Card Id={PokemonID} Name={Name} ATK={ATK} DEF={DEF} HP={HP} /> /**/

