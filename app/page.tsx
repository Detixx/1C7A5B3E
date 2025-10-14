export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Laptop-vásárlási Segéd
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Gyors, érthető tippek: mire figyelj Windows 10-hez és tanuláshoz. 
              Találd meg a tökéletes laptopot a szükségleteidhez!
            </p>
          </div>

          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Gyors szűrő kategóriák
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Belépő szint</h3>
                <p className="text-gray-300">Böngészés, Office programok, egyszerű feladatok</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Középkategória</h3>
                <p className="text-gray-300">Tanulás, könnyű fejlesztés, multitasking</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Haladó</h3>
                <p className="text-gray-300">Gaming, fejlesztés, videó szerkesztés</p>
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/guide" 
              className="group bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-800 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Részletes Útmutató
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Ismerd meg a laptop specifikációkat: processzor, memória, tárhely és egyéb fontos komponensek.
              </p>
              <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                <span>Útmutató megtekintése</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a 
              href="/guide/compare" 
              className="group bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-800 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Specifikáció Összehasonlítás
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Hasonlítsd össze a minimum és ajánlott specifikációkat különböző felhasználási területekhez.
              </p>
              <div className="flex items-center text-green-400 font-medium group-hover:text-green-300">
                <span>Összehasonlítás megtekintése</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}