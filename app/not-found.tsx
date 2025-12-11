import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <span className="text-[150px] md:text-[200px] font-bold text-zinc-200 dark:text-zinc-800 leading-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-zinc-500 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            주소를 다시 확인해 주세요.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition"
            >
              홈으로 가기
            </Link>
            <Link
              href="/support"
              className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              고객센터
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 mb-4">찾으시는 페이지가 있으신가요?</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/category/gas"
                className="text-orange-500 hover:underline"
              >
                가스건
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link
                href="/category/electric"
                className="text-orange-500 hover:underline"
              >
                전동건
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link
                href="/community"
                className="text-orange-500 hover:underline"
              >
                커뮤니티
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link
                href="/guide"
                className="text-orange-500 hover:underline"
              >
                가이드
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
