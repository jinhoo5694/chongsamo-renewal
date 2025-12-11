'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const announcements = [
  {
    id: 1,
    title: '[공지] 2024년 연말 배송 안내',
    content: '12월 24일 이후 주문건은 1월 2일부터 순차 배송됩니다.',
    date: '2024-12-01',
    views: 1234,
    isImportant: true,
  },
  {
    id: 2,
    title: '[공지] 신규 브랜드 입점 안내 - AEGIS',
    content: 'AEGIS 브랜드 제품이 새롭게 입점했습니다.',
    date: '2024-11-28',
    views: 892,
    isImportant: true,
  },
  {
    id: 3,
    title: '[안내] 개인정보처리방침 개정 안내',
    content: '개인정보처리방침이 2024년 12월 1일부로 개정됩니다.',
    date: '2024-11-25',
    views: 456,
    isImportant: false,
  },
  {
    id: 4,
    title: '[이벤트] 블랙프라이데이 세일 안내',
    content: '11월 22일부터 30일까지 최대 30% 할인!',
    date: '2024-11-20',
    views: 2345,
    isImportant: false,
  },
  {
    id: 5,
    title: '[공지] 추석 연휴 배송 안내',
    content: '추석 연휴 기간 배송 일정을 안내드립니다.',
    date: '2024-09-10',
    views: 1567,
    isImportant: false,
  },
  {
    id: 6,
    title: '[안내] 여름철 제품 보관 안내',
    content: '고온다습한 환경에서의 제품 보관 방법을 안내드립니다.',
    date: '2024-07-15',
    views: 789,
    isImportant: false,
  },
  {
    id: 7,
    title: '[공지] 서버 점검 안내 (완료)',
    content: '서버 점검이 완료되었습니다.',
    date: '2024-06-20',
    views: 345,
    isImportant: false,
  },
  {
    id: 8,
    title: '[이벤트] 신규 회원 가입 이벤트',
    content: '신규 회원 가입 시 5,000원 쿠폰 증정!',
    date: '2024-05-01',
    views: 3456,
    isImportant: false,
  },
];

export default function AnnouncementsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(announcements.length / itemsPerPage);

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
              <span className="text-zinc-900 dark:text-white font-medium">공지사항</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">공지사항</h1>
            <p className="text-zinc-400">총사모의 새로운 소식을 확인하세요</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Announcements List */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-7">제목</div>
              <div className="col-span-2 text-center">등록일</div>
              <div className="col-span-2 text-center">조회수</div>
            </div>

            {/* Announcements */}
            {announcements.map((announcement, index) => (
              <Link
                key={announcement.id}
                href={`/community/announcements/${announcement.id}`}
                className="block border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4">
                  <div className="hidden md:flex col-span-1 items-center justify-center">
                    {announcement.isImportant ? (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                        중요
                      </span>
                    ) : (
                      <span className="text-zinc-500">{announcements.length - index}</span>
                    )}
                  </div>
                  <div className="col-span-7 flex items-center gap-2">
                    {announcement.isImportant && (
                      <span className="md:hidden px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded">
                        중요
                      </span>
                    )}
                    <span className="text-zinc-900 dark:text-white font-medium hover:text-orange-500 transition line-clamp-1">
                      {announcement.title}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-center text-sm text-zinc-500">
                    {announcement.date}
                  </div>
                  <div className="col-span-2 flex items-center justify-center text-sm text-zinc-500">
                    {announcement.views.toLocaleString()}
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
