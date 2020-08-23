import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CardList from './Components/CardList/CardList';
import Cart from './Components/Cart/Cart';
import axios from 'axios';
import {Pokemon,CartItem} from './Objects/PokemonInterface';

const  App = () =>  {

  const [PokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [ShoppingCart, setShoppingCart] = useState<CartItem[]> ([]);
  const [DisplayCart,setDisplayCart]= useState<boolean>(false);
  const [Search , setSearch] = useState<string>("");
  const [SortBy, setSortBy] = useState<string>("PokemonID");
  const [OrderBy, setOrderBy] = useState<string>("asc");
  let QueryTimeOut: NodeJS.Timeout; 
  /*const [Page, SetPage] = useState<number>(1);
  const [ItemsPerPage, SetItemPerPage] = useState<number>(20);*/
  useEffect(() => {
    console.log(process.env.REACT_APP_POKEMON_API)

    const API:string =process.env.REACT_APP_POKEMON_API != null ?
    `${process.env.REACT_APP_POKEMON_API}?q=${Search}&sort=${SortBy}&direction=${OrderBy}`
    : ""
    
    axios.get(API)
    .then(res => {
      setPokemonList(res.data);
      console.log(res.data);
    }).catch(err =>{
      console.log(err);
    })
  },[Search,SortBy,OrderBy]);

  const SetSeachQuery= (Search: string) =>{
    if(QueryTimeOut) clearTimeout(QueryTimeOut);

    QueryTimeOut = setTimeout(() => {
      setSearch(Search);
    },350)
  }


  const UpdateCart = (CartItem: CartItem, IncOrDec: number) => {
    const Item = ShoppingCart.findIndex((Item: CartItem) => CartItem.PokemonID === Item.PokemonID);
    console.log(Item, IncOrDec);
    if( Item !== -1){
    ShoppingCart[Item].Quantity+=IncOrDec;
    if(ShoppingCart[Item].Quantity===0) ShoppingCart.splice(Item,1);
    setShoppingCart([...ShoppingCart]);
    }else{
      setShoppingCart([...ShoppingCart,CartItem]);
    }
    
    console.log(ShoppingCart, DisplayCart);
  }


  return (
    <div className="App">
      <Header setDisplayCart={setDisplayCart} DisplayCart={DisplayCart} setSearch={SetSeachQuery}
       amountInCart={ShoppingCart.reduce<number>((acc: number,{Quantity}) => {return acc+Quantity}, 0)}/>
      <CardList PokemonList={PokemonList} UpdateCart={UpdateCart}/>
      {DisplayCart ? (<Cart Cart={ShoppingCart} UpdateCart={UpdateCart}/>): null}
    </div>
  );
}

export default App;
