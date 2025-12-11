import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const teamMembers = [
  {
    name: '김대표',
    role: '대표이사',
    description: '20년 이상의 에어소프트 경력을 가진 전문가입니다.',
    avatar: '👨‍💼',
  },
  {
    name: '이매니저',
    role: '매장 매니저',
    description: '고객 응대와 매장 관리를 담당합니다.',
    avatar: '👨‍🔧',
  },
  {
    name: '박기술',
    role: 'AS/기술팀장',
    description: '제품 수리 및 커스텀 작업을 담당합니다.',
    avatar: '🔧',
  },
  {
    name: '최고객',
    role: '고객서비스팀',
    description: '고객 문의 및 상담을 담당합니다.',
    avatar: '💬',
  },
];

const milestones = [
  { year: '2005', event: '총사모 창업' },
  { year: '2008', event: '온라인 쇼핑몰 오픈' },
  { year: '2012', event: 'VFC 공식 딜러 계약' },
  { year: '2015', event: 'GHK 공식 딜러 계약' },
  { year: '2018', event: '신규 매장 확장 이전' },
  { year: '2020', event: 'STS 공식 딜러 계약' },
  { year: '2023', event: 'MARUI 공식 딜러 계약' },
  { year: '2024', event: '온라인 쇼핑몰 리뉴얼' },
];

export default function TeamPage() {
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
              <Link href="/guide" className="text-zinc-500 hover:text-orange-500 transition">
                가이드
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="text-zinc-900 dark:text-white font-medium">팀 소개</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">총사모 팀 소개</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              2005년 창업 이후, 대한민국 최고의 에어소프트 전문점을 목표로
              최상의 제품과 서비스를 제공하고 있습니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Company Introduction */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">회사 소개</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  <strong className="text-zinc-900 dark:text-white">총사모(CHONGSAMO)</strong>는
                  &quot;총을 사랑하는 모임&quot;의 줄임말로, 2005년 창업 이래 국내 에어소프트 시장을
                  선도해 온 전문 업체입니다.
                </p>
                <p>
                  VFC, GHK, MARUI, STS 등 세계 유수 브랜드의 공식 딜러로서
                  정품 에어소프트건과 관련 용품을 취급하고 있습니다.
                </p>
                <p>
                  20년 가까운 경험과 노하우를 바탕으로 초보자부터 전문가까지
                  모든 고객에게 최상의 서비스를 제공합니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-orange-500 mb-2">19+</p>
                  <p className="text-sm text-zinc-500">운영 연수</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-orange-500 mb-2">50,000+</p>
                  <p className="text-sm text-zinc-500">누적 고객</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-orange-500 mb-2">5+</p>
                  <p className="text-sm text-zinc-500">공식 파트너</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-orange-500 mb-2">1,000+</p>
                  <p className="text-sm text-zinc-500">취급 상품</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              팀원 소개
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center text-4xl mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-orange-500 mb-3">{member.role}</p>
                  <p className="text-sm text-zinc-500">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Milestones */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
              연혁
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-500/30 transform md:-translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-orange-500 rounded-full transform -translate-x-1/2" />

                    {/* Content */}
                    <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <span className="text-2xl font-bold text-orange-500">{milestone.year}</span>
                      <p className="text-zinc-700 dark:text-zinc-300 mt-1">{milestone.event}</p>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">오시는 길</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-2">주소</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    서울특별시 강남구 테헤란로 123, 4층
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-2">영업시간</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    평일 10:00 - 19:00<br />
                    토요일 10:00 - 17:00<br />
                    일요일/공휴일 휴무
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-2">연락처</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    전화: 02-1234-5678<br />
                    이메일: info@chongsamo.co.kr
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-2">교통편</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    지하철 2호선 강남역 3번 출구에서 도보 5분<br />
                    주차 가능 (2시간 무료)
                  </p>
                </div>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden h-64 md:h-auto">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm">지도 영역</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
