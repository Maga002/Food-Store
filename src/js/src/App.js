import { Fragment } from "react";
import "./App.css";
import Home from './Pages/Home'
import NavBar from "./Navigation/NavBar";
import Address from "./Pages/Address";
import FoodList from "./Pages/FoodList";
import Menu from "./Pages/Menu";
import Footer from "./Navigation/Footer";
import Container from "./UI/Container";
import{ Routes,Route} from 'react-router-dom';
import Contact from "./Pages/Contact";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/foodlist" element={<FoodList/>}></Route>
            <Route path="/address" element={<Address/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
        </Routes>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
