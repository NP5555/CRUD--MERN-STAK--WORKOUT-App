import {BrowserRouter, Routes, Route} from "react-router-dom"
// pages & component
import Home from "../src/pages/Home"
import  Navbar  from "./components/Navbar";
// import image from '../src/Gymimage.jpg';
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Navbar/>
<div className="pages">
<Routes>
  <Route
  path="/"
  element={ <Home/>}
  />
</Routes>

</div>
</BrowserRouter>
    </div>

  );
}

export default App;
