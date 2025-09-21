import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { href: '#', label: 'من نحن' },
    { href: '#', label: 'تتبع القضية' },
    { href: '#', label: 'إنشاء حساب' },
  ];

  const navLinkClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 text-white/80 hover:bg-accent hover:text-white transition-colors";
  const primaryButtonClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors";

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Renders on the right in RTL layout */}
          <Link href="/" className="group cursor-pointer">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ccec13f-f879-4f22-bc17-2c4f672ea681-9adiya-site/assets/svgs/logo-1.svg"
              alt="9adiya Logo"
              width={80}
              height={42}
              className="w-16 md:w-20 h-auto group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - Renders in the center */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Actions - Renders on the left in RTL layout */}
          <div className="flex items-center">
            <Link href="#" className={`hidden md:inline-flex ${primaryButtonClasses}`}>
              تسجيل الدخول
            </Link>

            <button
              className="p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;