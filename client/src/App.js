import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header style={{height: 100}}>
          <img src={logo} style={{float: 'left', margin: 20}}/>
        </header>
        <div className="content">
          <h1>Welcome to the world's first decntralized arts organization.</h1>

          <p>What makes something original?</p>
          <textarea name="Text1" cols="50" rows="5" placeholder="Type your answer here"></textarea>
          <br/>
          <a className="button">Join</a>
          <p>
            Your donation, along with your answer above will be interpreted by the
            Ethereum Virtual Machine and used to generate a verifiably unique
            and digitally-rare art piece that will belong to you
          </p>
          <p>
            This token establishes you as one of the founding patrons of
          </p>
          <h2 className="daovinchi">DAO VINCI</h2>
        </div>
    </div>
  );
}

export default App;
