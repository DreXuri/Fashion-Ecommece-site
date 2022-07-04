// import Navbar from "./components/Navbar";
import "./App.css";
// import Footer from "./components/Footer";
// import Card from "./components/Card";
// import Body from "./components/Body";
// import Body from "./PROJECT/Body";
// import Todo from "./components/Todo";
// import { FaRegTrashAlt } from "react-icons/fa";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Dashboard from "./pages/User/Dashboard";
import Nomatch from "./pages/Nomatch";
import Login from "./pages/Login";
import User from "./pages/User";
import Searchbar from "./components/Searchbar";
import Search from "antd/lib/transfer/search";
// import NavBAR from "./PROJECT/NavBAR";
// import CartHome from "./pages/cartHome";
import { useEffect, useState } from "react";
// import Product from "./components/Product";
// import { Navbar } from "./FoodApp";
import { Products, Navbar, Cart, Checkout } from "./Ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";

///////project/////////
import Listnav from "./PROJECT/Listnav";
import Feature from "./PROJECT/Feature";
import Tokenometric from "./PROJECT/Tokenometric";
// import Checkout from "./Ecommerce/Checkout/CheckoutFolder/Checkout";
// import Cartitem from "./Ecommerce/CartLayout/Cartitem/Cartitem";
const App = () => {
  ////////////for Ecommece///////////////
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();
    // setCart(cart);
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(products);
  console.log(cart);
  // const [productState, setProductState] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.co m/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const newProductState = json.map((product) => {
  //         return product.title;
  //         // console.log(json);
  //       });
  //       setProductState(newProductState);
  //     });

  // setTimeout(() => {
  //   setProductState([
  //     "tooth paste",
  //     "tooth brush",
  //     "mouth wash",
  //     "mouth guard",
  //     "teeth brace",
  //   ]);
  // }, 2000);
  // }, []);
  // const product = [
  //   "tooth paste",
  //   "tooth brush",
  //   "mouth wash",
  //   "mouth guard",
  //   "teeth brace",
  // ];
  ////////////for Ecommece///////////////
  //////////for Ecommece///////////////

  return (
    <>
      {/* ////////////////////////////project folder///////////////////// */}
      {/* <NavBAR />
      <Body />
      <Routes>
        <Route path="listnav" element={<Listnav />} />
        <Route path="features" element={<Feature />} />
        <Route path="token" element={<Tokenometric />} />
        <Route path="./" element={<Listnav />} />
      </Routes>
    </> */}
      {/* ////for Project//////////  */}

      {/* ////////for Ecommerce project//// */}
      <div>
        <Navbar totalItem={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          {/* <Route path="signin/:role/:country" element={<Signin />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="user" element={<User />} /> */}
          <Route
            path="/cart"
            element={
              cart.id ? (
                <Cart
                  cart={cart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              ) : null
            }
          />

          <Route path="/checkout" cart={cart} element={<Checkout />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </div>
      {/* //////////////for Ecommerce project//// /////////////////for Project
      //////////////////////// */}

      {/* ///////component folder////////////////// */}
      {/* <Products products={products} />  */}
      {/* <div>{setProductState()}</div>  */}
      {/* <Navbar />  */}
      {/* <Body />  */}
      {/* <Searchbar />  */}
      {/* <Product />  */}
      {/* <main className="p-5">  */}
      {/* <h1>TO-DO APP</h1>  */}
      {/* <Todo />  */}
      {/* <FaRegTrashAlt /> */}
      {/* //  <Navbar />
    //  <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="signin/:role/:country" element={<Signin />} />
    //       <Route path="login" element={<Login />} />
    //       <Route path="product/:id" element={<Product />} />
    //       <Route path="searchbar" element={<Searchbar />} />
    //       <Route path="dashboard" element={<Dashboard />} />
    //       <Route path="user" element={<User />} />
    //       <Route path="*" element={<Nomatch />} />
    //     </Routes>

    <p> 
   /     Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
    //     voluptatem molestiae, iusto odit in voluptate nemo id cum blanditiis.
    //     Eveniet, in tempora sit sint aliquid aut provident dolorum porro
    //     ipsum?
    //   </p> */}
      {/* <div className="d-flex flex-wrap">
        <Card name={"Samuel Henshaw"} body={"hello"} yes={"gunshot"} />
       </div> */}
      {/* </main> */}
      {/* <Footer /> */}
      {/* ///////component folder////////////////// */}
    </>
  );
};

export default App;
