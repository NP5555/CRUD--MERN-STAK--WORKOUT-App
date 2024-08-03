import {BrowserRouter, Routes, Route} from "react-router-dom"
// pages & component
import Home from "../src/pages/Home"
import  Navbar  from "./components/Navbar";


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
