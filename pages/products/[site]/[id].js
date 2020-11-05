import fetch from 'isomorphic-unfetch';
import ProductItem from '../../../components/ProductItem'
import Bread from "../../../components/Breadcrumb/Breadcrumb";

const Productitem = props => { 
    return (
        <>
            <Bread />
            <ProductItem product={props.product}/>
        </>
    )
};
Productitem.getInitialProps = async function(context) {
    const { id, site } = context.query;
    
    const res = await fetch(`https://my-json-server.typicode.com/danne68/shopy/${site}/${id}`);
    const product = await res.json();
    return { product };
};
export default Productitem;