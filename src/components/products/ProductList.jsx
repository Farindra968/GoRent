'use client'
import ProductFilter from './ProductFilter'
import AddressPicker from '../AddressPicker'
import ProductCard from './ProductCard'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_PRODUCTFILTER } from '@/constant/switcher'
import FilterButton from '../UI/FilterButton'

const ProductList = () => {
    const { productSidebar } = useSelector((state) => state.filterSidebar)

  return (
      <section className="">
      <div className="">
              <AddressPicker />
        <div className='flex justify-end items-start px-4'>
          <FilterButton/>
              </div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-0  pb-6">
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${productSidebar === HIDE_PRODUCTFILTER? "lg:grid-cols-4": "lg:grid-cols-3"} gap-6 py-6`}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center items-center">
            <Button label="Show more car" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList
