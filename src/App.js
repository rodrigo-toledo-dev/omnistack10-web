import React, { useState } from 'react';
import './global.css';
import './App.css';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div id="app">
      <aside>
        <strong></strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required  />
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required  />
          </div>
          
          <div class="input-group">
            <label htmlFor="username_github">Usuário do github</label>
            <input name="username_github" id="username_github" required  />
          </div>
        </form>
        
      </aside>
      <main></main>
    </div>
  );
}

export default App;
