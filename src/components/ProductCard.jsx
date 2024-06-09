import { Link } from "react-router-dom";

function productCard({ product }) {
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

  return ( 
    <Link to={`/product/${id}`}>
      <div className="site-container border w-96 bg-black-200 p-10 mt-10 rounded-lg inline-block ml-60">
        <h1 className="text-3xl">{title}</h1>
        <p>{price}</p>
        <img src={thumbnail} alt="img" />
        <p>{description}</p>
        <p>{category}</p>
        <button className="btn btn-primary mt-10 text-right">Go to the card</button>
      </div>
    </Link>
  );
}

export default productCard;
