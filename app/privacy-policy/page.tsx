import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | AlgCloud",
  description: "AlgCloud Privacy Policy",
}

export default function PrivacyPolicyPage() {
  return (
      <>
        <div className="bg-gray-100 border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-500">Last updated: May 15, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                AlgCloud (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our cloud computing services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you
                use our services, and information from third-party sources.
              </p>

              <h3>2.1 Information You Provide</h3>
              <p>This includes:</p>
              <ul>
                <li>Account information (name, email address, phone number, etc.)</li>
                <li>Billing information (payment method details, billing address, etc.)</li>
                <li>User content (data files, code, applications) that you upload to our services</li>
                <li>Communications with us (support requests, feedback, etc.)</li>
              </ul>

              <h3>2.2 Information We Collect Automatically</h3>
              <p>This includes:</p>
              <ul>
                <li>Usage data (features used, resources consumed, performance metrics, etc.)</li>
                <li>Log data (IP address, browser type, operating system, etc.)</li>
                <li>Device information (hardware model, operating system version, etc.)</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>

              <h2>4. Data Storage and Security</h2>
              <p>
                Your data is stored in our data centers located in Algeria. We implement appropriate technical and
                organizational measures to protect your information against unauthorized access, alteration, disclosure,
                or destruction.
              </p>

              <h2>5. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>
                  Business partners with whom we offer co-branded services or engage in joint marketing activities
                </li>
                <li>
                  Law enforcement or other third parties in response to legal process or when we believe disclosure is
                  necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or
                  respond to a government request
                </li>
              </ul>

              <h2>6. Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Objecting to our processing of your personal information</li>
                <li>Requesting restriction of processing of your personal information</li>
                <li>Data portability</li>
                <li>Withdrawing consent at any time, where we rely on consent to process your personal information</li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and processed in, countries other than the country in which you
                reside. These countries may have data protection laws that are different from the laws of your country.
              </p>

              <h2>9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under the age of 18. We do not knowingly collect personal
                information from children under 18. If we learn that we have collected personal information of a child
                under 18, we will take steps to delete such information as soon as possible.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@algcloud.dz.</p>
            </div>
          </div>
        </div>
      </>

  )
}
