import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Pet Jet",
  description: "Pet Jet's terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> January 2026
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-6">
          By accessing and using Pet Jet's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
        <p className="text-gray-600 mb-6">
          Pet Jet provides strategic consulting, technology development, and operational services to the pet care industry. The specific scope of services will be defined in separate service agreements.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Website</h2>
        <p className="text-gray-600 mb-4">
          You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. Prohibited behavior includes:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Harassment or causing distress to others</li>
          <li>Transmitting obscene or offensive content</li>
          <li>Disrupting the normal flow of dialogue</li>
          <li>Attempting to gain unauthorized access to systems or data</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">
          All content on this website, including text, graphics, logos, and software, is the property of Pet Jet or its content suppliers and is protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          Pet Jet will not be liable for any indirect, special, or consequential damages arising out of or in connection with the use of our website or services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
        <p className="text-gray-600 mb-6">
          For questions about these Terms of Service, please contact us at:{" "}
          <a href="mailto:legal@petjet.com" className="text-pet-purple-600 hover:text-pet-purple-700">
            legal@petjet.com
          </a>
        </p>
      </div>
    </div>
  );
}
