'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const brands = ['전체', 'VFC', 'GHK', 'MARUI', 'STS', 'WE'];

const diagrams = [
  {
    id: 1,
    brand: 'VFC',
    model: 'GLOCK45 GBB',
    image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
    pdfUrl: '#',
  },
  {
    id: 2,
    brand: 'VFC',
    model: 'GLOCK19X GBB',
    image: 'https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg',
    pdfUrl: '#',
  },
  {
    id: 3,
    brand: 'GHK',
    model: 'AKM V3 GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
    pdfUrl: '#',
  },
  {
    id: 4,
    brand: 'GHK',
    model: 'DDM4 PDW V3 GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202511/1df13234b90e4a86c6da3f2c6916a104.jpg',
    pdfUrl: '#',
  },
  {
    id: 5,
    brand: 'STS',
    model: 'K2C1 GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d497bbe55d67760f7f7b5a1929e3da88.jpg',
    pdfUrl: '#',
  },
  {
    id: 6,
    brand: 'VFC',
    model: 'KAC L403A1 KS-1 GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202511/280f939147bbf0b8ba06604cb858a4eb.jpg',
    pdfUrl: '#',
  },
  {
    id: 7,
    brand: 'VFC',
    model: 'MCX SPEAR LT GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202509/0f8364cafc9726403b24f256d822038e.jpg',
    pdfUrl: '#',
  },
  {
    id: 8,
    brand: 'VFC',
    model: 'PPSH-41 GBBR',
    image: 'https://chongsamo.co.kr/web/product/medium/202510/20cb3891b03e81cf9913eb8fe62b7e51.jpg',
    pdfUrl: '#',
  },
  {
    id: 9,
    brand: 'MARUI',
    model: 'G17 Gen5',
    image: 'https://chongsamo.co.kr/web/product/medium/202510/15012783884ae2b84b82cf43246e15c3.jpg',
    pdfUrl: '#',
  },
];

export default function DisassemblyPage() {
  const [selectedBrand, setSelectedBrand] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDiagrams = diagrams.filter((diagram) => {
    const matchesBrand = selectedBrand === '전체' || diagram.brand === selectedBrand;
    const matchesSearch = diagram.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          diagram.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

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
              <Link href="/guide" className="text-zinc-500 hover:text-orange-500 transition">
                가이드
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">분해도</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">분해도</h1>
            <p className="text-zinc-400">각 제품별 분해 및 조립 방법을 확인하세요</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="모델명으로 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
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
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedBrand === brand
                      ? 'bg-orange-500 text-white'
                      : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Diagrams Grid */}
          {filteredDiagrams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDiagrams.map((diagram) => (
                <div
                  key={diagram.id}
                  className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={diagram.image}
                      alt={diagram.model}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-zinc-900/80 text-white text-xs font-medium rounded">
                        {diagram.brand}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-3">
                      {diagram.brand} {diagram.model}
                    </h3>
                    <div className="flex gap-2">
                      <Link
                        href={diagram.pdfUrl}
                        className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg text-center transition"
                      >
                        분해도 보기
                      </Link>
                      <Link
                        href={diagram.pdfUrl}
                        className="px-3 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 mx-auto text-zinc-300 dark:text-zinc-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-zinc-500">검색 결과가 없습니다.</p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl p-6">
            <h3 className="font-medium text-blue-700 dark:text-blue-400 mb-2">안내</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              분해도에 없는 모델의 경우 1:1 상담을 통해 요청해 주시면 추가해 드리겠습니다.
              분해/조립 시 어려움이 있으시면 고객센터로 문의해 주세요.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
