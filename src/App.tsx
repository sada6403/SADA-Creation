import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Star, Mail, Phone, MapPin, MessageCircle, Eye,
  ArrowRight, CheckCircle, Zap, Award, Users, Clock, Shield,
  Palette, Video, Layers, Grid3X3, Megaphone, ImageIcon,
  Send,
  TrendingUp, Target, Lightbulb, Rocket, Diamond, Crown,
  Smartphone, FileText, Package, Monitor
} from 'lucide-react';
import Portfolio from './components/Portfolio';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <img src="/imgs/logosada.png" alt="SADA Creation Logo" className="w-9 h-9 object-contain" />
            </div>
            <div className="text-2xl font-bold text-white">
              SADA<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> Creation</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Home</a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Services</a>
            <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Portfolio</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-slate-800/80 backdrop-blur-sm text-white border border-slate-700/50 flex items-center justify-center transition-all duration-300"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 rounded-b-2xl mt-2">
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block py-3 text-slate-300 hover:text-white font-medium transition-colors duration-300">Home</a>
              <a href="#services" className="block py-3 text-slate-300 hover:text-white font-medium transition-colors duration-300">Services</a>
              <a href="#portfolio" className="block py-3 text-slate-300 hover:text-white font-medium transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="block py-3 text-slate-300 hover:text-white font-medium transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/3 via-indigo-600/3 to-transparent rounded-full"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400">
              Visual Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your brand with our premium design solutions. Specializing in professional logo design, 
            cinematic video editing, and stunning visual experiences that captivate audiences.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#portfolio" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            View Portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-blue-950/70 backdrop-blur-sm border border-blue-800/50 text-white font-semibold rounded-xl hover:bg-blue-900/70 transition-all duration-300 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Project
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { icon: Users, label: 'Happy Clients', value: '50+' },
            { icon: Award, label: 'Projects Done', value: '100+' },
            { icon: Clock, label: 'Years Experience', value: '5+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-blue-600/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950/70 rounded-2xl p-4 flex items-center justify-center">
                    <Palette className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="bg-slate-950/70 rounded-2xl p-4 flex items-center justify-center">
                    <Video className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="bg-slate-950/70 rounded-2xl p-4 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="bg-slate-950/70 rounded-2xl p-4 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">About Our Studio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Creating Visual Stories with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> Professional Excellence</span>
            </h2>
            
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              We're a premium design studio specializing in professional visuals that tell compelling stories. 
              Our advanced design techniques transform ordinary concepts into extraordinary visual experiences 
              that captivate and inspire.
            </p>
            
            <p className="text-slate-200 text-lg leading-relaxed mb-8">
              From ethereal brand identities to cinematic video productions, we bring a unique artistic vision 
              that elevates brands and creates lasting impressions in today's competitive marketplace.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, label: 'Precision Design', desc: 'Every pixel matters' },
                { icon: Rocket, label: 'Fast Delivery', desc: 'Quick turnaround' },
                { icon: Shield, label: 'Quality Assured', desc: '100% satisfaction' },
                { icon: Diamond, label: 'Premium Service', desc: 'Luxury experience' }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-xl flex items-center justify-center border border-blue-600/30 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.label}</h4>
                    <p className="text-slate-300 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Preview
const ServicesPreview = () => {
  const services = [
    { 
      name: 'Branding & Identity', 
      icon: Palette, 
      price: 'From LKR 1,500', 
      description: 'Complete brand identity solutions from logos to business cards',
      features: ['Logo Design (Minimal/Luxury/3D/Mascot)', 'Brand Identity Design', 'Business Cards & Letterheads'],
      gradient: 'from-blue-600 to-indigo-700'
    },
    { 
      name: 'Social Media Design', 
      icon: Smartphone, 
      price: 'From LKR 500', 
      description: 'Engaging social media graphics and promotional content',
      features: ['Instagram/Facebook Posts & Stories', 'YouTube Thumbnails', 'LinkedIn Banners', 'WhatsApp & Telegram Ads'],
      gradient: 'from-purple-600 to-pink-700'
    },
    { 
      name: 'Print Design', 
      icon: FileText, 
      price: 'From LKR 1,200', 
      description: 'Professional print materials designed for impact',
      features: ['Flyers & Posters', 'Brochures (Bi-Fold/Tri-Fold)', 'Menu Design', 'Invitations & Greeting Cards'],
      gradient: 'from-green-600 to-teal-700'
    },
    { 
      name: 'Product & Packaging', 
      icon: Package, 
      price: 'From LKR 1,000', 
      description: 'Eye-catching product packaging and label designs',
      features: ['Box, Label, Pouch & Bottle Design', 'Stickers & Tags', 'Product Mockups'],
      gradient: 'from-orange-600 to-red-700'
    },
    { 
      name: 'Web Design & Development', 
      icon: Monitor, 
      price: 'From LKR 7,500', 
      description: 'Modern websites and digital experiences',
      features: ['Custom Website Design', 'Responsive Development', 'E-commerce Sites', 'Landing Pages'],
      gradient: 'from-indigo-600 to-blue-700'
    },
    { 
      name: 'Marketing & Other Services', 
      icon: TrendingUp, 
      price: 'From LKR 150', 
      description: 'Comprehensive marketing materials and design services',
      features: ['Banner Ads', 'Email Templates', 'Presentations', 'Resume Design', 'Photo Retouching'],
      gradient: 'from-cyan-600 to-blue-700'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Design Services</h2>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto">
            Each service crafted with meticulous attention to detail and enhanced with premium professional aesthetics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-indigo-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-slate-200">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    {service.price}
                  </div>
                  <button className="px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 text-white rounded-xl transition-colors duration-300 flex items-center">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center mx-auto">
            <Grid3X3 className="w-5 h-5 mr-2" />
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Pricing Tables Component
const PricingTables = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      name: 'Branding & Identity',
      icon: Palette,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 3,000', 
          features: ['Logo Design (Minimal)', 'Business Card Design', '2 Revisions', 'PNG/JPG Files'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 6,500', 
          features: ['Logo Design (Luxury/3D)', 'Business Card + Letterhead', 'Brand Color Palette', '5 Revisions', 'Full File Set'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 12,000', 
          features: ['Complete Brand Kit', 'Mascot Logo Option', 'Brand Guidelines', 'Stationery Package', 'Unlimited Revisions'],
          popular: false
        }
      ]
    },
    {
      name: 'Social Media Design',
      icon: Smartphone,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 500', 
          features: ['3 Posts/Stories', 'Basic Templates', 'PNG/JPG Format', '1 Revision'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 1,200', 
          features: ['10 Posts/Stories', 'Custom Designs', 'Brand Integration', '3 Revisions', 'Multiple Formats'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 2,500', 
          features: ['Monthly Package (30 Posts)', 'Animated Content', 'Campaign Designs', 'Unlimited Revisions', 'Source Files'],
          popular: false
        }
      ]
    },
    {
      name: 'Print Design',
      icon: FileText,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 1,200', 
          features: ['Flyers/Brochures', 'Basic Layout', 'Print Ready PDF', '2 Revisions'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 2,800', 
          features: ['Multi-page Catalogs', 'Professional Layout', 'Image Integration', '4 Revisions', 'Multiple Sizes'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 5,500', 
          features: ['Complete Print Package', 'Custom Illustrations', 'Premium Finishes', 'Unlimited Revisions', 'Source Files'],
          popular: false
        }
      ]
    },
    {
      name: 'Product & Packaging',
      icon: Package,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 1,000', 
          features: ['Simple Label Design', 'Basic Packaging', '2 Revisions', 'Print Ready Files'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 2,500', 
          features: ['Custom Packaging Design', 'Product Mockups', 'Brand Integration', '4 Revisions', 'Multiple Formats'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 5,000', 
          features: ['Complete Packaging Suite', 'Die-cut Templates', 'Premium Mockups', 'Unlimited Revisions', 'Production Support'],
          popular: false
        }
      ]
    },
    {
      name: 'Web Design & Development',
      icon: Monitor,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 7,500', 
          features: ['Single Page Website', 'Responsive Design', 'Basic SEO', 'Contact Form'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 15,000', 
          features: ['Multi-page Website', 'CMS Integration', 'E-commerce Ready', 'Advanced SEO', 'Mobile Optimized'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 35,000', 
          features: ['Custom Web Application', 'Full E-commerce', 'Admin Dashboard', 'Payment Integration', 'Ongoing Support'],
          popular: false
        }
      ]
    },
    {
      name: 'Marketing & Other Services',
      icon: Megaphone,
      packages: [
        { 
          name: 'Basic', 
          price: 'LKR 150', 
          features: ['Simple Invitations', 'Basic Announcements', '1 Revision', 'Digital Format'],
          popular: false
        },
        { 
          name: 'Advanced', 
          price: 'LKR 500', 
          features: ['Custom Invitations', 'Event Materials', 'Print + Digital', '3 Revisions', 'Multiple Formats'],
          popular: true
        },
        { 
          name: 'Premium', 
          price: 'LKR 1,500', 
          features: ['Complete Event Package', 'Video Invitations', 'Promotional Materials', 'Unlimited Revisions', 'Full Suite'],
          popular: false
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Pricing</h2>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto">
            Transparent pricing for premium design services with professional excellence
          </p>
        </div>

        {/* Service Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800/60 border border-slate-700/50'
              }`}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services[activeService].packages.map((pkg, pkgIndex) => (
            <div key={pkgIndex} className={`relative group ${pkg.popular ? 'transform scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-blue-600/50 shadow-xl shadow-blue-600/15' 
                  : 'border-slate-700/50 hover:border-blue-600/30'
              } group-hover:transform group-hover:scale-105`}>
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-slate-300">Perfect for getting started</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-200">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const selectFunction = (window as any).selectServicePackage;
                    if (selectFunction) {
                      selectFunction(services[activeService].name, pkg.name);
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg shadow-blue-600/30'
                    : 'border-2 border-blue-600/50 text-blue-400 hover:bg-blue-600 hover:text-white'
                }`}>
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    package: '',
    message: ''
  });

  // Function to generate automatic message based on service and package selection
  const generateAutoMessage = (service: string, packageLevel: string) => {
    if (service && packageLevel) {
      const serviceNames: { [key: string]: string } = {
        'branding_&_identity': 'Branding & Identity',
        'social_media_design': 'Social Media Design',
        'print_design': 'Print Design',
        'product_&_packaging': 'Product & Packaging',
        'web_design_&_development': 'Web Design & Development',
        'marketing_&_other_services': 'Marketing & Other Services'
      };
      const serviceName = serviceNames[service] || service;
      return `I'm interested in the ${packageLevel} package for ${serviceName}. Please provide more details.`;
    }
    return '';
  };

  // Function to handle form pre-population from pricing buttons
  const handleServiceSelection = (serviceName: string, packageName: string) => {
    setFormData(prev => ({
      ...prev,
      service: serviceName.toLowerCase().replace(/\s+/g, '_').replace('/', '_'),
      package: packageName,
      message: `I'm interested in the ${packageName} package for ${serviceName}. Please provide more details.`
    }));
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle service change and auto-generate message
  const handleServiceChange = (service: string) => {
    const newFormData = { ...formData, service };
    const autoMessage = generateAutoMessage(service, formData.package);
    if (autoMessage) {
      newFormData.message = autoMessage;
    }
    setFormData(newFormData);
  };

  // Handle package change and auto-generate message
  const handlePackageChange = (packageLevel: string) => {
    const newFormData = { ...formData, package: packageLevel };
    const autoMessage = generateAutoMessage(formData.service, packageLevel);
    if (autoMessage) {
      newFormData.message = autoMessage;
    }
    setFormData(newFormData);
  };

  // Make this function available globally
  React.useEffect(() => {
    (window as any).selectServicePackage = handleServiceSelection;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the form data for WhatsApp
    const serviceNames: { [key: string]: string } = {
      'branding_&_identity': 'Branding & Identity',
      'social_media_design': 'Social Media Design',
      'print_design': 'Print Design',
      'product_&_packaging': 'Product & Packaging',
      'web_design_&_development': 'Web Design & Development',
      'marketing_&_other_services': 'Marketing & Other Services'
    };
    
    const serviceName = serviceNames[formData.service] || formData.service || 'Not specified';
    const packageName = formData.package || 'Not specified';
    const name = formData.name || 'Not provided';
    const email = formData.email || 'Not provided';
    const message = formData.message || 'No additional message';
    
    // Create formatted message for WhatsApp
    const whatsappMessage = `*New Project Inquiry*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `🎨 *Service:* ${serviceName}\n` +
      `📦 *Package:* ${packageName}\n` +
      `💬 *Message:* ${message}\n\n` +
      `📅 *Date:* ${new Date().toLocaleDateString()}\n` +
      `⏰ *Time:* ${new Date().toLocaleTimeString()}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL - wa.link doesn't support text parameter, so we'll use wa.me
    // If you want to use wa.link, it will just open the chat without pre-filled message
    const whatsappURL = `https://api.whatsapp.com/send?phone=94786516761&text=${encodedMessage}`;
    
    // Alternative: Just open wa.link without message (uncomment this line and comment above if you prefer)
    // const whatsappURL = `https://wa.link/f3x54m`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after sending
    setFormData({
      name: '',
      email: '',
      service: '',
      package: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-full mb-6">
            <Send className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto">
            Ready to bring your vision to life with our premium design expertise? Get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'sadacreations11@gmail.com', gradient: 'from-blue-600 to-indigo-700' },
                { icon: Phone, label: 'Phone', value: '078 651 6761 / 077 377 6782', gradient: 'from-indigo-600 to-blue-700' },
                { icon: MapPin, label: 'Location', value: 'Available Worldwide', gradient: 'from-blue-500 to-indigo-600' },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', gradient: 'from-indigo-700 to-blue-800' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{contact.label}</div>
                    <div className="text-slate-300">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
              <div className="flex space-x-4">
                <a href="mailto:contact@sadacreation.com" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a href="tel:+94701234567" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </a>
                <a href="#contact" className="w-12 h-12 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="branding_&_identity">Branding & Identity</option>
                  <option value="social_media_design">Social Media Design</option>
                  <option value="print_design">Print Design</option>
                  <option value="product_&_packaging">Product & Packaging</option>
                  <option value="web_design_&_development">Web Design & Development</option>
                  <option value="marketing_&_other_services">Marketing & Other Services</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Package Level</label>
                <select
                  value={formData.package}
                  onChange={(e) => handlePackageChange(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a package (optional)</option>
                  <option value="Basic">Basic</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-4 bg-slate-950/70 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-slate-400 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center shadow-xl shadow-blue-600/30"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                SADA<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> Creation</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Creating premium designs that capture the essence of elegance and professionalism. 
              Transform your brand with our expert design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@sadacreation.com" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="tel:+94701234567" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href="#contact" className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Branding & Identity', 
                'Social Media Design', 
                'Print Design', 
                'Product & Packaging', 
                'Web Design & Development', 
                'Marketing & Other Services'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Portfolio', 'Pricing', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 SADA Creation. All rights reserved. | Crafted with premium excellence
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <ServicesPreview />
      <Portfolio />
      <PricingTables />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;