import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item';

const Popular = () => {

    


  const [popularProducts,setPopularproducts] = useState([]);

   useEffect(()=>{
     fetch('http://localhost:4000/popularinwomen')
     .then((response)=>response.json())
     .then((data)=>setPopularproducts(data));
   },[])


  return (
    <div className='popular'> 
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
         {popularProducts.map((item, i) => {
    return (
      <div className="item-container" key={i}>
        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      </div>
    );
  })}
      </div>
    </div>
  )
}

export default Popular
