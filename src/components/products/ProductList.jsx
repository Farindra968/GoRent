'use client'
import ProductFilter from './ProductFilter'
import AddressPicker from '../AddressPicker'
import ProductCard from './ProductCard'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilterSidebar } from '@/redux/filterSidebarSlice/filterSidebarSlice'
import { VscSettings } from "react-icons/vsc";
import { HIDE_PRODUCTFILTER } from '@/constant/switcher'

const ProductList = () => {
    const { productSidebar } = useSelector((state) => state.filterSidebar)
    const dispatch = useDispatch();
    function toggleSidebar() {
        dispatch(toggleFilterSidebar())
    }
  return (
      <section className="flex gap-6">
          {productSidebar }
          <div className={`${productSidebar === HIDE_PRODUCTFILTER ? "hidden" : "w-80 fixed lg:static z-30 bg-primary-0 "}`}>
              <ProductFilter />
      </div>
      <div className="">
              <AddressPicker />
              <div className='flex justify-end items-start px-4'>
                  <button onClick={toggleSidebar} className='text-xl bg-primary-500 p-2 rounded-md shadow-md shadow-primary-300 text-primary-0'>
                      <VscSettings />
                      </button>
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
