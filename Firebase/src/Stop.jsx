import {useState} from 'react';

function Stop() {
  const [currentState, setCurrentState] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = React.useRef();

  const onStart = () => {
    if (currentState == 'Start') return;
    setCurrentState('Start');
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 50);
    }, 50);
  };

  const onStop = () => {
    if (currentState == 'STOP') return;
    setCurrentState('STOP');
    clearInterval(intervalRef.current);
  };

  const onReset = () => {
    if (currentState === 'RESET') return;
    setCurrentTime(0);
    clearInterval(intervalRef.current);
  };

  const sec = Math.floor(currentTime / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const millis = (currentTime % 1000).toString().padStart(3, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");
  const minutes = (min % 60).toString().padStart(2, "0");
  const hours = (hour % 24).toString().padStart(2, "0");

  return (
    <div className="box">
    <div className='stop'>
      <div className="time">
        {hours}:{minutes}:{seconds}:{millis}
      </div>
      <div className='bhavs'>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <div className='reset'>
        <button onClick={onReset}>Reset</button>
        </div>
      </div>
      
      
    </div>
    </div>
  );
}
export default Stop