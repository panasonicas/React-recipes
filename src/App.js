import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
const APP_ID = '63fe98ad';
const APP_KEY = 'ce22b92d5c6d31c0a380df7e508daa01';
const [recepies, setRecepies] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');


useEffect(()=>{
  getRecepies();
},[query]);

const getRecepies = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecepies(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className ="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className ="search-button" type="submit">Search</button>
    </form>
    <div className = "recepies">
      {recepies.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={'Calories ' + recipe.recipe.calories.toFixed(2)}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
    </div>
  </div>
  );
}

export default App;
