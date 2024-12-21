import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Hero from "./components/Hero";
import SwiggyCorporate from "./components/Head Page/SwigggyCorporate";
import Offers from "./components/Head Page/Offers";
import Help from "./components/Head Page/Help";
import Signin from "./components/Head Page/Signin";
import Cart from "./components/Head Page/Cart";
import Search from "./components/Head Page/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Head />}>
        <Route path="/" element={<Hero />} />
        <Route path="/swiggycorporate" element={<SwiggyCorporate />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
