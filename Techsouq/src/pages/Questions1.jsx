import React from "react";

function Questions1() {
  return (
    <div className="container mx-auto px-4 py-16">
    <h2 className="font-semibold text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] mb-8">
      What We Says
    </h2>
      <h2 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-base font-bold mb-4 bg-gradient-to-r flex text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text">
            What industries do you specialize in?
          </h3>
          <p className="text-gray-700 text-baseline">
            We work with a diverse range of industries, including e-commerce,
            technology, healthcare, education, and startups. Our flexible
            approach allows us to tailor solutions for businesses.
          </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.46913 14.404L15.5632 4.76231" stroke="url(#paint0_linear_55_671)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.78125 4.44434H16.1146V12.7777" stroke="url(#paint1_linear_55_671)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_55_671" x1="8.76794" y1="7.75292" x2="13.9815" y2="14.5991" gradientUnits="userSpaceOnUse">
<stop stop-color="#9384FE"/>
<stop offset="1" stop-color="#312EFE"/>
</linearGradient>
<linearGradient id="paint1_linear_55_671" x1="10.4369" y1="7.10001" x2="14.9699" y2="12.7777" gradientUnits="userSpaceOnUse">
<stop stop-color="#9384FE"/>
<stop offset="1" stop-color="#312EFE"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-16 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.9978 36.3006C71.9978 37.5199 71.9978 38.7393 71.9978 39.9587C71.9603 40.1088 71.8854 40.2589 71.8666 40.4277C71.5293 44.0108 70.4799 47.3876 68.5122 50.3891C67.6876 51.6461 67.6126 52.6591 68.0999 54.0473C69.3367 57.5741 70.4049 61.176 71.548 64.7404C71.9791 66.1098 71.3794 67.3667 70.1051 67.5919C69.5616 67.6857 68.8869 67.5543 68.381 67.2917C64.5392 65.397 60.735 63.4459 56.9307 61.4762C56.3873 61.1948 55.9375 61.176 55.3566 61.4011C50.4654 63.3521 45.3868 63.9149 40.1958 63.127C34.049 62.189 28.7081 59.5814 24.2854 55.1541C24.0793 54.9478 23.7795 54.7977 23.5171 54.7602C21.1933 54.4413 18.9258 53.8785 16.7519 52.9968C16.096 52.7341 15.6088 52.7904 14.9903 53.0905C11.2236 55.0416 7.4568 56.9551 3.67129 58.8498C3.16531 59.0937 2.49066 59.2438 1.9472 59.15C0.635388 58.9061 0.0731835 57.6492 0.522947 56.2422C1.77854 52.2464 3.05286 48.2505 4.34593 44.2735C4.49585 43.8045 4.45837 43.4668 4.17727 43.0541C2.54688 40.6716 1.36625 38.0827 0.729088 35.2688C0.447986 34.0494 0.279325 32.7925 0.0544434 31.5543C0.0544434 30.3725 0.0544434 29.2094 0.0544434 28.0275C0.0919236 27.8211 0.166884 27.6335 0.185624 27.4272C0.447986 24.163 1.38499 21.1614 2.92168 18.3287C8.52498 8.06711 20.5374 2.90817 31.9314 4.70911C38.0594 5.66586 43.3629 8.29222 47.7668 12.682C47.9542 12.8696 48.2728 13.0197 48.5539 13.0572C51.5711 13.4699 54.457 14.2766 57.1931 15.6273C64.2394 19.1166 69.1118 24.4819 71.2295 32.1734C71.5855 33.5241 71.7355 34.9123 71.9978 36.3006ZM66.001 61.3636C65.9073 61.0072 65.8511 60.7821 65.7761 60.5569C64.9703 57.9869 64.1832 55.4168 63.3211 52.8654C62.9276 51.7399 63.0775 50.8394 63.8084 49.8639C69.1681 42.6976 69.0744 33.1864 63.621 26.0952C55.2441 15.1958 38.0969 13.8639 28.0147 23.3563C23.9669 27.1646 21.5681 31.817 21.4182 37.4074C21.2121 44.6487 24.3042 50.4079 30.0949 54.5351C37.7596 59.9941 46.0802 60.6132 54.7382 57.0489C55.8063 56.5986 56.7059 56.5799 57.7366 57.1239C60.4352 58.5496 63.1525 59.9003 66.001 61.3636ZM41.3952 12.8696C41.264 12.757 41.189 12.7008 41.1141 12.6445C40.9079 12.4944 40.6831 12.3631 40.4582 12.2318C37.1037 10.1682 33.4681 8.98633 29.5514 8.66742C22.9361 8.1609 16.9393 9.86804 11.7858 14.1265C3.16531 21.2552 1.77854 33.0364 8.35632 41.6659C8.93727 42.4162 9.06845 43.2042 8.76861 44.1046C7.88782 46.8436 7.02577 49.5825 6.14499 52.3402C6.08877 52.4902 6.08877 52.6591 6.03255 52.9217C8.86231 51.4772 11.6171 50.1265 14.3157 48.682C15.3277 48.138 16.2272 48.138 17.2391 48.6445C18.1199 49.076 19.0944 49.3761 20.0314 49.7513C20.0502 49.62 20.0689 49.5825 20.0689 49.5825C19.9752 49.3761 19.8628 49.1698 19.7691 48.9446C16.6395 42.6226 16.2084 36.0942 18.8133 29.5658C22.1491 21.2365 28.502 16.2276 37.0287 13.8264C38.4342 13.3949 39.896 13.1885 41.3952 12.8696Z"
                fill="white"
              />
              <path
                d="M36.0005 36.0195C37.1437 36.0195 38.0994 36.9575 38.1181 38.1019C38.1369 39.265 37.1624 40.2592 35.9818 40.2405C34.8386 40.2217 33.9016 39.265 33.9016 38.1206C33.9016 36.9763 34.8574 36.0195 36.0005 36.0195Z"
                fill="white"
              />
              <path
                d="M54.9825 38.1206C54.9825 39.265 54.0267 40.2217 52.9023 40.2405C51.7404 40.2592 50.7659 39.265 50.7847 38.1019C50.8034 36.9575 51.7592 36.0195 52.9023 36.0195C54.0267 36.0195 54.9825 36.9763 54.9825 38.1206Z"
                fill="white"
              />
              <path
                d="M44.4137 36.0195C45.5568 36.0195 46.5125 36.9575 46.5313 38.1019C46.55 39.265 45.5755 40.2592 44.4137 40.2405C43.2705 40.2217 42.3335 39.265 42.3335 38.1394C42.3335 36.9763 43.2892 36.0195 44.4137 36.0195Z"
                fill="white"
              />
            </svg>
            <div className="flex justify-center">
              <h3 className="text-white font-bold ml-4 text-2xl flex justify-center">
                Do you provide maintenance & updates after project delivery?
              </h3>
            </div>
          </div>
          <p className="text-white mb-4 text-2xl">
            Learn How Our Expertise Can Drive Your Business Forward!
          </p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            Book your Free Call Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            What is your project timeline?
          </h3>
          <p className="text-gray-700">
            Our project timelines vary based on the scope and complexity of the
            project. Typically, we aim to deliver within 4-6 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions1;

