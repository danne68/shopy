import Link from "next/link";

const Product = (props) => {
    return (
        <div className="w-1/4 px-2">
            
                <img src={props.product.image} className="w-full" alt=""/>
                <div className="mx-2 mt-2 text-center">
                    <h5 className="text-base">{props.product.name}</h5>
                    <span className="py-2 font-thin flex justify-center">$ {props.product.price}</span>
                    <div className="flex w-full">
                        <Link href="/products/[id]" as={`/products/${props.product.id}`}>
                            <a className="mx-auto px-4 py-2 text-blue-500 text-base md:text-xs lg:text-base border border-blue-500 text-blue-500 rounded-lg">View Item<i class="ml-1 far fa-check-circle pointer-events-none"></i></a>
                        </Link>
                    </div>
                </div>
            
        </div>
    );
}
export default Product;