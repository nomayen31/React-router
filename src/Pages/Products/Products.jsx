import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
const {products} = useLoaderData();
    console.log(products);
    return (
        <div className="text-center">
            <div>This is a products page</div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
           {
                products ?.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;