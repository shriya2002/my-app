import React from 'react';

const Basket = (props)=>{
 const {cartItems,onAdd,onRemove}=props
 const itemsPrice = cartItems.reduce((a,c)=> a+c.price*c.qty,0);
 const taxPrice = itemsPrice*0.14;
 const shippingPrice = itemsPrice>2000?0:50
 const totalPrice = itemsPrice+taxPrice+shippingPrice
    return (
        <aside className = "block col-1">
        <h2>
            cart Items
        </h2>
        <div>{cartItems.length === 0 && <div> Cart is empty </div>}</div>
             {cartItems.map((a) => (
               <div key={a.id} className="row">
                  <div className='col-2'>{a.name} </div>
                  <div className='col-2'>
                    <button onClick={() => onAdd(a)} className="add">
                      +
                    </button>
                    <button onClick = {()=>onRemove(a)} className="add">
                      -
                    </button>
                  </div>
                  <div className='col-2 text-right'>{a.qty} * ${a.price.toFixed(2)}</div>
                </div>
             ))}
                {cartItems.length!==0 &&(
                <>
                <hr>

                </hr>

                </>
                
                )}
        </aside>
    )
}

export default Basket