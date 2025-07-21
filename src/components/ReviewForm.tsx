import React, { useState, useEffect } from 'react';
import { Star, Send, X, CheckCircle, User, Mail, Briefcase } from 'lucide-react';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    rating: 0,
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle scroll behavior when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll but allow modal content scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const services = [
    'Logo Design',
    'Video Editing', 
    'Poster Design',
    'Ad Creation',
    'Graphic Design'
  ];

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        rating: 0,
        review: ''
      });
      onClose();
    }, 3000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Modal Content */}
      <div 
        className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-slate-800/60 hover:bg-slate-700/60 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Write a Review</h3>
              <p className="text-slate-300">Share your experience with our design services</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Company and Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3">Service Used *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-white font-semibold mb-3">Rating *</label>
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        star <= formData.rating
                          ? 'bg-yellow-500 text-white'
                          : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60'
                      }`}
                    >
                      <Star className={`w-5 h-5 ${star <= formData.rating ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
                <p className="text-slate-400 text-sm">
                  {formData.rating === 0 && 'Please select a rating'}
                  {formData.rating === 1 && 'Poor'}
                  {formData.rating === 2 && 'Fair'}
                  {formData.rating === 3 && 'Good'}
                  {formData.rating === 4 && 'Very Good'}
                  {formData.rating === 5 && 'Excellent'}
                </p>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-white font-semibold mb-3">Your Review *</label>
                <textarea
                  value={formData.review}
                  onChange={(e) => setFormData({...formData, review: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400 resize-none"
                  placeholder="Tell us about your experience with our services. What did you like most? How did we help your project?"
                  required
                  minLength={50}
                ></textarea>
                <p className="text-slate-400 text-sm mt-2">
                  Minimum 50 characters ({formData.review.length}/50)
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.rating === 0 || formData.review.length < 50}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center shadow-xl shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Submitting Review...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-slate-300 text-lg mb-6">
              Your review has been submitted successfully. We appreciate your feedback!
            </p>
            <p className="text-slate-400 text-sm">
              This window will close automatically in a few seconds...
            </p>
          </div>
        )}
        </div>
    </div>
  );
};