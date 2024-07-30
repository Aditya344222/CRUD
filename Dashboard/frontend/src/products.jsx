import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProduct(result);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    });
    result = result.json();
    if (result) {
      alert("Item deleted");
    }
  };
  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getProducts();
    }
  };

  console.log("products", product);
  return (
    <>
      <h3>List</h3>
      <input
        class="search"
        type="text"
        placeholder="Search product"
        onChange={handleSearch}
      />
      <div className="list">
        <ul>
          <h6>
            {" "}
            <li>S.no</li>
            <button></button>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
          </h6>
        </ul>
        {product.length>0?product.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.Name}</li>
            <li>{item.Price}</li>
            <li>{item.Category}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
            </li>
            <li>
              <Link to={`/update/${item._id}`}>Update</Link>
            </li>
          </ul>
        )):<h1>No result found</h1>}
      </div>
    </>
  );
}

export default Products;
