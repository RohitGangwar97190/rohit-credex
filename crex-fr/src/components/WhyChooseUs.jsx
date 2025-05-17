
const WhyChooseUs = ({ isDark }) => {
  const benefits = [
    {
      icon: "fa-shield-alt",
      title: "Secure & Compliant",
      description: "ISO-certified security protocols and full compliance with software licensing regulations."
    },
    {
      icon: "fa-bolt",
      title: "Fast Processing",
      description: "From valuation to payment in as little as 48 hours. No long waiting periods."
    },
    {
      icon: "fa-dollar-sign",
      title: "Best Market Value",
      description: "Our network of buyers ensures you get the highest possible value for your licenses."
    },
    {
      icon: "fa-headset",
      title: "Expert Support",
      description: "Our licensing specialists are available to help you through each step of the process."
    }
  ];

  return (
    <div id="why-choose-us" className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We've built a platform that prioritizes your business needs, ensuring a seamless experience with maximum returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
              <div className={`text-blue-500 mb-4`}>
                <i className={`fas ${benefit.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;