import React, { useState } from "react";

function NewHat({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    image_url: "",
    category: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9090/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newItem) => {
        newItem = { ...newItem, reviews: [] };
        onAddProduct(newItem);
        setFormData({});
      });
  }
  return (
    <details style={{ marginTop: "20px" }}>
      <summary>Add New Hat</summary>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Image:</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </details>
  );
}

export default NewHat;
