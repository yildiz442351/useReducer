import { useReducer } from "react";
import ProductList from "./components/ProductList";
import CartReducer from "./reducers/cartReducer"
import ShoppingCart from "./components/ShoppingCart";

function App() {
  //const initalState ={
   // cart: [],
 // };
 // useReducer hook'u kullanarak state ve dispatch fonksiyonunu oluşturur.
  const [state,dispatch] = useReducer (cartReducer, {cart: []});
  console.log(state);
  return (
    <>
    {/* ürün listesi bileşeni, state ve dispatch fonksiyonunu birlikte çağrır */}
      <ProductList dispatch ={dispatch}/>
      {/* alışveriş sepeti bileşeni,mevcut sepet durum ve dispatch fonksiyonu ile birlikte çağırılır */}
      <ShoppingCart cart={state}/>
    </>
  );
}

export default App;
