import React from 'react'
import ProductContainer from '../components/ProductContainer'
import LoadingFullScreen from '../components/Loading';
const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getProducts = async () => {
    console.log("fetching data.....");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };
  React.useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return loading?<LoadingFullScreen/>:(
    <div className='w-full flex flex-col  items-center sm:px-32'>
      <ProductContainer products={products}/>
    </div>
  )
}

export default Home
