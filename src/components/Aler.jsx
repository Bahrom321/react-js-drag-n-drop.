import React, { useState } from 'react'

const data = [ 
    { id:1 , title:"magazinga borish" }, 
    { id:2 , title:"magazinga bormoqchiman" },
    { id:3 , title:"magazinga bordim" },
    { id:4 , title:"magazinga borish" }, 
    { id:5 , title:"magazinga bormoqchiman" },
    { id:6 , title:"magazinga bordim" } 

] 


const Aler = () => {
    
    const [products, setProducts] = useState(data)

    const handleDelete = id => {
        setProducts(products.filter(p=>p.id !== id))
    }


  return (
    <div>
        {products.map(p=>(
            <div>
                <h3>{p.title} <span><button
                onClick={() => handleDelete(p.id)}
                > delete</button></span></h3>
                
            </div>
        ))}
    </div>
  )
}

export default Aler