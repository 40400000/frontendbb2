import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MdOutlineArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Educatie - Baasy",
  description: "Artikelen en inzichten over data, automatisering en e-commerce voor bol.com partners.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voorbij gaat",
      description: "50.000+ verkopers op bol.com, maar AI geeft je het voordeel. Ontdek hoe onze Ranking AI je producten automatisch optimaliseert voor betere vindbaarheid en meer verkopen.",
      author: "Thijmen Dreef",
      date: "22 juli 2025",
      imageUrl: "",
      href: "/blog/verkopen-bol-ai-tijdperk",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Bol.com partner worden: alle wettelijke eisen en administratie op een rij (6 essentiële stappen)",
      description: "Wil je gaan verkopen op bol.com? Deze complete gids legt uit welke wettelijke verplichtingen je hebt, welke documenten je nodig hebt en hoe je alles correct opzet.",
      author: "Thijmen Dreef",
      date: "15 juli 2025",
      imageUrl: "",
      href: "/blog/starten-als-bol-partner-in-2025",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd",
      description: "Belgische bestelling van een zakelijke klant? Geen btw rekenen! We leggen uit wat het betekent en hoe je de btw correct berekent, zonder stress.",
      author: "Thijmen Dreef",
      date: "28 juni 2025",
      imageUrl: "",
      href: "/blog/btw-aangifte-bol-icp",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers)",
      description: "Je hebt een topproduct, maar de reviewteller staat op nul. Volg dit stappenplan voor direct resultaat.",
      author: "Thijmen Dreef",
      date: "12 juni 2025",
      imageUrl: "",
      href: "/blog/meer-reviews-op-bol",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-28 pb-8 md:pb-12 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple background */}
        <div className="absolute inset-0 w-full h-full bg-white" />
        
        <div className="w-full relative z-10 flex flex-col">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
              Baasy <em className="italic">Educatie</em>
            </h1>
            
            <p className="mx-auto max-w-2xl text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 mb-8 md:mb-10">
              Artikelen en inzichten over gebruik van AI voor bol.com partners, automatisering, en alles wat je nodig hebt om te groeien op bol.com.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-xl mb-4 w-fit">
                Nieuwste artikel
              </div>
              <p className="text-sm text-[#111111]/60 mb-2">{featuredPost.date}</p>
              <h2 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] font-medium mb-4 text-balance text-[#111111]">
                <Link href={featuredPost.href} className="hover:opacity-80 transition-opacity text-[#111111]">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-[#111111]/70 mb-6 text-sm md:text-base leading-relaxed">
                {featuredPost.description}
              </p>
              <Link 
                href={featuredPost.href} 
                className="inline-flex items-center gap-2 bg-[#111111] text-white font-medium text-sm md:text-base py-3 md:py-4 px-6 rounded-xl hover:bg-[#111111]/90 transition-colors w-fit mb-6"
              >
                Lees artikel
                <MdOutlineArrowOutward className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-4">
                <Image 
                  src={featuredPost.authorImageUrl} 
                  alt={featuredPost.author} 
                  width={48} 
                  height={48} 
                  className="rounded-xl w-12 h-12 object-cover" 
                />
                <div>
                  <p className="font-medium text-[#111111]">{featuredPost.author}</p>
                  <p className="text-sm text-[#111111]/60">Auteur</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[#111111]">
              Meer artikelen
            </h2>
            <p className="text-sm md:text-base text-[#111111]/70">
              Ontdek meer inzichten en tips voor je bol.com succes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <div key={post.href} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-[#111111]/60 mb-2">{post.date}</p>
                  <h3 className="text-lg md:text-xl font-medium mb-3 leading-tight text-[#111111]">
                    <Link href={post.href} className="hover:opacity-80 transition-opacity text-[#111111]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#111111]/70 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={post.authorImageUrl} 
                        alt={post.author} 
                        width={32} 
                        height={32} 
                        className="rounded-lg w-8 h-8 object-cover" 
                      />
                      <p className="text-sm font-medium text-[#111111]">{post.author}</p>
                    </div>
                    <Link 
                      href={post.href}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <MdOutlineArrowOutward className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}