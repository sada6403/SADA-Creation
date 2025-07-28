import React, { useState, useEffect } from 'react';
import { Eye, ExternalLink, Grid3X3, Palette, FileText, Heart, X } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

// Loading skeleton component
const ImageSkeleton = () => (
  <div className="w-full h-full bg-slate-800 animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-slate-600 border-t-blue-400 rounded-full animate-spin"></div>
  </div>
);

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState<{[key: number]: boolean}>({});

  // Function to preload critical images
  const preloadCriticalImages = (items: PortfolioItem[]) => {
    const criticalImages = items.slice(0, 6); // Preload first 6 images
    criticalImages.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImageLoadStates(prev => ({ ...prev, [item.id]: true }));
      };
    });
  };

  // Function to open modal
  const openModal = (item: PortfolioItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        // Load logos
        const logosResponse = await fetch('/logos.json');
        const logos = await logosResponse.json();

        // Create portfolio items from local images
        const posters = [
          {
            id: 101,
            title: "15 Perch Land Sale",
            description: "Professional land sale advertisement",
            image: "/posters/15 Perch Land (2).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 102,
            title: "Real Estate Facebook Post",
            description: "Blue and orange real estate promotion design",
            image: "/posters/Blue and Orange Simple Real Estate Promo Facebook Post (3).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 103,
            title: "Dodol Promotion",
            description: "Traditional sweet promotion poster",
            image: "/posters/Dodol (1).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 104,
            title: "Food Promotion",
            description: "Delicious food promotional design",
            image: "/posters/Food Promotion.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 105,
            title: "Land Business",
            description: "Real estate business promotion",
            image: "/posters/Land Bussiness.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 106,
            title: "Land For Sale Premium",
            description: "Premium land sale advertisement",
            image: "/posters/LAND FOR SALE (24).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 107,
            title: "Land For Sale",
            description: "Professional land sale design",
            image: "/posters/Land For Sale (7).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 108,
            title: "Farm Activities",
            description: "Farm activities promotional design",
            image: "/posters/our activities while on the farm.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 109,
            title: "Panipuri Promotion",
            description: "Street food promotion poster",
            image: "/posters/Panipuri Promotion.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 110,
            title: "Real Estate Promotion",
            description: "Professional real estate marketing",
            image: "/posters/Realesate Promotion.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 111,
            title: "Rent House Promotion",
            description: "House rental advertisement",
            image: "/posters/Rent house Promotiion.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 112,
            title: "Rental Services",
            description: "Professional rental services advertisement",
            image: "/posters/Rental Services.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 113,
            title: "Sarbath Promotion",
            description: "Refreshing drink promotion (3000x4000px)",
            image: "/posters/Sarbath (3000 x 4000 px).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 114,
            title: "Shop23 Business",
            description: "Modern shop business promotion",
            image: "/posters/Shop23.png",
            category: "poster",
            featured: true
          },
          {
            id: 115,
            title: "Show Money Promotion",
            description: "Financial service advertisement",
            image: "/posters/Show money Promotion.png",
            category: "poster",
            featured: true
          },
          {
            id: 116,
            title: "Modern Design Layout",
            description: "Contemporary design poster (1080x1350px)",
            image: "/posters/Untitled (1080 x 1350 px).png",
            category: "poster",
            featured: true
          },
          {
            id: 117,
            title: "Smart Life Upgrade",
            description: "Technology upgrade promotional poster",
            image: "/posters/Upgrade to a Smarter Life!.jpg",
            category: "poster",
            featured: true
          },
          {
            id: 118,
            title: "Supermarket Promotion",
            description: "Professional supermarket promotional design",
            image: "/posters/Supper market promotion.jpg",
            category: "poster",
            featured: true
          }
        ];

        const invitations = [
          {
            id: 201,
            title: "Indian Wedding Invitation",
            description: "Light pink royal elegant floral wedding invitation",
            image: "/invitations/Light Pink Royal Elegant Floral Indian Wedding Invitation .jpg",
            category: "invitation",
            featured: true
          },
          {
            id: 202,
            title: "Formal Event Invitation",
            description: "We cordially invite you - elegant invitation design",
            image: "/invitations/We Cordially invite You (1).jpg",
            category: "invitation",
            featured: true
          }
        ];

        const allItems = [...logos, ...posters, ...invitations];
        setPortfolioItems(allItems);
        preloadCriticalImages(allItems);
        setLoading(false);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const categories = [
    { id: 'all', name: 'All Work', icon: Grid3X3 },
    { id: 'logo', name: 'Logos', icon: Palette },
    { id: 'poster', name: 'Posters', icon: FileText },
    { id: 'invitation', name: 'Invitations', icon: Heart },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const featuredItems = filteredItems.filter(item => item.featured);
  
  // Show featured items first, then all items if showAll is true
  const displayItems = showAll 
    ? filteredItems 
    : (featuredItems.length > 0 ? featuredItems : filteredItems.slice(0, 12));

  if (loading) {
    return (
      <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
            <p className="mt-4 text-slate-300">Loading portfolio...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Grid3X3 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Creative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400">
              Showcase
            </span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of premium designs, from professional logos to stunning promotional materials, 
            all crafted with attention to detail and creative excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setShowAll(false); // Reset to show featured/limited items when changing category
              }}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white border border-slate-700/50'
              }`}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                {!imageLoadStates[item.id] && <ImageSkeleton />}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                    setImageLoadStates(prev => ({ ...prev, [item.id]: true }));
                  }}
                  style={{ 
                    opacity: imageLoadStates[item.id] ? '1' : '0', 
                    transition: 'opacity 0.3s ease-in-out',
                    backgroundColor: '#1e293b' // slate-800 fallback
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-semibold text-sm sm:text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* View Button */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <button 
                      onClick={() => openModal(item)}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
                      aria-label={`View ${item.title}`}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-slate-700">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredItems.length > displayItems.length && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center mx-auto"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              View All
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {/* Show Less Button (when all items are displayed) */}
        {showAll && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(false)}
              className="px-6 py-3 bg-slate-800/60 hover:bg-slate-700/60 text-white font-medium rounded-xl transition-all duration-300 flex items-center mx-auto"
            >
              Show Less
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-slate-800/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <div 
              className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/95 border border-slate-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/90 hover:bg-slate-700/90 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  style={{ 
                    opacity: '0', 
                    transition: 'opacity 0.3s ease-in-out',
                    backgroundColor: '#1e293b'
                  }}
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent p-3 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mb-2 line-clamp-3">
                    {selectedImage.description}
                  </p>
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
