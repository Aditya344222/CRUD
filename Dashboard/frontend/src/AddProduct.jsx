import React, { useState } from "react";
import "./App.css";

function AddProduct() {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [Category, setCategory] = useState();
  const [Company, setCompany] = useState();
  const [error, setError] = useState(false);
  const addName = async () => {
    console.log(!Name);
    if (!Name || !Price || !Category || !Company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ Name, Price, Category, userId, Company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="addproducts">
      <input
        type="text"
        placeholder="Enter product name"
        value={Name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      {!Name && error &&<span>enter name</span>}
      
      <input
        type="text"
        placeholder="Enter price"
        value={Price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      /> {!Price && error &&<span>enter price</span>}
      <input
        type="text"
        placeholder="category"
        value={Category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      /> {!Category && error &&<span>enter category</span>}
      <input
        type="text"
        placeholder="company name"
        value={Company}
        onChange={(event) => {
          setCompany(event.target.value);
        }}
      /> {!Company && error &&<span>enter company name</span>}
      <button type="button" onClick={addName} class="btn btn-success">
        Add product
      </button>
    </div>
  );
}

export default AddProduct;
