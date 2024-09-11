import React from 'react';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ProductCard from '../Global/ProductCard';
import MobileFilter from './MobileFilter';

const ProductList = () => {
    return (
        <div className=' md:w-[75%] px-6 md:px-0'>
            <div className='flex items-center justify-between flex-col md:flex-row gap-3'>
                <div className='flex items-center gap-6 justify-between md:justify-end w-full flex-row-reverse' >
                  
                    <MobileFilter  />
                    
                    <h3 className=' text-xl md:text-3xl font-semibold'>Living Room</h3>
                </div>
                <div className='flex items-center gap-6 justify-between md:justify-end w-full'>
                    <div>
                        <select className=" ps-0 select w-full max-w-xs md:text-xl font-semibold ">
                            <option disabled selected>Sort by</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Toggle3" className="inline-flex items-center cursor-pointer">
                            <input id="Toggle3" type="checkbox" className="hidden peer" />
                            <span className="px-4 py-2 border  bg-gray-100 text-gray-900 peer-checked:bg-white peer-checked:text-gray-500 text-lg md:text-2xl "><LuLayoutGrid /></span>
                            <span className="px-4 py-2 border bg-white text-gray-500  peer-checked:bg-gray-100 peer-checked:text-gray-900 text-lg md:text-2xl"><LuLayoutList /></span>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center md:justify-between flex-wrap items-center gap-6 my-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductList;