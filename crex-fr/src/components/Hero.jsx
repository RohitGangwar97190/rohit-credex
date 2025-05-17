
const Hero = ({ isDark }) => {
  return (
    <div className={`pt-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Unused Software Licenses Into Cash
            </h1>
            <p className="text-xl md:text-2xl">
              SoftSell helps businesses sell their unused software licenses at the best market value. Quick, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get a Quote
              </a>
              <a href="#how-it-works" className="inline-block px-8 py-3 bg-transparent border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://c8.alamy.com/comp/2D6A8TD/startup-success-launch-business-project-vector-cartoon-illustration-with-workplace-man-hand-push-on-start-button-and-rocket-fly-up-management-and-development-new-digital-product-2D6A8TD.jpg" alt="Software license illustration" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;