import React, { useState } from "react";

const MultipleInputs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    acceptedTerms: false,
    favoriteFruit: "",
    comments: "",
  });

  // General change handler for all input fields
  const handleChange = (e) => {
    // Get the type of input field
    const { name, value, type, checked } = e.target;

    // Update the form data based on the input field
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Make API Call
    console.log(formData);

    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Forms with Multiple Inputs</h2>

      {/* Name Input Field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <br />

      {/* Email Input Field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <br />

      {/* Password Input Field */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <br />

      {/* Age Input Field */}
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <br />

      {/* Gender Input Field */}
      <div>
        <span>Gender: </span>

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          required
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>

        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleChange}
        />
        <label htmlFor="other">Other</label>
      </div>

      <br />

      {/* Accepted Terms Input Field */}
      <div>
        <input
          type="checkbox"
          id="checkholder"
          name="acceptedTerms"
          checked={formData.acceptedTerms}
          onChange={handleChange}
          required
        />
        <label htmlFor="checkholder">
          I agree to the terms and conditions.
        </label>
      </div>

      <br />

      {/* Favorite Fruit Input Field */}
      <div>
        <label htmlFor="favoriteFruit">Favorite Fruit:</label>

        <select
          id="favoriteFruit"
          name="favoriteFruit"
          value={formData.favoriteFruit}
          onChange={handleChange}
          required
        >
          <option value="">----Choose a fruit----</option>
          <option value="mango">Mango</option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="grapes">Grapes</option>
        </select>
      </div>

      <br />

      {/* Comments Input Field */}
      <div>
        <label htmlFor="comments">Comments:</label>

        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>

      {/* Required Fields Notice */}
      <p>All fields are required.</p>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleInputs;