"use client";
import React, { useState, useEffect } from 'react';
import Subtitle from '../Componnents/Subtitle';
import Container from '../Componnents/Container';
import Blogtext from '../Componnents/Blogtext';
import Blogpagination from '../Componnents/Blogpagination';

const Blogpages = () => {
  const [allproduct, setAllProduct] = useState([]);  // State to hold all products
  const [loading, setLoading] = useState(true);      // State to manage loading
  const [error, setError] = useState(null);          // State to handle errors
  const [currentpage, setCurrentPage] = useState(1);  // State for current page, starts at 1
  const [perpage, setPerPage] = useState(3);         // Items per page

  // Pagination logic
  const lastPage = currentpage * perpage;
  const firstPage = lastPage - perpage;

  // Make sure `allproduct` is an array before slicing
  const allpage = Array.isArray(allproduct) ? allproduct.slice(firstPage, lastPage) : [];

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json(); // Convert response to JSON

        console.log("API Data:", data);  // Log the data to inspect the structure

        // Set the state with the data fetched from the API
        setAllProduct(data || []);  // Handle case if the data field exists
      } catch (error) {
        setError(error.message); // Catch any errors
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  // Display a loading message or error message
  if (loading) return <div className='mt-[80px] w-[100%] flex items-center justify-center py-10'><p className='text-[40px] font-bold text-[#152970]'>Loading Blog...</p></div>;
  if (error) return <p>Error: {error}</p>;

  // Create page numbers, starting from 1
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allproduct.length / perpage); i++) {
    pageNumber.push(i);  // Ensure page numbers start from 1
  }

  const pagehandel = (page) => {
    setCurrentPage(page);  // Set the current page based on the clicked page number
  };

  return (
    <>
    <section className='mt-[80px]'>
    <Subtitle />
    <Container>
        <div className='w-[100%] flex gap-4'>
          {/* Left part */}
          <div className='w-[60%]'>
            <Blogtext allproduct={allpage} /> {/* Pass paginated products */}
            <div>
              <Blogpagination pageNumber={pageNumber} pagehandel={pagehandel} />
            </div>
          </div>
          {/* Right part */}
          <div className='w-[40%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae, libero ducimus obcaecati quis eligendi nostrum consectetur maxime nesciunt nemo possimus cum dolor similique. Error, alias. Aspernatur fugiat fuga libero voluptates voluptas quia consequatur magni, deleniti aperiam illo explicabo dolor omnis debitis. Eius vero modi quisquam rem delectus quo necessitatibus.</p>
          </div>
        </div>
      </Container>
    </section>
     
      
    </>
  );
};

export default Blogpages;
