import Link from 'next/link';
import ProductCard, { Product } from './ProductCard';

const newProducts: Product[] = [
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
    isNew: true,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: 6,
    name: 'Guarder G17 Gen5 MOS Steel Slide Kit',
    brand: 'MARUI',
    price: 780000,
    image: 'https://chongsamo.co.kr/web/product/medium/202511/a4f3cd87ba18d99bd9f6680bad008fe2.jpg',
    isNew: true,
    rating: 4.6,
    reviewCount: 21,
  },
  {
    id: 7,
    name: 'MARUI G17 Gen5 Custom',
    brand: 'MARUI',
    price: 1400000,
    image: 'https://chongsamo.co.kr/web/product/medium/202510/15012783884ae2b84b82cf43246e15c3.jpg',
    isNew: true,
    rating: 4.9,
    reviewCount: 56,
  },
  {
    id: 8,
    name: 'VFC APFG MCX SPEAR LT GBBR',
    brand: 'VFC',
    price: 1080000,
    image: 'https://chongsamo.co.kr/web/product/medium/202509/0f8364cafc9726403b24f256d822038e.jpg',
    isNew: true,
    rating: 4.7,
    reviewCount: 39,
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              신상품
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              새로 입고된 인기 제품들을 만나보세요
            </p>
          </div>
          <Link
            href="/new"
            className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition"
          >
            전체보기
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
          >
            신상품 전체보기
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
