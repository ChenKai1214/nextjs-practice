import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white">
            <h1 className="text-3xl font-semibold mb-4">這是關於頁面</h1>
            <Link href="/" className="text-blue-500 underline">回到首頁</Link>
        </main>
    );
}