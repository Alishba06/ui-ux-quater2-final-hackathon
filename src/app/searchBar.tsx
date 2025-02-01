"use client"

import React, { useState } from "react";

interface Category {
  _id: string;
  name: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="justify-start items-center mt-3 gap-l-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search categories..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full z-50 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display Filtered Categories */}
      <div>
        {filteredCategories.map((category) => (
          <div key={category._id}>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
