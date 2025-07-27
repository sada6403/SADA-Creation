import React, { useState, useEffect } from 'react';
import { Eye, ExternalLink, Grid3X3, Palette, FileText, Heart } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

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
            title: "Digital Marketing Webinar",
            description: "Professional webinar promotion poster",
            image: "/posters/digital marketing webinar (5).jpg",
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
            title: "Land Sale Advertisement",
            description: "Professional land sale poster design",
            image: "/posters/Land For Sale (10).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 104,
            title: "Digital Marketing Agency",
            description: "Green modern digital marketing agency post",
            image: "/posters/Green Modern Digital Marketing Agency (Facebook Post).jpg",
            category: "poster",
            featured: true
          },
          {
            id: 105,
            title: "Business Contact Card",
            description: "Professional business contact design",
            image: "/posters/074 3012 735 (2).jpg",
            category: "poster"
          },
          {
            id: 106,
            title: "Rental Services",
            description: "Professional rental services advertisement",
            image: "/posters/Rental Services.jpg",
            category: "poster"
          },
          {
            id: 107,
            title: "Farm Activities",
            description: "Farm activities promotional design",
            image: "/posters/our activities while on the farm.jpg",
            category: "poster"
          },
          {
            id: 108,
            title: "Smart Life Upgrade",
            description: "Technology upgrade promotional poster",
            image: "/posters/Upgrade to a Smarter Life!.jpg",
            category: "poster"
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
  const displayItems = featuredItems.length > 0 ? featuredItems : filteredItems.slice(0, 12);

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
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white border border-slate-700/50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* View Button */}
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                      <Eye className="w-5 h-5 text-slate-900" />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-4 right-4">
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
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center mx-auto">
              <Grid3X3 className="w-5 h-5 mr-2" />
              View More Work
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-800/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-slate-400">Logo Designs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
