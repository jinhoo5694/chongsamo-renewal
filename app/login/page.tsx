'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                총사모<span className="text-orange-500">.</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                계정에 로그인하세요
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  이메일 또는 아이디
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-orange-500 border-zinc-300 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                    로그인 상태 유지
                  </span>
                </label>
                <Link href="/forgot-password" className="text-sm text-orange-500 hover:text-orange-600 transition">
                  비밀번호 찾기
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-orange-500/25"
              >
                로그인
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-zinc-900 text-zinc-500">
                  또는
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-[#FEE500] hover:bg-[#FDD800] text-zinc-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.041 5.936l-.863 3.188c-.085.315.278.584.556.414l3.761-2.306c.812.13 1.649.199 2.505.199 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                </svg>
                카카오로 로그인
              </button>
              <button className="w-full py-3 px-4 bg-[#03C75A] hover:bg-[#02B350] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <span className="font-bold">N</span>
                네이버로 로그인
              </button>
            </div>

            {/* Sign up link */}
            <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
              아직 회원이 아니신가요?{' '}
              <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium transition">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
