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
          <p>
            <strong>Effective date:</strong> September 29, 2026
          </p>

          <p>
            Pixel Focus ("Pixel Focus", "the App", "we", "us", or "our") is a productivity and study application developed by Goutham Kumar A and published under the name Pixel_Inc.
          </p>

          <p>
            This Privacy Policy explains what information Pixel Focus may process, where that information is stored, why it is processed, and the choices available to users.
          </p>

          <p>
            For privacy-related questions or requests, contact:
          </p>

          <p>
            <strong>Email:</strong> pixelgoutham@gmail.com<br />
            <strong>Website:</strong> https://pixel-focus-meow.vercel.app/
          </p>

          <hr
            style={{
              border: 0,
              borderTop: '1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.1)',
              margin: '2rem 0'
            }}
          />

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              1. Overview
            </h2>
            <p>
              Pixel Focus is designed as an offline-first productivity application.
            </p>

            <p>
              The core functionality of the App can operate without an online account. Productivity information such as tasks, study sessions, settings, flashcards, mock-test information, and other application data may be stored locally on the user's device.
            </p>

            <p>
              Pixel Focus does not use advertising trackers, behavioral advertising, fingerprinting, or analytics services in the current version of the App.
            </p>

            <p>
              Some optional features may involve third-party services, as described below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              2. Information Stored Locally on Your Device
            </h2>
            <p>
              When you use Pixel Focus, the App may store information locally on your device, including information such as:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Tasks and task status</li>
              <li>Calendar events</li>
              <li>Study sessions and focus-session information</li>
              <li>Pomodoro and stopwatch information</li>
              <li>Study plans</li>
              <li>Flashcards</li>
              <li>Mock-test information</li>
              <li>Application settings and preferences</li>
              <li>Other information necessary to provide the App's productivity features</li>
            </ul>

            <p>
              This information is stored locally using browser-based application storage technologies, including IndexedDB through localForage.
            </p>

            <p>
              Pixel Focus does not routinely transmit this locally stored information to the developer merely because it exists on your device.
            </p>

            <p>
              Because this information is stored on your device, you are responsible for maintaining appropriate backups of information that you do not want to lose.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              3. Audio and Ambient Sounds
            </h2>
            <p>
              Pixel Focus provides locally generated ambient audio.
            </p>

            <p>
              The current audio features generate sounds on the user's device using the Web Audio API. Audio is generated locally rather than being provided through a remote audio-streaming service.
            </p>

            <p>
              Pixel Focus does not use the ambient audio feature to create an advertising profile or analytics profile about the user.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              4. Discord Rich Presence
            </h2>
            <p>
              Pixel Focus may optionally integrate with the Discord desktop application through Discord Rich Presence.
            </p>

            <p>
              If Discord Rich Presence is enabled, Pixel Focus may communicate supported activity information to the Discord desktop client so that the user's Discord profile can display their current Pixel Focus activity.
            </p>

            <p>
              Depending on the feature state, this information may include information such as:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Current study or focus activity</li>
              <li>Focus or break state</li>
              <li>Activity timestamps</li>
            </ul>

            <p>
              This information is communicated to the Discord client for the Rich Presence feature. Pixel Focus does not operate its own server for receiving or storing Discord Rich Presence activity.
            </p>

            <p>
              Discord is a separate service operated by Discord Inc. Its handling of information is governed by Discord's own privacy practices.
            </p>

            <p>
              Users can disable Discord Rich Presence through the relevant Pixel Focus settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              5. Optional Account and Cloud Synchronization
            </h2>
            <p>
              Pixel Focus may support optional account authentication and cloud synchronization through Firebase.
            </p>

            <p>
              This functionality is separate from the core offline functionality of Pixel Focus.
            </p>

            <p>
              If a user chooses to use account or synchronization functionality, information required for authentication and synchronization may be processed by Firebase and associated Google services.
            </p>

            <p>
              Depending on the functionality enabled, this may include information such as:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Account identifier</li>
              <li>Email address</li>
              <li>Display name</li>
              <li>Profile information</li>
              <li>Application data selected for synchronization</li>
            </ul>

            <p>
              Cloud synchronization is not required for the core offline functionality of Pixel Focus.
            </p>

            <p>
              Firebase is a third-party service operated by Google. Information processed through Firebase is subject to Google's applicable terms and privacy practices.
            </p>

            <p>
              Where cloud functionality is enabled, the applicable Firebase configuration determines what information is synchronized and how it is stored.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              6. Information We Do Not Collect for Tracking or Advertising
            </h2>
            <p>
              The current version of Pixel Focus does not intentionally use:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Advertising networks</li>
              <li>Advertising identifiers for behavioral advertising</li>
              <li>Analytics tracking services</li>
              <li>Tracking pixels</li>
              <li>Browser fingerprinting</li>
              <li>Behavioral advertising profiles</li>
              <li>Data brokers</li>
            </ul>

            <p>
              Pixel Focus is not designed to sell personal information for advertising or marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              7. Cookies and Similar Technologies
            </h2>
            <p>
              The current desktop application does not use cookies for advertising, behavioral tracking, or fingerprinting.
            </p>

            <p>
              Local application storage used to provide Pixel Focus functionality is described in the "Information Stored Locally on Your Device" section of this policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              8. Information Sharing and Disclosure
            </h2>
            <p>
              Pixel Focus does not sell personal information.
            </p>

            <p>
              Information may be processed by third-party service providers when necessary to provide optional functionality, including:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Google Firebase, when optional account or cloud synchronization functionality is used.</li>
              <li>Discord, when the user enables Discord Rich Presence.</li>
            </ul>

            <p>
              These services process information according to their respective terms, privacy policies, and applicable configurations.
            </p>

            <p>
              We do not intentionally provide personal information to data brokers or advertising networks for behavioral advertising.
            </p>

            <p>
              We may also disclose information where required to do so by applicable law, regulation, legal process, or a valid governmental request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              9. Data Security
            </h2>
            <p>
              Pixel Focus uses reasonable technical measures appropriate to the application to limit unnecessary access to information.
            </p>

            <p>
              The App uses standard application security mechanisms, including the security controls provided by the underlying Electron application architecture.
            </p>

            <p>
              However, no software, device, storage system, or method of transmission can be guaranteed to be completely secure.
            </p>

            <p>
              Local application data should be considered data stored on the user's device and should be protected using the device's own account, operating-system security, and physical security controls.
            </p>

            <p>
              Pixel Focus does not represent that locally stored application data is encrypted at rest by Pixel Focus itself.
            </p>

            <p>
              Where optional third-party cloud services are used, security measures provided by those services are subject to their respective systems and policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              10. Data Retention
            </h2>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Local Data
            </h3>
            <p>
              Local application data generally remains on the user's device until the user deletes it, clears the application's data, or uninstalls the App, subject to the behavior of the operating system.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2 mt-4">
              Cloud Data
            </h3>
            <p>
              If optional cloud synchronization or authentication is used, information may remain associated with the user's account according to the applicable service configuration and retention requirements.
            </p>

            <p>
              Users who want cloud account or synchronized data deleted may contact us at:
            </p>

            <p>
              <strong>pixelgoutham@gmail.com</strong>
            </p>

            <p>
              Requests will be handled subject to applicable law, technical limitations, and any applicable third-party service requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              11. Your Choices and Controls
            </h2>
            <p>
              Depending on the features you use, you may have controls including:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Using Pixel Focus without creating an account for core offline functionality</li>
              <li>Disabling Discord Rich Presence</li>
              <li>Deleting locally stored application data through the App's available controls</li>
              <li>Uninstalling Pixel Focus to remove locally stored application data maintained by the App</li>
              <li>Choosing whether to use optional account or cloud synchronization functionality</li>
              <li>Contacting us regarding privacy questions or requests</li>
            </ul>

            <p>
              The availability of a particular control may depend on the version of Pixel Focus and the features enabled on the user's device.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              12. Data Rights
            </h2>
            <p>
              Depending on applicable law and your circumstances, you may have rights concerning your personal data, which can include rights relating to:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Access to personal data</li>
              <li>Correction of inaccurate personal data</li>
              <li>Erasure of personal data</li>
              <li>Withdrawal of consent where processing is based on consent</li>
              <li>Grievance redressal</li>
            </ul>

            <p>
              To make a privacy request or ask a question about personal-data processing, contact:
            </p>

            <p>
              <strong>Goutham Kumar A</strong><br />
              <strong>Email:</strong> pixelgoutham@gmail.com
            </p>

            <p>
              We may need sufficient information to understand and process a request and may be required to verify the identity or authority of the person making the request where applicable.
            </p>

            <p>
              Requests will be handled in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              13. Children's Privacy
            </h2>
            <p>
              Pixel Focus is designed as a productivity and study application.
            </p>

            <p>
              The current version does not use advertising, behavioral advertising, fingerprinting, or analytics tracking.
            </p>

            <p>
              Pixel Focus does not intentionally collect personal information from children for advertising or behavioral profiling.
            </p>

            <p>
              Where applicable law requires parental or guardian consent, age-related protections, or other safeguards before processing a child's personal data, those requirements will apply to the relevant processing.
            </p>

            <p>
              Parents or legal guardians who have questions about the processing of a child's personal data may contact:
            </p>

            <p>
              <strong>pixelgoutham@gmail.com</strong>
            </p>

            <p>
              Applicable requirements concerning children's personal data may vary depending on the user's location and the circumstances of the processing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              14. Third-Party Services
            </h2>
            <p>
              Pixel Focus may interact with third-party services as described in this policy.
            </p>

            <p>
              The principal services relevant to the current application include:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Google Firebase</strong><br />
                Used only where optional account authentication or cloud synchronization functionality is enabled.
              </li>
              <li>
                <strong>Discord</strong><br />
                Used only when the user enables Discord Rich Presence.
              </li>
            </ul>

            <p>
              Third-party services are operated independently from Pixel Focus and may have their own privacy policies, terms, retention practices, and security measures.
            </p>

            <p>
              Users should review the applicable policies of third-party services they choose to use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              15. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy when Pixel Focus changes, when new features are introduced, or when applicable legal or regulatory requirements change.
            </p>

            <p>
              When the policy is updated, the effective date at the beginning of the policy will be updated.
            </p>

            <p>
              The version published at the privacy-policy URL is the current version of this policy.
            </p>

            <p>
              If a future version of Pixel Focus introduces new data collection, transmission, or processing practices, this policy will be updated to describe those practices.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              16. Contact and Grievance Requests
            </h2>
            <p>
              For questions, privacy requests, or grievances concerning Pixel Focus or its handling of personal information, contact:
            </p>

            <p>
              <strong>Goutham Kumar A</strong><br />
              <strong>Pixel_Inc</strong><br />
              <strong>Email:</strong> pixelgoutham@gmail.com<br />
              <strong>Website:</strong> https://pixel-focus-meow.vercel.app/
            </p>

            <p>
              We will handle privacy requests and grievances in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">
              17. Applicable Law
            </h2>
            <p>
              This Privacy Policy is intended to describe the privacy practices of Pixel Focus and does not limit any rights or protections that cannot lawfully be excluded under applicable law.
            </p>

            <p>
              Where applicable, processing of personal data will be carried out in accordance with applicable data-protection and privacy requirements.
            </p>

            <p>
              Nothing in this Privacy Policy is intended to waive a user's mandatory statutory rights.
            </p>
          </section>

          <hr
            style={{
              border: 0,
              borderTop: '1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.1)',
              margin: '2rem 0'
            }}
          />

          <p className="text-sm text-muted-foreground text-center">
            <strong>Last updated:</strong> September 29, 2026.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;