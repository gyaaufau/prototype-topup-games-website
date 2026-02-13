import { Link } from 'react-router-dom';
import { games } from '../data/mockData';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Zap, Shield, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import type { Slide, Game } from '../types';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [displayedGames, setDisplayedGames] = useState<Game[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const observerTarget = useRef<HTMLDivElement>(null);

    const GAMES_PER_PAGE = 12;

    const slides: Slide[] = [
        {
            id: 1,
            title: 'Special Event!',
            subtitle: 'Get 50% Bonus Diamonds',
            description: 'Limited time offer for Mobile Legends players',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
            gradient: 'from-purple-600 via-pink-600 to-blue-600'
        },
        {
            id: 2,
            title: 'New Game Added!',
            subtitle: 'Top Up Honkai: Star Rail',
            description: 'Start your journey with exclusive bonuses',
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065',
            gradient: 'from-pink-600 via-purple-600 to-indigo-600'
        },
        {
            id: 3,
            title: 'Weekend Special',
            subtitle: 'Free Fire Top Up Bonus',
            description: 'Double your diamonds this weekend only',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071',
            gradient: 'from-orange-600 via-red-600 to-pink-600'
        }
    ];

    // Load initial games
    useEffect(() => {
        loadMoreGames();
    }, []);

    // Carousel auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Infinite scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMoreGames();
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [hasMore, loading]);

    const loadMoreGames = useCallback(() => {
        if (loading) return;

        setLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            const startIndex = (page - 1) * GAMES_PER_PAGE;
            const endIndex = startIndex + GAMES_PER_PAGE;
            const newGames = games.slice(startIndex, endIndex);

            if (newGames.length > 0) {
                setDisplayedGames((prev) => [...prev, ...newGames]);
                setPage((prev) => prev + 1);
            }

            if (endIndex >= games.length) {
                setHasMore(false);
            }

            setLoading(false);
        }, 500);
    }, [page, loading]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#061E29] via-[#061E29] to-[#061E29]">
            {/* Hero Section with Carousel */}
            <section className="relative overflow-hidden">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                }`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#061E29] via-[#061E29]/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                                <div className="text-white max-w-2xl animate-fade-in">
                                    <div className="inline-flex items-center gap-2 bg-[#5F9598]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#5F9598]/30">
                                        <Zap className="w-4 h-4 text-[#75bdc3]" />
                                        <span className="text-[#a3d3d7] text-sm font-semibold">Limited Offer</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-tight">
                                        {slide.title}
                                    </h2>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#75bdc3] mb-4">
                                        {slide.subtitle}
                                    </h3>
                                    <p className="text-slate-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <button className="group bg-[#5F9598] hover:bg-[#47878a] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-[#5F9598]/50 hover:scale-105 inline-flex items-center gap-2">
                                        <span>Top Up Now</span>
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-pink-400 w-8 sm:w-10'
                                    : 'bg-white/50 hover:bg-white/70 w-1.5 sm:w-2'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-[#0a2838]/50 backdrop-blur-sm border border-[#1D546D] rounded-xl p-6 hover:border-[#5F9598]/50 transition-all">
                        <div className="bg-gradient-to-br from-[#5F9598] to-[#1D546D] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Instant Delivery</h3>
                        <p className="text-slate-400 text-sm">Get your items delivered within seconds after payment confirmation</p>
                    </div>
                    <div className="bg-[#0a2838]/50 backdrop-blur-sm border border-[#1D546D] rounded-xl p-6 hover:border-[#5F9598]/50 transition-all">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">100% Secure</h3>
                        <p className="text-slate-400 text-sm">Your data and transactions are protected with advanced security</p>
                    </div>
                    <div className="bg-[#0a2838]/50 backdrop-blur-sm border border-[#1D546D] rounded-xl p-6 hover:border-[#5F9598]/50 transition-all">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Best Price</h3>
                        <p className="text-slate-400 text-sm">Competitive prices with regular promotions and bonus offers</p>
                    </div>
                </div>
            </section>

            {/* Game List Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 flex items-center gap-3">
                            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#75bdc3] fill-[#75bdc3]" />
                            Popular Games
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Choose your favorite game and top up now • {games.length} games available
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                    {displayedGames.map((game, index) => (
                        <Link
                            key={game.id}
                            to={`/topup/${game.id}`}
                            className="group cursor-pointer animate-fade-in"
                            style={{ animationDelay: `${(index % GAMES_PER_PAGE) * 50}ms` }}
                        >
                            <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1D546D] hover:border-[#5F9598] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#5F9598]/20 card-hover">
                                {/* Game Image */}
                                <div className="aspect-[3/4] overflow-hidden relative bg-[#1D546D]">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Category Badge */}
                                    {game.category && (
                                        <div className="absolute top-2 left-2">
                                            <span className="bg-[#0a2838]/80 backdrop-blur-sm text-[#75bdc3] text-xs font-semibold px-2 py-1 rounded">
                                                {game.category}
                                            </span>
                                        </div>
                                    )}
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#061E29] via-[#061E29]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="inline-block bg-[#5F9598] text-white text-xs font-bold px-2 py-1 rounded">
                                                Top Up Now
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Game Info */}
                                <div className="p-3 sm:p-4">
                                    <h3 className="text-white font-bold text-sm md:text-base truncate mb-1">
                                        {game.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs">{game.developer}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Loading Indicator */}
                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <Loader2 className="w-8 h-8 text-[#5F9598] animate-spin" />
                        <span className="ml-3 text-slate-400">Loading more games...</span>
                    </div>
                )}

                {/* Intersection Observer Target */}
                <div ref={observerTarget} className="h-4" />

                {/* End Message */}
                {!hasMore && displayedGames.length > 0 && (
                    <div className="text-center py-8">
                        <p className="text-slate-400 text-sm">
                            🎮 You've seen all {games.length} available games
                        </p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="bg-gradient-to-r from-[#5F9598] via-[#1D546D] to-[#061E29] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                            Ready to Level Up?
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied gamers. Fast, secure, and reliable top-up service!
                        </p>
                        <button className="bg-[#0a2838] hover:bg-[#1D546D] text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105 inline-flex items-center gap-2">
                            <span>Start Top Up</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
