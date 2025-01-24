"use client";
import React, { useState } from "react";

function MainComponent() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [favorites, setFavorites] = useState([]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToFavorites = () => {
    if (!favorites.includes(selectedColor)) {
      setFavorites([...favorites, selectedColor]);
    }
  };

  const removeFavorite = (color) => {
    setFavorites(favorites.filter((c) => c !== color));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-palette text-2xl text-[#4a90e2]"></i>
            <span className="font-roboto text-xl font-bold">ColorPick Pro</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#4a90e2] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#4a90e2] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#4a90e2] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-3xl font-roboto font-bold mb-8 text-center bg-gradient-to-r from-[#4a90e2] to-[#63b3ed] text-transparent bg-clip-text">
            Color Picker
          </h1>

          <div className="space-y-6">
            {/* Color Picker */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-[120px] h-[60px] cursor-pointer rounded-lg shadow-sm"
              />
              <div className="flex-1 relative w-full">
                <input
                  type="text"
                  value={selectedColor}
                  readOnly
                  className="w-full p-3 border rounded-lg font-mono text-lg shadow-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#4a90e2] transition-colors"
                >
                  <i
                    className={`fas ${copied ? "fa-check" : "fa-copy"} text-xl`}
                  ></i>
                </button>
              </div>
            </div>

            {/* Preview Section */}
            <div
              className="h-[150px] rounded-xl shadow-inner transition-all duration-300"
              style={{ backgroundColor: selectedColor }}
            ></div>

            {/* Add to Favorites */}
            <button
              onClick={addToFavorites}
              className="w-full bg-[#4a90e2] text-white py-3 px-6 rounded-lg hover:bg-[#357abd] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <i className="fas fa-heart mr-2"></i>
              Add to Favorites
            </button>

            {/* Favorites List */}
            {favorites.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-roboto font-semibold mb-4">
                  <i className="fas fa-star text-yellow-400 mr-2"></i>
                  Favorites
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {favorites.map((color, index) => (
                    <div key={index} className="relative group">
                      <div
                        className="w-full h-[60px] rounded-lg cursor-pointer shadow-sm transform hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                      <button
                        onClick={() => removeFavorite(color)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 shadow-md"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d3748] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-roboto">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                agniwork99@gmail.com
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +91 8967641707
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Kolkata, India
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-roboto">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/agni4/"
                className="hover:text-[#4a90e2] transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/AgniswarBanerjee04"
                className="hover:text-[#4a90e2] transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-roboto">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-[#4a90e2] px-4 rounded-r-lg hover:bg-[#357abd] transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2025 ColorPick Pro. All rights reserved.
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .max-w-xl {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
