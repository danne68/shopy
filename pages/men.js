import Products from '../components/Products/Products'
import Header from '../components/Header/Header'
import fetch from 'isomorphic-unfetch'

const Index = ({...props}) => {  
  return (
    <>
      <Header />
      <div className="container px-2">
        <Products route="man" products={props.products}/>
      </div>
    </>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://my-json-server.typicode.com/danne68/shopy/man');
  const data = await res.json();
  return {
    products: data
  };
};
export default Index