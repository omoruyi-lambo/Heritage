import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  CheckCircle2,
  Clock,
  BarChart3,
  Zap,
  Smartphone,
  Trophy,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowRight,
} from 'lucide-react'
import { Button } from '../src/components/ui/Button'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const features = [
    { icon: CheckCircle2, title: 'Real CBT Experience', desc: 'Practice in an environment that mirrors the official JAMB & WAEC CBT layout.' },
    { icon: Zap, title: 'Instant Results', desc: 'Get scores, detailed breakdowns, and answer reviews the moment you submit.' },
    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Study on any device with a fully responsive, optimized interface.' },
    { icon: BarChart3, title: 'Performance Tracking', desc: 'Visualize weak topics and progress over time with smart analytics.' },
    { icon: Trophy, title: 'Smart Practice Mode', desc: 'Adaptive questions that focus on what you need to improve most.' },
    { icon: Clock, title: 'Timed Mock Exams', desc: 'Build exam-day stamina with full-length timed mock examinations.' },
  ]

  const stats = [
    { value: '25,000+', label: 'Active Students' },
    { value: '12,000+', label: 'Questions Available' },
    { value: '18', label: 'Subjects Covered' },
    { value: '94%', label: 'Success Rate' },
  ]

  const testimonials = [
    { name: 'Chiamaka Eze', score: 'JAMB 312 / 400', text: 'Heritage Tutorials made me feel ready on exam day. The mock CBT felt identical to the real thing!' },
    { name: 'Tunde Bakare', score: 'WAEC 8 A1s', text: 'The instant feedback and explanations are gold. I improved my Math score by 40% in 6 weeks.' },
    { name: 'Amaka Johnson', score: 'JAMB 289 / 400', text: 'Clean interface, no distractions, and the analytics helped me focus on my weak areas.' },
  ]

  const subjects = [
    { name: 'Mathematics', count: '120 questions' },
    { name: 'English Language', count: '100 questions' },
    { name: 'Biology', count: '90 questions' },
    { name: 'Chemistry', count: '95 questions' },
    { name: 'Physics', count: '85 questions' },
    { name: 'Literature', count: '70 questions' },
  ]

  return (
    <>
      <Head>
        <title>Heritage Tutorials</title>
        <meta name="description" content="Practice JAMB & WAEC CBT exams online" />
      </Head>
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-[#059669] rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
                <span className="text-xl font-bold text-gray-900">HERITAGETUTORIALS</span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-gray-600 hover:text-[#059669] font-medium">Features</a>
                <a href="#subjects" className="text-gray-600 hover:text-[#059669] font-medium">Subjects</a>
                <a href="#testimonials" className="text-gray-600 hover:text-[#059669] font-medium">Reviews</a>
                <a href="#faq" className="text-gray-600 hover:text-[#059669] font-medium">FAQ</a>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <Link href="/dashboard"><Button variant="secondary">Sign In</Button></Link>
                <Link href="/dashboard"><Button>Start Practice</Button></Link>
              </div>

              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b p-4">
              <div className="flex flex-col gap-4">
                <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#subjects" onClick={() => setIsMenuOpen(false)}>Subjects</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                <Link href="/dashboard"><Button className="w-full">Start Practice</Button></Link>
              </div>
            </div>
          )}
        </nav>

        <section className="pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                  <Star className="w-4 h-4 fill-current" /> Trusted by 25,000+ Nigerian students
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">Practice JAMB & WAEC <br /><span className="text-[#059669]">CBT Exams Online</span></h1>
                <p className="text-xl text-gray-600 max-w-lg">The most realistic CBT practice platform in Nigeria. Take mock exams, review detailed answers, and track your progress — all in one premium dashboard.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard"><Button size="lg" className="w-full sm:w-auto">Start Practice <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <a href="#features"><Button size="lg" variant="secondary" className="w-full sm:w-auto">Learn More</Button></a>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">{[1,2,3,4].map(i => (<div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />))}</div>
                  <div className="text-sm text-gray-600">4.9 from 3,200+ reviews</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 bg-yellow-100 w-40 h-40 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-10 -left-10 bg-emerald-100 w-40 h-40 rounded-full blur-3xl opacity-50" />
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-700">Exam Submitted</span>
                      <span className="text-3xl font-extrabold text-[#059669]">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-[#059669] h-2.5 rounded-full w-[87%]"></div></div>
                    <p className="text-sm text-gray-500 mt-2">Score: 87% · Top 10%</p>
                  </div>
                  <div className="space-y-3">{['A','B','C','D'].map((opt, i) => (<div key={opt} className={`p-3 rounded-lg border ${i === 1 ? 'border-[#059669] bg-emerald-50' : 'border-gray-200'}`}>Option {opt}</div>))}</div>
                </div>
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce">
                  <div className="flex items-center gap-2"><div className="bg-green-100 p-2 rounded-full"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /></div><div><p className="text-xs text-gray-500">Live now</p><p className="font-bold">1,247 students online</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (<div key={i} className="text-center"><div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div><div className="text-gray-500 font-medium">{stat.label}</div></div>))}
          </div>
        </section>

        <section id="features" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16"><h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to ace your CBT</h2><p className="text-xl text-gray-600">Powerful tools built specifically for JAMB & WAEC candidates.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, i) => (<div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-50/50 transition-all"><div className="w-12 h-12 bg-emerald-100 text-[#059669] rounded-xl flex items-center justify-center mb-4"><feature.icon className="w-6 h-6" /></div><h3 className="text-xl font-bold mb-2">{feature.title}</h3><p className="text-gray-600">{feature.desc}</p></div>))}</div>
          </div>
        </section>

        <section id="subjects" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-gray-900 mb-4">Covering every JAMB & WAEC subject</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{subjects.map((sub, i) => (<div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center"><div><h3 className="font-bold text-lg">{sub.name}</h3><p className="text-gray-500 text-sm">{sub.count}</p></div><div className="p-3 bg-gray-50 rounded-lg"><ChevronRight className="w-5 h-5 text-gray-400" /></div></div>))}</div></div>
        </section>

        <section id="testimonials" className="py-24 px-4"><div className="max-w-7xl mx-auto"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-gray-900 mb-4">Students love Heritage Tutorials</h2></div><div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => (<div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white"><div className="flex mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div><p className="text-gray-700 mb-6">{t.text}</p><div className="flex items-center gap-3"><div className="w-10 h-10 bg-gray-200 rounded-full" /><div><p className="font-bold">{t.name}</p><p className="text-sm text-[#059669] font-medium">{t.score}</p></div></div></div>))}</div></div></section>

        <section className="py-20 px-4 bg-[#059669]"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-4xl font-bold mb-6">Ready to pass with flying colours?</h2><p className="text-xl mb-8 text-emerald-100">Join thousands of Nigerian students already excelling with Heritage Tutorials.</p><Link href="/dashboard"><Button size="lg" className="bg-white text-[#059669] hover:bg-emerald-50">Start Free Practice</Button></Link></div></section>

        <footer className="bg-gray-900 text-gray-300 py-12 px-4"><div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8"><div className="col-span-1 md:col-span-2"><div className="flex items-center gap-2 mb-4"><div className="h-8 w-8 bg-[#059669] rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div><span className="text-xl font-bold text-white">HERITAGETUTORIALS</span></div><p className="text-gray-400">Nigeria's premium CBT practice platform helping students excel at JAMB & WAEC.</p></div><div><h4 className="text-white font-bold mb-4">Contact</h4><ul className="space-y-2"><li>12 Awolowo Way, Ikeja, Lagos</li><li>hello@heritagetutorials.ng</li><li>+234 800 123 4567</li></ul></div></div></footer>
      </div>
    </>
  )
}

