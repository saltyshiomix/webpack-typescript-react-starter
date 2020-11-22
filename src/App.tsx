import React, { useState } from 'react';

export default function App() {
  const [val, setVal] = useState(0);
  const add = () => {
    setVal(val + 1);
  };
  return <div>
    <p>Webpack + TypeScript + React = ❤️</p>

    {'1. click add; 2. Change this text to see hmr: testText'}
    <p>val: {val}</p>
    <button onClick={add}>add</button>
  </div>;
}
