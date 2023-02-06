import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import { Products } from './products';
import "./shop.css";
import Pagination from './pagination';


export const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);


  const indexOfLastProduct = (currentPage * productsPerPage < PRODUCTS.length ? currentPage * productsPerPage : PRODUCTS.length);
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const currentProducts = PRODUCTS.slice(indexOfFirstProduct,indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1> SuperTeh prodavnica</h1>
      </div>
      <Products products={currentProducts}/>
      <Pagination productsPerPage={productsPerPage} totalProducts={PRODUCTS.length} paginate={paginate}/>
    </div>
  )
}
