import { useState } from 'react';

function BMI() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  // const [darkMode, setDarkMode] = useState(false);

  function cal(e) {
    e.preventDefault();

    const bmi = weight / (height * height);
    let message = '';

    if (bmi < 18.5) {
      message = 'Underweight';
    }

    if (bmi >= 18.5 && bmi < 25) {
      message = 'Normal weight';
    }

    if (bmi >= 25) {
      message = 'Overweight';
    }

    setResult(name + ', your BMI is ' + bmi + '. ' + ' You are ' + message);
  }
  const Mode = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    width: 1500,
    height: 600,
    padding : 0


  };
  return (
    <>
    {/* <div className='Ain'>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button></div> */}
      <div className='bin'>
      <h2>BMI Calculator</h2>
      <form onSubmit={cal}>
        <p>Name: <br /><input onChange={(e) => setName(e.target.value)} /></p>
        <p>Height (meters)<br /> <input onChange={(e) => setHeight(e.target.value)} /></p>
        <p>Weight (kg)<br /> <input onChange={(e) => setWeight(e.target.value)} /></p>
        <button>Check</button>
      </form>
      <p>{result}</p>
      </div>

      </>
   
  );
}

export default BMI;
