import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | AlgCloud",
  description: "AlgCloud Terms of Service",
}

export default function TermsOfServicePage() {
  return (
      <>
        <div className="bg-gray-100 border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">Terms of Service</span>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Terms of Service</h1>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-500">Last updated: May 15, 2025</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using AlgCloud services, you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                AlgCloud provides cloud computing services, including but not limited to compute, storage, database,
                networking, and other related services. These services are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                To access certain features of AlgCloud, you must register for an account. You are responsible for
                maintaining the confidentiality of your account information and for all activities that occur under your
                account. You agree to notify AlgCloud immediately of any unauthorized use of your account.
              </p>

              <h2>4. Billing and Payment</h2>
              <p>
                You agree to pay all fees associated with your use of AlgCloud services. Fees are non-refundable except
                as required by law or as explicitly stated in these Terms. AlgCloud reserves the right to change its
                prices at any time, with notice provided to users at least 30 days in advance.
              </p>

              <h2>5. User Conduct</h2>
              <p>
                You agree not to use AlgCloud services for any illegal or unauthorized purpose. You must not violate any
                laws in your jurisdiction, including but not limited to copyright laws. You are solely responsible for
                all data, content, and resources that you upload, post, or otherwise make available via AlgCloud
                services.
              </p>

              <h2>6. Service Availability and SLA</h2>
              <p>
                AlgCloud will make reasonable efforts to maintain the availability of its services. Our Service Level
                Agreement (SLA) details our commitments regarding service availability and the remedies available to you
                in the event of service disruptions.
              </p>

              <h2>7. Data Security and Privacy</h2>
              <p>
                AlgCloud takes data security seriously. We implement reasonable security measures to protect your data.
                Please refer to our Privacy Policy for details on how we collect, use, and protect your personal
                information.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                AlgCloud and its licensors own all rights, title, and interest in and to the services, including all
                intellectual property rights. You are granted a limited, non-exclusive, non-transferable license to use
                the services in accordance with these Terms.
              </p>

              <h2>9. Termination</h2>
              <p>
                AlgCloud reserves the right to suspend or terminate your access to the services at any time for any
                reason, including but not limited to a violation of these Terms. Upon termination, your right to use the
                services will immediately cease.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AlgCloud shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                AlgCloud reserves the right to modify these Terms at any time. We will provide notice of significant
                changes by posting the new Terms on our website and/or sending you an email. Your continued use of the
                services after such modifications constitutes your acceptance of the revised Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of Algeria, without regard to its conflict of law provisions.
                Any disputes arising under these Terms shall be resolved exclusively in the courts of Algiers, Algeria.
              </p>

              <h2>13. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at legal@algcloud.dz.</p>
            </div>
          </div>
        </div>
      </>
  )
}
