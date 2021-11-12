import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { createContext } from 'react'

export const TextContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TextContext.Provider value={'Teste'}>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/rooms/new' element={<NewRoom/>} />
        </Routes>
      </TextContext.Provider>
    </BrowserRouter>
  );
}

export default App;
