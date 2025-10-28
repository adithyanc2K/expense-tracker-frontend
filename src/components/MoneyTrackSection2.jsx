import { ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default function SmartBudgetSection() {
  return (
    <section className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-16 mt-25 px-6 py-20">
      {/* Right Card */}
      <div className="bg-blue-50 rounded-2xl shadow-lg p-6 w-full md:w-80 border border-blue-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-blue-800 font-semibold text-lg">Monthly Budget</h3>
          <span className="text-blue-600 text-sm font-medium">₹45,000 Limit</span>
        </div>

        {/* Budget Progress */}
        <div className="relative w-full h-3 bg-blue-100 rounded-full mb-6">
          <div className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full w-2/3"></div>
        </div>

        {/* Insights */}
        <div className="space-y-4">
          <div className="flex items-center justify-between hover:bg-white/50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <ChartBarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-medium text-gray-800">Groceries</p>
            </div>
            <p className="text-gray-600 text-sm">₹12,500</p>
          </div>

          <div className="flex items-center justify-between hover:bg-white/50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-medium text-gray-800">Savings</p>
            </div>
            <p className="text-gray-600 text-sm">₹8,000</p>
          </div>

          <div className="flex items-center justify-between hover:bg-white/50 rounded-lg p-2 transition">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-full">
                <ArrowTrendingUpIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="font-medium text-gray-800">Investments</p>
            </div>
            <p className="text-gray-600 text-sm">₹5,000</p>
          </div>
        </div>
      </div>

      {/* Left Text */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
          Plan your budget smarter
        </h2>
        <p className="text-blue-700 text-base mb-6">
          Set monthly limits, track your progress, and understand where your
          money goes. Smart insights help you balance spending and saving
          effortlessly.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Explore Budgets
        </button>
      </div>
    </section>
  );
}
