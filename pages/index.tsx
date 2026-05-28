import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Heritage Tutorials</title>
        <meta name="description" content="Practice JAMB & WAEC CBT exams online" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-3xl text-center p-8">
          <h1 className="text-4xl font-extrabold mb-4">Practice JAMB & WAEC CBT Exams Online</h1>
          <p className="text-lg text-gray-600 mb-6">Take realistic mock exams, get instant results and track your progress with Heritage Tutorials.</p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard" className="px-6 py-3 bg-emerald-600 text-white rounded-md">Start Practice</Link>
            <a href="#features" className="px-6 py-3 border rounded-md">Learn More</a>
          </div>
        </div>
      </main>
    </>
  )
}
