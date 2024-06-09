import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, setData, error } = useFetch(`http://localhost:5173/product/${id}`);
  console.log(data);

  return <>
  {data && <div>{data.title}</div>}
  </>;
}

export default Product;
