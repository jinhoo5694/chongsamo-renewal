import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const supportLinks = [
  {
    title: '1:1 상담',
    description: '궁금한 점을 1:1로 문의하세요',
    href: '/support/inquiry',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: '배송/반품 안내',
    description: '배송 및 교환/반품 정책 확인',
    href: '/support/shipping',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
  {
    title: '주문 조회',
    description: '비회원 주문 배송 현황 조회',
    href: '/order/tracking',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: '자주 묻는 질문',
    description: 'FAQ에서 빠르게 답변 확인',
    href: '/community/faq',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function SupportPage() {
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
              <span className="text-zinc-900 dark:text-white font-medium">고객지원</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">고객지원</h1>
            <p className="text-zinc-400">무엇을 도와드릴까요?</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Support Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {supportLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-xl">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition mb-1">
                      {link.title}
                    </h3>
                    <p className="text-zinc-500">{link.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-orange-500 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              고객센터 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">전화 상담</h3>
                <p className="text-2xl font-bold text-orange-500 mb-1">02-1234-5678</p>
                <p className="text-sm text-zinc-500">평일 10:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">이메일 상담</h3>
                <p className="text-lg font-medium text-orange-500 mb-1">support@chongsamo.co.kr</p>
                <p className="text-sm text-zinc-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">운영 시간</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  평일 10:00 - 18:00<br />
                  점심 12:00 - 13:00<br />
                  주말/공휴일 휴무
                </p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-8 bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 text-sm text-zinc-500">
            <h3 className="font-medium text-zinc-700 dark:text-zinc-300 mb-3">회사 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p>상호명: (주)삼손레포츠</p>
              <p>대표자: 홍길동</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>통신판매업신고: 제2024-서울강남-0000호</p>
              <p className="md:col-span-2">주소: 서울특별시 강남구 테헤란로 123, 4층</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
