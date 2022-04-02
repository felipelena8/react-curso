
import "./App.css";
import NavBar from "./componentes/NavBar";
import "https://kit.fontawesome.com/b3e3212614.js";
import ItemListContainer from "./componentes/ItemListContainer";
import "./scss/style.scss";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Cuenta from "./componentes/Cuenta";
import CartContextProvider from "./context/CartContext";
import Cart from "./componentes/Cart";
import { getFirestoreApp } from "./firebase/config";
getFirestoreApp()
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <main>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/*" element={<Navigate to={"/"} />} />
              <Route path="/category/:cat" element={<ItemListContainer />} />
              <Route path="/account" element={<Cuenta />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </CartContextProvider>{}
      </div>
    </BrowserRouter>
  );
}

export default App;
