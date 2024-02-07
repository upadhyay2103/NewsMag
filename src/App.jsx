import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [category,setCategory]=useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} category={category}/>
      <NewsList category={category}></NewsList>
    </>
  )
}

export default App
