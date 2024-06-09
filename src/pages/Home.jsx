import { useFetch } from "../hooks/useFetch"

// components
import ProductList from "../components/ProductList"

function Home() {
  const {data, isPending, error}  = useFetch("https://dummyjson.com/products")
  return (
    <div>
      {isPending && <div>...Loading</div>}
      <ProductList data={data}/>
    </div>
  )
}

export default Home