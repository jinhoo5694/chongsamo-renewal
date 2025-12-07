import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: '가스건',
    description: '가스 라이플 & 피스톨',
    icon: '🔫',
    count: 234,
    href: '/category/gas',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    name: '전동건',
    description: '전동 라이플 & SMG',
    icon: '⚡',
    count: 189,
    href: '/category/electric',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 3,
    name: '스나이퍼',
    description: '볼트액션 & 세미자동',
    icon: '🎯',
    count: 67,
    href: '/category/sniper',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    name: '샷건',
    description: '가스 & 스프링 샷건',
    icon: '💥',
    count: 45,
    href: '/category/shotgun',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    name: '액세서리',
    description: '스코프, 매거진, 부품',
    icon: '🔧',
    count: 512,
    href: '/category/accessories',
    color: 'from-zinc-600 to-zinc-500',
  },
  {
    id: 6,
    name: '보호장비',
    description: '고글, 마스크, 조끼',
    icon: '🛡️',
    count: 178,
    href: '/category/gear',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            카테고리별 쇼핑
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            원하시는 제품을 빠르게 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  {category.description}
                </p>
                <span className="text-xs text-orange-500 font-medium">
                  {category.count}개 상품
                </span>
              </div>

              {/* Arrow icon */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
