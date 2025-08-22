// src/app/user/[id]/page.tsx

import Link from "next/link";

interface Params {
    params: {
        id: string;
    };
}

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

async function getUser(id: string): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch user');
    }

    return res.json();
}

export default async function UserPage({ params }: Params) {
    const user = await getUser(params.id);

    return (
        <main style={{ padding: 20 }}>
            <h1>使用者詳細資料</h1>
            <ul>
                <li><strong>姓名：</strong> {user.name}</li>
                <li><strong>信箱：</strong> {user.email}</li>
                <li><strong>電話：</strong> {user.phone}</li>
                <li><strong>網站：</strong> {user.website}</li>
                <li><strong>公司：</strong> {user.company.name}</li>
            </ul>

            <br />
            <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                ← 回到首頁
            </Link>
        </main>
    );
}

