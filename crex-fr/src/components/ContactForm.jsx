
import { useState } from 'react';

const ContactForm = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const licenseTypes = [
    "Enterprise Software",
    "Creative Suite",
    "Development Tools",
    "Operating Systems",
    "Database Software",
    "Security Solutions",
    "Other"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
   
    if(errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if(!formData.name.trim()) newErrors.name = "Name is required";
    
    if(!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if(!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if(!formData.company.trim()) newErrors.company = "Company name is required";
    
    if(!formData.licenseType) newErrors.licenseType = "Please select a license type";
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
  
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
 
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
  };

  return (
    <div id="contact" className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Your License Valuation</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below and our team will provide you with a free, no-obligation valuation of your software licenses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-lg text-center`}>
              <div className="text-green-500 text-5xl mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-lg mb-6">Your request has been submitted successfully. Our team will contact you shortly with your license valuation.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className={`p-8 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 font-medium">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'} border ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'} border ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 font-medium">Company*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'} border ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Your company"
                  />
                  {errors.company && <p className="mt-1 text-red-500 text-sm">{errors.company}</p>}
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">License Type*</label>
                  <select
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'} border ${errors.licenseType ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select license type</option>
                    {licenseTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.licenseType && <p className="mt-1 text-red-500 text-sm">{errors.licenseType}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}
                  rows="4"
                  placeholder="Tell us about your software licenses"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Your Valuation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactForm;