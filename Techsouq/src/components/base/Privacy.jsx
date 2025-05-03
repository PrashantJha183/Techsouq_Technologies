import React, { useState } from "react";
import Header from "../homepage/HomepageHeader";

const Privacy = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("privacy@techsouq.in");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
        <div
          className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-[#9384FE] to-[#312EFE] bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <p className="text-gray-700 mb-4">
            TechSouq Technologies respects your privacy and is committed to
            protecting your personal information.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Personal details (name, email, contact number)</li>
                <li>Login credentials</li>
                <li>Payment information (processed via secure gateways)</li>
                <li>Usage data (browser, device, IP address)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. How We Use Your Data
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide and improve our services</li>
                <li>Process transactions</li>
                <li>Personalize user experience</li>
                <li>Communicate updates and offers</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
              <p className="text-gray-700">
                We do not sell your data. We may share it with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Trusted service providers (hosting, payment)</li>
                <li>Legal authorities when required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
              <p className="text-gray-700">
                We use cookies to enhance functionality and analyze traffic. You
                can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
              <p className="text-gray-700">
                We implement industry-standard measures to safeguard your data,
                including encryption, access control, and secure servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Access your data</li>
                <li>Request corrections or deletion</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                7. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our services may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                8. Updates to Policy
              </h2>
              <p className="text-gray-700">
                We may update this policy as needed. You are advised to review
                it periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
              <p className="text-gray-700">
                If you have questions or requests, contact: 📧{" "}
                <span
                  onClick={handleEmailClick}
                  className="cursor-pointer text-blue-600 underline hover:text-blue-800"
                >
                  privacy@techsouq.in
                </span>
                {copySuccess && (
                  <p className="text-green-600 text-sm mt-1">
                    Email ID copied!
                  </p>
                )}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
