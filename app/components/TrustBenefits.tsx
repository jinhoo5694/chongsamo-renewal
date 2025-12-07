const benefits = [
  {
    icon: '🚚',
    title: '무료 배송',
    description: '50,000원 이상 구매시 전국 무료배송',
  },
  {
    icon: '⚡',
    title: '빠른 배송',
    description: '평일 오후 2시 이전 주문 당일발송',
  },
  {
    icon: '🔒',
    title: '안전 결제',
    description: '다양한 결제수단 및 안전결제 보장',
  },
  {
    icon: '💬',
    title: '고객 지원',
    description: '평일 10:00-18:00 친절한 상담',
  },
  {
    icon: '🔄',
    title: '교환/반품',
    description: '수령 후 7일 이내 교환/반품 가능',
  },
  {
    icon: '✅',
    title: '정품 보증',
    description: '100% 정품 보장 및 품질 인증',
  },
];

export default function TrustBenefits() {
  return (
    <section className="py-16 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
