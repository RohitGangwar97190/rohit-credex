
const Testimonials = ({ isDark }) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechFlow Solutions",
      content: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth and their valuation exceeded our expectations.",
      avatar: "fa-user-circle"
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Dynamics",
      content: "As we transitioned to cloud services, we had dozens of legacy licenses that were collecting dust. SoftSell's platform made it easy to convert those assets into capital we could reinvest.",
      avatar: "fa-user-circle"
    }
  ];

  return (
    <div id="testimonials" className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-8 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50'} shadow-md`}>
              <div className="flex items-center mb-6">
                <div className="mr-4 text-3xl text-blue-500">
                  <i className={`fas ${testimonial.avatar}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-lg italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;