import Image from "next/image";

export function DatabaseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden min-h-[350px] md:min-h-[420px] flex flex-col">
        <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
          Live markt data
        </h3>
        <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
          Real-time updates over markttrends, prijzen en concurrentie zodat je altijd de juiste beslissingen neemt.
        </p>
        <div className="flex-1 relative">
          <Image 
            src="/db-1.png" 
            alt="Database visualization" 
            width={520} 
            height={380} 
            quality={100}
            className="absolute -right-12 -bottom-24 md:-bottom-24 w-[420px] h-[285px] md:w-[560px] md:h-[380px] object-cover object-left rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>
      </div>

      {/* Card 2 - Nested Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {/* Top Left Card */}
        <div className="bg-white border border-gray-200 rounded-2xl space-y-3 relative overflow-hidden min-h-[160px] flex flex-col">
          <h3 className="text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] font-normal text-[#111111] tracking-tight p-4 md:p-6 pb-0">
            Zie vraag 
          </h3>
          <div className="flex-1 relative">
            <Image 
              src="/magicpattern-svg-chart-1760093594295.png" 
              alt="Demand chart visualization" 
              width={1200} 
              height={613} 
              quality={100}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        </div>

        {/* Top Right Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 space-y-3 relative overflow-hidden min-h-[160px] flex flex-col">
          <h3 className="text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] font-normal text-[#111111] tracking-tight">
            en aanbod
          </h3>
          
          {/* Competitor Info Table */}
          <div className="flex-1 flex items-center -mx-4 md:-mx-6 -mb-3">
            <div className="w-full overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 px-4 md:px-6 text-[#111111] font-medium text-xs">USB-C kabel</td>
                    <td className="py-2.5 px-2 text-center">
                      <span className="font-semibold text-[#111111]">247</span>
                    </td>
                    <td className="py-2.5 px-4 md:px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-[#111111]/50 uppercase tracking-wide">Concurrentie</span>
                        <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-2 py-0.5">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-xs font-medium text-red-700">Hoog</span>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 px-4 md:px-6 text-[#111111] font-medium text-xs">Powerbank</td>
                    <td className="py-2.5 px-2 text-center">
                      <span className="font-semibold text-[#111111]">189</span>
                    </td>
                    <td className="py-2.5 px-4 md:px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-[#111111]/50 uppercase tracking-wide">Concurrentie</span>
                        <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-xs font-medium text-orange-700">Gemiddeld</span>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 px-4 md:px-6 text-[#111111] font-medium text-xs">LED strip</td>
                    <td className="py-2.5 px-2 text-center">
                      <span className="font-semibold text-[#111111]">134</span>
                    </td>
                    <td className="py-2.5 px-4 md:px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-[#111111]/50 uppercase tracking-wide">Concurrentie</span>
                        <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-medium text-green-700">Laag</span>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Full Width Card - Product Recommendations */}
        <div className="col-span-2 bg-white border border-gray-200 rounded-2xl px-3 py-2 md:p-4 space-y-2 relative overflow-hidden flex flex-col">
          <h3 className="text-[15px] md:text-[18px] leading-[18px] md:leading-[22px] font-normal text-[#111111] tracking-tight">
            Vind kansrijke producten
          </h3>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Product 1 */}
            <div className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2.5">
                {/* Product Image */}
                <div className="relative rounded-md overflow-hidden flex-shrink-0">
                  <div className="w-24 h-24 relative">
                    <Image 
                      src="/Day_light_lamp_1.webp" 
                      alt="Daglichtlamp" 
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#111111]">Daglichtlamp</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-purple-50 border border-purple-200 rounded-full px-2 py-0.5 text-[10px] font-medium text-purple-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Trending product
                    </span>
                    <span className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 text-[10px] font-medium text-green-700">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      Weinig aanbieders
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2.5">
                {/* Product Image */}
                <div className="relative rounded-md overflow-hidden flex-shrink-0">
                  <div className="w-24 h-24 relative">
                    <Image 
                      src="/81080.jpg" 
                      alt="Smartwatch" 
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#111111]">Matcha set</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 rounded-full px-2 py-0.5 text-[10px] font-medium text-blue-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      Hoge vraag
                    </span>
                    <span className="inline-flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5 text-[10px] font-medium text-orange-700">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      Goede marge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden min-h-[350px] md:min-h-[420px] flex flex-col">
        <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
          Slimme CPC tracking
        </h3>
        <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
          Monitor biedingspatronen, optimaliseer je advertentiekosten en verhoog je winstmarges automatisch.
        </p>
        <div className="flex-1 relative">
          <Image 
            src="/db-3.png" 
            alt="Database visualization" 
            width={520} 
            height={380} 
            quality={100}
            className="absolute -right-12 -bottom-20 md:-bottom-32 w-[420px] h-[285px] md:w-[560px] md:h-[380px] object-cover object-left rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>
      </div>

      {/* Card 4 - Advanced bol analytics */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden min-h-[350px] md:min-h-[420px] flex flex-col">
        <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
          Keyword analyse
        </h3>
        <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
          Diepgaande inzichten in marktgedrag, concurrentie en verkoopkansen voor betere besluitvorming.
        </p>
        <div className="flex-1 relative">
          <Image 
            src="/db-2.png" 
            alt="Database visualization" 
            width={520} 
            height={380} 
            quality={100}
            className="absolute -right-12 -bottom-20 md:-bottom-32 w-[420px] h-[285px] md:w-[560px] md:h-[380px] object-cover object-left rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

