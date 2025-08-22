// src/app/user/[id]/page.tsx

import { use } from 'react';

interface Params {
    params: { id: string };
}

export default function UserPage({ params }: Params) {
    return (
        <main style={{ padding: 20 }}>
            <h1>使用者 ID：{params.id}</h1>
        </main>
    );
}
