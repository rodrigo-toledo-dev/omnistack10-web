import React, {useState, useEffect} from 'react';

import './App.css';
import './global.css';
import './main.css';
import './sidebar.css';


function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 30000
      }
    );
  },
  [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required  />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required  />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} />
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
