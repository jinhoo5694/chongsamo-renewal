'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CalculatorPage() {
  const [fps, setFps] = useState<string>('');
  const [bbWeight, setBbWeight] = useState<string>('0.20');
  const [joule, setJoule] = useState<string>('');
  const [calcMode, setCalcMode] = useState<'fpsToJoule' | 'jouleToFps'>('fpsToJoule');

  const bbWeights = ['0.12', '0.20', '0.23', '0.25', '0.28', '0.30', '0.32', '0.36', '0.40', '0.43'];

  // Calculate results
  const result = useMemo(() => {
    const weight = parseFloat(bbWeight);

    if (calcMode === 'fpsToJoule') {
      const fpsValue = parseFloat(fps);
      if (isNaN(fpsValue) || fpsValue <= 0) return null;

      // FPS to m/s
      const mps = fpsValue * 0.3048;
      // Kinetic energy: E = 0.5 * m * v^2
      const jouleResult = 0.5 * (weight / 1000) * (mps * mps);

      return {
        fps: fpsValue.toFixed(1),
        mps: mps.toFixed(2),
        joule: jouleResult.toFixed(3),
      };
    } else {
      const jouleValue = parseFloat(joule);
      if (isNaN(jouleValue) || jouleValue <= 0) return null;

      // Joule to m/s: v = sqrt(2 * E / m)
      const mps = Math.sqrt((2 * jouleValue) / (weight / 1000));
      // m/s to FPS
      const fpsResult = mps / 0.3048;

      return {
        fps: fpsResult.toFixed(1),
        mps: mps.toFixed(2),
        joule: jouleValue.toFixed(3),
      };
    }
  }, [fps, joule, bbWeight, calcMode]);

  // Common limits reference
  const limits = [
    { name: '일반 게임장 (실내)', fps: '350', joule: '1.14' },
    { name: '일반 게임장 (실외)', fps: '400', joule: '1.49' },
    { name: '스나이퍼 (실외)', fps: '450', joule: '1.88' },
    { name: '한국 법적 기준', fps: '~', joule: '0.75 (미만)' },
  ];

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
              <span className="text-zinc-900 dark:text-white font-medium">탄속 계산기</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">탄속 계산기</h1>
            <p className="text-zinc-400">FPS / Joule 변환 및 탄속 계산</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Calculator Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            {/* Mode Toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setCalcMode('fpsToJoule')}
                className={`flex-1 py-3 rounded-xl font-medium transition ${
                  calcMode === 'fpsToJoule'
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                FPS → Joule
              </button>
              <button
                onClick={() => setCalcMode('jouleToFps')}
                className={`flex-1 py-3 rounded-xl font-medium transition ${
                  calcMode === 'jouleToFps'
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                Joule → FPS
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Input */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {calcMode === 'fpsToJoule' ? 'FPS (Feet Per Second)' : 'Joule (에너지)'}
                </label>
                {calcMode === 'fpsToJoule' ? (
                  <input
                    type="number"
                    value={fps}
                    onChange={(e) => setFps(e.target.value)}
                    placeholder="예: 350"
                    className="w-full px-4 py-3 text-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ) : (
                  <input
                    type="number"
                    value={joule}
                    onChange={(e) => setJoule(e.target.value)}
                    placeholder="예: 1.14"
                    step="0.01"
                    className="w-full px-4 py-3 text-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                )}
              </div>

              {/* BB Weight */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  BB탄 무게 (g)
                </label>
                <select
                  value={bbWeight}
                  onChange={(e) => setBbWeight(e.target.value)}
                  className="w-full px-4 py-3 text-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {bbWeights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}g
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white">
                <h3 className="text-sm font-medium text-white/80 mb-4">계산 결과</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold">{result.fps}</p>
                    <p className="text-sm text-white/80">FPS</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.mps}</p>
                    <p className="text-sm text-white/80">m/s</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.joule}</p>
                    <p className="text-sm text-white/80">Joule</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reference Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              일반적인 탄속 제한 기준 (0.20g 기준)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <th className="text-left py-3 font-medium text-zinc-500">구분</th>
                    <th className="text-center py-3 font-medium text-zinc-500">FPS</th>
                    <th className="text-center py-3 font-medium text-zinc-500">Joule</th>
                  </tr>
                </thead>
                <tbody>
                  {limits.map((limit, index) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0"
                    >
                      <td className="py-3 text-zinc-900 dark:text-white">{limit.name}</td>
                      <td className="py-3 text-center text-zinc-600 dark:text-zinc-400">
                        {limit.fps}
                      </td>
                      <td className="py-3 text-center text-zinc-600 dark:text-zinc-400">
                        {limit.joule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Formula Info */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
            <h3 className="font-medium text-zinc-900 dark:text-white mb-3">계산 공식</h3>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <p>• <strong>FPS to m/s:</strong> m/s = FPS × 0.3048</p>
              <p>• <strong>Joule 계산:</strong> E = 0.5 × m × v² (m: 질량 kg, v: 속도 m/s)</p>
              <p className="text-xs mt-4">
                ※ 이 계산기는 참고용이며, 실제 탄속은 측정기로 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
