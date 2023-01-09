import React from 'react';
import Product from './Product';

const Main =(props)=>{
    const {products,onAdd}=props
    return(
       <main className ="block col-2">
        <h2>
            Products
            {products.map((prod)=>(
                <Product key = {prod.id}  product = {prod} onAdd ={onAdd} />
            ))}
        </h2>
        <div className = "row"></div>
       </main>
    )
}
export default Main