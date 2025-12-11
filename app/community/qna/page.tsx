'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const qnaList = [
  {
    id: 1,
    title: 'VFC GLOCK45 호환 매거진 문의드립니다',
    author: '김**',
    date: '2024-12-05',
    views: 45,
    replies: 1,
    isAnswered: true,
    isSecret: false,
  },
  {
    id: 2,
    title: 'GHK AKM 분해 방법 문의',
    author: '이**',
    date: '2024-12-04',
    views: 89,
    replies: 2,
    isAnswered: true,
    isSecret: false,
  },
  {
    id: 3,
    title: '배송 관련 문의드립니다',
    author: '박**',
    date: '2024-12-03',
    views: 0,
    replies: 0,
    isAnswered: false,
    isSecret: true,
  },
  {
    id: 4,
    title: '제품 재입고 일정 문의',
    author: '최**',
    date: '2024-12-02',
    views: 156,
    replies: 1,
    isAnswered: true,
    isSecret: false,
  },
  {
    id: 5,
    title: 'STS K2C1 AS 문의드립니다',
    author: '정**',
    date: '2024-12-01',
    views: 78,
    replies: 3,
    isAnswered: true,
    isSecret: false,
  },
  {
    id: 6,
    title: '교환/반품 절차 문의',
    author: '한**',
    date: '2024-11-30',
    views: 0,
    replies: 1,
    isAnswered: true,
    isSecret: true,
  },
  {
    id: 7,
    title: '가스 충전 주기 문의',
    author: '강**',
    date: '2024-11-29',
    views: 234,
    replies: 2,
    isAnswered: true,
    isSecret: false,
  },
  {
    id: 8,
    title: '스코프 마운트 호환성 문의',
    author: '윤**',
    date: '2024-11-28',
    views: 167,
    replies: 1,
    isAnswered: true,
    isSecret: false,
  },
];

export default function QnAPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;
  const totalPages = Math.ceil(qnaList.length / itemsPerPage);

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
              <span className="text-zinc-900 dark:text-white font-medium">상품 Q&A</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">상품 Q&A</h1>
            <p className="text-zinc-400">상품에 대해 궁금한 점을 질문해 주세요</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search & Write Button */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
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
            <Link
              href="/community/qna/write"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition text-center"
            >
              질문하기
            </Link>
          </div>

          {/* Q&A List */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <div className="col-span-1 text-center">상태</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-2 text-center">등록일</div>
              <div className="col-span-1 text-center">조회</div>
            </div>

            {/* Q&A Items */}
            {qnaList.map((item) => (
              <Link
                key={item.id}
                href={item.isSecret ? '#' : `/community/qna/${item.id}`}
                className={`block border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 transition ${
                  item.isSecret
                    ? 'cursor-not-allowed'
                    : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4">
                  <div className="hidden md:flex col-span-1 items-center justify-center">
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded ${
                        item.isAnswered
                          ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                          : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400'
                      }`}
                    >
                      {item.isAnswered ? '답변완료' : '대기중'}
                    </span>
                  </div>
                  <div className="col-span-6 flex items-center gap-2">
                    <span
                      className={`md:hidden px-2 py-0.5 text-xs font-bold rounded ${
                        item.isAnswered
                          ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                          : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400'
                      }`}
                    >
                      {item.isAnswered ? '답변완료' : '대기중'}
                    </span>
                    {item.isSecret ? (
                      <span className="text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        비밀글입니다
                      </span>
                    ) : (
                      <span className="text-zinc-900 dark:text-white font-medium hover:text-orange-500 transition line-clamp-1">
                        {item.title}
                        {item.replies > 0 && (
                          <span className="ml-2 text-orange-500 text-sm">[{item.replies}]</span>
                        )}
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 flex items-center justify-center text-sm text-zinc-500">
                    {item.author}
                  </div>
                  <div className="col-span-2 flex items-center justify-center text-sm text-zinc-500">
                    {item.date}
                  </div>
                  <div className="col-span-1 flex items-center justify-center text-sm text-zinc-500">
                    {item.isSecret ? '-' : item.views}
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
