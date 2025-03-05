import ProductFilter from "@/components/products/ProductFilter"
import { HIDE_PRODUCTFILTER } from "@/constant/switcher"

export const metadata = {
    title: 'Product',
    description: 'Get Rent car at affordable price'
}

const ProductDetails = ({children}) => {
  return (
    <section className="w-full">
          {children}
    </section>
  )
}

export default ProductDetails
