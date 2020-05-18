import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {
const APP_ID = '63fe98ad';
const APP_KEY = 'ce22b92d5c6d31c0a380df7e508daa01';
const [recepies, setRecepies] = useState([]);


useEffect(()=>{
  getRecepies();
},[]);

const getRecepies = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecepies(data.hits);
};

  return(
  <div className="App">
    <form className="search-form">
      <input className ="search-bar" type="text"/>
      <button className ="search-button" type="submit">Search</button>
    </form>
  </div>
  );
}

export default App;
