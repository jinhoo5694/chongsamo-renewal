'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cartItems = [
  {
    id: 1,
    name: 'VFC GLOCK45 GBB Upgraded',
    price: 349000,
    quantity: 1,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
  },
  {
    id: 2,
    name: 'VFC K403A1 KS-1 Suppressor Set',
    price: 159000,
    quantity: 2,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/b081960610b26b87d75d9e93f38b1f8f.jpg',
  },
];

const paymentMethods = [
  { id: 'card', label: '신용/체크카드', icon: '💳' },
  { id: 'bank', label: '무통장입금', icon: '🏦' },
  { id: 'kakao', label: '카카오페이', icon: '💛' },
  { id: 'naver', label: '네이버페이', icon: '💚' },
  { id: 'toss', label: '토스페이', icon: '💙' },
];

const coupons = [
  { id: 1, name: '신규 가입 축하 쿠폰', discount: 5000, minOrder: 30000 },
  { id: 2, name: '전 상품 10% 할인', discount: 0, discountRate: 10, minOrder: 50000 },
];

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    receiverName: '',
    receiverPhone: '',
    postcode: '',
    address: '',
    addressDetail: '',
    deliveryMessage: '',
    paymentMethod: 'card',
    usePoints: 0,
    selectedCoupon: null as number | null,
    agreeTerms: false,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 50000 ? 0 : 3000;
  const pointsDiscount = formData.usePoints;
  const couponDiscount = formData.selectedCoupon
    ? coupons.find((c) => c.id === formData.selectedCoupon)?.discount || 0
    : 0;
  const total = subtotal + shippingFee - pointsDiscount - couponDiscount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('결제 진행 필수 동의 항목에 동의해 주세요.');
      return;
    }
    alert('결제가 진행됩니다.');
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
              <Link href="/cart" className="text-zinc-500 hover:text-orange-500 transition">
                장바구니
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">주문/결제</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">주문/결제</h1>
            <p className="text-zinc-400">주문 정보를 확인하고 결제를 진행해 주세요</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Forms */}
              <div className="flex-1 space-y-6">
                {/* Order Items */}
                <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    주문 상품 ({cartItems.length}개)
                  </h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-zinc-900 dark:text-white">{item.name}</p>
                          <p className="text-sm text-zinc-500">수량: {item.quantity}개</p>
                          <p className="font-bold text-zinc-900 dark:text-white mt-1">
                            ₩{formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Shipping Info */}
                <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">배송 정보</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          받는 분 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.receiverName}
                          onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
                          placeholder="이름"
                          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.receiverPhone}
                          onChange={(e) => setFormData({ ...formData, receiverPhone: e.target.value })}
                          placeholder="010-0000-0000"
                          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        주소 <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          required
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          placeholder="우편번호"
                          className="w-32 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                          type="button"
                          className="px-4 py-3 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
                        >
                          주소 검색
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="기본 주소"
                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                      />
                      <input
                        type="text"
                        value={formData.addressDetail}
                        onChange={(e) => setFormData({ ...formData, addressDetail: e.target.value })}
                        placeholder="상세 주소"
                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        배송 메모
                      </label>
                      <select
                        value={formData.deliveryMessage}
                        onChange={(e) => setFormData({ ...formData, deliveryMessage: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">배송 메모를 선택하세요</option>
                        <option value="door">문 앞에 놓아주세요</option>
                        <option value="security">경비실에 맡겨주세요</option>
                        <option value="call">배송 전 연락 주세요</option>
                        <option value="direct">직접 입력</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Discount */}
                <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">할인 적용</h2>

                  {/* Points */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        적립금
                      </label>
                      <span className="text-sm text-zinc-500">
                        사용 가능: <span className="text-orange-500 font-medium">15,000원</span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={formData.usePoints}
                        onChange={(e) => setFormData({ ...formData, usePoints: parseInt(e.target.value) || 0 })}
                        max={15000}
                        min={0}
                        className="flex-1 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, usePoints: 15000 })}
                        className="px-4 py-3 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
                      >
                        전액사용
                      </button>
                    </div>
                  </div>

                  {/* Coupons */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      쿠폰
                    </label>
                    <select
                      value={formData.selectedCoupon || ''}
                      onChange={(e) => setFormData({ ...formData, selectedCoupon: e.target.value ? parseInt(e.target.value) : null })}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">쿠폰을 선택하세요 (보유 {coupons.length}장)</option>
                      {coupons.map((coupon) => (
                        <option key={coupon.id} value={coupon.id}>
                          {coupon.name} ({coupon.discount ? `${formatPrice(coupon.discount)}원` : `${coupon.discountRate}%`} 할인)
                        </option>
                      ))}
                    </select>
                  </div>
                </section>

                {/* Payment Method */}
                <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">결제 수단</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                        className={`p-4 rounded-xl border-2 transition text-center ${
                          formData.paymentMethod === method.id
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10'
                            : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{method.icon}</span>
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column - Summary */}
              <div className="lg:w-96">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">결제 금액</h2>

                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">상품 금액</span>
                      <span className="text-zinc-900 dark:text-white">₩{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">배송비</span>
                      <span className="text-zinc-900 dark:text-white">
                        {shippingFee === 0 ? (
                          <span className="text-green-500">무료</span>
                        ) : (
                          `₩${formatPrice(shippingFee)}`
                        )}
                      </span>
                    </div>
                    {pointsDiscount > 0 && (
                      <div className="flex justify-between text-orange-500">
                        <span>적립금 할인</span>
                        <span>-₩{formatPrice(pointsDiscount)}</span>
                      </div>
                    )}
                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-orange-500">
                        <span>쿠폰 할인</span>
                        <span>-₩{formatPrice(couponDiscount)}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center py-4 border-t border-zinc-100 dark:border-zinc-800 mb-6">
                    <span className="font-bold text-zinc-900 dark:text-white">총 결제 금액</span>
                    <span className="text-2xl font-bold text-orange-500">₩{formatPrice(total)}</span>
                  </div>

                  {/* Expected Points */}
                  <div className="p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg mb-6">
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      결제 시 <span className="font-bold">{formatPrice(Math.floor(total * 0.01))}원</span> 적립 예정
                    </p>
                  </div>

                  {/* Terms Agreement */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="w-5 h-5 mt-0.5 text-orange-500 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        주문 내용을 확인하였으며, 결제 진행에 동의합니다.
                        <span className="text-red-500"> (필수)</span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition"
                  >
                    ₩{formatPrice(total)} 결제하기
                  </button>

                  <p className="mt-4 text-xs text-center text-zinc-500">
                    위 주문 내용을 확인하였으며, 결제 진행에 동의합니다.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
