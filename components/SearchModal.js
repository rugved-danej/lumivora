'use client';
import { useState, useEffect } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (query) => {
    if (query.trim()) {
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <i className="lni lni-search-alt"></i>
            <input
              type="text"
              placeholder="Search our website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              autoFocus
            />
          </div>
          <button className="close-search" onClick={onClose}>
            <i className="lni lni-close"></i>
          </button>
        </div>

        <div className="search-modal-content">
          {searchQuery.trim() === '' ? (
            <div className="recent-searches">
              {recentSearches.length > 0 ? (
                <>
                  <div className="recent-header">
                    <h3>Recent Searches</h3>
                    <button onClick={clearRecentSearches} className="clear-btn">
                      Clear All
                    </button>
                  </div>
                  <ul className="recent-list">
                    {recentSearches.map((search, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => setSearchQuery(search)}
                          className="recent-item"
                        >
                          <i className="lni lni-reload"></i>
                          {search}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="empty-state">
                  <i className="lni lni-search-alt"></i>
                  <p>Start typing to search our website</p>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-state">
              <i className="lni lni-emoji-sad"></i>
              <p>No results found for "{searchQuery}"</p>
              <p>Try searching for general terms like "beauty tools" or "home gadgets"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}