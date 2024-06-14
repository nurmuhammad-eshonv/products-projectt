// import { useParams } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
// import React, { useState } from 'react';
// import { useGlobalContext } from "../context/GlobalContext";

// function Product() {
//   const { id } = useParams();
//   const { data, setData, error } = useFetch(
//     `https://dummyjson.com/products/${id}`
//   );
//   const { dispatch } = useGlobalContext();
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch({ type: 'ADD_TO_CART', payload: count });
//   };

//   return (
//     <>
//       {data && (
//         <div className="card lg:card-side bg-base-100 shadow-xl border-red-300 d-flex site-container mt-32 mb-32 border-4">
//           <figure>
//             <img src={data.thumbnail} alt="Album" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               <span className="text-4xl font-serif">Title :</span>
//               {data.title}
//             </h2>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">Description :</span>
//               {data.description}
//             </p>
//             <p className="text-violet-950">
//               <span className="text-green-500 font-mono text-2xl">Weight :</span>
//               {data.weight}
//             </p>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">ShippingInformation: </span>
//               {data.shippingInformation}
//             </p>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">Sku :</span>
//               {data.sku}
//             </p>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">Category : </span>
//               {data.category}
//             </p>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">ReturnPolicy : </span>
//               {data.returnPolicy}
//             </p>
//             <p className="text-amber-500 text-1xl">
//               <span className="text-green-500 font-mono text-2xl">Brand : </span>
//               {data.brand}
//             </p>
//             <div className="card-actions justify-end">
//               <div className="control-shop-carf flex text-end justify-center gap-5">
//                 <button className="btn btn-primary pb-1" onClick={decrement}>
//                   <span className="text-2xl">-</span>
//                 </button>
//                 <div className="text-3xl">{count}</div>
//                 <button className="btn btn-primary text-3-xl pb-1" onClick={increment}>
//                   <span className="text-2xl">+</span>
//                 </button>
//               </div>
//               <button className="btn btn-success" onClick={handleAddToCart}>Add to card</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Product;
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import React, { useState } from 'react';
import { useGlobalContext } from "../context/GlobalContext";

function Product() {
  const { id } = useParams();
  const { data, error } = useFetch(`https://dummyjson.com/products/${id}`);
  const { dispatch } = useGlobalContext();
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: count });
  };

  return (
    <>
      {data && (
        <div className="card lg:card-side bg-base-100 shadow-xl border-red-300 d-flex site-container mt-32 mb-32 border-4">
          <figure>
            <img src={data.thumbnail} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-4xl font-serif">Title :</span>
              {data.title}
            </h2>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Description :</span>
              {data.description}
            </p>
            <p className="text-violet-950">
              <span className="text-green-500 font-mono text-2xl">Weight :</span>
              {data.weight}
            </p>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Shipping Information: </span>
              {data.shippingInformation}
            </p>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Sku :</span>
              {data.sku}
            </p>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Category : </span>
              {data.category}
            </p>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Return Policy : </span>
              {data.returnPolicy}
            </p>
            <p className="text-amber-500 text-1xl">
              <span className="text-green-500 font-mono text-2xl">Brand : </span>
              {data.brand}
            </p>
            <div className="card-actions justify-end">
              <div className="control-shop-cart flex text-end justify-center gap-5">
                <button className="btn btn-primary pb-1" onClick={decrement}>
                  <span className="text-2xl">-</span>
                </button>
                <div className="text-3xl">{count}</div>
                <button className="btn btn-primary text-3-xl pb-1" onClick={increment}>
                  <span className="text-2xl">+</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={handleAddToCart}>Add to card</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
