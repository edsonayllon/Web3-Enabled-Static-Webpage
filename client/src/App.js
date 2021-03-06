import React, { useState } from 'react';
import Web3 from 'web3';
import logo from './logo.png';
import './App.css';
import abi from './abi';

const web3 = new Web3(Web3.givenProvider);

function App() {
  const [message, setMessage] = useState('');

  const handleJoin = async (e) => {
    e.preventDefault();
    let accounts = await window.ethereum.enable();
    let account = await accounts[0]
    let hash = await web3.utils.keccak256(message);
    let num = await web3.utils.toBN(hash).toString();

    let contractAddr = '0x4c248783AF68C230a431A58f68C5a764FB888b3C';
    let VinciContract = new web3.eth.Contract(abi, contractAddr);

    console.log(num);
    let gas = await VinciContract.methods.createArt(num);
    let result = await VinciContract.methods.createArt(num).send({ from: account }, (err, result) => {
      console.log(result);
      if (err) {
        console.log('error: ' + err);
      }
    });
  }

  return (
    <div className="App">
        <header style={{height: 100}}>
          <img src={logo} style={{float: 'left', margin: 20}}/>
        </header>
        <div className="content">
          <h1>Welcome to the world's first decntralized arts organization.</h1>

          <p>What makes something original?</p>
          <textarea
            name="Text1"
            cols="50"
            rows="5"
            placeholder="Type your answer here"
            value={message}
            onChange={e => setMessage(e.target.value) }
          ></textarea>
          <br/>
          <a className="button" onClick={handleJoin} href='#'>Join</a>
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
