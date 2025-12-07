'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: '블랙프라이데이 특별 세일',
    subtitle: '최대 40% 할인',
    description: '인기 가스건, 전동건 대상 특별 할인 이벤트',
    cta: '지금 쇼핑하기',
    ctaLink: '/sale',
    bgImage: 'https://chongsamo.co.kr/web/upload/category/editor/2025/11/07/1c7cce1e821361d402d60fdc7c64ee57.jpg',
    overlay: true,
  },
  {
    id: 2,
    title: '2024 신상품 입고',
    subtitle: 'NEW ARRIVAL',
    description: '최신 가스 라이플 및 전동건 컬렉션',
    cta: '신상품 보기',
    ctaLink: '/new',
    bgImage: 'https://chongsamo.co.kr/web/upload/category/editor/2025/07/09/b2c07e8d203c19a9b514de848c960a6b.jpg',
    overlay: true,
  },
  {
    id: 3,
    title: '프리미엄 스나이퍼 컬렉션',
    subtitle: 'SNIPER RIFLES',
    description: '정밀 사격을 위한 고급 스나이퍼 라이플',
    cta: '컬렉션 보기',
    ctaLink: '/category/sniper',
    bgImage: 'https://chongsamo.co.kr/web/upload/category/editor/2025/06/20/b1f65a307fb9cba5b284f505eb697473.jpg',
    overlay: true,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden h-[500px] md:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.bgImage}
          alt={slide.title}
          fill
          className="object-cover transition-all duration-500"
          priority
          unoptimized
        />
        {slide.overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-xl text-white">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-orange-500 text-white">
            {slide.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            {slide.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
            {slide.description}
          </p>
          <Link
            href={slide.ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
          >
            {slide.cta}
            <svg
              className="w-5 h-5"
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
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
