

import Header from './Components/Header';
import Basket from './Components/Basket';
import Main from './Components/Main';
import data from './data';
import { useState } from 'react';

function App() {
  const {products}=data;
  const[cartItems,setCartItems]=useState([]);
  const onAdd=(product)=>{
    const exist = cartItems.find((a)=>a.id === product.id)
    if(exist){
      setCartItems(cartItems.map((a) => 
      a.id===product.id ? {...exist,qty:exist.qty+1}: a
      ))
    }
    else
    {
      setCartItems([...cartItems,{...product ,qty:1}])
    }
  }
  const onRemove = (product)=>{

    const exist = cartItems.find((a)=>a.id===product.id)
    if(exist.qty===1){
      setCartItems(cartItems.filter((a)=> a.id !==product.id))
    }
    else{
      setCartItems(
        cartItems.map((a) =>
          a.id === product.id ? { ...exist, qty: exist.qty - 1 } : a
        )
      ); 
    }

  }
  return (
    <div className="App">
      <Header />

      <div className='row'>
        <Main onAdd ={onAdd} products ={products}/>

        <Basket onAdd = {onAdd} onRemove = {onRemove} cartItems ={cartItems}/>
      </div>
    </div>
  );
}

export default App;
