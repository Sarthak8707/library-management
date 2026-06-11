function EyeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
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

const books = [
  {
    id: "10234",
    name: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780061122415",
    price: 399,
    quantity: 25,
  },
  {
    id: "20489",
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    price: 499,
    quantity: 40,
  },
  {
    id: "30956",
    name: "Sapiens",
    author: "Yuval Noah Harari",
    isbn: "9780099590088",
    price: 699,
    quantity: 18,
  },
  {
    id: "45127",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "9780857197689",
    price: 450,
    quantity: 30,
  },
  {
    id: "58903",
    name: "Ikigai",
    author: "Francesc Miralles",
    isbn: "9781786330895",
    price: 350,
    quantity: 22,
  },
  {
    id: "67421",
    name: "Think Like a Monk",
    author: "Jay Shetty",
    isbn: "9780008386597",
    price: 550,
    quantity: 15,
  },
];

export default function BooksList() {
  return (
    <section className="rounded-[12px] bg-white px-5 pb-6 pt-4 shadow-[0_10px_30px_rgba(16,24,40,0.04)]">
      <h1 className="text-[29px] font-semibold tracking-[-0.04em] text-slate-700">
        Books
      </h1>

      <div className="mt-4 h-px w-full bg-slate-200" />

      <div className="mt-6 overflow-hidden rounded-[8px] border border-slate-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#4f46e5] text-white">
              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                Book ID
              </th>

              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                Book Name
              </th>

              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                Author
              </th>

              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                ISBN
              </th>

              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                Price (₹)
              </th>

              <th className="border-r border-white/25 px-6 py-3 text-center text-[13px] font-medium">
                Quantity
              </th>

              <th className="px-6 py-3 text-center text-[13px] font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr
                key={book.id}
                className="border-t border-slate-200 bg-white"
              >
                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.id}
                </td>

                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.name}
                </td>

                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.author}
                </td>

                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.isbn}
                </td>

                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.price}
                </td>

                <td className="border-r border-slate-200 px-6 py-5 text-center text-[14px] text-slate-700">
                  {book.quantity}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button className="text-[#4f46e5] transition hover:scale-110">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}