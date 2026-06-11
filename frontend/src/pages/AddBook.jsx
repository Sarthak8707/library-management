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

function Input({ label, value, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[13px] font-semibold text-slate-700">
        {label}
      </span>

      <input
        value={value}
        readOnly
        className="h-9 w-full rounded-lg border border-transparent bg-[#f4f4f6] px-3 text-[13px]"
      />
    </label>
  );
}

export default function AddBook() {
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
            value="Harry Potter Goblet of Fire"
          />

          <Input
            label="Author"
            value="JK Rowling"
          />

          <Input
            label="ISBN"
            value="987564534250"
          />

          <Input
            label="Price"
            value="100"
          />

          <Input
            label="Quantity"
            value="5"
          />

          <div />
        </div>

        <div className="mt-5">
          <div className="mb-2.5 text-[13px] font-semibold text-slate-700">
            About the book (short description)
          </div>

          <div className="relative rounded-[8px] bg-[#f4f4f6] px-4 pb-4 pt-8">
            <textarea
              placeholder="Generate with AI..."
              className="min-h-[86px] w-full resize-none bg-transparent text-[13px] outline-none"
            />

            <button className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-[4px] bg-[#4f46e5] px-3 py-1.5 text-[10px] font-medium text-white">
              <SparklesIcon className="h-3 w-3" />
              Generate with AI
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <button className="h-9 w-[126px] rounded-[6px] bg-[#16a34a] text-[13px] font-medium text-white">
            Submit
          </button>

          <button className="h-9 w-[126px] rounded-[6px] bg-[#3b82f6] text-[13px] font-medium text-white">
            Chat with AI
          </button>
        </div>
      </div>
    </section>
  );
}