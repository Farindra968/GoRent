import ProductFilter from "@/components/products/ProductFilter"

export const metadata = {
    title: 'Product',
    description: 'Get Rent car at affordable price'
}

const Product = ({children}) => {
  return (
    <section className="flex justify-start items-start space-x-4">
      <ProductFilter/>
          {children}
    </section>
  )
}

export default Product
