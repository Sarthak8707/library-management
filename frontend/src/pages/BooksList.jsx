import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="action-icon"
    >
      <path
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  );
}

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchTerm } = useOutletContext();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/books"
        );

        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const search = searchTerm.toLowerCase();

    return (
      book.name?.toLowerCase().includes(search) ||
      book.author?.toLowerCase().includes(search) ||
      String(book.ISBN)
        .toLowerCase()
        .includes(search)
    );
  });

  return (
    <section className="books-page">
      <h1 className="books-title">Books</h1>

      <div className="books-divider"></div>

      <div className="books-table-wrapper">
        <table className="books-table">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="7"
                  className="table-message"
                >
                  Loading books...
                </td>
              </tr>
            ) : filteredBooks.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="table-message"
                >
                  No books found
                </td>
              </tr>
            ) : (
              filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td>{book._id}</td>

                  <td>{book.name}</td>

                  <td>{book.author}</td>

                  <td>{book.ISBN}</td>

                  <td>{book.price}</td>

                  <td>{book.quantity}</td>

                  <td>
                    <button className="view-btn">
                      <EyeIcon />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}