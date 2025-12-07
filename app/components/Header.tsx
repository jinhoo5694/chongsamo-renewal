'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    name: '가스건',
    subcategories: ['가스 라이플', '가스 피스톨', '가스 샷건', '가스 SMG'],
  },
  {
    name: '전동건',
    subcategories: ['전동 라이플', '전동 피스톨', '전동 SMG', '전동 LMG'],
  },
  {
    name: '스나이퍼',
    subcategories: ['볼트액션', '세미자동', '스나이퍼 액세서리'],
  },
  {
    name: '샷건',
    subcategories: ['가스 샷건', '스프링 샷건', '전동 샷건'],
  },
  {
    name: '액세서리',
    subcategories: ['스코프/광학', '레일/마운트', '매거진', '배터리/충전기'],
  },
  {
    name: '보호장비',
    subcategories: ['고글/마스크', '헬멧', '조끼/플레이트캐리어', '장갑'],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm">
      {/* Top bar */}
      <div className="bg-zinc-900 dark:bg-zinc-950 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>🚚 50,000원 이상 무료배송 | 평일 오후 2시 이전 주문 당일발송</p>
          <div className="hidden sm:flex gap-4">
            <Link href="/login" className="hover:text-orange-400 transition">로그인</Link>
            <Link href="/register" className="hover:text-orange-400 transition">회원가입</Link>
            <Link href="/orders" className="hover:text-orange-400 transition">주문조회</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              총사모<span className="text-orange-500">.</span>
            </h1>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="원하시는 상품을 검색해보세요"
                className="w-full px-4 py-3 pl-12 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/wishlist" className="hidden sm:block p-2 hover:text-orange-500 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/cart" className="relative p-2 hover:text-orange-500 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/mypage" className="hidden sm:block p-2 hover:text-orange-500 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-zinc-100 dark:border-zinc-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-8">
            {categories.map((category) => (
              <li
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="py-4 font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition">
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div className="absolute top-full left-0 bg-white dark:bg-zinc-800 shadow-lg rounded-lg py-2 min-w-48 z-50">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/category/${sub}`}
                        className="block px-4 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:text-orange-500 transition"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/sale" className="py-4 font-medium text-red-500 hover:text-red-600 transition flex items-center gap-1">
                🔥 SALE
              </Link>
            </li>
            <li>
              <Link href="/new" className="py-4 font-medium text-orange-500 hover:text-orange-600 transition">
                NEW
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
            />
          </div>
          <ul className="px-4 pb-4">
            {categories.map((category) => (
              <li key={category.name} className="border-b border-zinc-100 dark:border-zinc-800">
                <button className="w-full py-3 text-left font-medium">{category.name}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
