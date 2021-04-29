import React, { useState } from 'react';
import GitImage from './githubimage.png';
import './App.css';

function App() {

  // Declarando States
  const [search, setSearch] = useState('');  // State chamado 'search'
  const [userData, setUserData] = useState();  // State chamado 'userData'

  const handleSubmit = (event) =>{
    event.preventDefault(); // Interrompendo a submissão padrão de um formulário, ou seja, quando clicar no search não vai ocorrer o refresh automático da página

    // Consumindo API github
    fetch(`https://api.github.com/users/${search}`) // é como se fosse um Client HTTP: 
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) =>{
    setSearch(event.target.value);
  }

  return (
    <div className = "container text-center">
      <h1 className="py-5 text-uppercase"> Git Hub Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text"
              className="form-control"
              required
              value = {search}
              onChange = {handleChange}
            />
            <span className="input-group-btn">
              <button type = "submit" className="btn btn-success"> Search</button>
            </span>
          </div>  
        </div>    
      </form>
      
      <div className="py-5">
        {!userData && (
          <img src={GitImage} className="responsive rounded-circle" alt="" height="200px"/>
        )} 
        { userData && (
          <div>             
            <img src={userData.avatar_url} className="responsive rounded-circle" alt="" height="200px"/>    
            <h1 className="pt-5">
              <a href={`https://github.com/${userData.login}`} target="_new"> {userData.name}</a>
            </h1>
            <h3> {userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
              {userData.blog} 
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
