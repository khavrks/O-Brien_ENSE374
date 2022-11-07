import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useHttp } from './hooks/http.hook';

import { MainAvitoPage } from './routs/MainAvitoPage'

function App() {

  const {loading, request} = useHttp();
  const [is_auth, setIs_auth] = useState(false);

  const is_auth_func = async () => {
    const data = await request('/api/is_authenticated/', 'GET');
    setIs_auth(data);
    console.log(data);
  }

  useEffect(() => {
    is_auth_func(); 
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainAvitoPage data={{is_auth, loading}} />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const appDiv = document.getElementById('app');
// render(<App />, appDiv);