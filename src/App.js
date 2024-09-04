import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Suspense } from "react";
import Header from "./Components/Header.jsx";
import {Dashboard,Article,Amazon,Netflix} from './Components/Exports.js'

const App = () => {
  return(
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
        <Route path="/amazon" element={<Suspense fallback={<div>Loading...</div>}><Amazon/></Suspense>}/>
        <Route path="/netflix" element={<Suspense fallback={<div>Loading...</div>}><Netflix/></Suspense>}/>
        <Route path="/article" element={<Suspense fallback={<div>Loading...</div>}><Article/></Suspense>}/>
      </Routes>
    </Router>
  )
};

export default App;
