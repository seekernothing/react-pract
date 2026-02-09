import React, { useEffect, useState } from "react";

// https://dummyjson.com/products

const Jobboard = () => {
  let PAGE_SIZE = 6;

  const [products, setallProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        // console.log(data);
        setallProducts(data?.products);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

//   console.log(products);
  console.log(loading);
  

  const allvisbleproducts = products.slice(0, (page + 1) * PAGE_SIZE);
  const hasMore = allvisbleproducts.length < products.length;
  return (
    <div>
      <div>
        {/* div to display products */}

        {allvisbleproducts.map((pro) => (
          <div
            key={pro.id}
            style={{
              border: "2px solid black",
              marginTop: "3px",
              padding: "5px",
            }}
          >
            <h1 style={{ marginTop: "4px" }}>{pro.title} </h1>
            <p>{pro.description}</p>
          </div>
        ))}

        {loading && <p>Loading....</p>}

        {!loading && hasMore && (
          <button
            style={{ padding: "5px", backgroundColor: "green" }}
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobboard;
