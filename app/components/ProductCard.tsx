'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  isSoldOut?: boolean;
  rating?: number;
  reviewCount?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-700 overflow-hidden">
        {/* Product image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          unoptimized
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
              NEW
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Sold out overlay */}
        {product.isSoldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-bold">
              품절
            </span>
          </div>
        )}

        {/* Quick actions */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
            onClick={(e) => {
              e.preventDefault();
              // Add to wishlist
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
          {product.brand}
        </p>
        <h3 className="font-medium text-zinc-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? 'text-yellow-400'
                      : 'text-zinc-200 dark:text-zinc-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            ₩{formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              ₩{formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
