import { FC } from 'react';

const PrivacyPolicy: FC = () => {
  return (
    <div
      className="grain-overlay"
      style={{
        minHeight: '100dvh',
        background: '#080808',
        color: 'hsl(var(--foreground))',
        padding: '4rem 1rem',
        overflowX: 'hidden',
      }}
    >
      <nav className="mb-8">
        <a
          href="/"
          className="text-sm hover:text-primary transition-colors"
        >
          ← Back to Home
        </a>
      </nav>

      <div className="max-w-2xl mx-auto">
        <h1
          className="font-display text-4xl font-bold mb-8 text-center"
          style={{ letterSpacing: '-0.02em' }}
        >
          Privacy Policy
        </h1>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to Pixel Focus ("the App"). This document explains how your data is handled and outlines the terms under which you use the App. By downloading, accessing, or using Pixel Focus, you agree to the terms outlined in this policy.
            </p>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (DPDPA), the Data Fiduciary responsible for determining the purpose and means of processing your digital personal data is Goutham Kumar A.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              2. What Data We Collect and How We Use It
            </h2>
            <p>
              Pixel Focus is designed as an offline-first productivity operating system. We believe in data minimization and purpose limitation.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Local Application Data
            </h3>
            <p>
              Core data—including your tasks, calendar events, Pomodoro timer statistics, and study plans—is stored strictly locally on your device using IndexedDB (localForage). We do not collect, monitor, or have access to this local data.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Audio Generation
            </h3>
            <p>
              All ambient sounds (e.g., white noise, rain) are generated entirely on your device using the Web Audio API. There are no YouTube iframes, audio streaming trackers, or background media telemetry.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Zero Covert Tracking
            </h3>
            <p>
              Pixel Focus actively protects your privacy. We do not use analytics, advertising trackers, cookies, or digital fingerprinting.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              3. Third-Party Integrations & Network Access
            </h2>
            <p>
              The App uses specific external services strictly to provide user-facing features:
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Discord Rich Presence (RPC)
            </h3>
            <p>
              If you enable this feature, the App communicates locally with your Discord desktop client to broadcast your current focus state and ambient sound status to your Discord profile. We do not store, intercept, or transmit this presence data to our own servers.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Firebase Authentication & Cloud Sync (Optional)
            </h3>
            <p>
              Users may choose to opt-in to cloud synchronization to back up data across devices. If you choose to create an account, authentication and data syncing are securely handled by Firebase. You are never required to use this feature to access the core offline functionalities of the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, rent, license, or share your personal data (even if anonymous, aggregate, or derived) to any data broker, ad network, or third-party marketing service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              5. Your Rights & Data Control
            </h2>
            <p>
              Under the DPDPA and global privacy laws, you have absolute control over your information:
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Right to Access & Erase
            </h3>
            <p>
              You can permanently delete all your local data at any time by clearing the application data in the App settings or uninstalling the App.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Cloud Data Deletion
            </h3>
            <p>
              If you use the optional Firebase sync, you can request the immediate deletion of your account and all associated cloud data directly through the App settings.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Right to Withdraw Consent
            </h3>
            <p>
              You can disable the Discord RPC broadcast at any time within the App settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              6. Children's Privacy
            </h2>
            <p>
              Pixel Focus is designed for students. We strictly comply with global safety laws regarding children's data. Because the App operates primarily offline and strictly prohibits ad-tracking, data brokering, and behavioral profiling, it is safe for users of all ages. We do not collect sensitive biometric data or create behavioral profiles for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              7. Grievance Redressal
            </h2>
            <p>
              In compliance with Section 13 of the DPDPA, 2023, if you have any questions, concerns, or grievances regarding how your data is handled, you may contact the Grievance Officer:
            </p>
            <p className="mt-4">
              <strong>Name:</strong> Goutham Kumar A<br />
              <strong>Email:</strong> [Insert Your Developer/Support Email Here]
            </p>
            <p className="mt-2">
              We will acknowledge your grievance within 7 days and resolve it within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              8. Terms of Use & Limitation of Liability (Disclaimer)
            </h2>
            <p>
              Read Carefully: This section limits the legal liability of the developer.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              A. "AS IS" AND "AS AVAILABLE" DISCLAIMER
            </h3>
            <p>
              The App is provided to you "AS IS" and "AS AVAILABLE," with all faults and defects, without warranty of any kind. To the maximum extent permitted under applicable law, the developer (Goutham Kumar A) expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. The developer provides no guarantee that the App will meet your requirements, achieve intended results, be compatible with other software, operate without interruption, or be error-free.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              B. LIMITATION OF LIABILITY
            </h3>
            <p>
              To the fullest extent permitted by applicable law, in no event shall the developer be legally or financially liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App. This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Loss of data, study notes, calendar events, or tasks.
              </li>
              <li>
                Academic consequences (e.g., missed deadlines, failed exams) resulting from App bugs, crashes, or timer malfunctions.
              </li>
              <li>
                Device malfunctions, hardware issues, or operating system errors.
              </li>
              <li>
                Any unauthorized third-party access to your device or data.
              </li>
            </ul>
            <p className="mt-4">
              By downloading and using Pixel Focus, you assume all risks associated with its use and agree that the developer holds zero liability for any damages or losses incurred.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;