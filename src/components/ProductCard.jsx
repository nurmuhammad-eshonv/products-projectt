
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const {
//     title,
//     id,
//     brand,
//     availabilityStatus,
//     description,
//     category,
//     thumbnail,
//     price,
//   } = product;

//   const truncateDescription = (desc, maxLength) => {
//     if (desc.length > maxLength) {
//       return desc.substring(0, maxLength) + "...";
//     }
//     return desc;
//   };

//   return ( 
//     <Link to={`/product/${id}`}>
//       <div className="site-container border w-96 h-auto bg-black-200 p-10 mt-20 rounded-lg inline-block ml-20 mr-10 hover-shadow-box-animation border-4 border-red shadow-2xl">    
//         <img className="w-60 h-40 text-center ml-6" src={thumbnail} alt="img" />
//         <h1 className="text-3xl text-center">{title} product</h1>
//         <p className="mt-6">{truncateDescription(description, 90)}</p>
//         <p className="text-center text-3xl text-white-700 mt-6"><span className="text-yellow-500">Price:</span> {price} $</p>
//         <div className="ml-20 btn btn-primary mt-10 text-right">Go to the card</div>
//       </div>
//     </Link>
//   );
// }

// export default ProductCard;
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    title,
    id,
    brand,
    availabilityStatus,
    description,
    category,
    thumbnail,
    price,
  } = product;

  const truncateDescription = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };

  return ( 
    <Link to={`/product/${id}`}>
      <div className="site-container border w-96 h-auto bg-black-200 p-10 mt-20 rounded-lg inline-block mr-10 hover-shadow-box-animation border-4 border-red shadow-2xl">    
        <img className="w-60 h-40 text-center ml-6" src={thumbnail} alt="img" />
        <h1 className="text-3xl text-center">{title} product</h1>
        <p className="mt-6">{truncateDescription(description, 90)}</p>
        <p className="text-center text-3xl text-white-700 mt-6"><span className="text-yellow-500">Price:</span> {price} $</p>
        <div className="ml-20 btn btn-primary mt-10 text-right">Go to the card</div>
      </div>
    </Link>
  );
}

export default ProductCard;
