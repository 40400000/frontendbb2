import Link from 'next/link';

export function FooterB() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link href="/features" className="hover:opacity-100 transition-opacity">Features</Link></li>
              <li><Link href="/prijzen" className="hover:opacity-100 transition-opacity">Prijzen</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link href="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link href="/algemene-voorwaarden" className="hover:opacity-100 transition-opacity">Terms</Link></li>
              <li><Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-50">
          <p>&copy; {new Date().getFullYear()} Bolbaas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
