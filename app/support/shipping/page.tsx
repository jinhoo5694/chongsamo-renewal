import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ShippingPage() {
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
              <span className="text-zinc-900 dark:text-white font-medium">배송/반품 안내</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">배송/반품 안내</h1>
            <p className="text-zinc-400">배송 및 교환/반품에 대한 안내입니다</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Shipping Info */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              배송 안내
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">배송 방법</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  CJ대한통운 택배를 이용하여 발송됩니다.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">배송비</h3>
                <ul className="text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>• 5만원 이상 구매 시: <span className="text-orange-500 font-medium">무료배송</span></li>
                  <li>• 5만원 미만 구매 시: 3,000원</li>
                  <li>• 제주도 및 도서산간 지역: 추가 배송비 3,000원</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">배송 기간</h3>
                <ul className="text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>• 평일 오후 2시 이전 결제 완료: <span className="font-medium">당일 발송</span></li>
                  <li>• 평일 오후 2시 이후 결제 완료: 익일 발송</li>
                  <li>• 발송 후 1~2일 이내 수령 가능 (주말/공휴일 제외)</li>
                  <li>• 제주도 및 도서산간 지역: 2~3일 추가 소요</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-4">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <strong>안내:</strong> 재고 상황에 따라 발송이 지연될 수 있으며, 지연 시 개별 연락드립니다.
                </p>
              </div>
            </div>
          </section>

          {/* Return/Exchange Info */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              교환/반품 안내
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">교환/반품 신청 기간</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  상품 수령 후 <span className="font-medium">7일 이내</span> 신청 가능
                </p>
              </div>

              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">교환/반품 비용</h3>
                <ul className="text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>• 단순 변심: 왕복 배송비 <span className="font-medium">고객 부담</span> (6,000원)</li>
                  <li>• 제품 하자/오배송: <span className="text-orange-500 font-medium">무료</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">교환/반품 절차</h3>
                <ol className="text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>마이페이지 &gt; 주문내역에서 교환/반품 신청</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>고객센터에서 확인 후 수거 예약 진행</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>상품 수거 후 검수 진행</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span>교환 상품 발송 또는 환불 처리</span>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 dark:bg-red-500/10 rounded-xl p-4">
                <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">교환/반품 불가 사유</h4>
                <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                  <li>• 개봉 후 사용한 상품</li>
                  <li>• 고객 과실로 인한 상품 파손/훼손</li>
                  <li>• 상품 태그 및 포장재 분실</li>
                  <li>• 수령 후 7일 초과</li>
                  <li>• 세트 상품 중 일부만 반품</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Info */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              환불 안내
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">환불 소요 기간</h3>
                <ul className="text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>• 신용카드: 카드사에 따라 3~7 영업일 소요</li>
                  <li>• 계좌이체/무통장입금: 상품 수거 및 검수 후 2~3 영업일 이내</li>
                  <li>• 간편결제: 결제사에 따라 3~7 영업일 소요</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-2">환불 금액</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  결제하신 금액에서 사용한 적립금, 쿠폰 할인액을 제외한 실 결제 금액이 환불됩니다.
                  단순 변심의 경우 왕복 배송비가 차감됩니다.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">추가 문의사항이 있으신가요?</h3>
            <p className="text-white/80 mb-6">1:1 상담 또는 고객센터로 문의해 주세요</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/support/inquiry"
                className="px-6 py-3 bg-white text-orange-500 font-medium rounded-xl hover:bg-zinc-100 transition"
              >
                1:1 상담하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition"
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
