"use client";
import React, { useState } from "react";
import { toast } from "sonner";

// Star Rating Component
const StarRating = ({ rating, onChange }: { rating: number, onChange: (rating: number) => void }) => {
  const handleClick = (value: number) => {
    onChange(value);
  };

  return (
    <div className="flex items-center justify-between ml-10">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// Review and Rating Component
const ReviewsAndRatings = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [reviews, setReviews] = useState<{ rating: number, review: string }[]>([]);

  const handleSubmit = () => {
    if (rating === 0 || review === "") {
      toast.error("Please provide both rating and review.");
      return;
    }

    const newReview = { rating, review };
    setReviews((prevReviews) => [...prevReviews, newReview]);

    setRating(0);
    setReview("");
    toast.success("Review submitted successfully!");
  };

  return (
    <div className="">
      {/* Rating */}
      <div className="mb-2 ml-10 ">
        <StarRating rating={rating} onChange={setRating} />
      </div>

      {/* Submit Button */}
      {/* <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500"
      >
        Submit Review
      </button> */}

      {/* Display Reviews */}
      <div className="mt-2">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <div className="flex items-center space-x-2">
                <StarRating rating={review.rating} onChange={() => {}} />
                <span className="text-sm text-gray-500">Rated {review.rating} stars</span>
              </div>
              <p className=" text-gray-700">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 ">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
