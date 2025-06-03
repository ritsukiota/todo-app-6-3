'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">ログイン</h2>
        <p className="text-gray-600">認証をスキップしてTODOページに進みます</p>
        <button
          onClick={() => router.push('/todos')}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 text-lg font-semibold"
        >
          TODOページに進む
        </button>
      </div>
    </div>
  );
}
