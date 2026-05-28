import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Trophy, 
  ChevronRight, 
  Clock,
  Calculator,
  Dna,
  FlaskConical,
  Atom,
  Feather,
  TrendingUp,
  Home,
  History,
  Settings,
  LogOut
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Button } from '../components/ui/Button';
import { SUBJECTS } from '../data/store';

const Dashboard = () => {
  const navigate = useNavigate();

  const chartData = [
    { name: 'Mon', score: 65 },
    { name: 'Tue', score: 78 },
    { name: 'Wed', score: 75 },
    { name: 'Thu', score: 85 },
    { name: 'Fri', score: 82 },
    { name: 'Sat', score: 88 },
    { name: 'Sun', score: 0 },
  ];

  const recentExams = [
    { subject: 'Mathematics', date: '2h ago', score: 87, icon: Calculator, color: 'bg-blue-100 text-blue-600' },
    { subject: 'English Language', date: 'Yesterday', score: 92, icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
    { subject: 'Chemistry', date: '3 days ago', score: 74, icon: FlaskConical, color: 'bg-orange-100 text-orange-600' },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'calculator': return Calculator;
      case 'book-open': return BookOpen;
      case 'dna': return Dna;
      case 'flask-conical': return FlaskConical;
      case 'atom': return Atom;
      case 'feather': return Feather;
      default: return BookOpen;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#059669] rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className="text-lg font-bold text-gray-900">HERITAGE</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 bg-gray-50 rounded-lg font-medium">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left">
            <BookOpen className="w-5 h-5" /> Practice
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left">
            <Calendar className="w-5 h-5" /> Exams
          </button>
          <Link to="/results" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left">
            <History className="w-5 h-5" /> Results
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6 sticky top-0 z-30">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Good morning, Student 👋</h1>
              <p className="text-gray-500">Ready to ace your practice today?</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                 <div className="w-10 h-10 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Exams Taken</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">42</h3>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                 <span className="text-green-600 font-medium">+12% this week</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Average Score</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">82%</h3>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                 <span className="text-green-600 font-medium">+5% vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Questions Answered</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">1,248</h3>
                </div>
                <div className="p-3 bg-purple-50 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Streak</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">7 days</h3>
                </div>
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Performance Trend</h3>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 bg-white">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#059669" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentExams.map((exam, i) => {
                  const Icon = exam.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                      <div className={`p-3 rounded-xl ${exam.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{exam.subject}</p>
                        <p className="text-sm text-gray-500">{exam.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600">{exam.score}%</p>
                      </div>
                    </div>
                  );
                })}
                <Link to="/results" className="block text-center text-[#059669] font-medium pt-2 hover:underline">
                  View All Results
                </Link>
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Start Practicing</h3>
              <Link to="/" className="text-[#059669] hover:underline font-medium">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUBJECTS.map((subject) => {
                const Icon = getIconComponent(subject.icon);
                return (
                  <div 
                    key={subject.id} 
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all group cursor-pointer"
                    onClick={() => navigate(`/exam/${subject.id}`)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-emerald-100 transition-colors">
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#059669]" />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{subject.questionCount} questions</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{subject.name}</h4>
                    <p className="text-sm text-gray-500 mb-6">{subject.description}</p>
                    <Button className="w-full" variant="secondary">
                      Start Practice <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
