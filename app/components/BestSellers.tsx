'use client';

import { useState } from 'react';
import ProductCard, { Product } from './ProductCard';

const categories = ['가스 피스톨', '가스 라이플', '전동건', '스나이퍼'];

const productsByCategory: Record<string, Product[]> = {
  '가스 피스톨': [
    {
      id: 101,
      name: 'VFC GLOCK45 GBB Upgraded',
      brand: 'VFC',
      price: 349000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
      rating: 4.9,
      reviewCount: 234,
    },
    {
      id: 102,
      name: 'VFC GLOCK19X GBB Upgraded',
      brand: 'VFC',
      price: 349000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg',
      rating: 4.8,
      reviewCount: 156,
    },
    {
      id: 103,
      name: 'VFC GLOCK19 GEN4 Upgraded',
      brand: 'VFC',
      price: 349000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/c3e29c4a7b4d7b761914888436531144.jpg',
      rating: 4.7,
      reviewCount: 89,
    },
    {
      id: 104,
      name: 'VFC GLOCK17 Gen5 Upgraded',
      brand: 'VFC',
      price: 349000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/ce76bebfa97baafc169c159d5b1ec601.jpg',
      rating: 4.8,
      reviewCount: 312,
    },
  ],
  '가스 라이플': [
    {
      id: 201,
      name: 'GHK AKM V3 GBBR Steel',
      brand: 'GHK',
      price: 1040000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
      rating: 4.8,
      reviewCount: 145,
    },
    {
      id: 202,
      name: 'VFC KAC L403A1 KS-1 GBBR',
      brand: 'VFC',
      price: 1130000,
      image: 'https://chongsamo.co.kr/web/product/medium/202511/280f939147bbf0b8ba06604cb858a4eb.jpg',
      rating: 4.9,
      reviewCount: 78,
    },
    {
      id: 203,
      name: 'GHK DDM4 PDW V3 GBBR',
      brand: 'GHK',
      price: 1080000,
      image: 'https://chongsamo.co.kr/web/product/medium/202511/1df13234b90e4a86c6da3f2c6916a104.jpg',
      rating: 4.9,
      reviewCount: 201,
    },
    {
      id: 204,
      name: 'VFC APFG MCX SPEAR LT GBBR',
      brand: 'VFC',
      price: 1080000,
      image: 'https://chongsamo.co.kr/web/product/medium/202509/0f8364cafc9726403b24f256d822038e.jpg',
      rating: 4.7,
      reviewCount: 67,
    },
  ],
  '전동건': [
    {
      id: 301,
      name: 'VFC PPSH-41 GBBR',
      brand: 'VFC',
      price: 950000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/20cb3891b03e81cf9913eb8fe62b7e51.jpg',
      rating: 4.9,
      reviewCount: 289,
    },
    {
      id: 302,
      name: 'VFC G45 TRIL Tactical Custom',
      brand: 'VFC+TRIL',
      price: 1047000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/14b910d2d2d8575787caad09f0175611.jpg',
      rating: 4.7,
      reviewCount: 178,
    },
    {
      id: 303,
      name: 'AEGIS VFC Glock19 Gen5 KP4 Steel',
      brand: 'AEGIS',
      price: 356000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/9d7752aa5238dcbc4f96fe23fc43bebd.jpg',
      rating: 4.5,
      reviewCount: 423,
    },
    {
      id: 304,
      name: 'AEGIS VFC Glock19 Gen5 MOS Steel',
      brand: 'AEGIS',
      price: 439000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/15841df7301eef0bf301fff55cf54ee3.jpg',
      rating: 4.8,
      reviewCount: 92,
    },
  ],
  '스나이퍼': [
    {
      id: 401,
      name: 'STS K2C1 GBBR',
      brand: 'STS',
      price: 2700000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/d497bbe55d67760f7f7b5a1929e3da88.jpg',
      rating: 4.8,
      reviewCount: 198,
    },
    {
      id: 402,
      name: 'MARUI G17 Gen5 Custom',
      brand: 'MARUI',
      price: 1400000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/15012783884ae2b84b82cf43246e15c3.jpg',
      rating: 4.7,
      reviewCount: 87,
    },
    {
      id: 403,
      name: 'VFC GLOCK42 Steel Slide',
      brand: 'VFC',
      price: 520000,
      image: 'https://chongsamo.co.kr/web/product/medium/202510/dd445d8a489ea6b2e1ea267e5a3c2dbb.jpg',
      rating: 4.6,
      reviewCount: 56,
    },
    {
      id: 404,
      name: 'AEGIS VFC Glock19X MOS Steel',
      brand: 'AEGIS',
      price: 465000,
      image: 'https://chongsamo.co.kr/web/product/medium/202508/0cb3ac096780e0029cdae89a24e7f5b8.jpg',
      rating: 4.9,
      reviewCount: 234,
    },
  ],
};

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            카테고리별 베스트
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            각 카테고리에서 가장 인기있는 제품들
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {productsByCategory[activeCategory].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
