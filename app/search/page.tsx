'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard, { Product } from '../components/ProductCard';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'STS K2C1 GBBR',
    brand: 'STS',
    price: 2700000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d497bbe55d67760f7f7b5a1929e3da88.jpg',
    isNew: true,
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: 2,
    name: 'VFC K403A1 KS-1 Suppressor Set',
    brand: 'VFC',
    price: 159000,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/b081960610b26b87d75d9e93f38b1f8f.jpg',
    isNew: true,
    rating: 4.7,
    reviewCount: 28,
  },
  {
    id: 3,
    name: 'VFC KAC L403A1 KS-1 GBBR',
    brand: 'VFC',
    price: 1130000,
    image: 'https://chongsamo.co.kr/web/product/medium/202511/280f939147bbf0b8ba06604cb858a4eb.jpg',
    isNew: true,
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: 4,
    name: 'GHK DDM4 PDW V3 GBBR',
    brand: 'GHK',
    price: 1080000,
    image: 'https://chongsamo.co.kr/web/product/medium/202511/1df13234b90e4a86c6da3f2c6916a104.jpg',
    isNew: true,
    rating: 4.9,
    reviewCount: 33,
  },
  {
    id: 5,
    name: 'GHK AKM V3 GBBR Steel',
    brand: 'GHK',
    price: 1040000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: 6,
    name: 'VFC GLOCK45 GBB Upgraded',
    brand: 'VFC',
    price: 349000,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: 7,
    name: 'VFC GLOCK19X GBB Upgraded',
    brand: 'VFC',
    price: 349000,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg',
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: 8,
    name: 'VFC APFG MCX SPEAR LT GBBR',
    brand: 'VFC',
    price: 1080000,
    image: 'https://chongsamo.co.kr/web/product/medium/202509/0f8364cafc9726403b24f256d822038e.jpg',
    rating: 4.7,
    reviewCount: 39,
  },
  {
    id: 9,
    name: 'VFC PPSH-41 GBBR',
    brand: 'VFC',
    price: 950000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/20cb3891b03e81cf9913eb8fe62b7e51.jpg',
    rating: 4.9,
    reviewCount: 289,
  },
  {
    id: 10,
    name: 'MARUI G17 Gen5 Custom',
    brand: 'MARUI',
    price: 1400000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/15012783884ae2b84b82cf43246e15c3.jpg',
    rating: 4.9,
    reviewCount: 56,
  },
  {
    id: 11,
    name: 'VFC GLOCK42 Steel Slide',
    brand: 'VFC',
    price: 520000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/dd445d8a489ea6b2e1ea267e5a3c2dbb.jpg',
    isSale: true,
    originalPrice: 580000,
    rating: 4.6,
    reviewCount: 56,
  },
  {
    id: 12,
    name: 'AEGIS VFC Glock19X MOS Steel',
    brand: 'AEGIS',
    price: 465000,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/0cb3ac096780e0029cdae89a24e7f5b8.jpg',
    rating: 4.9,
    reviewCount: 234,
  },
];

const sortOptions = [
  { value: 'relevance', label: '관련도순' },
  { value: 'newest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'price-low', label: '낮은 가격순' },
  { value: 'price-high', label: '높은 가격순' },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sortBy, setSortBy] = useState('relevance');

  const searchResults = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase();
    let results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.brand?.toLowerCase().includes(lowerQuery)
    );

    // Sort results
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        results.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case 'newest':
        results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // relevance - keep original order
        break;
    }

    return results;
  }, [query, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Info */}
      <div className="mb-8">
        {query ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-900 dark:text-white font-bold">&quot;{query}&quot;</span>
            에 대한 검색 결과{' '}
            <span className="text-orange-500 font-bold">{searchResults.length}</span>건
          </p>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">검색어를 입력해 주세요</p>
        )}
      </div>

      {searchResults.length > 0 ? (
        <>
          {/* Sort Options */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : query ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            검색 결과가 없습니다
          </h2>
          <p className="text-zinc-500 mb-8">
            다른 검색어로 시도하거나 카테고리를 탐색해 보세요
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition"
            >
              홈으로 가기
            </Link>
            <Link
              href="/category/gas"
              className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              카테고리 보기
            </Link>
          </div>

          {/* Search Tips */}
          <div className="mt-12 max-w-md mx-auto bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-left">
            <h3 className="font-medium text-zinc-900 dark:text-white mb-3">검색 팁</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>• 검색어의 철자가 정확한지 확인해 주세요</li>
              <li>• 다른 검색어나 브랜드명으로 검색해 보세요</li>
              <li>• 보다 일반적인 검색어를 사용해 보세요</li>
              <li>• 상품 Q&A에서 문의해 주세요</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            상품을 검색해 보세요
          </h2>
          <p className="text-zinc-500">
            상품명, 브랜드명 등으로 검색할 수 있습니다
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
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
              <span className="text-zinc-900 dark:text-white font-medium">검색 결과</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">검색</h1>
            <p className="text-zinc-400">원하는 상품을 찾아보세요</p>
          </div>
        </div>

        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8">로딩 중...</div>}>
          <SearchContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
