'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard, { Product } from '../../components/ProductCard';

const categoryNames: Record<string, string> = {
  gas: '가스건',
  electric: '전동건',
  sniper: '스나이퍼',
  shotgun: '샷건',
  accessories: '액세서리',
  gear: '보호장비',
  // Subcategories
  '가스 라이플': '가스 라이플',
  '가스 피스톨': '가스 피스톨',
  '가스 샷건': '가스 샷건',
  '가스 SMG': '가스 SMG',
  '전동 라이플': '전동 라이플',
  '전동 피스톨': '전동 피스톨',
  '전동 SMG': '전동 SMG',
  '전동 LMG': '전동 LMG',
  '볼트액션': '볼트액션',
  '세미자동': '세미자동',
  '스나이퍼 액세서리': '스나이퍼 액세서리',
  '스프링 샷건': '스프링 샷건',
  '전동 샷건': '전동 샷건',
  '스코프/광학': '스코프/광학',
  '레일/마운트': '레일/마운트',
  '매거진': '매거진',
  '배터리/충전기': '배터리/충전기',
  '고글/마스크': '고글/마스크',
  '헬멧': '헬멧',
  '조끼/플레이트캐리어': '조끼/플레이트캐리어',
  '장갑': '장갑',
};

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
  { value: 'newest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'price-low', label: '낮은 가격순' },
  { value: 'price-high', label: '높은 가격순' },
  { value: 'rating', label: '평점순' },
];

const priceRanges = [
  { value: 'all', label: '전체' },
  { value: '0-300000', label: '30만원 이하' },
  { value: '300000-500000', label: '30~50만원' },
  { value: '500000-1000000', label: '50~100만원' },
  { value: '1000000-', label: '100만원 이상' },
];

const brands = ['전체', 'VFC', 'GHK', 'MARUI', 'STS', 'AEGIS', 'WE'];

export default function CategoryPage() {
  const params = useParams();
  const rawSlug = params.slug as string;
  const decodedSlug = decodeURIComponent(rawSlug);
  const categoryName = categoryNames[decodedSlug] || decodedSlug;

  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('전체');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by brand
    if (selectedBrand !== '전체') {
      result = result.filter((product) => product.brand === selectedBrand);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map((v) => (v ? parseInt(v) : null));
      result = result.filter((product) => {
        if (min !== null && product.price < min) return false;
        if (max !== null && product.price > max) return false;
        return true;
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'popular':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case 'newest':
      default:
        // Keep original order (newest first by default)
        break;
    }

    return result;
  }, [sortBy, priceRange, selectedBrand]);

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
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">{categoryName}</span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{categoryName}</h1>
            <p className="text-zinc-400">총 {filteredAndSortedProducts.length}개의 상품</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-4">필터</h3>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-zinc-700 dark:text-zinc-300 mb-3">가격대</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand */}
                <div className="mb-6">
                  <h4 className="font-medium text-zinc-700 dark:text-zinc-300 mb-3">브랜드</h4>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`px-3 py-1.5 rounded-full text-sm transition ${
                          selectedBrand === brand
                            ? 'bg-orange-500 text-white'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setPriceRange('all');
                    setSelectedBrand('전체');
                  }}
                  className="w-full py-2 text-sm text-orange-500 hover:text-orange-600 font-medium transition"
                >
                  필터 초기화
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & View options */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  필터
                </button>

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

              {/* Products */}
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">
                    검색 결과가 없습니다
                  </h3>
                  <p className="text-zinc-500 mb-6">
                    다른 필터 조건으로 검색해 보세요
                  </p>
                  <button
                    onClick={() => {
                      setPriceRange('all');
                      setSelectedBrand('전체');
                    }}
                    className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
                  >
                    필터 초기화
                  </button>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg font-medium transition ${
                        page === 1
                          ? 'bg-orange-500 text-white'
                          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
