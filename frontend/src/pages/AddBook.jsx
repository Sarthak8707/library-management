import { useState } from "react";
import axios from "axios";
import "../App.css";

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="sparkles-icon">
      <path
        d="M12 3.8l1.6 4.6 4.6 1.6-4.6 1.6-1.6 4.6-1.6-4.6-4.6-1.6 4.6-1.6 1.6-4.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Input({
  label,
  value,
  onChange,
  name,
  type = "text",
}) {
  return (
    <label className="book-input-wrapper">
      <span className="book-label">{label}</span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="book-input"
      />
    </label>
  );
}

export default function AddBook() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    ISBN: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit() {
    try {
      setLoading(true);

      await axios.post("http://localhost:3000/books", {
        name: formData.name,
        author: formData.author,
        ISBN: formData.ISBN,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        description: formData.description,
      });

      alert("Book added successfully");

      setFormData({
        name: "",
        author: "",
        ISBN: "",
        price: "",
        quantity: "",
        description: "",
      });
    } catch {
      alert("Failed to add book");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="add-book-page">
      <h1 className="page-title">Add Book</h1>

      <div className="page-divider"></div>

      <div className="book-form-card">
        <div className="book-grid">
          <Input
            label="Book Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />

          <Input
            label="ISBN"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
          />

          <Input
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />

          <Input
            label="Quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
          />

          <div></div>
        </div>

        <div className="description-section">
          <div className="book-label">
            About the book (short description)
          </div>

          <div className="description-box">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Generate with AI..."
              className="description-textarea"
            />

            
            <button
              type="button"
              className="ai-button"
            >
              <SparklesIcon />
              Generate with AI
            </button>
          </div>
        </div>

        <div className="book-buttons">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="submit-button"
          >
            {loading ? "Saving..." : "Submit"}
          </button>

          <button
            type="button"
            className="chat-button"
          >
            Chat with AI
          </button>
        </div>
      </div>
    </section>
  );
}