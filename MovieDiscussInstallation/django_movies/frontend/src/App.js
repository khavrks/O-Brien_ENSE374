import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useHttp } from './hooks/http.hook';

import { Main } from './routs/Main';
import { MoviePage } from './routs/MoviePage';
import { Pages } from './routs/Pages';

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
        {/* <Route path='/' element={<MainAvitoPage data={{is_auth, loading}} />}/> */}
        <Route path='/' element={<Main />} />
        <Route path='pages/:page' element={<Pages />} /> 
        <Route path='movies/:movie' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const appDiv = document.getElementById('app');
// render(<App />, appDiv);