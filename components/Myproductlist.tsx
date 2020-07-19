import Product, { IProduct } from "./Product"
import Myproduct from './Myproduct';
interface IProductListProps {
  products: IProduct[]
}
const Myproductlist = (props) => {
    console.log('mpl', props.products[0])
  return (
    <div className="product-list">
        <Myproduct product={props.products[0]} 
        />
        {/* {props.products.map((product, index) => <Product product={product} key={index}/>)} */}
    </div>
  )
}
export default Myproductlist