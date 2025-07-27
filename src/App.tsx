import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Star, Mail, Phone, MapPin, ExternalLink, Eye, Heart, MessageCircle,
  ArrowRight, CheckCircle, Zap, Award, Users, Clock, Shield,
  Play, Share2, Grid3X3,
  Palette, Video, Image, Megaphone, Layers,
  Quote, Send, Instagram,
  TrendingUp, Target, Lightbulb, Rocket, Diamond, Crown,
  Smartphone, FileText, Package, Monitor
} from 'lucide-react';

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
              <img src="/logos/logo.png?v=2" alt="SADA Creation Logo" className="w-9 h-9 object-contain" />
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
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            View Portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-blue-950/70 backdrop-blur-sm border border-blue-800/50 text-white font-semibold rounded-xl hover:bg-blue-900/70 transition-all duration-300 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Project
          </button>
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
                    <Image className="w-8 h-8 text-blue-300" />
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

// Portfolio Preview
const PortfolioPreview = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullPortfolio, setShowFullPortfolio] = useState(false);
  const filters = ['All', 'Logo Design', 'Poster Design', 'Invitations / Invitation Videos'];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Reset to showing limited portfolio when filter changes
  React.useEffect(() => {
    setShowFullPortfolio(false);
  }, [activeFilter]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const projects = [
    // Logo Design Projects - All SADA Creation Logos
    { 
      title: 'SADA Creation Brand Identity', 
      category: 'Logo Design', 
      image: '/logos/logo.png', 
      gradient: 'from-blue-600 to-indigo-700',
      description: 'Premium brand identity design for SADA Creation studio',
      type: 'logo'
    },
    { 
      title: 'Modern Real Estate Logo', 
      category: 'Logo Design', 
      image: '/logos/Green and White Modern Real Estate Property Logo (1).jpg', 
      gradient: 'from-green-500 to-blue-600',
      description: 'Professional green and white real estate property logo',
      type: 'logo'
    },
    { 
      title: 'Corporate Logo Design', 
      category: 'Logo Design', 
      image: '/logos/logo.png', 
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Clean and professional corporate logo design',
      type: 'logo'
    },
    { 
      title: 'Creative Studio Logo', 
      category: 'Logo Design', 
      image: '/logos/logo3.png', 
      gradient: 'from-purple-600 to-blue-700',
      description: 'Creative and artistic studio logo design',
      type: 'logo'
    },
    { 
      title: 'Tech Company Branding', 
      category: 'Logo Design', 
      image: '/logos/logo4.png', 
      gradient: 'from-blue-700 to-indigo-800',
      description: 'Modern technology company branding solution',
      type: 'logo'
    },
    { 
      title: 'Peacock Designer Brand', 
      category: 'Logo Design', 
      image: '/logos/PEACOCK DESIGNER (1) reject.png', 
      gradient: 'from-teal-600 to-blue-700',
      description: 'Elegant peacock-themed designer brand logo',
      type: 'logo'
    },
    { 
      title: 'Petta.lk E-commerce Logo', 
      category: 'Logo Design', 
      image: '/logos/petta.lk.png', 
      gradient: 'from-orange-500 to-red-600',
      description: 'E-commerce platform logo with modern appeal',
      type: 'logo'
    },
    { 
      title: 'Professional Logo Mockup', 
      category: 'Logo Design', 
      image: '/logos/Hanging Wall Sign MockUp 4.png', 
      gradient: 'from-gray-600 to-slate-700',
      description: 'Premium hanging wall sign logo presentation',
      type: 'mockup'
    },
    { 
      title: 'Paper Edition Logo Mockup', 
      category: 'Logo Design', 
      image: '/logos/Logo Mockup - Paper Edition 1 - by PuneDesign.png', 
      gradient: 'from-amber-600 to-orange-700',
      description: 'Elegant paper edition logo mockup design',
      type: 'mockup'
    },
    { 
      title: 'Real Estate Promo Facebook Post', 
      category: 'Poster Design', 
      image: '/posters/Blue and Orange Simple Real Estate Promo Facebook Post (3).jpg', 
      gradient: 'from-blue-600 to-orange-600',
      description: 'Blue and orange real estate promotional social media post',
      type: 'poster'
    },
    { 
      title: 'Smart Life Upgrade Poster', 
      category: 'Poster Design', 
      image: '/posters/Upgrade to a Smarter Life!.jpg', 
      gradient: 'from-purple-600 to-blue-700',
      description: 'Modern technology upgrade promotional poster',
      type: 'poster'
    },
    { 
      title: 'Rental Services Advertisement', 
      category: 'Poster Design', 
      image: '/posters/Rental Services.jpg', 
      gradient: 'from-indigo-600 to-purple-700',
      description: 'Professional rental services promotional poster',
      type: 'poster'
    },
    { 
      title: 'Farm Activities Poster', 
      category: 'Poster Design', 
      image: '/posters/our activities while on the farm.jpg', 
      gradient: 'from-green-600 to-yellow-600',
      description: 'Farm activities promotional poster design',
      type: 'poster'
    },
    { 
      title: 'Dodol Product Promotion', 
      category: 'Poster Design', 
      image: '/posters/Dodol (1).jpg', 
      gradient: 'from-amber-600 to-orange-700',
      description: 'Traditional dodol product promotional poster',
      type: 'poster'
    },
    { 
      title: 'Shop23 Business Poster', 
      category: 'Poster Design', 
      image: '/posters/Shop23.png', 
      gradient: 'from-blue-700 to-indigo-800',
      description: 'Modern shop business promotional poster',
      type: 'poster'
    },
    { 
      title: 'Wedding Invitation Card', 
      category: 'Invitations / Invitation Videos', 
      image: '/invitations/Light Pink Royal Elegant Floral Indian Wedding Invitation .jpg', 
      gradient: 'from-pink-500 to-rose-600',
      description: 'Elegant pink floral Indian wedding invitation design',
      type: 'invitation'
    },
    { 
      title: 'Cordial Wedding Invitation', 
      category: 'Invitations / Invitation Videos', 
      image: '/invitations/We Cordially invite You (1).jpg', 
      gradient: 'from-gold-500 to-amber-600',
      description: 'Formal cordial wedding invitation card design',
      type: 'invitation'
    },
    { 
      title: 'Invitation Video', 
      category: 'Invitations / Invitation Videos', 
      image: '/invitation-videos/Nilakshan & Savitha (5).mp4', 
      gradient: 'from-purple-600 to-pink-700',
      description: 'Beautiful wedding invitation video for Nilakshan & Savitha',
      type: 'video'
    }
  ];

  // Shuffle function to randomize projects
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Show only 6 random projects initially, all when showFullPortfolio is true
  const displayedProjects = showFullPortfolio 
    ? filteredProjects 
    : shuffleArray(filteredProjects).slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-full mb-6">
            <Eye className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">SADA Creation Portfolio</h2>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto mb-12">
            A complete showcase of our logo designs, brand identities, and creative mockups from our professional collection
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800/60 border border-slate-700/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
              <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-all duration-500"></div>
              
              <div className="relative p-8 h-80 flex flex-col justify-center items-center text-center">
                {project.type === 'logo' ? (
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden ${
                    project.title === 'Modern Real Estate Logo' ? 'bg-black' : 'bg-white'
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="text-4xl hidden">🎨</div>
                  </div>
                ) : project.type === 'mockup' ? (
                  <div className="w-24 h-24 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-4xl hidden">🖼️</div>
                  </div>
                ) : project.type === 'poster' ? (
                  <div className="w-24 h-24 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-4xl hidden">📋</div>
                  </div>
                ) : project.type === 'invitation' ? (
                  <div className="w-24 h-24 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-pink-600 to-rose-700 rounded-xl flex items-center justify-center text-4xl hidden">💌</div>
                  </div>
                ) : project.type === 'video' ? (
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                    <div className="text-4xl">🎥</div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <Play className="w-2 h-2 text-white fill-current" />
                    </div>
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-600">
                    <div className="text-4xl">📢</div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm uppercase tracking-wider font-medium mb-3">{project.category}</p>
                <p className="text-slate-300 text-sm mb-6 opacity-80">{project.description}</p>
                
                <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <button 
                      onClick={() => openProjectModal(project)}
                      className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto mb-4 shadow-lg`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </button>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setShowFullPortfolio(!showFullPortfolio)}
            className="px-8 py-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-800/60 transition-all duration-300 flex items-center mx-auto"
          >
            <Grid3X3 className="w-5 h-5 mr-2" />
            {showFullPortfolio ? 'Show Less' : 'View Full Portfolio'}
            <ExternalLink className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9000] flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">{selectedProject.category}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="w-10 h-10 bg-slate-800/60 hover:bg-slate-700/60 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <div className={`rounded-xl overflow-hidden shadow-lg ${
                      selectedProject.title === 'Modern Real Estate Logo' ? 'bg-black' : 'bg-white'
                    }`}>
                      {selectedProject.type === 'video' ? (
                        <video 
                          controls 
                          className="w-full h-auto max-h-[60vh]"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        >
                          <source src={selectedProject.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title}
                          className="w-full h-auto object-contain max-h-[60vh]"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      )}
                      <div className="hidden w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 items-center justify-center text-6xl">
                        {selectedProject.type === 'logo' ? '🎨' : 
                         selectedProject.type === 'poster' ? '📋' : 
                         selectedProject.type === 'invitation' ? '💌' :
                         selectedProject.type === 'video' ? '🎥' : '📢'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Project Details</h4>
                        <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Type</h4>
                        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} rounded-full text-white font-medium`}>
                          {selectedProject.type === 'logo' && <Palette className="w-4 h-4 mr-2" />}
                          {selectedProject.type === 'mockup' && <Image className="w-4 h-4 mr-2" />}
                          {selectedProject.type === 'poster' && <Image className="w-4 h-4 mr-2" />}
                          {selectedProject.type === 'invitation' && <Heart className="w-4 h-4 mr-2" />}
                          {selectedProject.type === 'video' && <Video className="w-4 h-4 mr-2" />}
                          {selectedProject.type === 'ad' && <Megaphone className="w-4 h-4 mr-2" />}
                          {selectedProject.category}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.type === 'logo' && (
                            <>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Professional Design
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Vector Format
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Brand Identity
                              </li>
                            </>
                          )}
                          {selectedProject.type === 'mockup' && (
                            <>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                High Resolution
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Professional Mockup
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Ready to Use
                              </li>
                            </>
                          )}
                          {selectedProject.type === 'poster' && (
                            <>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Print Ready
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                High Quality Design
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Multiple Formats
                              </li>
                            </>
                          )}
                          {selectedProject.type === 'invitation' && (
                            <>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Elegant Design
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Customizable
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Print & Digital Ready
                              </li>
                            </>
                          )}
                          {selectedProject.type === 'video' && (
                            <>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                HD Quality
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Professional Editing
                              </li>
                              <li className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                                Custom Animation
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                      
                      <div className="flex justify-center">
                        <button className="px-4 py-3 bg-slate-800/60 hover:bg-slate-700/60 text-white rounded-xl transition-colors duration-300 flex items-center justify-center">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.link/oe2ngx?text=${encodedMessage}`;
    
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
              <h4 className="text-xl font-bold text-white mb-6">Follow Our Work</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61575652694345" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/sadacreation/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb6XuKS47XeEIWnyI03g" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
              <a href="https://www.facebook.com/profile.php?id=61575652694345" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sadacreation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://whatsapp.com/channel/0029Vb6XuKS47XeEIWnyI03g" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
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
      <PortfolioPreview />
      <PricingTables />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;