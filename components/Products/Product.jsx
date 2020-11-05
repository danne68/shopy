import Link from "next/link";
import { useRouter } from 'next/router';

const Product = ({ product, routes }) => {
    const { asPath } = useRouter();

    return (
        <div className="w-1/4 px-2 mb-8">
            <Link href={`/products/[site]/[id]`} as={`/products/${routes}/${product.id}`}>
                <a>
                    <img src={product.thumb} className="w-full" alt=""/>
                    <div className="mx-2 mt-2 text-center">
                        <h5 className="text-base">{product.name}</h5>
                        <span className="py-2 font-thin flex justify-center">$ {product.price}</span>
                    </div>
                </a>
            </Link>
            <div className="flex w-full">
                <Link href="/products/[site]/[id]" as={`/products/${routes}/${product.id}`}>
                    <a className="mx-auto px-4 py-2 text-blue-500 text-base md:text-xs lg:text-base border border-blue-500 rounded-lg">Add to cart<i class="ml-1 far fa-check-circle pointer-events-none"></i></a>
                </Link>
            </div>
        </div>
    );
};
export default Product;
