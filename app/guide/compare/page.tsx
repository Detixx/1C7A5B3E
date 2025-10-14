type Row = { kategoria:string; minimum:string; ajanlott:string };

const data: Row[] = [
  { kategoria:"CPU", minimum:"i3 / Ryzen 3", ajanlott:"i5 / Ryzen 5" },
  { kategoria:"RAM", minimum:"8 GB", ajanlott:"16 GB" },
  { kategoria:"SSD", minimum:"256 GB", ajanlott:"512 GB" },
  { kategoria:"Kijelző", minimum:"FHD", ajanlott:"FHD IPS / 120Hz" },
];

export default function Compare() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Laptop Specifikációk Összehasonlítása
            </h1>
            <p className="text-lg text-gray-300">
              Minimum és ajánlott konfigurációk különböző felhasználási területekhez
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Kategória</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      <div className="flex items-center">
                        <span className="bg-red-900 text-red-200 px-2 py-1 rounded-full text-sm mr-2 border border-red-700">Minimum</span>
                        Alapszintű használat
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      <div className="flex items-center">
                        <span className="bg-green-900 text-green-200 px-2 py-1 rounded-full text-sm mr-2 border border-green-700">Ajánlott</span>
                        Optimális teljesítmény
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {data.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">
                        {row.kategoria}
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-900 text-red-200 border border-red-700">
                          {row.minimum}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-900 text-green-200 border border-green-700">
                          {row.ajanlott}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Minimum Specifikáció
              </h3>
              <p className="text-gray-300">
                Alapszintű feladatokhoz elegendő: böngészés, Office programok, egyszerű multimédia.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Ajánlott Specifikáció
              </h3>
              <p className="text-gray-300">
                Optimális teljesítmény: fejlesztés, gaming, videó szerkesztés, multitasking.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium border border-blue-500"
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
