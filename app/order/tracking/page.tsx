'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface TrackingResult {
  orderId: string;
  orderDate: string;
  status: string;
  statusDetail: string;
  items: { name: string; quantity: number }[];
  shipping: {
    carrier: string;
    trackingNumber: string;
    estimatedDelivery: string;
    history: { date: string; time: string; status: string; location: string }[];
  } | null;
}

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulated API call
    setTimeout(() => {
      if (orderId === 'ORD-2024-001234') {
        setResult({
          orderId: 'ORD-2024-001234',
          orderDate: '2024-12-01',
          status: '배송중',
          statusDetail: '상품이 배송 중입니다.',
          items: [
            { name: 'VFC GLOCK45 GBB Upgraded', quantity: 1 },
          ],
          shipping: {
            carrier: 'CJ대한통운',
            trackingNumber: '123456789012',
            estimatedDelivery: '2024-12-03',
            history: [
              { date: '2024-12-02', time: '14:30', status: '배송출발', location: '강남 대리점' },
              { date: '2024-12-02', time: '09:00', status: '배송준비중', location: '강남 대리점' },
              { date: '2024-12-01', time: '18:00', status: '상품인수', location: '서울 Hub' },
              { date: '2024-12-01', time: '15:00', status: '발송완료', location: '판매자' },
            ],
          },
        });
      } else {
        setError('주문을 찾을 수 없습니다. 주문번호와 휴대폰 번호를 확인해 주세요.');
        setResult(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '배송완료':
        return 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400';
      case '배송중':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400';
      case '배송준비중':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400';
      default:
        return 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-orange-500 transition">
                홈
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">주문 조회</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">주문 조회</h1>
            <p className="text-zinc-400">비회원 주문 배송 현황을 조회하세요</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Search Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  주문번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="예: ORD-2024-001234"
                  required
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  주문 시 입력한 휴대폰 번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="예: 010-1234-5678"
                  required
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-300 text-white font-bold rounded-xl transition"
              >
                {isLoading ? '조회 중...' : '주문 조회'}
              </button>
            </form>

            <p className="mt-4 text-sm text-zinc-500 text-center">
              회원이신가요?{' '}
              <Link href="/login" className="text-orange-500 hover:underline">
                로그인
              </Link>
              하시면 마이페이지에서 주문내역을 확인하실 수 있습니다.
            </p>
          </div>

          {/* Tracking Result */}
          {result && (
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              {/* Order Summary */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-sm text-zinc-500 mb-1">주문번호</p>
                  <p className="font-bold text-zinc-900 dark:text-white">{result.orderId}</p>
                  <p className="text-sm text-zinc-500 mt-1">주문일: {result.orderDate}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(result.status)}`}>
                  {result.status}
                </span>
              </div>

              {/* Items */}
              <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <h3 className="font-medium text-zinc-900 dark:text-white mb-3">주문 상품</h3>
                {result.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">{item.name}</span>
                    <span className="text-zinc-500">{item.quantity}개</span>
                  </div>
                ))}
              </div>

              {/* Shipping Info */}
              {result.shipping && (
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-4">배송 현황</h3>

                  <div className="flex items-center gap-4 mb-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <div className="flex-1">
                      <p className="text-sm text-zinc-500">택배사</p>
                      <p className="font-medium text-zinc-900 dark:text-white">{result.shipping.carrier}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-zinc-500">운송장 번호</p>
                      <p className="font-medium text-zinc-900 dark:text-white">{result.shipping.trackingNumber}</p>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition">
                      택배 추적
                    </button>
                  </div>

                  {/* Tracking History */}
                  <div className="relative">
                    <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
                    <div className="space-y-4">
                      {result.shipping.history.map((step, index) => (
                        <div key={index} className="relative flex gap-4 pl-6">
                          <div
                            className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                              index === 0
                                ? 'bg-orange-500 border-orange-500'
                                : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600'
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-zinc-500">{step.date}</span>
                              <span className="text-sm text-zinc-500">{step.time}</span>
                            </div>
                            <p className={`font-medium ${index === 0 ? 'text-orange-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                              {step.status}
                            </p>
                            <p className="text-sm text-zinc-500">{step.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Help Box */}
          <div className="mt-8 bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 text-center">
            <h3 className="font-medium text-zinc-900 dark:text-white mb-2">도움이 필요하신가요?</h3>
            <p className="text-sm text-zinc-500 mb-4">
              주문 관련 문의사항은 고객센터로 연락해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/support/inquiry"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition"
              >
                1:1 상담
              </Link>
              <a
                href="tel:02-1234-5678"
                className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
