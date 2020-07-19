import Product, { IProduct } from "./Product"
import router from 'next/router';
import Myproduct from './Myproduct';
interface IProductListProps {
  products: IProduct[]
}
const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
        <Myproduct product={{
          id: "nextjs_spinner", 
          name: "Spinner", 
          price: 25.00, 
          image: "../static/spinner.gif", 
          description: "The Halfmoon betta is arguably one of the prettiest betta species."
          }
          } 
        />
        {/* {props.products.map((product, index) => <Product product={product} key={index}/>)} */}
    </div>
  )
}
export default ProductList