import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pet Jet",
  description: "Pet Jet's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> January 2026
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          Pet Jet collects information that you provide directly to us when you use our services, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Contact information (name, email address, phone number)</li>
          <li>Company information (company name, title, industry)</li>
          <li>Communication preferences</li>
          <li>Information submitted through forms on our website</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send you relevant information about our services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
        <p className="text-gray-600 mb-6">
          We do not sell or rent your personal information to third parties. We may share your information with service providers who help us operate our business, subject to confidentiality agreements.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:privacy@petjet.com" className="text-pet-purple-600 hover:text-pet-purple-700">
            privacy@petjet.com
          </a>
        </p>
      </div>
    </div>
  );
}
