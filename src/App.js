import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10));
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
    setLoading(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1a1a1a' : '#dbafe0';
  const textColor = isDark ? '#f5f5f5' : '#000';

  return (
    <div className="app-container" style={{ backgroundColor, color: textColor }}>

      {/* Theme toggle button */}
      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          className="theme-button"
          style={{ color: isDark ? '#ffdd57' : '#333' }}
          title="Toggle Theme"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>

      {/* Header */}
      <div className="header">
        <div className="header-title">
          <img src="/images/Books.jpg" alt="Book" style={{ width: "50px", height: "40px" }} />
          <span>Book Finder</span>
        </div>
        <div className="header-subtitle">
          Discover your next read with ease
        </div>
      </div>

      {/* Search Input */}
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{
              backgroundColor: isDark ? "#333" : "#fff",
              color: isDark ? "#fff" : "#000"
            }}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="loading-text" style={{ color: textColor }}>
          Loading books...
        </div>
      )}

      {/* Book Cards */}
      {!loading && books.length > 0 && (
        <div className="book-grid">
          {books.map((book, index) => (
            <div
              key={index}
              className="book-card"
              style={{ backgroundColor: isDark ? "#2a2a2a" : "#fff", color: textColor }}
            >
              <img
                src={book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : '/images/Books.jpg'}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p style={{ fontSize: "14px", color: isDark ? "#ccc" : "#555" }}>
                {book.author_name ? book.author_name[0] : "Unknown Author"}
              </p>
              <p style={{ fontSize: "12px", color: isDark ? "#aaa" : "#999" }}>
                {book.first_publish_year ? `First Published: ${book.first_publish_year}` : ""}
              </p>
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "#007bff", textDecoration: "none" }}
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
