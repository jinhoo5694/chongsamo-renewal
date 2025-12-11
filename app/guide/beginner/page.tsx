import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const sections = [
  {
    id: 'what-is',
    title: '에어소프트건이란?',
    content: `에어소프트건(Airsoft Gun)은 6mm 또는 8mm 플라스틱 BB탄을 발사하는 모의 총기입니다.
    실제 총기와 유사한 외관을 가지고 있지만, 비살상 무기로 분류되어 서바이벌 게임,
    사격 훈련, 수집 등의 목적으로 사용됩니다.`,
  },
  {
    id: 'types',
    title: '에어소프트건의 종류',
    items: [
      {
        name: '가스건 (GBB/GBBR)',
        description: '가스 압력을 이용해 BB탄을 발사하며, 실제 총기와 유사한 반동(블로우백)을 제공합니다. 가장 리얼한 작동감을 원하는 분들께 추천합니다.',
      },
      {
        name: '전동건 (AEG)',
        description: '배터리로 구동되는 모터를 이용해 BB탄을 발사합니다. 안정적인 성능과 연사력을 제공하며, 게임용으로 많이 사용됩니다.',
      },
      {
        name: '스나이퍼 (볼트액션)',
        description: '수동으로 장전하는 방식으로, 높은 정확도와 사거리를 제공합니다. 저격수 역할에 적합합니다.',
      },
      {
        name: '샷건',
        description: '한 번에 여러 발의 BB탄을 발사하며, 근거리 전투에 효과적입니다.',
      },
    ],
  },
  {
    id: 'safety',
    title: '안전 수칙',
    items: [
      '항상 보안경(고글)을 착용하세요',
      '사람이나 동물을 향해 조준하지 마세요',
      '사용하지 않을 때는 안전장치를 걸어두세요',
      '실내에서는 충분한 안전거리를 확보하세요',
      '어린이의 손이 닿지 않는 곳에 보관하세요',
      '공공장소에서 휴대하지 마세요',
    ],
  },
  {
    id: 'maintenance',
    title: '기본 관리법',
    items: [
      '사용 후 청소: 배럴(총열)을 청소봉으로 닦아주세요',
      '가스건: 사용 후 매거진을 분리하고 남은 가스를 빼주세요',
      '전동건: 배터리를 분리하여 보관하세요',
      '습기 관리: 건조한 곳에 보관하세요',
      '윤활: 정기적으로 실리콘 오일로 윤활해 주세요',
    ],
  },
  {
    id: 'accessories',
    title: '필수 액세서리',
    items: [
      {
        name: '보안경/고글',
        description: '눈을 보호하는 필수 장비입니다. ANSI Z87.1 등급 이상을 권장합니다.',
      },
      {
        name: '페이스 마스크',
        description: '얼굴, 특히 치아를 보호합니다.',
      },
      {
        name: 'BB탄',
        description: '0.20g ~ 0.28g이 일반적이며, 제품에 맞는 무게를 선택하세요.',
      },
      {
        name: '가스/배터리',
        description: '가스건은 그린가스 또는 CO2, 전동건은 리튬 배터리가 필요합니다.',
      },
      {
        name: '스피드 로더',
        description: '매거진에 BB탄을 빠르게 장전할 수 있습니다.',
      },
    ],
  },
];

export default function BeginnerGuidePage() {
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
              <span className="text-zinc-900 dark:text-white font-medium">초보자 가이드</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">초보자 가이드</h1>
            <p className="text-zinc-400">에어소프트건을 처음 접하시는 분들을 위한 기본 가이드</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Table of Contents */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="font-bold text-zinc-900 dark:text-white mb-4">목차</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition"
                >
                  • {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* What is Airsoft */}
            <section id="what-is" className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                {sections[0].title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {sections[0].content}
              </p>
            </section>

            {/* Types */}
            <section id="types" className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                {sections[1].title}
              </h2>
              <div className="grid gap-4">
                {sections[1].items?.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl"
                  >
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">
                      {typeof item === 'object' ? item.name : item}
                    </h3>
                    {typeof item === 'object' && item.description && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Safety */}
            <section id="safety" className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {sections[2].title}
              </h2>
              <ul className="space-y-3">
                {sections[2].items?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {typeof item === 'string' ? item : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Maintenance */}
            <section id="maintenance" className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                {sections[3].title}
              </h2>
              <ul className="space-y-3">
                {sections[3].items?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {typeof item === 'string' ? item : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Accessories */}
            <section id="accessories" className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                {sections[4].title}
              </h2>
              <div className="grid gap-4">
                {sections[4].items?.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl"
                  >
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">
                      {typeof item === 'object' ? item.name : item}
                    </h3>
                    {typeof item === 'object' && item.description && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">더 궁금한 점이 있으신가요?</h3>
            <p className="text-white/80 mb-6">상품 Q&A나 1:1 상담을 이용해 주세요</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/community/qna"
                className="px-6 py-3 bg-white text-orange-500 font-medium rounded-xl hover:bg-zinc-100 transition"
              >
                상품 Q&A
              </Link>
              <Link
                href="/support/inquiry"
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition"
              >
                1:1 상담
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
