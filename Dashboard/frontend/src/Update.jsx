import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [Category, setCategory] = useState();
  const [Company, setCompany] = useState();
  const params = useParams();
  useEffect(() => {
    getProductDetails();
  }, []);
  const navigate = useNavigate();
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.Name);
    setPrice(result.Price);
    setCategory(result.Category);
    setCompany(result.Company);
  };
  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ Name, Price, Category, Company }),
      headers: { "Content-Type": "application/json" }
    });
    result = await result.json();
    console.log(result);
    navigate("/");
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
      <input
        type="text"
        placeholder="Enter price"
        value={Price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="category"
        value={Category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="company name"
        value={Company}
        onChange={(event) => {
          setCompany(event.target.value);
        }}
      />{" "}
      <button type="button" onClick={updateProduct}>
        Update product
      </button>
    </div>
  );
}

export default UpdateProduct;
