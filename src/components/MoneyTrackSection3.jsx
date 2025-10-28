import { ShieldCheckIcon, LockClosedIcon, FingerPrintIcon } from "@heroicons/react/24/solid";

export default function MoneyTrackerSection3() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center gap-10 mt-25 px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          100% Secure & Trusted
        </h2>
        <p className="text-blue-700 text-base">
          Your data is protected with advanced encryption and privacy-first
          technology. We ensure your financial information stays safe,
          accessible only to you.
        </p>
      </div>

      {/* Icon Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border border-blue-100 hover:-translate-y-2 transition">
          <div className="flex justify-center mb-3">
            <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900 text-lg mb-2">
            Bank-Level Security
          </h3>
          <p className="text-blue-700 text-sm">
            Encrypted transactions ensure your data is always protected from unauthorized access.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border border-blue-100 hover:-translate-y-2 transition">
          <div className="flex justify-center mb-3">
            <LockClosedIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900 text-lg mb-2">
            Privacy You Control
          </h3>
          <p className="text-blue-700 text-sm">
            Only you have access to your expense data — no third-party sharing or analytics.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border border-blue-100 hover:-translate-y-2 transition">
          <div className="flex justify-center mb-3">
            <FingerPrintIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900 text-lg mb-2">
            Smart Authentication
          </h3>
          <p className="text-blue-700 text-sm">
            Secure login with biometric and password protection to keep your wallet truly yours.
          </p>
        </div>
      </div>
    </section>
  );
}
