import { useState } from "react";
import axios from "axios";

function SparklesIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
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
  className = "",
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[13px] font-semibold text-slate-700">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-9 w-full rounded-lg border border-transparent bg-[#f4f4f6] px-3 text-[13px] outline-none"
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
    } catch (error) {
      console.error(error);

      alert("Failed to add book");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-[12px] bg-white px-5 pb-6 pt-4 shadow-[0_10px_30px_rgba(16,24,40,0.04)]">
      <h1 className="text-[29px] font-semibold tracking-[-0.04em] text-slate-700">
        Add Book
      </h1>

      <div className="mt-4 h-px w-full bg-slate-200" />

      <div className="mt-6 max-w-[770px] rounded-[10px] border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_28px_rgba(16,24,40,0.04)]">
        <div className="grid grid-cols-2 gap-x-7 gap-y-5">
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

          <div />
        </div>

        <div className="mt-5">
          <div className="mb-2.5 text-[13px] font-semibold text-slate-700">
            About the book (short description)
          </div>

          <div className="relative rounded-[8px] bg-[#f4f4f6] px-4 pb-4 pt-8">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Generate with AI..."
              className="min-h-[86px] w-full resize-none bg-transparent text-[13px] outline-none"
            />

            <button
              type="button"
              className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-[4px] bg-[#4f46e5] px-3 py-1.5 text-[10px] font-medium text-white"
            >
              <SparklesIcon className="h-3 w-3" />
              Generate with AI
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="h-9 w-[126px] rounded-[6px] bg-[#16a34a] text-[13px] font-medium text-white"
          >
            {loading ? "Saving..." : "Submit"}
          </button>

          <button
            type="button"
            className="h-9 w-[126px] rounded-[6px] bg-[#3b82f6] text-[13px] font-medium text-white"
          >
            Chat with AI
          </button>
        </div>
      </div>
    </section>
  );
}