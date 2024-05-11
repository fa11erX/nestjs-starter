import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/post" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Public post
      </Link>
    </main>
  );
}
