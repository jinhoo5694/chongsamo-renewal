'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'VFC GLOCK45 GBB Upgraded',
    brand: 'VFC',
    price: 349000,
    quantity: 1,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
  },
  {
    id: 2,
    name: 'GHK AKM V3 GBBR Steel',
    brand: 'GHK',
    price: 1040000,
    quantity: 1,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
  },
  {
    id: 3,
    name: 'VFC K403A1 KS-1 Suppressor Set',
    brand: 'VFC',
    price: 159000,
    quantity: 2,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/b081960610b26b87d75d9e93f38b1f8f.jpg',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<number[]>(cartItems.map((item) => item.id));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    setSelectedItems((selected) => selected.filter((itemId) => itemId !== id));
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems((selected) =>
      selected.includes(id) ? selected.filter((itemId) => itemId !== id) : [...selected, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const selectedCartItems = cartItems.filter((item) => selectedItems.includes(item.id));
  const subtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 50000 ? 0 : 3000;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            장바구니
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">
                장바구니가 비어있습니다
              </h2>
              <p className="text-zinc-500 mb-6">원하시는 상품을 장바구니에 담아보세요</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
              >
                쇼핑 계속하기
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                {/* Select All */}
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 mb-4 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === cartItems.length}
                      onChange={toggleSelectAll}
                      className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500"
                    />
                    <span className="font-medium text-zinc-900 dark:text-white">
                      전체선택 ({selectedItems.length}/{cartItems.length})
                    </span>
                  </label>
                  <button
                    onClick={() => {
                      setCartItems((items) => items.filter((item) => !selectedItems.includes(item.id)));
                      setSelectedItems([]);
                    }}
                    className="text-sm text-zinc-500 hover:text-red-500 transition"
                  >
                    선택 삭제
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-zinc-900 rounded-xl p-4 md:p-6"
                    >
                      <div className="flex gap-4">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                          className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500 flex-shrink-0 mt-8"
                        />

                        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-orange-500 font-medium">{item.brand}</p>
                              <Link
                                href={`/product/${item.id}`}
                                className="font-medium text-zinc-900 dark:text-white hover:text-orange-500 transition line-clamp-2"
                              >
                                {item.name}
                              </Link>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-zinc-400 hover:text-red-500 transition"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
                              >
                                -
                              </button>
                              <span className="px-3 py-1.5 font-medium text-zinc-900 dark:text-white min-w-[2.5rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-lg font-bold text-zinc-900 dark:text-white">
                              ₩{formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-96">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 sticky top-24">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">
                    주문 요약
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>상품 금액</span>
                      <span>₩{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>배송비</span>
                      <span>
                        {shippingFee === 0 ? (
                          <span className="text-green-500">무료</span>
                        ) : (
                          `₩${formatPrice(shippingFee)}`
                        )}
                      </span>
                    </div>
                    {shippingFee > 0 && (
                      <p className="text-sm text-orange-500">
                        ₩{formatPrice(50000 - subtotal)} 더 구매하시면 무료배송!
                      </p>
                    )}
                  </div>

                  <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-zinc-900 dark:text-white">총 결제금액</span>
                      <span className="text-2xl font-bold text-orange-500">
                        ₩{formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <button
                    disabled={selectedItems.length === 0}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/25"
                  >
                    주문하기 ({selectedItems.length}개)
                  </button>

                  <Link
                    href="/"
                    className="block text-center mt-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition"
                  >
                    쇼핑 계속하기
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
