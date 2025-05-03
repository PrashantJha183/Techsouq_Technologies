import React, { useState } from "react";
import Header from "../homepage/HomepageHeader";

const TermsAndConditions = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("techsouqtechnologies@gmail.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-gray-50 px-4 py-10 sm:px-10 lg:px-32 text-gray-800"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Welcome to TechSouq Technologies!
          </h1>
          <p className="mb-6">
            By accessing or using our website, services, or products, you agree
            to be bound by the following terms and conditions. Please read them
            carefully.
          </p>

          <div className="space-y-5 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p>
                By using our services, you confirm that you are at least 18
                years old and agree to comply with these Terms and Conditions,
                along with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                2. Services
              </h2>
              <p>TechSouq Technologies provides SaaS platforms such as:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Hotel, Restaurant, and Spa Management Systems</li>
                <li>E-learning portal (TutoSouq)</li>
                <li>Other customized digital solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                3. User Accounts
              </h2>
              <p>
                You may need to create an account to access certain features.
                You are responsible for maintaining the confidentiality of your
                credentials and all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                4. Payments
              </h2>
              <p>
                Some services may require payment. All fees are displayed in INR
                unless stated otherwise. Payments are processed securely via
                third-party gateways.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                5. Prohibited Activities
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Violate any local, national, or international law</li>
                <li>Attempt unauthorized access to our systems</li>
                <li>Distribute harmful software</li>
                <li>
                  Copy, modify, or distribute our content without permission
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                6. Intellectual Property
              </h2>
              <p>
                All content, logos, software, and trademarks are the
                intellectual property of TechSouq Technologies or its licensors.
                Unauthorized use is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                7. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your access if you
                violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                8. Limitation of Liability
              </h2>
              <p>
                We are not liable for any indirect, incidental, or consequential
                damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                9. Changes to Terms
              </h2>
              <p>
                We may update these terms at any time. Continued use of the
                platform after changes means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                10. Contact
              </h2>
              <p>
                If you have any questions, please contact us at:
                <br />
                📧{" "}
                <button
                  onClick={handleEmailClick}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  support@techsouq.in
                </button>
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

export default TermsAndConditions;
