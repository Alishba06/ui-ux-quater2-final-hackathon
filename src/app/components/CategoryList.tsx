"use client";

import React, { useState, useEffect } from "react";

interface Category {
  _id: string;
  name: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://hackathon-apis.vercel.app/api/products");
        const data = await res.json();
        setCategories(data.products); // Assuming API returns products array
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false); // Stop loading once data is fetched
      }
    };

    fetchCategories();
  }, []);

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search categories..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="absolute top-0 left-0 border p-2 rounded mb-4"
      />

      {/* Display Loading State */}
      {isLoading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="mt-10">
          {/* Display Filtered Categories */}
          {filteredCategories.map((category) => (
            <div key={category._id} className="p-2 border-b">
              <h2>{category.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;









// "use client"

// import React, { useState } from "react";

// interface Category {
//   _id: string;
//   name: string;
// }

// interface CategoryListProps {
//   categories: Category[];
// }

// const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Filter categories based on search query
//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="relative"> {/* Add relative positioning for parent div */}
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search categories..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="absolute top-0 left-0 border p-2 rounded mb-4" 
//       />

//       {/* Display Filtered Categories */}
//       <div>
//         {filteredCategories.length > 0 ? (
//           filteredCategories.map((category) => (
//             <div key={category._id}>
//               <h2>{category.name}</h2>
//             </div>
//           ))
//         ) : (
//           <p>No categories found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;
