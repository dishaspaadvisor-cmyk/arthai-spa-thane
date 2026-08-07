import Image from "next/image";

export default function GoogleReviews({
  title,
  rating,
  totalReviews,
  reviewLink,
  reviews,
}) {
  return (
    <section className="py-16 bg-[#F8F5EA]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">

          <div className="text-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B]">
              {title}
            </h2>

            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-green-600 text-xl">★★★★★</span>

              <span className="text-gray-700 font-medium">
                {rating} rating from {totalReviews} Google Reviews
              </span>
            </div>
          </div>

        </div>

        {/* Review Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border  p-6 shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={55}
                    height={55}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-black">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review.date}
                    </p>
                  </div>
                </div>

                <Image
                  src="/logo/channels4_profile.jpg"
                  alt="Google Reviews"
                  width={40}
                  height={40}
                />
              </div>

              <div className="mt-4 text-green-600 text-lg">
                {"★".repeat(review.rating)}
              </div>

              <p className="mt-4 text-gray-600 leading-7 line-clamp-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}