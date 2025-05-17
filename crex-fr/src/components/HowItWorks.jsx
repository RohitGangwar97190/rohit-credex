
const HowItWorks = ({ isDark }) => {
  const steps = [
    {
      icon: "fa-upload",
      title: "Upload License",
      description: "Upload your license details and software information through our secure portal."
    },
    {
      icon: "fa-chart-line",
      title: "Get Valuation",
      description: "Our algorithm provides an instant market-based valuation for your licenses."
    },
    {
      icon: "fa-wallet",
      title: "Get Paid",
      description: "Accept the offer and receive payment within 48 hours via your preferred method."
    }
  ];

  return (
    <div id="how-it-works" className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Selling your unused software licenses has never been easier. Our three-step process is designed to get you the best value with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'} shadow-md transition-transform hover:transform hover:scale-105`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-500'} text-white`}>
                <i className={`fas ${step.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;