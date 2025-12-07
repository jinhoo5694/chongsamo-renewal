'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard, { Product } from '../../components/ProductCard';

// Sample product data (in real app, fetch from API)
const productData = {
  id: 1,
  name: 'VFC GLOCK45 GBB Upgraded',
  brand: 'VFC',
  price: 349000,
  originalPrice: 399000,
  images: [
    'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
    'https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg',
    'https://chongsamo.co.kr/web/product/medium/202508/c3e29c4a7b4d7b761914888436531144.jpg',
  ],
  rating: 4.9,
  reviewCount: 234,
  description: `VFC GLOCK45 GBB는 실총과 동일한 크기와 무게를 자랑하는 고품질 가스 블로우백 피스톨입니다.

주요 특징:
• 풀메탈 슬라이드 및 프레임
• 실총 1:1 스케일
• 강력한 블로우백 액션
• 조절 가능한 홉업 시스템
• 호환 매거진 용량: 22발

업그레이드 사항:
• 강화 리코일 스프링
• 정밀 이너배럴
• 개선된 홉업 러버`,
  specs: [
    { label: '전체 길이', value: '203mm' },
    { label: '배럴 길이', value: '114mm' },
    { label: '무게', value: '780g (매거진 포함)' },
    { label: '매거진 용량', value: '22발' },
    { label: '파워 소스', value: 'Green Gas / Top Gas' },
    { label: '재질', value: '메탈 슬라이드 / 폴리머 프레임' },
  ],
  inStock: true,
  stockCount: 5,
};

const relatedProducts: Product[] = [
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
  {
    id: 105,
    name: 'AEGIS VFC Glock19 Gen5 KP4',
    brand: 'AEGIS',
    price: 356000,
    image: 'https://chongsamo.co.kr/web/product/medium/202508/9d7752aa5238dcbc4f96fe23fc43bebd.jpg',
    rating: 4.5,
    reviewCount: 423,
  },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const discount = productData.originalPrice
    ? Math.round((1 - productData.price / productData.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-orange-500 transition">
                홈
              </Link>
              <span className="text-zinc-300">/</span>
              <Link href="/category/gas" className="text-zinc-500 hover:text-orange-500 transition">
                가스건
              </Link>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">{productData.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {discount > 0 && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded">
                    -{discount}%
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index
                        ? 'border-orange-500'
                        : 'border-transparent hover:border-zinc-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${productData.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-orange-500 font-medium mb-2">{productData.brand}</p>
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                  {productData.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(productData.rating)
                            ? 'text-yellow-400'
                            : 'text-zinc-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {productData.rating} ({productData.reviewCount}개 리뷰)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-white">
                    ₩{formatPrice(productData.price)}
                  </span>
                  {productData.originalPrice && (
                    <span className="text-xl text-zinc-400 line-through">
                      ₩{formatPrice(productData.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-6">
                  {productData.inStock ? (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        재고 있음 ({productData.stockCount}개)
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-red-600 dark:text-red-400 font-medium">품절</span>
                    </>
                  )}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">수량</span>
                  <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-medium text-zinc-900 dark:text-white min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/25">
                    장바구니 담기
                  </button>
                  <button className="px-6 py-4 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                    <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <button className="w-full mt-3 py-4 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold rounded-xl transition-colors">
                  바로 구매하기
                </button>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>50,000원 이상 구매시 무료배송</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>평일 오후 2시 이전 주문시 당일발송</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex gap-8">
                {[
                  { id: 'description', label: '상품 설명' },
                  { id: 'specs', label: '상세 스펙' },
                  { id: 'reviews', label: `리뷰 (${productData.reviewCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`py-4 font-medium transition relative ${
                      activeTab === tab.id
                        ? 'text-orange-500'
                        : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {productData.description}
                  </pre>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="max-w-2xl">
                  <table className="w-full">
                    <tbody>
                      {productData.specs.map((spec, index) => (
                        <tr key={index} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-4 pr-4 font-medium text-zinc-900 dark:text-white w-40">
                            {spec.label}
                          </td>
                          <td className="py-4 text-zinc-600 dark:text-zinc-400">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="text-center py-12 text-zinc-500">
                  리뷰 기능은 준비 중입니다.
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              관련 상품
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
