import Link from 'next/link';

const footerLinks = {
  쇼핑안내: [
    { name: '이용약관', href: '/terms' },
    { name: '개인정보처리방침', href: '/privacy' },
    { name: '이용안내', href: '/guide' },
    { name: '배송안내', href: '/shipping' },
    { name: '교환/반품', href: '/returns' },
  ],
  고객센터: [
    { name: '공지사항', href: '/notice' },
    { name: 'FAQ', href: '/faq' },
    { name: '1:1 문의', href: '/inquiry' },
    { name: '상품 Q&A', href: '/qna' },
  ],
  커뮤니티: [
    { name: '상품 리뷰', href: '/reviews' },
    { name: '포토 갤러리', href: '/gallery' },
    { name: '영상 리뷰', href: '/video-reviews' },
    { name: '자유게시판', href: '/board' },
  ],
  마이페이지: [
    { name: '주문조회', href: '/orders' },
    { name: '장바구니', href: '/cart' },
    { name: '위시리스트', href: '/wishlist' },
    { name: '적립금', href: '/points' },
    { name: '쿠폰', href: '/coupons' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Newsletter section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">뉴스레터 구독</h3>
              <p className="text-zinc-400">
                신상품 소식과 특별 할인 정보를 받아보세요
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              총사모<span className="text-orange-500">.</span>
            </h2>
            <p className="text-zinc-400 text-sm mb-4">
              대한민국 No.1 에어소프트 전문 쇼핑몰
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-orange-500 text-sm transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Company info */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-zinc-500 text-sm space-y-2">
            <p>
              <strong className="text-zinc-400">(주)삼손레포츠</strong> | 대표:
              홍길동 | 사업자등록번호: 123-45-67890
            </p>
            <p>
              주소: 서울특별시 강남구 테헤란로 123, 4층 | 통신판매업신고번호:
              제2024-서울강남-0000호
            </p>
            <p>고객센터: 02-1234-5678 | 이메일: support@chongsamo.co.kr</p>
            <p className="pt-4">
              © 2024 총사모. All rights reserved. Powered by (주)삼손레포츠
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
