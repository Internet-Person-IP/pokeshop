import React,{useState} from 'react';
import './Card.css'
import Bulb from '../../Pictures/sprites/1.png';
const  Card = () =>  {

  return (
    <div className="card">
      <div className="imgBox">
        <img className="pokemonImg" src={Bulb} alt=""/>
      </div>
      <div className="contentBox">
        <h2>PogChamp</h2>
        <div className="BaseStats">
        <h2>Base Stats</h2>
        <span>2 </span>
        <span>3</span>
        </div>
        <a href="#">Buy Now</a>
      </div>
    </div>
  );
}

export default Card;
