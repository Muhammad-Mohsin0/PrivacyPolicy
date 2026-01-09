function PrivacyPolicy() {
  const policySections = [
    {
      title: "Who we are",
      body: `Feng Shui Secret Contacts (“the App”) is designed to provide users with a secure and organized way to manage personal and professional contacts. 
  We value your trust and are committed to protecting your privacy. 
  This Privacy Policy describes who we are, what information we collect, how we use it, and the measures we take to keep your data safe while you use our services.`,
    },

    {
      title: "What we collect",
      body:
        `<strong>Account info</strong>: email, display name, hashed password (managed by our auth provider), optional avatar, and sometimes a virtual phone number.\n\n` +
        `<strong>Contacts you add</strong>: names, phone numbers, emails, notes, categories, and media you upload. We DO NOT automatically import your device contacts — only what you manually add.\n\n` +
        `<strong>Messages & calls</strong>: App-to-app messages and calls are end-to-end encrypted; we cannot read or listen. We may process limited routing metadata (sender/recipient IDs, timestamps) for delivery and troubleshooting.\n\n` +
        `<strong>Media</strong>: Photos and videos you upload are encrypted on the device and stored encrypted.\n\n` +
        `<strong>Payments/subscriptions</strong>: Processed by Stripe. We only receive non-sensitive records (payment status, receipts). Card data is handled directly by Stripe.\n\n` +
        `<strong>Telephony</strong>: If you use SMS/voice to regular phone numbers, a telephony provider (e.g., Twilio) processes required call/SMS metadata.\n\n` +
        `<strong>Device permissions</strong>: camera, microphone, photos, and notifications (only if you allow).\n\n` +
        `<strong>Diagnostics</strong>: Basic logs, device model, OS version, crash data, UI performance, and in-app events used to run and improve the service.\n\n` +
        `<strong>Support</strong>: Any info you provide when contacting support.`,
    },
    {
      title: "How we use data",
      body: `Provide and operate the App (login, encrypted messaging/calling, media storage, contact management).\nProcess subscriptions and receipts.\nKeep the platform secure and stop abuse.\nTroubleshoot and improve the app.\nComply with laws and our Terms.`,
    },
    {
      title: "Legal bases (GDPR/UK GDPR)",
      body: `Contract (to provide features), Legitimate interests (security, diagnostics), Consent (optional features like push), Legal obligations (when required by law).`,
    },
    {
      title: "Security and encryption",
      body: `<strong>Messages and calls</strong>: end-to-end encrypted — we cannot read or listen.\n
        <strong>Media</strong>: encrypted on device before upload.\nWe use TLS for data in transit. Encryption keys are never stored with content.\n\nOptional features: disappearing messages or screenshot prevention may be available but are device-dependent.\nWe do our best to keep data safe, but no system is 100% secure.`,
    },
    {
      title: "Retention",
      body: `Account & subscription data: kept while your account is active and as required by law.\nEncrypted content/media: kept until you delete it or your account (except legal holds/backups).\nLogs/diagnostics: kept for the shortest time needed (typically 30–180 days) unless needed for investigations.`,
    },
    {
      title: "Sharing and processors (no data selling)",
      body: `We do NOT sell personal data. We use trusted processors to run the app: Supabase (auth, database, storage), Stripe (payments), Twilio (telephony), Vercel (hosting), Apple/Google (platform & push services). Processors act only under our instructions and must keep data secure.`,
    },
    {
      title: "International transfers",
      body: `Your data may be processed outside your country. Where required, we use safeguards (like EU Standard Contractual Clauses).`,
    },
    {
      title: "Your rights",
      body: `You may have the right to access, edit, delete, or export your data; object to or limit processing; withdraw consent; or file a complaint with a data authority.\nTo act: use in-app controls to edit/delete content or delete your account (if available).`,
    },
    {
      title: "Children's privacy",
      body: `The App is NOT for children under 13 (or the local minimum age). If you believe a child’s data was collected, contact us to delete it.`,
    },
    {
      title: "Cookies and website",
      body: `Our website may use strictly necessary cookies and limited analytics. You can control cookies in your browser settings.`,
    },
    {
      title: "Data deletion",
      body: `You can delete content or your account in-app (if available). We'll process requests within a reasonable time unless law requires retention.`,
    },
    {
      title: "Region-specific disclosures",
      body: `<strong>California (CCPA/CPRA)</strong>: We don't sell/share personal info for advertising. You can exercise rights as listed above.\n\n <strong>EEA/UK</strong>: See GDPR sections above for legal bases and transfers.`,
    },
    {
      title: "Changes to this policy",
      body: `We may update this policy. We'll update the "Last updated" date and notify you in-app or by email for material changes.`,
    },
    {
      title: "Simple summary",
      body: `Your messages and calls with app users are end-to-end encrypted — we can't read or listen. Media is encrypted before upload. Payments use Stripe; telephony uses Twilio. We don't sell your data. You control your data and can delete content or request account deletion.`,
    },
  ];

  return (
    <div className=" mx-auto p-8 bg-white">
        <nav className="bg-sky-700 h-56 mb-8 flex justify-center items-center">
         <h1 className="text-white text-4xl ">Privacy Policy</h1>

        </nav>
      <header className="mb-6">
        <p className="text-sm text-gray-600">Feng Shui Secret Contacts</p>
      </header>

      <main className="space-y-6">
        {policySections.map((section) => (
          <section key={section.title} className="">
            <h2 className="text-3xl font-semibold mb-2">{section.title}</h2>
            {section.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base text-gray-800 leading-relaxed mb-2"
                dangerouslySetInnerHTML={{ __html: para }}
              ></p>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

export default PrivacyPolicy;
