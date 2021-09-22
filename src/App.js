import React, { useState, useEffect } from 'react';
import './style.css';
// import Ball from './Ball';

export default function App() {
  const [getBall, setBall] = useState(false);

  const [left, setLeft] = useState('500px');

  const clickHandler = () => {
    if (!getBall) setBall(true);
    else setBall(false);
  };

  const keyHandleFunc = (e) => {
    const { key, keyCode } = e;
    if (key === 'ArrowRight' || keyCode === 39) {
      console.log('pressed');
      setLeft({ leftP: left.leftP + 5 });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandleFunc);
    return () => {
      window.removeEventListener('keydown', keyHandleFunc);
    };
  }, [left]);

  return (
    <div>
      {getBall ? (
        <div className="ball" style={{ left: '500px' }}>
          Ball
        </div>
      ) : (
        <button className="startBtn" type="submit" onClick={clickHandler}>
          Click Me
        </button>
      )}
    </div>
  );
}
