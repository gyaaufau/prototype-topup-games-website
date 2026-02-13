import { useParams, useNavigate } from 'react-router-dom';
import { games, nominals, payments } from '../data/mockData';
import { useState } from 'react';
import { ArrowLeft, Info, CheckCircle2, CreditCard } from 'lucide-react';
import type { Nominal, Payment } from '../types';

interface FormData {
    userId: string;
    serverId: string;
    selectedNominal: Nominal | null;
    selectedPayment: Payment | null;
}

const TopUp = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const game = games.find((g) => g.id === id);

    const [formData, setFormData] = useState<FormData>({
        userId: '',
        serverId: '',
        selectedNominal: null,
        selectedPayment: null
    });

    if (!game) {
        return (
            <div className="min-h-screen bg-[#061E29] flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#5F9598] hover:bg-[#47878a] text-white font-bold px-6 py-3 rounded-xl transition-all"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleNominalClick = (nominal: Nominal) => {
        setFormData((prev) => ({
            ...prev,
            selectedNominal: prev.selectedNominal?.id === nominal.id ? null : nominal
        }));
    };

    const handlePaymentClick = (payment: Payment) => {
        setFormData((prev) => ({
            ...prev,
            selectedPayment: prev.selectedPayment?.id === payment.id ? null : payment
        }));
    };

    const handleBuyNow = () => {
        if (!formData.userId || !formData.serverId) {
            alert('Please fill in User ID and Server ID');
            return;
        }
        if (!formData.selectedNominal) {
            alert('Please select a nominal amount');
            return;
        }
        if (!formData.selectedPayment) {
            alert('Please select a payment method');
            return;
        }

        // Prepare order data for invoice
        const orderData = {
            game: game.title,
            userId: formData.userId,
            serverId: formData.serverId,
            item: formData.selectedNominal.amount,
            price: formData.selectedNominal.price,
            payment: formData.selectedPayment.name,
        };

        // Navigate to invoice page with order data
        navigate('/invoice', { state: { orderData } });
    };

    const totalPrice = formData.selectedNominal?.price || 0;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#061E29] via-[#061E29] to-[#061E29] pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Left Column - Game Info & Instructions */}
                    <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                        {/* Game Info Card */}
                        <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] overflow-hidden shadow-xl">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#061E29] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl font-black text-white mb-1">{game.title}</h2>
                                <p className="text-slate-400 text-sm">{game.developer}</p>
                                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span className="font-medium">Available for Top Up</span>
                                </div>
                            </div>
                        </div>

                        {/* Instructions Card */}
                        <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] p-5 sm:p-6 shadow-xl">
                            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-4">
                                <div className="bg-gradient-to-br from-[#5F9598] to-[#1D546D] p-1.5 rounded-lg">
                                    <Info className="w-4 h-4 text-white" />
                                </div>
                                How to Top Up
                            </h3>
                            <ol className="space-y-3 text-slate-300 text-sm">
                                <li className="flex gap-3">
                                    <span className="shrink-0 w-6 h-6 bg-gradient-to-br from-[#5F9598] to-[#1D546D] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                        1
                                    </span>
                                    <span>Enter your User ID and Server ID</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 w-6 h-6 bg-gradient-to-br from-[#5F9598] to-[#1D546D] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                        2
                                    </span>
                                    <span>Select the nominal amount you want</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 w-6 h-6 bg-gradient-to-br from-[#5F9598] to-[#1D546D] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                        3
                                    </span>
                                    <span>Choose your payment method</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 w-6 h-6 bg-gradient-to-br from-[#5F9598] to-[#1D546D] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                        4
                                    </span>
                                    <span>Click "Buy Now" to complete your order</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        {/* Input Section */}
                        <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] p-5 sm:p-6 shadow-xl">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <div className="w-2 h-6 bg-gradient-to-b from-[#5F9598] to-[#1D546D] rounded-full"></div>
                                Account Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-2">
                                        User ID <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.userId}
                                        onChange={(e) =>
                                            setFormData({ ...formData, userId: e.target.value })
                                        }
                                        placeholder="Enter User ID"
                                        className="w-full bg-[#1D546D] text-white placeholder-slate-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#5F9598] border border-[#0f3447] hover:border-[#1D546D] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-2">
                                        Server ID <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.serverId}
                                        onChange={(e) =>
                                            setFormData({ ...formData, serverId: e.target.value })
                                        }
                                        placeholder="Enter Server ID"
                                        className="w-full bg-[#1D546D] text-white placeholder-slate-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#5F9598] border border-[#0f3447] hover:border-[#1D546D] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Nominal Section */}
                        <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] p-5 sm:p-6 shadow-xl">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <div className="w-2 h-6 bg-gradient-to-b from-[#5F9598] to-[#1D546D] rounded-full"></div>
                                Select Nominal
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                                {nominals.map((nominal) => (
                                    <button
                                        key={nominal.id}
                                        onClick={() => handleNominalClick(nominal)}
                                        className={`bg-[#1D546D] hover:bg-[#0f3447] rounded-xl p-3 sm:p-4 border-2 transition-all duration-200 relative overflow-hidden ${formData.selectedNominal?.id === nominal.id
                                            ? 'border-[#5F9598] shadow-lg shadow-[#5F9598]/20'
                                            : 'border-[#0f3447] hover:border-[#1D546D]'
                                            }`}
                                    >
                                        {formData.selectedNominal?.id === nominal.id && (
                                            <div className="absolute top-2 right-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#5F9598] fill-[#5F9598]" />
                                            </div>
                                        )}
                                        <div className="text-white font-bold text-xs sm:text-sm mb-1">
                                            {nominal.amount}
                                        </div>
                                        <div className="text-[#75bdc3] font-bold text-sm sm:text-base">
                                            Rp {nominal.price.toLocaleString('id-ID')}
                                        </div>
                                        {nominal.bonus > 0 && (
                                            <div className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded-full mt-2 inline-block">
                                                +{nominal.bonus} Bonus
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] p-5 sm:p-6 shadow-xl">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <div className="w-2 h-6 bg-gradient-to-b from-[#5F9598] to-[#1D546D] rounded-full"></div>
                                Payment Method
                            </h3>
                            <div className="space-y-4">
                                {['E-Wallet', 'QRIS', 'VA'].map((category) => (
                                    <div key={category}>
                                        <h4 className="text-slate-400 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wider flex items-center gap-2">
                                            <CreditCard className="w-4 h-4" />
                                            {category}
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                            {payments
                                                .filter((p) => p.category === category)
                                                .map((payment) => (
                                                    <button
                                                        key={payment.id}
                                                        onClick={() => handlePaymentClick(payment)}
                                                        className={`bg-[#1D546D] hover:bg-[#0f3447] rounded-xl p-3 sm:p-4 border-2 transition-all duration-200 flex items-center gap-3 relative ${formData.selectedPayment?.id === payment.id
                                                            ? 'border-[#5F9598] shadow-lg shadow-[#5F9598]/20'
                                                            : 'border-[#0f3447] hover:border-[#1D546D]'
                                                            }`}
                                                    >
                                                        {formData.selectedPayment?.id === payment.id && (
                                                            <div className="absolute top-2 right-2">
                                                                <CheckCircle2 className="w-4 h-4 text-[#5F9598] fill-[#5F9598]" />
                                                            </div>
                                                        )}
                                                        <span className="text-2xl">{payment.logo}</span>
                                                        <span className="text-white font-semibold text-sm">
                                                            {payment.name}
                                                        </span>
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary - Desktop */}
                        <div className="hidden md:block bg-[#0a2838] rounded-xl sm:rounded-2xl border border-[#1D546D] p-5 sm:p-6 shadow-xl">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Order Summary</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Game</span>
                                    <span className="text-white font-medium">{game.title}</span>
                                </div>
                                {formData.selectedNominal && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Item</span>
                                        <span className="text-white font-medium">{formData.selectedNominal.amount}</span>
                                    </div>
                                )}
                                {formData.selectedPayment && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Payment</span>
                                        <span className="text-white font-medium">{formData.selectedPayment.name}</span>
                                    </div>
                                )}
                                <div className="border-t border-[#1D546D] pt-3 mt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-300 font-semibold">Total</span>
                                        <span className="text-[#75bdc3] font-black text-xl sm:text-2xl">
                                            Rp {totalPrice.toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buy Now Button - Desktop */}
                        <button
                            onClick={handleBuyNow}
                            className="hidden md:flex w-full bg-[#5F9598] hover:bg-[#47878a] text-white font-black py-4 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-xl hover:shadow-[#5F9598]/30 hover:scale-[1.02] items-center justify-center gap-2"
                        >
                            <CreditCard className="w-5 h-5" />
                            <span>Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Bar (Mobile Only) */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0a2838]/95 backdrop-blur-md border-t border-[#1D546D] p-4 md:hidden z-50 shadow-2xl">
                <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                    <div className="flex-1">
                        <p className="text-slate-400 text-xs mb-1">Total Price</p>
                        <p className="text-[#75bdc3] font-black text-lg sm:text-xl">
                            {totalPrice > 0 ? `Rp ${totalPrice.toLocaleString('id-ID')}` : 'Select Item'}
                        </p>
                    </div>
                    <button
                        onClick={handleBuyNow}
                        className="shrink-0 bg-[#5F9598] hover:bg-[#47878a] text-white font-black px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:scale-105 flex items-center gap-2"
                    >
                        <CreditCard className="w-4 h-4" />
                        <span>Buy Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopUp;
