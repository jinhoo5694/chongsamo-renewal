'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqCategories = [
  { id: 'all', label: '전체' },
  { id: 'order', label: '주문/결제' },
  { id: 'shipping', label: '배송' },
  { id: 'return', label: '교환/반품' },
  { id: 'product', label: '상품' },
  { id: 'member', label: '회원' },
];

const faqs = [
  {
    id: 1,
    category: 'order',
    question: '주문은 어떻게 하나요?',
    answer:
      '원하시는 상품을 장바구니에 담은 후, 결제 페이지에서 배송 정보와 결제 수단을 선택하여 주문을 완료하실 수 있습니다. 비회원도 주문이 가능하지만, 회원으로 가입하시면 적립금 혜택과 주문 내역 확인이 편리합니다.',
  },
  {
    id: 2,
    category: 'order',
    question: '결제 수단은 어떤 것이 있나요?',
    answer:
      '신용카드, 체크카드, 무통장입금, 카카오페이, 네이버페이, 토스페이 등 다양한 결제 수단을 지원합니다. 무통장입금의 경우 주문 후 24시간 이내에 입금해 주셔야 주문이 자동 취소되지 않습니다.',
  },
  {
    id: 3,
    category: 'order',
    question: '주문 취소는 어떻게 하나요?',
    answer:
      '마이페이지 > 주문내역에서 배송 전 상품에 한해 주문 취소가 가능합니다. 이미 발송된 상품은 반품 절차를 통해 처리해 주세요.',
  },
  {
    id: 4,
    category: 'shipping',
    question: '배송비는 얼마인가요?',
    answer:
      '5만원 이상 구매 시 무료배송입니다. 5만원 미만 주문 시 배송비 3,000원이 부과됩니다. 제주도 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.',
  },
  {
    id: 5,
    category: 'shipping',
    question: '배송은 얼마나 걸리나요?',
    answer:
      '평일 오후 2시 이전 결제 완료 시 당일 발송되며, 발송 후 1-2일 이내 수령 가능합니다. 주말 및 공휴일에는 발송이 되지 않으며, 제주도 및 도서산간 지역은 2-3일 추가 소요될 수 있습니다.',
  },
  {
    id: 6,
    category: 'shipping',
    question: '배송 조회는 어떻게 하나요?',
    answer:
      '마이페이지 > 주문내역에서 운송장 번호를 확인하실 수 있으며, 해당 번호로 택배사 홈페이지에서 실시간 배송 추적이 가능합니다. 발송 완료 시 SMS 또는 카카오톡으로 안내해 드립니다.',
  },
  {
    id: 7,
    category: 'return',
    question: '교환/반품은 어떻게 하나요?',
    answer:
      '상품 수령 후 7일 이내에 마이페이지 > 주문내역에서 교환/반품 신청이 가능합니다. 단순 변심의 경우 왕복 배송비가 고객 부담이며, 제품 하자의 경우 무료로 교환/반품 처리해 드립니다.',
  },
  {
    id: 8,
    category: 'return',
    question: '교환/반품이 불가능한 경우가 있나요?',
    answer:
      '개봉 후 사용한 상품, 고객 과실로 인한 파손/훼손, 포장 분실, 수령 후 7일 초과 등의 경우에는 교환/반품이 불가능합니다. 자세한 내용은 교환/반품 정책을 확인해 주세요.',
  },
  {
    id: 9,
    category: 'product',
    question: '제품 AS는 어떻게 받나요?',
    answer:
      '제품 구매 후 1년 이내 정상 사용 중 발생한 하자에 대해 무상 AS가 가능합니다. 1:1 상담 게시판이나 고객센터(02-1234-5678)로 문의해 주시면 AS 접수 방법을 안내해 드립니다.',
  },
  {
    id: 10,
    category: 'product',
    question: '제품 호환성은 어떻게 확인하나요?',
    answer:
      '각 상품 페이지에 호환 가능한 제품 목록이 기재되어 있습니다. 불확실한 경우 상품 Q&A나 1:1 상담을 통해 문의해 주시면 정확하게 안내해 드리겠습니다.',
  },
  {
    id: 11,
    category: 'member',
    question: '적립금은 어떻게 사용하나요?',
    answer:
      '결제 시 보유하신 적립금을 현금처럼 사용하실 수 있습니다. 최소 1,000원 이상부터 사용 가능하며, 적립금만으로는 결제가 불가능합니다.',
  },
  {
    id: 12,
    category: 'member',
    question: '회원 탈퇴는 어떻게 하나요?',
    answer:
      '마이페이지 > 회원정보 > 회원탈퇴에서 탈퇴 신청이 가능합니다. 탈퇴 시 적립금, 쿠폰 등 모든 혜택이 소멸되며, 재가입 시에도 복구되지 않습니다.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === 'all' ? faqs : faqs.filter((faq) => faq.category === activeCategory);

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
              <span className="text-zinc-900 dark:text-white font-medium">자주 묻는 질문</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">자주 묻는 질문</h1>
            <p className="text-zinc-400">궁금한 점을 빠르게 확인하세요</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">Q</span>
                    <span className="font-medium text-zinc-900 dark:text-white">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-zinc-400 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <span className="text-blue-500 font-bold">A</span>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">찾으시는 답변이 없으신가요?</h3>
            <p className="text-white/80 mb-6">1:1 상담을 통해 궁금한 점을 문의해 주세요</p>
            <Link
              href="/support/inquiry"
              className="inline-block px-6 py-3 bg-white text-orange-500 font-medium rounded-xl hover:bg-zinc-100 transition"
            >
              1:1 상담하기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
