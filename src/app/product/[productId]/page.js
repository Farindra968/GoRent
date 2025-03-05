import car1 from "@/assets/images/car1.png";
import car2 from "@/assets/images/car2.png";
import FilterButton from "@/components/UI/FilterButton";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const page = async ({ params }) => {
  const product = await params.productId;
  return (
      <section className="px-4 py-6 w-full">
          <div className="py-6 w-full flex justify-between items-center">
              <div className="flex justify-start items-center space-x-2 text-primary-500 font-Poppins-Medium">
              <IoHomeSharp /><MdKeyboardArrowRight /><span>Product</span> <MdKeyboardArrowRight /><span>{product}</span>
              </div>
              <FilterButton/>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image */}
        <div className="">
          <div className="bg-primary-600 flex justify-center items-center w-full h-[350px] p-4 rounded-md">
            <Image src={car1} width={400} height={400} alt="Product details" />
          </div>
          <div className="flex justify-start items-center space-x-3 py-4">
            <div className="border-2 border-primary-500 bg-primary-300 flex justify-center items-center w-24 h-24 p-4 rounded-md">
              <Image
                src={car2}
                width={400}
                height={400}
                alt="Product details"
              />
            </div>
            <div className="border-2 border-primary-500 bg-primary-300 flex justify-center items-center w-24 h-24 p-4 rounded-md">
              <Image
                src={car1}
                width={400}
                height={400}
                alt="Product details"
              />
            </div>
            <div className="border-2 border-primary-500 bg-primary-300 flex justify-center items-center w-24 h-24 p-4 rounded-md">
              <Image
                src={car1}
                width={400}
                height={400}
                alt="Product details"
              />
            </div>
            <div className="border-2 border-primary-500 bg-primary-300 flex justify-center items-center w-24 h-24 p-4 rounded-md">
              <Image
                src={car1}
                width={400}
                height={400}
                alt="Product details"
              />
            </div>
          </div>
        </div>
        {/* Product details */}
              <div className="bg-white rounded-md p-6">
                  <div>
                      <div>
                          <h1 className="font-Poppins-Bold text-2xl text-secondary-600">Nissan GT - R</h1>
                          <p className="flex items-center text-yellow-600 ">
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                          </p>
                      </div>
                  </div>
            
        </div>
      </div>
    </section>
  );
};

export default page;
