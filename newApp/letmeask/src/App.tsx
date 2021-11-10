import React from 'react';
import { Button } from './components/Button';
import illustration from './assets/images/illustration.svg';

function App() {
  return (
    <div>
      <h1>Oi</h1>
      <Button>Olá</Button>
      <img src={illustration} alt="imagem de ilustração" />
    </div>
  );
}

export default App;
