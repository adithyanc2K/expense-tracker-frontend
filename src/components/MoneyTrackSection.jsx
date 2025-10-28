import { ChartPieIcon, BanknotesIcon, TruckIcon } from "@heroicons/react/24/solid";

export default function MoneyTrackerSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 mt-30 px-6 py-20">
      {/* Left Card */}
      <div className="bg-white rounded-2xl shadow-lg p-5 w-full md:w-80 border border-blue-100">
        {/* Tabs */}
        <div className="flex justify-between text-sm font-medium text-blue-400 border-b pb-2 mb-5">
          <button className="hover:text-blue-700">Last Month</button>
          <button className="text-blue-600 border-b-2 border-blue-500 pb-1">
            This Month
          </button>
          <button className="hover:text-blue-700">Future</button>
        </div>

        {/* Date and total */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-4xl font-bold text-blue-800">28</p>
            <p className="text-blue-500 text-sm">Tuesday</p>
            <p className="text-blue-300 text-xs">October 2025</p>
          </div>
          <p className="text-blue-600 font-semibold text-lg">+1,00,000</p>
        </div>

        {/* Transaction list */}
        <div className="space-y-4">
          <div className="flex items-center justify-between hover:bg-blue-50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-full">
                <TruckIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="font-medium text-gray-800">Transportation</p>
            </div>
            <p className="text-gray-600 text-sm">15,000</p>
          </div>

          <div className="flex items-center justify-between hover:bg-blue-50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <ChartPieIcon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-medium text-gray-800">Food & Beverage</p>
            </div>
            <p className="text-gray-600 text-sm">33,000</p>
          </div>

          <div className="flex items-center justify-between hover:bg-blue-50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <BanknotesIcon className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-medium text-gray-800">Salary</p>
            </div>
            <p className="text-gray-600 text-sm">+25,000</p>
          </div>
        </div>
      </div>

      {/* Right Text */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
          Simple money tracker
        </h2>
        <p className="text-blue-700 text-base mb-6">
          Track and visualize your daily expenses with a clean, easy-to-use
          dashboard. Stay organized, save smarter, and take control of your
          finances effortlessly.
        </p>
      </div>
    </section>
  );
}
