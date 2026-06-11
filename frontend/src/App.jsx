import React from "react";

function BookLogoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 5.5A2.5 2.5 0 0 1 9 3h8.5a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1.48.88L14 18.5l-3.02 1.88A1 1 0 0 1 9.5 19.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.5 6.5h6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.5 9.5h6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" fill="currentColor" />
    </svg>
  );
}

function BookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 4.5h10A2.5 2.5 0 0 1 19 7v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 17V7a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M7.5 8h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4a5 5 0 0 0-5 5v3.2c0 .8-.3 1.6-.8 2.2L5 16.2h14l-1.2-1.8c-.5-.6-.8-1.4-.8-2.2V9a5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparklesIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8l1.6 4.6 4.6 1.6-4.6 1.6-1.6 4.6-1.6-4.6-4.6-1.6 4.6-1.6 1.6-4.6Z"
        fill="currentColor"
      />
      <path d="M18.5 13.8l.7 2 .7-2 2-.7-2-.7-.7-2-.7 2-2 .7 2 .7Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function Input({ label, value, className = "", type = "text" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[13px] font-semibold text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        readOnly
        className="h-9 w-full rounded-lg border border-transparent bg-[#f4f4f6] px-3 text-[13px] text-slate-900 outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] p-2 text-slate-900">
      <div className="mx-auto flex min-h-[calc(100vh-1rem)] overflow-hidden rounded-[18px] bg-transparent">
        {/* Sidebar */}
        <aside className="w-[204px] shrink-0 rounded-[18px] bg-[#4f46e5] px-4 py-4 text-white shadow-[0_16px_50px_rgba(79,70,229,0.25)]">
          <div className="flex items-center gap-2.5 px-1 pt-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15">
              <BookLogoIcon className="h-6 w-6 text-white" />
            </div>
            <div className="text-[30px] font-semibold leading-none tracking-[-0.04em]">Logo</div>
          </div>

          <div className="mt-12 px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
            Main Menu
          </div>

          <nav className="mt-3 space-y-3 px-1 text-[14px]">
            <a
              href="#"
              className="flex items-center gap-3 rounded-[4px] bg-white px-3 py-2 text-[#4f46e5] shadow-sm"
            >
              <GridIcon className="h-4 w-4" />
              <span className="font-medium">Add Book</span>
            </a>

            <a href="#" className="flex items-center gap-3 rounded-[4px] px-3 py-2 text-white/92">
              <BookIcon className="h-4 w-4" />
              <span className="font-medium">Books Details</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-2 flex-1 rounded-[18px] bg-[#fbfbfd] px-4 pb-4 pt-2">
          {/* Top header */}
          <header className="flex h-[54px] items-center justify-between rounded-[10px] bg-white px-5 shadow-[0_8px_30px_rgba(16,24,40,0.06)]">
            <div>
              <div className="text-[29px] font-semibold leading-none tracking-[-0.05em] text-slate-800">
                Welcome!
              </div>
              <div className="mt-1 text-[8px] leading-none text-slate-500">
                Lorem ipsum dolor sit amet consectetur nec faucibus.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-9 w-[228px] items-center gap-2 rounded-[4px] bg-[#f4f4f6] px-3 text-[13px] text-slate-400">
                <SearchIcon className="h-4 w-4 text-slate-500" />
                <span>Search anything here...</span>
              </div>

              <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100">
                <BellIcon className="h-4.5 w-4.5" />
              </button>

              <div className="h-8 w-px bg-slate-200" />

              <button className="flex items-center gap-2 rounded-full px-1 py-0.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f08a24] text-[14px] font-semibold text-white">
                  A
                </div>
                <ChevronDownIcon className="h-4 w-4 text-slate-500" />
              </button>
            </div>
          </header>

          {/* Page Card */}
          <section className="mt-2 rounded-[12px] bg-white px-5 pb-6 pt-4 shadow-[0_10px_30px_rgba(16,24,40,0.04)]">
            <h1 className="text-[29px] font-semibold tracking-[-0.04em] text-slate-700">Add Book</h1>
            <div className="mt-4 h-px w-full bg-slate-200" />

            <div className="mt-6 max-w-[770px] rounded-[10px] border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_28px_rgba(16,24,40,0.04)]">
              <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                <Input label="Book Name" value="Harry Potter Goblet of Fire" />
                <Input label="Author" value="JK Rowling" />

                <Input label="ISBN" value="987564534250" />
                <Input label="Price" value="100" />
                <Input label="Quantity" value="5" />
                <div />
              </div>

              <div className="mt-5">
                <div className="mb-2.5 text-[13px] font-semibold text-slate-700">
                  About the book (short description)
                </div>

                <div className="relative rounded-[8px] bg-[#f4f4f6] px-4 pb-4 pt-8">
                  <textarea
                    readOnly
                    value=""
                    placeholder="Generate with AI..."
                    className="min-h-[86px] w-full resize-none bg-transparent text-[13px] text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-[4px] bg-[#4f46e5] px-3 py-1.5 text-[10px] font-medium text-white shadow-sm">
                    <SparklesIcon className="h-3 w-3" />
                    Generate with AI
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <button className="h-9 w-[126px] rounded-[6px] bg-[#16a34a] text-[13px] font-medium text-white shadow-sm">
                  Submit
                </button>
                <button className="h-9 w-[126px] rounded-[6px] bg-[#3b82f6] text-[13px] font-medium text-white shadow-sm">
                  Chat with AI
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
