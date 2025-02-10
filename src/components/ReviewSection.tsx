"use client";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import reviews from "@/utils/mockReviews";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";

export default function ReviewSection() {
  const { languageSpreader } = useLanguageContext();

  return (
    <div className="w-[95%] mx-auto mt-8 p-4 bg-[var(--card-bg)] rounded-lg shadow-md">
      <h2 className="text-xl lg:text-2xl font-bold text-[var(--text)] mb-4">
        {languageSpreader.reviewSection.customerReviews}
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">
          {languageSpreader.reviewSection.noReviews}
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--background)]">
                  {review.user}
                </h3>
                <span className="text-gray-500 text-sm">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[var(--primary)] my-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating
                        ? "text-[var(--primary)]"
                        : "text-gray-400"
                    }
                  />
                ))}
              </div>
              <p className="text-[var(--background)] text-sm lg:text-base">
                {review.comment}
              </p>
              {review.verifiedPurchase && (
                <div className="flex items-center text-green-600 text-sm font-semibold mt-2">
                  <FaCheckCircle className="mr-1" />{" "}
                  {languageSpreader.reviewSection.verifiedPurchase}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
