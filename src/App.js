import React from 'react';

import './App.css';
import './global.css';
import './main.css';
import './sidebar.css';


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
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
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required  />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required  />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
        
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="user-info">
                <strong>Rodrigo</strong>
                <span>techs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, nisi eget facilisis suscipit, lectus nunc tincidunt turpis, euismod malesuada justo est posuere leo. Sed sed leo imperdiet, pharetra quam quis, vehicula dolor
            </p>
            <a href="#">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="user-info">
                <strong>Rodrigo</strong>
                <span>techs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, nisi eget facilisis suscipit, lectus nunc tincidunt turpis, euismod malesuada justo est posuere leo. Sed sed leo imperdiet, pharetra quam quis, vehicula dolor
            </p>
            <a href="#">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="user-info">
                <strong>Rodrigo</strong>
                <span>techs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, nisi eget facilisis suscipit, lectus nunc tincidunt turpis, euismod malesuada justo est posuere leo. Sed sed leo imperdiet, pharetra quam quis, vehicula dolor
            </p>
            <a href="#">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="user-info">
                <strong>Rodrigo</strong>
                <span>techs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, nisi eget facilisis suscipit, lectus nunc tincidunt turpis, euismod malesuada justo est posuere leo. Sed sed leo imperdiet, pharetra quam quis, vehicula dolor
            </p>
            <a href="#">Acessar perfil github</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;
