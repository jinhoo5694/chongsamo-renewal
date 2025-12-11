'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const inquiryTypes = [
  { value: 'product', label: '상품 문의' },
  { value: 'order', label: '주문/결제 문의' },
  { value: 'shipping', label: '배송 문의' },
  { value: 'return', label: '교환/반품 문의' },
  { value: 'as', label: 'AS 문의' },
  { value: 'other', label: '기타 문의' },
];

const myInquiries = [
  {
    id: 1,
    type: '상품 문의',
    title: 'VFC GLOCK45 호환 매거진 문의',
    date: '2024-12-05',
    status: 'answered',
  },
  {
    id: 2,
    type: '배송 문의',
    title: '배송 일정 확인 부탁드립니다',
    date: '2024-12-01',
    status: 'answered',
  },
  {
    id: 3,
    type: 'AS 문의',
    title: '제품 AS 접수 문의',
    date: '2024-11-28',
    status: 'pending',
  },
];

export default function InquiryPage() {
  const [activeTab, setActiveTab] = useState<'write' | 'list'>('write');
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    content: '',
    isSecret: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('문의가 등록되었습니다.');
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
              <Link href="/support" className="text-zinc-500 hover:text-orange-500 transition">
                고객지원
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">1:1 상담</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">1:1 상담</h1>
            <p className="text-zinc-400">궁금한 점이 있으시면 문의해 주세요</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('write')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                activeTab === 'write'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              문의하기
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                activeTab === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              내 문의내역
            </button>
          </div>

          {activeTab === 'write' ? (
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    문의 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">선택해 주세요</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="제목을 입력해 주세요"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    rows={8}
                    placeholder="문의하실 내용을 자세히 입력해 주세요"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    첨부파일
                  </label>
                  <div className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-xl p-8 text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-zinc-300 dark:text-zinc-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-zinc-500 mb-2">
                      이미지를 드래그하거나 클릭하여 업로드하세요
                    </p>
                    <p className="text-xs text-zinc-400">JPG, PNG, GIF (최대 5MB)</p>
                    <input type="file" className="hidden" accept="image/*" multiple />
                  </div>
                </div>

                {/* Secret Toggle */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isSecret"
                    checked={formData.isSecret}
                    onChange={(e) => setFormData({ ...formData, isSecret: e.target.checked })}
                    className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="isSecret" className="text-sm text-zinc-700 dark:text-zinc-300">
                    비밀글로 등록
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition"
                >
                  문의 등록하기
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <h3 className="font-medium text-zinc-900 dark:text-white mb-4">고객센터 안내</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>02-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>평일 10:00 - 18:00 (점심 12:00 - 13:00)</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm">
              {myInquiries.length > 0 ? (
                <>
                  {/* Table Header */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    <div className="col-span-2 text-center">유형</div>
                    <div className="col-span-5">제목</div>
                    <div className="col-span-3 text-center">등록일</div>
                    <div className="col-span-2 text-center">상태</div>
                  </div>

                  {/* Inquiries */}
                  {myInquiries.map((inquiry) => (
                    <Link
                      key={inquiry.id}
                      href={`/support/inquiry/${inquiry.id}`}
                      className="block border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4">
                        <div className="col-span-2 flex items-center justify-center">
                          <span className="text-sm text-zinc-500">{inquiry.type}</span>
                        </div>
                        <div className="col-span-5 flex items-center">
                          <span className="text-zinc-900 dark:text-white font-medium hover:text-orange-500 transition line-clamp-1">
                            {inquiry.title}
                          </span>
                        </div>
                        <div className="col-span-3 flex items-center justify-center text-sm text-zinc-500">
                          {inquiry.date}
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              inquiry.status === 'answered'
                                ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                                : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400'
                            }`}
                          >
                            {inquiry.status === 'answered' ? '답변완료' : '대기중'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="py-16 text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-zinc-300 dark:text-zinc-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <p className="text-zinc-500">등록된 문의가 없습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
