import { useState } from 'react';
import d1 from './assets/d1.jpg';
import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg';
import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg';
import d6 from './assets/d6.jpg';
import sound from './assets/dice.mp3'
function Updown() {
  const [choice, setChoice] = useState('');
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');
  const [dice1Image, setDice1Image] = useState('');
  const [dice2Image, setDice2Image] = useState('');
  const diceImages = [d1, d2, d3, d4, d5, d6];
  const rollDice = () => {
    const bet = parseInt(document.getElementById('inp').value);
    const dice1Index = Math.floor(Math.random() * 6);
    const dice2Index = Math.floor(Math.random() * 6);
    setDice1Image(diceImages[dice1Index]);
    setDice2Image(diceImages[dice2Index]);
    const result = dice1Index + dice2Index;
    let newBalance = balance;
    if (result == 7 && choice == '7') {
      newBalance += bet * 3;
      setMessage(`You Won 3X of the amount, your balance: ${newBalance}`);
      new Audio('Firebase/src/assets/dice.mp3').play()
    } else if (result < 7 && choice == '7down') {
      newBalance += bet * 2;
      setMessage(`You won 2X of the amount, your balance: ${newBalance}`);
      new Audio('Firebase/src/assets/dice.mp3').play()
    } else if (result > 7 && choice == '7up') {
      newBalance += bet * 2;
      setMessage(`You won 2X of the amount, your balance: ${newBalance}`);
      new Audio('Firebase/src/assets/dice.mp3').play()
    } else {
      newBalance -= bet;
      setMessage(`You Lost, your balance: ${newBalance}`);
      new Audio('Firebase/src/assets/dice.mp3').play()
    }

    setBalance(newBalance);
    
  };
  // let sty ={
  //     backgroundimage : URL()
  // }
 return (
    <div className='name'>
      <h1>7UP 7DOWN Game</h1>
      <div className='button'>
        <button className='btn1'onClick={() => setChoice('7up')}>7UP</button>
        <button className='btn1'onClick={() => setChoice('7')}>7</button>
        <button className='btn3'onClick={() => setChoice('7down')}>7DOWN</button>
      </div>
      <div className='bet'>
        <input className='input' type="number" id="inp" placeholder="Enter your bet" />
        <button className="btn btn-dark"onClick={rollDice}>Start the game</button>
      </div>
      <div>
        <h2>Your Balance: {balance}</h2>
      </div>
      <div>
        <h3>{message}</h3>
      </div>
      <div>
        <h3>Dice Roll:</h3>
        <img src={dice1Image} alt="" style={{ width: 100, height: 100 }} />
        <img src={dice2Image} alt="" style={{ width: 100, height: 100 }} />
      </div>
    </div>
  )
}
export default Updown
