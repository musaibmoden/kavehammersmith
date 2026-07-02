export default function Privacy() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="mb-12 font-heading text-5xl font-bold text-charcoal">Privacy Policy</h1>

        <div className="space-y-8 leading-relaxed text-charcoal/70">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">1. Introduction</h2>
            <p>
              Welcome to KAVE. We are committed to protecting your privacy and ensuring you have a
              positive experience on our website. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may
              collect on the Site includes:
            </p>
            <ul className="ml-4 mt-4 list-inside list-disc space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and postal
                address when you voluntarily provide it.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including page views, time spent, and navigation patterns.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, IP address, operating system, and
                device information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth,
              efficient, and customized experience. Specifically, we may use information collected
              about you via the Site to:
            </p>
            <ul className="ml-4 mt-4 list-inside list-disc space-y-2">
              <li>
                Generate a personal profile about you so that future visits to the Site will be
                personalized as much as possible.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience with the Site.
              </li>
              <li>Send you marketing and promotional communications.</li>
              <li>Respond to your inquiries, questions, and requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">
              4. Disclosure of Your Information
            </h2>
            <p>We may share your information in the following situations:</p>
            <ul className="ml-4 mt-4 list-inside list-disc space-y-2">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of
                information about you is necessary to comply with the law.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with
                third parties that perform services for us, including marketing, customer service,
                and data analysis.
              </li>
              <li>
                <strong>Business Transfers:</strong> Your information may be transferred as part of
                a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">
              5. Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures to protect your
              personal information. However, no method of transmission over the Internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4">
              <p>
                <strong>Email:</strong> hello@kave.co.uk
              </p>
              <p>
                <strong>Address:</strong> Hammersmith, London, UK
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-charcoal">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by updating the &quot;Last Updated&quot; date of this Privacy Policy. Your continued
              use of the Site following the posting of revised Privacy Policy means that you accept
              and agree to the changes.
            </p>
            <p className="mt-4 text-sm text-charcoal/50">Last Updated: January 14, 2026</p>
          </section>
        </div>

        <div className="mt-16">
          <a
            href="/"
            className="inline-block rounded-lg bg-charcoal px-8 py-3 font-semibold text-cream transition-all duration-300 hover:bg-charcoal/90"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
