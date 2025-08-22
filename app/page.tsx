// src/app/page.tsx

import Link from 'next/link';

interface User {
  id: number;
  name: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-6">
      <h1 className="text-4xl font-bold mb-4">歡迎來到我的 Next.js 網站</h1>
      <Link href="/about" className="text-blue-500 underline">前往關於頁面</Link>
      <h1 className="text-4xl font-bold mb-6">使用者列表</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="text-blue-600 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
