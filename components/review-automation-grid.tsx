import Image from "next/image";

export function ReviewAutomationGrid() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
      {/* Left Side - Complex Layout */}
      <div className="grid gap-4 md:gap-6">
        {/* Top Row - Two Cards Side by Side */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Reviewverzoeken */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden relative">
            <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
              Reviewverzoeken
            </h3>
            <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
              Krijg meer reviews door automatische verzoeken.
            </p>
            <Image
              src="/reviews7.png"
              alt="Product reviews dashboard"
              width={407}
              height={260}
              className="absolute w-[200%] md:w-[160%] h-auto -bottom-2 -right-12 border border-gray-200 shadow-sm rounded-2xl"
            />
          </div>

          {/* Review QR-codes */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden relative">
            <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
              AI reviewanalyse
            </h3>
            <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
              AI analyseert je reviews en geeft inzicht in mogelijke product verbeteringen.
            </p>
            <Image
              src="/aianalyse.png"
              alt="AI review analyse dashboard"
              width={400}
              height={300}
              className="absolute w-[200%] md:w-[160%] h-auto bottom-8 -right-12 border border-gray-200 shadow-sm rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom - Video */}
        <div className="relative">
          <video
            src="https://glrob7hsjras0ozc.public.blob.vercel-storage.com/emailsauto.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Side - Review inzichten (Full Height) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6 flex flex-col min-h-[600px] md:min-h-[700px]">
        <h3 className="text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] font-normal text-[#111111] tracking-tight">
          Converterende e-mail templates
        </h3>
        <p className="text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal text-[#111111]/70">
          Gebaseerd op onze database van 12 miljoen keywords en miljoenen verzonden e-mails hebben we de perfecte templates ontwikkeld. Onze data toont welke onderwerpen, timing en formuleringen de hoogste conversie opleveren. Ook voldoen deze aan alle regels van bol.
        </p>
        {/* Email templates image */}
        <div className="flex-1 flex items-end">
          <Image
            src="/email_templates3.png"
            alt="Email templates voor reviewverzoeken"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

