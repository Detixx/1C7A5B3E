export default function Guide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Laptop Specifikációk Útmutatója
            </h1>
            <p className="text-lg text-gray-300">
              Ismerd meg a fontosabb laptop komponenseket és mire figyelj vásárláskor
            </p>
          </div>

          {/* Guide Sections */}
          <div className="space-y-8">
            {/* CPU Section */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 bg-opacity-30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Processzor (CPU)</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Ajánlott specifikációk</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Intel i5 vagy AMD Ryzen 5 (általában elég)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Figyelj a generációra (pl. 11. gen Intel)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Minimum 4 mag, ajánlott 6+ mag
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4 border border-blue-700">
                    <h4 className="font-semibold text-blue-300 mb-2">💡 Pro tipp</h4>
                    <p className="text-blue-200 text-sm">
                      Régebbi rendszerekhez mindig nézd meg a generációt is! Egy újabb i3 gyakran jobb, mint egy régebbi i5.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RAM Section */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 bg-opacity-30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Memória (RAM)</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Memória mennyiség</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Minimum: 8 GB (alapszintű használat)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        Ajánlott: 16 GB (többfeladatosság)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Fejlesztéshez: 16+ GB
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-900 bg-opacity-50 rounded-lg p-4 border border-green-700">
                    <h4 className="font-semibold text-green-300 mb-2">⚡ Teljesítmény</h4>
                    <p className="text-green-200 text-sm">
                      8-16 GB a legésszerűbb választás. A RAM mennyisége közvetlenül befolyásolja a rendszer sebességét.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Section */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 bg-opacity-30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Tárhely (Storage)</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Tárhely típusok</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        SSD erősen ajánlott (gyorsabb)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Minimum: 256 GB
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Ajánlott: 512 GB vagy több
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-900 bg-opacity-50 rounded-lg p-4 border border-purple-700">
                    <h4 className="font-semibold text-purple-300 mb-2">🚀 Sebesség</h4>
                    <p className="text-purple-200 text-sm">
                      Az SSD tárhely jelentősen gyorsabb, mint a hagyományos HDD. A rendszer indítása és programok betöltése sokkal gyorsabb lesz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium border border-indigo-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Vissza a főoldalra
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
  