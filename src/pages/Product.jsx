import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  console.log(data);

  return (
    <>
      {data && (
        <>
          {/* <img src={data.thumbnail} alt="" />
    <p> TITLE :{data.title}</p>
    <p>DESCRIPTION :{data.description}</p>
    <p>WEIGHT: {data.weight}</p>
    <p></p> */}
          <div className="card lg:card-side bg-base-100 shadow-xl border-red-300 d-flex site-container mt-32 mb-32 border-4">
            <figure>
              <img
                src={data.thumbnail}
                alt="Album"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title"> <span className="text-4xl font-serif">Title :</span>{data.title}</h2>
              <p className="text-amber-500 text-1xl"> <span className=" text-green-500 font-mono text-2xl">Description :</span>{data.description}</p>
              <p className="text-violet-950"> <span className="text-green-500 font-mono text-2xl">Weight :</span>{data.weight}</p>
              <p className="text-amber-500 text-1xl"> <span className="text-green-500 font-mono text-2xl">ShippingInformation: </span>{data.shippingInformation}</p>
              <p className="text-amber-500 text-1xl"> <span className="text-green-500 font-mono text-2xl">Sku :</span>{data.sku}</p>
              <p className="text-amber-500 text-1xl"> <span className="text-green-500 font-mono text-2xl"> Category : </span>{data.category}</p>
              <p className="text-amber-500 text-1xl"> <span className="text-green-500 font-mono text-2xl">ReturnPolicy : </span>{data.returnPolicy}</p>
              <p className="text-amber-500 text-1xl"> <span className="text-green-500 font-mono text-2xl">Brand : </span>{data.brend}</p>
              <p></p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
