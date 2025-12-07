'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const menuItems = [
  { id: 'orders', label: '주문내역', icon: '📦' },
  { id: 'wishlist', label: '위시리스트', icon: '❤️' },
  { id: 'reviews', label: '내 리뷰', icon: '⭐' },
  { id: 'points', label: '적립금', icon: '💰' },
  { id: 'coupons', label: '쿠폰', icon: '🎟️' },
  { id: 'profile', label: '회원정보', icon: '👤' },
];

const orderHistory = [
  {
    id: 'ORD-2024-001234',
    date: '2024-11-15',
    status: '배송완료',
    statusColor: 'green',
    items: [
      {
        name: 'VFC GLOCK45 GBB Upgraded',
        price: 349000,
        image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
      },
    ],
    total: 349000,
  },
  {
    id: 'ORD-2024-001189',
    date: '2024-11-10',
    status: '배송중',
    statusColor: 'blue',
    items: [
      {
        name: 'GHK AKM V3 GBBR Steel',
        price: 1040000,
        image: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
      },
      {
        name: 'VFC K403A1 KS-1 Suppressor Set',
        price: 159000,
        image: 'https://chongsamo.co.kr/web/product/medium/202508/b081960610b26b87d75d9e93f38b1f8f.jpg',
      },
    ],
    total: 1199000,
  },
];

const wishlistItems = [
  {
    id: 1,
    name: 'VFC KAC L403A1 KS-1 GBBR',
    price: 1130000,
    image: 'https://chongsamo.co.kr/web/product/medium/202511/280f939147bbf0b8ba06604cb858a4eb.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: 'GHK DDM4 PDW V3 GBBR',
    price: 1080000,
    image: 'https://chongsamo.co.kr/web/product/medium/202511/1df13234b90e4a86c6da3f2c6916a104.jpg',
    inStock: true,
  },
  {
    id: 3,
    name: 'STS K2C1 GBBR',
    price: 2700000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d497bbe55d67760f7f7b5a1929e3da88.jpg',
    inStock: false,
  },
];

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('orders');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const user = {
    name: '홍길동',
    email: 'hong@example.com',
    memberSince: '2023-05-15',
    points: 15000,
    couponCount: 3,
    orderCount: 12,
    reviewCount: 5,
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* User Info Card */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user.name}님</h1>
                  <p className="text-white/80">{user.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold">{user.orderCount}</p>
                  <p className="text-sm text-white/80">주문</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">₩{formatPrice(user.points)}</p>
                  <p className="text-sm text-white/80">적립금</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.couponCount}</p>
                  <p className="text-sm text-white/80">쿠폰</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Menu */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-6 py-4 text-left transition ${
                      activeTab === item.id
                        ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500 border-l-4 border-orange-500'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1">
              {activeTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    주문내역
                  </h2>
                  {orderHistory.map((order) => (
                    <div
                      key={order.id}
                      className="bg-white dark:bg-zinc-900 rounded-xl p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                        <div>
                          <p className="text-sm text-zinc-500">{order.date}</p>
                          <p className="font-medium text-zinc-900 dark:text-white">
                            {order.id}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.statusColor === 'green'
                              ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>

                      {order.items.map((item, index) => (
                        <div key={index} className="flex gap-4 mb-4">
                          <div className="relative w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div>
                            <p className="font-medium text-zinc-900 dark:text-white">
                              {item.name}
                            </p>
                            <p className="text-zinc-500">
                              ₩{formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <span className="text-zinc-500">
                          총 {order.items.length}개 상품
                        </span>
                        <span className="font-bold text-zinc-900 dark:text-white">
                          ₩{formatPrice(order.total)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    위시리스트
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white dark:bg-zinc-900 rounded-xl p-4 flex gap-4"
                      >
                        <div className="relative w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">품절</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <Link
                            href={`/product/${item.id}`}
                            className="font-medium text-zinc-900 dark:text-white hover:text-orange-500 transition"
                          >
                            {item.name}
                          </Link>
                          <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">
                            ₩{formatPrice(item.price)}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <button
                              disabled={!item.inStock}
                              className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-300 text-white text-sm rounded-lg transition"
                            >
                              장바구니
                            </button>
                            <button className="px-4 py-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                              삭제
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'points' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    적립금
                  </h2>
                  <div className="bg-white dark:bg-zinc-900 rounded-xl p-6">
                    <div className="text-center mb-8">
                      <p className="text-zinc-500 mb-2">사용 가능한 적립금</p>
                      <p className="text-4xl font-bold text-orange-500">
                        ₩{formatPrice(user.points)}
                      </p>
                    </div>
                    <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
                      <h3 className="font-medium text-zinc-900 dark:text-white mb-4">
                        적립금 내역
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">상품 구매 적립 (2024-11-15)</span>
                          <span className="text-green-500">+3,490원</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">리뷰 작성 적립 (2024-11-14)</span>
                          <span className="text-green-500">+500원</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">적립금 사용 (2024-11-10)</span>
                          <span className="text-red-500">-5,000원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'coupons' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    보유 쿠폰 ({user.couponCount}장)
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-orange-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-2xl font-bold text-orange-500">10%</p>
                          <p className="font-medium text-zinc-900 dark:text-white mt-1">
                            전 상품 10% 할인
                          </p>
                          <p className="text-sm text-zinc-500 mt-2">
                            50,000원 이상 구매시 사용 가능
                          </p>
                        </div>
                        <span className="text-sm text-zinc-500">~2024.12.31</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-blue-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-2xl font-bold text-blue-500">₩5,000</p>
                          <p className="font-medium text-zinc-900 dark:text-white mt-1">
                            신규 가입 축하 쿠폰
                          </p>
                          <p className="text-sm text-zinc-500 mt-2">
                            30,000원 이상 구매시 사용 가능
                          </p>
                        </div>
                        <span className="text-sm text-zinc-500">~2024.12.15</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-2xl font-bold text-green-500">무료배송</p>
                          <p className="font-medium text-zinc-900 dark:text-white mt-1">
                            무료배송 쿠폰
                          </p>
                          <p className="text-sm text-zinc-500 mt-2">
                            제한 없음
                          </p>
                        </div>
                        <span className="text-sm text-zinc-500">~2024.12.31</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    내 리뷰
                  </h2>
                  <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 text-center">
                    <p className="text-zinc-500">작성한 리뷰가 없습니다.</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                    회원정보
                  </h2>
                  <div className="bg-white dark:bg-zinc-900 rounded-xl p-6">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          이름
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          readOnly
                          className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          이메일
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          readOnly
                          className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          가입일
                        </label>
                        <input
                          type="text"
                          value={user.memberSince}
                          readOnly
                          className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                        />
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition">
                          정보 수정
                        </button>
                        <button className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-medium rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                          비밀번호 변경
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
