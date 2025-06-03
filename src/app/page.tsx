import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景アニメーション */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* メインタイトル */}
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                TODO
              </h1>
              <div className="text-2xl md:text-4xl font-light text-white/90 tracking-wider">
                QUANTUM TASK MANAGER
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              次世代のタスク管理で
              <span className="text-cyan-400 font-semibold"> 未来 </span>
              を創造する
            </p>
          </div>

          {/* 機能一覧 */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-white font-semibold text-lg mb-2">LIGHTNING FAST</h3>
              <p className="text-white/70 text-sm">瞬間的なタスク作成・編集</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-2">PRECISION CONTROL</h3>
              <p className="text-white/70 text-sm">高精度なタスク管理システム</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-white font-semibold text-lg mb-2">QUANTUM SYNC</h3>
              <p className="text-white/70 text-sm">リアルタイム同期技術</p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-6">
            <Link 
              href="/todos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hover:from-cyan-300 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="mr-2">🚀</span>
              QUANTUM LAUNCH
            </Link>
            
            <p className="text-white/60 text-sm">
              次世代体験への扉を開く
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}