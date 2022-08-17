import React , {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { jsx, css, Global, ClassNames } from '@emotion/react'

import * as PropagateLoader from 'react-spinners';


function App() {

  const [loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  return (
    <div className="App">
      loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40} />
      :
      <>
      <Navbar/>
      </>
    </div>
  );
}

export default App;
