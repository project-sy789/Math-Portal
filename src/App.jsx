import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  PlayCircle, 
  Calculator, 
  PieChart, 
  TrendingUp, 
  Sigma, 
  Activity,
  Layers,
  Box,
  X,
  Lock
} from 'lucide-react';

const courseData = [
  {
    category: "ม.4 - พื้นฐาน",
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    topics: [
      {
        title: "เซต",
        playlists: [{ name: "เซต", videos: 16, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloemjTI1rha3ASo_nf4A52v" }]
      },
      {
        title: "ตรรกศาสตร์",
        playlists: [
          { name: "ตรรกศาสตร์ 1/2", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqICfgRs4EoJR75iMBuE2Wy" },
          { name: "ตรรกศาสตร์ 2/2", videos: 13, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqwNVf2MfmQhZwMiT2q5FmD" }
        ]
      },
      {
        title: "ระบบจำนวนจริง",
        playlists: [{ name: "จำนวนจริง", videos: 15, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloA-GNatKskCJ2QsGy8OyCS" }]
      },
      {
        title: "ทฤษฎีจำนวนเบื้องต้น",
        playlists: [{ name: "ทฤษฎีจำนวนเบื้องต้น", videos: 13, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqUTpp_wZxBOIE0-Wswzk0d" }]
      }
    ]
  },
  {
    category: "ม.4 - ฟังก์ชันและเรขาคณิต",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    topics: [
      {
        title: "ฟังก์ชัน",
        playlists: [
          { name: "ฟังก์ชั่น 1/2", videos: 14, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlokUwQpDZivy-lygkRdNHY0" },
          { name: "ฟังก์ชั่น 2/2", videos: 10, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrwnntcc9tQaUJbF8Sw0EgB" }
        ]
      },
      {
        title: "ภาคตัดกรวย",
        playlists: [
          { name: "ภาคตัดกรวย 1/2", videos: 23, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlp1nGJlIdyFfY6zWLm8Y0xX" },
          { name: "ภาคตัดกรวย 2/2", videos: 6, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpWT8gmGfyzCPaFwKxby971" }
        ]
      },
      {
        title: "เอ็กซ์โพเนนเชียล",
        playlists: [
          { name: "เอ็กซ์โพเนนเชียล 1/7", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlryTqF9niRy022Dnrt1JiRk" },
          { name: "เอ็กซ์โพเนนเชียล 2/7", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlp_BXLED3RRcEnyvtmcMjXC" },
          { name: "เอ็กซ์โพเนนเชียล 3/7", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrTY2MzJ_3RgGx_1pr8weim" },
          { name: "เอ็กซ์โพเนนเชียล 4/7", videos: 6, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlosKeENl4jgnjTjp1JANXdG" },
          { name: "เอ็กซ์โพเนนเชียล 5/7", videos: 10, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqZ8QveyiiZO4F_VKj6ToTs" },
          { name: "เอ็กซ์โพเนนเชียล 6/7", videos: 18, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpgocAxeTlSDjtKDGZIB8nO" },
          { name: "เอ็กซ์โพเนนเชียล 7/7", videos: 9, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloaGlgSRWsD7jYFh8R_U2zE" }
        ]
      }
    ]
  },
  {
    category: "ม.5 - พีชคณิตและตรีโกณมิติ",
    icon: <Box className="w-6 h-6 text-teal-500" />,
    topics: [
      {
        title: "ตรีโกณมิติ",
        playlists: [
          { name: "ตรีโกณ 1/3", videos: 11, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloa1zZPg6hW0fWTp-MZ-EtI" },
          { name: "ตรีโกณ 2/3", videos: 10, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlorw75aWQzitHd3Q-yHDzOt" },
          { name: "ตรีโกณ 3/3", videos: 10, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrMsxrFdc51k2QZOOCYa9wK" }
        ]
      },
      {
        title: "เมทริกซ์",
        playlists: [
          { name: "เมทริกซ์ 1/3", videos: 8, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlq-1AFe2uk6dITODQl3zPIV" },
          { name: "เมทริกซ์ 2/3", videos: 13, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpkNwLf7HNFwEFmpWvQCUsv" },
          { name: "เมทริกซ์ 3/3", videos: 17, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlore_lRmTBuo89-zmk4wWmD" }
        ]
      },
      {
        title: "เวกเตอร์",
        playlists: [
          { name: "เวกเตอร์ 1/5", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrgerbWfS2B1xOzLbSUucCD" },
          { name: "เวกเตอร์ 2/5", videos: 7, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrNiVODbDZO47LfFAvbjds3" },
          { name: "เวกเตอร์ 3/5", videos: 8, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpo7Y8yRKHiNj4cCsOjb3wB" },
          { name: "เวกเตอร์ 4/5", videos: 12, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqnE8RjR9Sm0ycsNIFUa5RE" },
          { name: "เวกเตอร์ 5/5", videos: 14, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrnzjGwpU_W0la5hUAx6osR" }
        ]
      },
      {
        title: "จำนวนเชิงซ้อน",
        playlists: [
          { name: "จำนวนเชิงซ้อน 1/2", videos: 21, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlocG-GdkxkFjMl6f9tFZygD" },
          { name: "จำนวนเชิงซ้อน 2/2", videos: 27, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloDNiJVVQ0bApvJ515hPEkB" }
        ]
      }
    ]
  },
  {
    category: "ม.6 - สถิติ แคลคูลัส และอื่นๆ",
    icon: <PieChart className="w-6 h-6 text-rose-500" />,
    topics: [
      {
        title: "ความน่าจะเป็น",
        playlists: [
          { name: "ความน่าจะเป็น 1/3", videos: 17, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpfV1ZT8b82TCLlMD9RLTdx" },
          { name: "ความน่าจะเป็น 2/3", videos: 16, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlplJogaCCJLzTYo0TE9xliR" },
          { name: "ความน่าจะเป็น 3/3", videos: 10, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpJa1kaywv-tYNpD9KNdSPH" }
        ]
      },
      {
        title: "สถิติ",
        playlists: [
          { name: "สถิติ 1/6", videos: 14, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrHMzc9DFvccODQRjW8Z6nA" },
          { name: "สถิติ 2/6", videos: 18, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrO2LI1LklvnFcT7Ujn-hjn" },
          { name: "สถิติ 3/6", videos: 8, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloKdER9_d8yE9jzIPCPba88" },
          { name: "สถิติ 4/6", videos: 6, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlrag4GLLB76axm3PeN0D1qu" },
          { name: "สถิติ 5/6", videos: 5, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlp7li7O5bpKPuFsLZC7nT9P" },
          { name: "สถิติ 6/6", videos: 25, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlov1f6JS9mLFmDDijMC7dGt" }
        ]
      },
      {
        title: "แคลคูลัส",
        playlists: [
          { name: "แคลคูลัส 1/3", videos: 28, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpl-fKDmZRBQuZsMQN2cbsv" },
          { name: "แคลคูลัส 2/3", videos: 26, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGloNJc9rbgaSgz9T_NEbvxJ0" },
          { name: "แคลคูลัส 3/3", videos: 6, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpGBNh-mLqTduHoBXLqblpF" }
        ]
      },
      {
        title: "ลำดับและอนุกรม",
        playlists: [ { name: "ลำดับและอนุกรม 1/2", videos: 14, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlq_NmDWxEugzGY3sbl6OVpl" }, { name: "ลำดับและอนุกรม 2/2", videos: 17, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlpmWMmQJrGSmlbrW9sF7w42" } ]
      },
      {
        title: "กำหนดการเชิงเส้น",
        playlists: [{ name: "กำหนดการเชิงเส้น 1/1", videos: 11, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlodU8z5qjxKo4dfdhz7tQ9J" }]
      }
    ]
  },
  {
    category: "เตรียมสอบ",
    icon: <Activity className="w-6 h-6 text-amber-500" />,
    topics: [
      {
        title: "ติวเข้ามหาลัย",
        playlists: [{ name: "ติวเข้ามหาลัย 1/1", videos: 20, url: "https://www.youtube.com/playlist?list=PLm6OSkE-YGlqrEBfmh8SEibwU4w9emuRw" }]
      }
    ]
  }
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash &= hash;
    }
    return hash.toString(36);
  };

  const TARGET_HASH = "-eqsgdb";

  const handleLogin = (e) => {
    e.preventDefault();
    if (hashString(password) === TARGET_HASH) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return courseData;
    
    return courseData.map(category => {
      const filteredTopics = category.topics.filter(topic => 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.playlists.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return { ...category, topics: filteredTopics };
    }).filter(category => category.topics.length > 0);
  }, [searchTerm]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap');
          body { font-family: 'Kanit', sans-serif; }
        `}} />
        
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Math<span className="text-indigo-600">Portal</span></h1>
          <p className="text-slate-500 mb-8 text-sm">กรุณากรอกรหัสผ่านเพื่อเข้าสู่คลังบทเรียน</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-center text-xl tracking-widest text-slate-700"
                autoFocus
              />
            </div>
            {error && <p className="text-rose-500 text-sm font-medium">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-4 rounded-2xl transition-colors shadow-sm text-lg"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap');
        body { font-family: 'Kanit', sans-serif; }
      `}} />

      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
              <Sigma className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 leading-none">Math<span className="text-indigo-600">Portal</span></h1>
              <p className="text-sm text-slate-500">คลังวิดีโอเรียนคณิตศาสตร์ออนไลน์</p>
            </div>
          </div>
          
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="ค้นหาบทเรียน..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!searchTerm && (
          <div className="bg-indigo-600 rounded-2xl p-6 text-white mb-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 opacity-10">
              <Calculator className="w-64 h-64" />
            </div>
            <div className="relative z-10 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">พร้อมที่จะลุยโจทย์หรือยัง?</h2>
              <p className="text-indigo-100">เลือกบทเรียนที่ต้องการทบทวนจากเพลย์ลิสต์ทั้งหมดด้านล่างได้เลย (วิดีโออัปเดตปี 2013-2014)</p>
            </div>
            <div className="flex gap-4 relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold">17</div>
                <div className="text-xs text-indigo-100 mt-1">หัวข้อหลัก</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold">44</div>
                <div className="text-xs text-indigo-100 mt-1">เพลย์ลิสต์</div>
              </div>
            </div>
          </div>
        )}

        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900">ไม่พบบทเรียนที่ค้นหา</h3>
            <p className="text-slate-500">ลองใช้คำค้นหาอื่น เช่น "แคลคูลัส", "เซต" หรือ "สถิติ"</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredData.map((category, idx) => (
              <section key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-slate-800">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                      <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 flex justify-between items-center group-hover:bg-indigo-50/50 transition-colors">
                        <h3 className="font-semibold text-lg text-slate-800">{topic.title}</h3>
                        <span className="text-xs font-medium bg-slate-200 text-slate-600 px-2 py-1 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                          {topic.playlists.length} พาร์ท
                        </span>
                      </div>
                      <div className="p-2">
                        {topic.playlists.map((playlist, pIdx) => (
                          <a 
                            key={pIdx}
                            href={playlist.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-left transition-colors group/btn"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="w-5 h-5 text-slate-400 group-hover/btn:text-indigo-600 transition-colors" />
                              <span className="font-medium text-slate-700 group-hover/btn:text-indigo-700">{playlist.name}</span>
                            </div>
                            <div className="flex gap-2 text-xs text-slate-500">
                              <span title="จำนวนวิดีโอ" className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                                <BookOpen className="w-3 h-3" /> {playlist.videos}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-12">
        <p className="text-sm">ข้อมูลอัปเดตล่าสุดปี 2013 - 2014</p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} Math Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
