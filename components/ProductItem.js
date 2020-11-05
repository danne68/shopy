import { FaPlus, FaMinus, FaCartPlus, FaCrop, FaTruck } from "react-icons/fa";
const ProductItem = (props) => {
    return (  
        <div className="container mt-12">
            <div className="flex">
                <div className="w-3/7 mr-5">
                    <img src={props.product.image} className="" alt=""/>
                    <div className="flex overflow-hidden mt-8">
                        <img src={props.product.image} className="w-1/4 px-1" alt=""/>
                        <img src={props.product.image} className="w-1/4 px-1" alt=""/>
                        <img src={props.product.image} className="w-1/4 px-1" alt=""/>
                        <img src={props.product.image} className="w-1/4 px-1" alt=""/>
                    </div>
                </div>
                <div className="w-4/7">
                    <div className="flex flex-col">
                        <span className="font-semibold text-xl mb-2">{props.product.name}</span>
                        <span className="mb-1">$ {props.product.price}</span>
                        <p className="font-thin mb-2">{props.product.description}</p>
                        <span className="mb-1">color:</span>
                        <div className="flex mb-2">
                            <div className="rounded-full mx-1 h-5 w-5 bg-black"/>
                            <div className="rounded-full mx-1 h-5 w-5 bg-white border-gray-300 border"/>
                            <div className="rounded-full mx-1 h-5 w-5 bg-red-600"/>
                        </div>
                        <span className="mb-1">Tamaño:</span>
                        <div className="flex uppercase mb-4">
                            <div className="w-9 py-1 mx-1 text-center font-light border text-gray-102">XS</div>
                            <div className="w-9 py-1 mx-1 text-center font-light border border-black text-black">S</div>
                            <div className="w-9 py-1 mx-1 text-center font-light border text-gray-102">M</div>
                        </div>
                        <div className="flex uppercase">
                            <span className="flex mr-4 cursor-pointer"><FaCrop className="self-center mr-1" />SIZE GUIDE</span>
                            <span className="flex cursor-pointer"><FaTruck className="self-center mr-1" />SHIPPING</span>
                        </div>
                        <div className="flex mt-6">
                            <div className="flex items-center bg-gray-101 mr-4">
                                <span className="py-3 px-4 cursor-pointer font-bold text-lg text-gray-103 hover:text-black"><FaMinus /></span>
                                <input role="textbox" className="w-12 bg-gray-101 appearance-none py-3 px-2 focus:outline-none text-center font-semibold" type="text" value="1"/>
                                <span className="py-3 px-4 cursor-pointer font-bold text-lg text-gray-103 hover:text-black"><FaPlus /></span>
                            </div>
                            <button className="flex items-center px-4 bg-black text-white uppercase"><FaCartPlus className="mr-2" />Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductItem;