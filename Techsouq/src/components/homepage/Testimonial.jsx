import React from "react";
import icon1 from "/src/assets/Images/Ellipse 7.png";
import icon2 from "/src/assets/Images/Ellipse 15.png";

const Testimonial = () => {
  return (
    <div
      className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center">
          <h4
            className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
            style={{ position: "relative" }}
          >
            Client Reviews
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #9384Ef, #312EFE)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            ></span>
          </h4>
        </div>
        <h2 className="text-6xl font-semibold text-gray-900 sm:text-6xl mt-2">
          Our Professional Testimonial
        </h2>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-white">
              <div className="mt-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.89188 47.8894C8.23613 48.4258 8.83125 48.75 9.46838 48.75H22.5C25.6018 48.75 28.125 46.2268 28.125 43.125V30C28.125 26.8982 25.6018 24.375 22.5 24.375H18.7774C20.5187 19.3322 22.0056 16.9172 26.9531 14.8554C27.7789 14.5112 28.2459 13.6324 28.0701 12.7552C27.8944 11.8798 27.1252 11.25 26.2316 11.25H26.2279C15.9062 11.2684 9.97725 15.4065 5.77312 25.5212C4.43119 28.6982 3.75 32.0983 3.75 35.625C3.75 41.0486 5.39062 44.0021 7.89188 47.8894ZM37.5934 48.75H50.625C53.7268 48.75 56.25 46.2268 56.25 43.125V30C56.25 26.8982 53.7268 24.375 50.625 24.375H46.9024C48.6437 19.3322 50.1306 16.9172 55.0781 14.8554C55.9039 14.5112 56.3709 13.6324 56.1951 12.7552C56.0194 11.8798 55.2503 11.25 54.3566 11.25H54.3529C44.0312 11.2684 38.1023 15.4065 33.8981 25.5212C32.5562 28.6982 31.875 32.0983 31.875 35.625C31.875 41.0486 33.5156 44.0021 36.0169 47.8894C36.3611 48.4258 36.9562 48.75 37.5934 48.75Z"
                    fill="url(#paint0_linear_55_398)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_398"
                      x1="39.5192"
                      y1="36.7995"
                      x2="21.5164"
                      y2="5.23082"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>

                <blockquote className="text-gray-500">
                  <p className="text-baseline ">
                    "Working with [Your Agency Name] was an absolute
                    game-changer for our business. Their team seamlessly
                    combined creativity and strategy to deliver a website that
                    not only looks stunning but also performs exceptionally
                    well. The user experience they designed has significantly
                    improved our customer engagement, and their attention to
                    detail is unmatched. We couldn't be happier with the
                    results!"
                  </p>
                  <hr className="h-px my-8 bg-gray-400  00 border-0 dark:bg-gray-700"></hr>
                </blockquote>
                <div className="flex items-center py-1">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={icon2}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      James Karl
                    </h3>
                    <p className="text-sm font-medium leading-5 text-gray-500">
                      Ceo Spotify corporate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-white">
              <div className="mt-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.89188 47.8894C8.23613 48.4258 8.83125 48.75 9.46838 48.75H22.5C25.6018 48.75 28.125 46.2268 28.125 43.125V30C28.125 26.8982 25.6018 24.375 22.5 24.375H18.7774C20.5187 19.3322 22.0056 16.9172 26.9531 14.8554C27.7789 14.5112 28.2459 13.6324 28.0701 12.7552C27.8944 11.8798 27.1252 11.25 26.2316 11.25H26.2279C15.9062 11.2684 9.97725 15.4065 5.77312 25.5212C4.43119 28.6982 3.75 32.0983 3.75 35.625C3.75 41.0486 5.39062 44.0021 7.89188 47.8894ZM37.5934 48.75H50.625C53.7268 48.75 56.25 46.2268 56.25 43.125V30C56.25 26.8982 53.7268 24.375 50.625 24.375H46.9024C48.6437 19.3322 50.1306 16.9172 55.0781 14.8554C55.9039 14.5112 56.3709 13.6324 56.1951 12.7552C56.0194 11.8798 55.2503 11.25 54.3566 11.25H54.3529C44.0312 11.2684 38.1023 15.4065 33.8981 25.5212C32.5562 28.6982 31.875 32.0983 31.875 35.625C31.875 41.0486 33.5156 44.0021 36.0169 47.8894C36.3611 48.4258 36.9562 48.75 37.5934 48.75Z"
                    fill="url(#paint0_linear_55_398)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_398"
                      x1="39.5192"
                      y1="36.7995"
                      x2="21.5164"
                      y2="5.23082"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
                <blockquote className="text-gray-500">
                  <p className="text-baseline">
                    "Working with [Your Agency Name] was an absolute
                    game-changer for our business. Their team seamlessly
                    combined creativity and strategy to deliver a website that
                    not only looks stunning but also performs exceptionally
                    well. The user experience they designed has significantly
                    improved our customer engagement, and their attention to
                    detail is unmatched. We couldn't be happier with the
                    results!"
                  </p>
                  <hr className="h-px my-8 bg-gray-400  00 border-0 dark:bg-gray-700"></hr>
                </blockquote>
                <div className="flex items-center py-1">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={icon1}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Adam Smith
                    </h3>
                    <p className="text-sm font-medium leading-5 text-gray-500">
                      Founder of Tech Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
