
// import React from 'react'
// import Shopingcart from '../Componnents/Shopingcart'
// import getAlldata from '@/lib/getAlldata'

// const Page = async () => {
//     const allproduct = await getAlldata()

//   return (
//    <>
//    <div className='container'>
//     <Shopingcart allproduct={allproduct}/>
//    </div>
//    </>
//   )
// }

// export default Page
"use client"; // Ensure this is a client-side component

import React, { useState, useEffect } from 'react';
import Shopingcart from '../Componnents/Shopingcart';
import Pagination from '../Componnents/Pagination';
import Container from '../Componnents/Container';

const Page = () => {
  const [allproduct, setAllProduct] = useState([]);  // State to hold all products
  const [loading, setLoading] = useState(true);      // State to manage loading
  const [error, setError] = useState(null);          // State to handle errors
  const [currentpage, setcurrentpage] = useState(1);
  const [perpage, setPerPage] = useState(12);

  // Pagination logic
  const lastPage = currentpage * perpage;
  const firstPage = lastPage - perpage;

  // Make sure `allproduct` is an array before slicing
  const allpage = Array.isArray(allproduct) ? allproduct.slice(firstPage, lastPage) : [];

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0&sortBy=title&skip=5'); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json(); // Convert response to JSON

        console.log("API Data:", data);  // Log the data to inspect the structure

        // Check if the response has a `products` field and set the state to the array of products
        setAllProduct(data.products || []);  // Handle case if `products` field exists
      } catch (error) {
        setError(error.message); // Catch any errors
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  // Display a loading message or error message
  if (loading) return <div className='mt-[80px] w-[100%] flex items-center justify-center py-10'><p className='text-[40px] font-bold text-[#152970]'>Loading products...</p></div>;
  if (error) return <p>Error: {error}</p>;

  const pageNumber = [];
  for (let i = 0; i < allproduct.length / perpage; i++) {
    pageNumber.push(i)
  }
  const pagehandel = (pageNumber) => {
    setcurrentpage(pageNumber + 1);
  }
  const next = () => {
    if (currentpage < pageNumber.length) {
      setcurrentpage((state) => state + 1)
    }
  }
  const prev = () => {
    if (currentpage > 1) {
      setcurrentpage((state) => state - 1)
    }
  }
  return (
    <section className='mt-[80px]'>
 <Container>
      <div className='container'>
        {/* Ensure that `allpage` is an array before rendering the Shopingcart */}
        {Array.isArray(allpage) && allpage.length > 0 ? (
          <Shopingcart allpage={allpage} />
        ) : (
          <p>No products found.</p>
        )}

        <div>
          <Pagination pageNumber={pageNumber} pagehandel={pagehandel} next={next} prev={prev} />
        </div>
      </div>
    </Container>
    </section>
   

  );
};

export default Page;



