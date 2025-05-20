import type { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
  title: "Cookie Policy | AlgCloud",
  description: "AlgCloud Cookie Policy",
}

export default function CookiePolicyPage() {
  return (

      <>
        <div className="bg-gray-100 border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">Cookie Policy</span>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Cookie Policy</h1>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-500">Last updated: May 15, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how AlgCloud (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies to
                recognize you when you visit our website and use our services. It explains what these technologies are
                and why we use them, as well as your rights to control our use of them.
              </p>

              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, AlgCloud) are called &quot;first-party cookies&quot;. Cookies set
                by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable
                third-party features or functionality to be provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>

              <h2>3. Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical
                reasons in order for our website and services to operate, and we refer to these as &quot;essential&quot; or
                &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to
                enhance the experience on our website and services. Third parties serve cookies through our website for
                advertising, analytics, and other purposes.
              </p>

              <h2>4. Types of Cookies We Use</h2>
              <p>
                The specific types of first and third-party cookies served through our website and services and the
                purposes they perform are described below:
              </p>

              <h3>4.1 Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our website and to
                use some of its features, such as access to secure areas. Because these cookies are strictly necessary
                to deliver the website, you cannot refuse them without impacting how our website functions.
              </p>

              <h3>4.2 Performance and Functionality Cookies</h3>
              <p>
                These cookies are used to enhance the performance and functionality of our website and services but are
                non-essential to their use. However, without these cookies, certain functionality may become
                unavailable.
              </p>

              <h3>4.3 Analytics and Customization Cookies</h3>
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how our
                website is being used or how effective our marketing campaigns are, or to help us customize our website
                and application for you in order to enhance your experience.
              </p>

              <h3>4.4 Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you. They perform functions like
                preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in
                some cases selecting advertisements that are based on your interests.
              </p>

              <h3>4.5 Social Media Cookies</h3>
              <p>
                These cookies are used to enable you to share pages and content that you find interesting on our website
                through third-party social networking and other websites. These cookies may also be used for advertising
                purposes.
              </p>

              <h2>5. How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                cookies, you may still use our website though your access to some functionality and areas of our website
                may be restricted. As the means by which you can refuse cookies through your web browser controls vary
                from browser to browser, you should visit your browser&apos;s help menu for more information.
              </p>

              <h2>6. How Often Will We Update This Cookie Policy?</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

              <h2>7. Where Can You Get Further Information?</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at
                privacy@algcloud.dz.
              </p>
            </div>
          </div>
        </div>
      </>
  )
}
