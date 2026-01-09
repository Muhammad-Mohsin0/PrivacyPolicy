import React, { useState } from "react";

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send this data to your backend or support email
    console.log({ email, reason });

    alert(
      "Your account deletion request has been submitted. We will process it shortly."
    );

    setEmail("");
    setReason("");
  };

  return (
    <div className="mx-auto bg-white min-h-screen">
      <nav className="bg-red-600 h-56 flex justify-center items-center">
        <h1 className="text-white text-4xl font-semibold">
          Delete Account Request
        </h1>
      </nav>

      <div className="max-w-3xl mx-auto p-8">
        <p className="text-gray-700 mb-6">
          If you would like to delete your <strong>Feng Shui Secret Contacts</strong> account,
          please submit the form below. This request will permanently remove your
          account and associated data, subject to legal requirements.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Deletion (optional)
            </label>
            <textarea
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Tell us why you want to delete your account..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl">
            ⚠️ This action is irreversible. All your data will be permanently deleted.
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl font-medium"
          >
            Request Account Deletion
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccount;
