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
      <div className="site-container">
        <h1>{title}</h1>
        <p>{price}</p>
        <img src={thumbnail} alt="img" />
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </Link>
  );
}

export default productCard;
