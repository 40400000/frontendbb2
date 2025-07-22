import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educatie - Bolbaas",
  description: "Artikelen en inzichten over data, automatisering en e-commerce voor bol.com partners.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voorbij gaat",
      description: "50.000+ verkopers op bol.com, maar AI geeft je het voordeel. Ontdek hoe onze Ranking AI je producten automatisch optimaliseert voor betere vindbaarheid en meer verkopen.",
      author: "Thijmen Dreef",
      date: "24 juli 2025",
      imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/RANKINGAIBLOG_NOBG.png",
      href: "/blog/verkopen-bol-ai-tijdperk",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Bol.com partner worden: alle legale eisen en administratie op een rij (6 essentiële stappen)",
      description: "Wil je gaan verkopen op bol.com? Deze complete gids legt uit welke legale verplichtingen je hebt, welke documenten je nodig hebt en hoe je alles correct opzet.",
      author: "Thijmen Dreef",
      date: "23 juli 2025",
      imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/BLOG_1.png",
      href: "/blog/van-hobby-naar-zakelijk-bol",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd",
      description: "Zie je 'intracommunautaire levering' op je bol.com factuur? We leggen uit wat het betekent en hoe je de btw correct berekent, zonder stress.",
      author: "Thijmen Dreef",
      date: "22 juli 2025",
      imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/BLOG_1.png",
      href: "/blog/btw-aangifte-bol",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
    {
      title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers)",
      description: "Je hebt een topproduct, maar de reviewteller staat op nul. Volg dit stappenplan voor direct resultaat.",
      author: "Thijmen Dreef",
      date: "21 juli 2025",
      imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/BLOG_1.png",
      href: "/blog/meer-reviews-op-bol",
      authorImageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG",
    },
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <div className="relative z-0 flex flex-col min-h-screen border-t">
        {/* Overlay Grid - Consistent with homepage */}
        <div className="absolute inset-0 h-full z-10 pointer-events-none border-l border-r border-border [mask-image:linear-gradient(to_bottom,transparent,black_200px)]">
          <div className="relative h-full max-w-full mx-auto">
            <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>
        
        <main className="relative z-20 container px-0">
          <header className="w-full pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-border">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="col-span-1 sm:col-span-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  Bolbaas Educatie
                </h1>
                <p className="mt-4 text-lg text-foreground max-w-2xl">
                  Artikelen en inzichten over gebruik van AI voor bol.com partners, automatisering, en alles wat je nodig hebt om te groeien op bol.com.
                </p>
              </div>
            </div>
          </header>

          {/* Featured Post Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 lg:gap-x-16">
              <div className="md:col-span-3 flex flex-col justify-center">
                <p className="text-sm text-foreground">{featuredPost.date}</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-4 leading-tight">
                  <Link href={featuredPost.href} className="hover:underline">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-foreground mb-6 text-sm sm:text-base line-clamp-3 max-w-prose">
                  {featuredPost.description}
                </p>
                <Link href={featuredPost.href} passHref>
                  <Button variant="link" className="p-0 mb-4">Lees meer -&gt;</Button>
                </Link>
                <div className="flex items-center gap-4">
                  <Image src={featuredPost.authorImageUrl} alt={featuredPost.author} width={64} height={64} className="rounded-full w-16 h-16 object-cover" />
                  <p className="text-lg font-medium">{featuredPost.author}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:col-span-2">
                <Link href={featuredPost.href}>
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    width={600}
                    height={600}
                    className="object-cover rounded-lg aspect-square transition-transform group-hover:scale-105 w-full"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* Grid of Other Posts */}
          <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {otherPosts.map((post) => (
                <div key={post.href} className="group flex flex-col">
                  <Link href={post.href} className="block mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={300}
                      height={300}
                      className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <p className="text-sm text-foreground">{post.date}</p>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    <Link href={post.href} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground text-sm flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-3">
                     <Image src={post.authorImageUrl} alt={post.author} width={48} height={48} className="rounded-full w-12 h-12 object-cover" />
                     <p className="text-sm font-medium">{post.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 