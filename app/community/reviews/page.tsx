'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const reviews = [
  {
    id: 1,
    productName: 'VFC GLOCK45 GBB Upgraded',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202508/980ba746c9c65f3fb826187cece59a45.jpg',
    title: '역시 VFC입니다! 매우 만족합니다',
    content: '실물 느낌이 정말 좋고, 작동감도 훌륭합니다. 첫 가스건으로 강력 추천합니다.',
    author: '김**',
    date: '2024-12-05',
    rating: 5,
    images: [],
    helpful: 12,
  },
  {
    id: 2,
    productName: 'GHK AKM V3 GBBR Steel',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg',
    title: '스틸 외장의 묵직한 느낌이 일품',
    content: '무게감이 정말 실제 같고, 분해도 쉽습니다. 유지보수하기 편해요. GHK 품질은 역시 믿을 수 있네요.',
    author: '이**',
    date: '2024-12-03',
    rating: 5,
    images: ['https://chongsamo.co.kr/web/product/medium/202510/d4f0a9f56baef134c1327f5b573f76fc.jpg'],
    helpful: 8,
  },
  {
    id: 3,
    productName: 'STS K2C1 GBBR',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202510/d497bbe55d67760f7f7b5a1929e3da88.jpg',
    title: '국산 K2의 자부심',
    content: '가격은 비싸지만 그만큼 퀄리티가 다릅니다. 디테일이 놀라울 정도로 정교해요.',
    author: '박**',
    date: '2024-12-01',
    rating: 5,
    images: [],
    helpful: 23,
  },
  {
    id: 4,
    productName: 'VFC KAC L403A1 KS-1 GBBR',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202511/280f939147bbf0b8ba06604cb858a4eb.jpg',
    title: '배송도 빠르고 제품도 완벽',
    content: '주문 다음날 바로 도착했어요. 포장도 꼼꼼하게 잘 되어있었고, 제품 상태도 완벽합니다.',
    author: '최**',
    date: '2024-11-28',
    rating: 4,
    images: [],
    helpful: 5,
  },
  {
    id: 5,
    productName: 'VFC GLOCK19X GBB Upgraded',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg',
    title: '19X 색상이 너무 예뻐요',
    content: '탄색 프레임이 정말 멋집니다. 그립감도 좋고 반동도 적당해요.',
    author: '정**',
    date: '2024-11-25',
    rating: 5,
    images: ['https://chongsamo.co.kr/web/product/medium/202508/63dcb19e9013d578ef04c93af7b9cd1d.jpg'],
    helpful: 15,
  },
  {
    id: 6,
    productName: 'MARUI G17 Gen5 Custom',
    productImage: 'https://chongsamo.co.kr/web/product/medium/202510/15012783884ae2b84b82cf43246e15c3.jpg',
    title: '마루이 품질은 역시',
    content: '커스텀 완성품이라 바로 사용 가능합니다. 작동이 부드럽고 정확해요.',
    author: '한**',
    date: '2024-11-22',
    rating: 5,
    images: [],
    helpful: 9,
  },
];

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const itemsPerPage = 12;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-zinc-300 dark:text-zinc-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
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
              <Link href="/community" className="text-zinc-500 hover:text-orange-500 transition">
                커뮤니티
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">사용후기</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">사용후기</h1>
            <p className="text-zinc-400">고객님들의 생생한 사용 후기를 확인하세요</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex bg-white dark:bg-zinc-900 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition ${
                  viewMode === 'grid'
                    ? 'bg-orange-500 text-white'
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition ${
                  viewMode === 'list'
                    ? 'bg-orange-500 text-white'
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/community/reviews/${review.id}`}
                  className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  <div className="flex gap-3 p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="relative w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={review.productImage}
                        alt={review.productName}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-500 line-clamp-1">{review.productName}</p>
                      <div className="flex mt-1">{renderStars(review.rating)}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-orange-500 transition mb-2 line-clamp-1">
                      {review.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{review.content}</p>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>{review.author}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/community/reviews/${review.id}`}
                  className="block bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition group"
                >
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={review.productImage}
                        alt={review.productName}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="text-sm text-zinc-500 mb-1">{review.productName}</p>
                          <div className="flex">{renderStars(review.rating)}</div>
                        </div>
                        <div className="text-right text-xs text-zinc-400">
                          <p>{review.author}</p>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-orange-500 transition mb-2">
                        {review.title}
                      </h3>
                      <p className="text-sm text-zinc-500 line-clamp-2">{review.content}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-zinc-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          도움이 됐어요 {review.helpful}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition ${
                    page === currentPage
                      ? 'bg-orange-500 text-white'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
