import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, Download, Share2, Home, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { OrderData } from '../types';

const Invoice = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [copied, setCopied] = useState<boolean>(false);
    const orderData = location.state?.orderData as OrderData | undefined;

    useEffect(() => {
        // If no order data, redirect to home
        if (!orderData) {
            navigate('/');
        }
    }, [orderData, navigate]);

    if (!orderData) {
        return null;
    }

    // Generate invoice number and transaction time
    const invoiceNumber = `INV/${new Date().getFullYear()}/${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const transactionTime = new Date().toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const copyInvoiceNumber = () => {
        navigator.clipboard.writeText(invoiceNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        alert('Download invoice feature will be available soon!');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Invoice GyaStore',
                text: `Invoice #${invoiceNumber}`,
                url: window.location.href,
            });
        } else {
            alert('Share feature is not supported on this browser');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#061E29] via-[#061E29] to-[#061E29] py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Message */}
                <div className="text-center mb-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full mb-4">
                        <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
                        Payment Successful!
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Your top-up has been processed successfully
                    </p>
                </div>

                {/* Invoice Card */}
                <div className="bg-[#0a2838] rounded-2xl border border-[#1D546D] overflow-hidden shadow-2xl mb-6">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#5F9598] to-[#1D546D] p-6 sm:p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                                    GyaStore
                                </h2>
                                <p className="text-[#d1e9eb] text-sm">Invoice / Receipt</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[#d1e9eb] text-xs sm:text-sm font-semibold mb-1">Invoice No.</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-sm sm:text-base">
                                        {invoiceNumber}
                                    </span>
                                    <button
                                        onClick={copyInvoiceNumber}
                                        className="p-1.5 hover:bg-white/20 rounded transition-colors"
                                        title="Copy invoice number"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4 text-white" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-white" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                        {/* Transaction Time */}
                        <div className="bg-[#1D546D]/50 rounded-xl p-4">
                            <p className="text-slate-400 text-xs mb-1">Transaction Time</p>
                            <p className="text-white font-semibold text-sm">{transactionTime}</p>
                        </div>

                        {/* Order Details */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-[#5F9598] to-[#1D546D] rounded-full"></div>
                                Order Details
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start border-b border-[#1D546D] pb-3">
                                    <span className="text-slate-400 text-sm">Game</span>
                                    <span className="text-white font-semibold text-sm text-right">
                                        {orderData.game}
                                    </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-[#1D546D] pb-3">
                                    <span className="text-slate-400 text-sm">Item</span>
                                    <span className="text-white font-semibold text-sm">
                                        {orderData.item}
                                    </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-[#1D546D] pb-3">
                                    <span className="text-slate-400 text-sm">User ID</span>
                                    <span className="text-white font-semibold text-sm">
                                        {orderData.userId}
                                    </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-[#1D546D] pb-3">
                                    <span className="text-slate-400 text-sm">Server ID</span>
                                    <span className="text-white font-semibold text-sm">
                                        {orderData.serverId}
                                    </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-[#1D546D] pb-3">
                                    <span className="text-slate-400 text-sm">Payment Method</span>
                                    <span className="text-white font-semibold text-sm">
                                        {orderData.payment}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Summary */}
                        <div className="bg-[#1D546D]/50 rounded-xl p-4 sm:p-6">
                            <h3 className="text-white font-bold text-lg mb-4">Payment Summary</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-slate-400 text-sm">Item Price</span>
                                    <span className="text-white font-semibold">
                                        Rp {orderData.price.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400 text-sm">Admin Fee</span>
                                    <span className="text-white font-semibold">Rp 0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400 text-sm">Discount</span>
                                    <span className="text-green-400 font-semibold">Rp 0</span>
                                </div>
                                <div className="border-t border-[#0f3447] pt-3 mt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-300 font-bold text-base">Total Payment</span>
                                        <span className="text-[#75bdc3] font-black text-xl sm:text-2xl">
                                            Rp {orderData.price.toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                            <div>
                                <p className="text-green-400 font-bold text-sm">Payment Completed</p>
                                <p className="text-green-300/80 text-xs mt-1">
                                    Your items will be delivered to your game account within 5 minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-[#1D546D]/30 p-6 sm:p-8 border-t border-[#1D546D]">
                        <p className="text-slate-400 text-xs text-center">
                            Thank you for shopping at GyaStore! If you have any questions, please contact our customer service.
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <button
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 bg-[#1D546D] hover:bg-[#1D546D] text-white font-semibold py-3 px-4 rounded-xl transition-all border border-[#0f3447] hover:border-[#1D546D]"
                    >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                    </button>
                    <button
                        onClick={handleShare}
                        className="flex items-center justify-center gap-2 bg-[#1D546D] hover:bg-[#1D546D] text-white font-semibold py-3 px-4 rounded-xl transition-all border border-[#0f3447] hover:border-[#1D546D]"
                    >
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                    </button>
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-[#5F9598] hover:bg-[#47878a] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-[#5F9598]/30"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="bg-[#0a2838]/50 backdrop-blur-sm border border-[#1D546D] rounded-xl p-4 sm:p-6">
                    <h4 className="text-white font-bold text-sm mb-3">📢 Important Notes:</h4>
                    <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-[#5F9598] mt-0.5">•</span>
                            <span>Items will be delivered automatically to your game account</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#5F9598] mt-0.5">•</span>
                            <span>Please check your in-game inbox/mail if items don't appear immediately</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#5F9598] mt-0.5">•</span>
                            <span>Save this invoice for your records</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#5F9598] mt-0.5">•</span>
                            <span>Contact support if you don't receive your items within 1 hour</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
