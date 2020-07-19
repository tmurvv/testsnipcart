import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Myproduct from "../components/Myproduct"
import Head from "next/head"
interface IIndexProps {
  products: IProduct[]
}
const Myproducts = (props: IIndexProps) => {
  return (
        <>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Head>
            <div className="app">
                <Header />
                <main className="main">
                    <div>
                    <Myproduct
                        title="Oladion Harp"
                        price="$1299.00"
                        image="img/harps/oladion.png"
                        imagealt="Oladion Harp"
                        description="My description"
                    />
                    </div>
                    <ProductList products={props.products} />
                </main>
                <Footer />
            </div>
            
        </>
  )
}
Myproducts.getInitialProps = async ({ req }) => {
  return {
    products: [
      {id: "nextjs_nino", name: "Nino Harp", price: 25.00, image: "../static/nino.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct,
      {id: "nextjs_spinner", name: "Spinner", price: 25.00, image: "../static/spinner.gif", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct
    ]
  }
}
export default Myproducts