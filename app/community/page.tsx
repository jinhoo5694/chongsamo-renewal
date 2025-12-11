import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const communityLinks = [
  {
    title: '공지사항',
    description: '총사모의 새로운 소식과 공지를 확인하세요',
    href: '/community/announcements',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    count: 24,
  },
  {
    title: '상품 Q&A',
    description: '상품에 대해 궁금한 점을 질문하세요',
    href: '/community/qna',
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
    count: 156,
  },
  {
    title: '사용후기',
    description: '고객님들의 생생한 사용 후기를 확인하세요',
    href: '/community/reviews',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    count: 892,
  },
  {
    title: '자주 묻는 질문',
    description: '자주 묻는 질문과 답변을 확인하세요',
    href: '/community/faq',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    count: 48,
  },
];

export default function CommunityPage() {
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
              <span className="text-zinc-900 dark:text-white font-medium">커뮤니티</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">커뮤니티</h1>
            <p className="text-zinc-400">총사모의 다양한 소식과 고객 게시판</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Community Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityLinks.map((link) => (
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition">
                        {link.title}
                      </h3>
                      <span className="text-sm text-zinc-500">{link.count}개</span>
                    </div>
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

          {/* Support CTA */}
          <div className="mt-12 bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              도움이 필요하신가요?
            </h3>
            <p className="text-zinc-500 mb-6">
              고객센터 운영시간: 평일 10:00 - 18:00 (점심 12:00 - 13:00)
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/support/inquiry"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition"
              >
                1:1 상담하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
