import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] pt-20 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-right">

                    {/* Column 1: Logo and Description */}
                    <div className="space-y-4 flex flex-col items-end sm:items-start">
                        <Link href="/" className="inline-block">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ccec13f-f879-4f22-bc17-2c4f672ea681-9adiya-site/assets/svgs/logo-1.svg"
                                alt="9adiya Logo"
                                width={100}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed lg:max-w-xs">
                            منصة احترافية تساعد المحامين على إدارة القضايا وتنظيم الملفات ومتابعة المواعيد
                        </p>
                    </div>
                    
                    {/* Column 2: Quick Links */}
                    <div className="space-y-4 flex flex-col items-end sm:items-start">
                        <h3 className="text-lg font-bold text-foreground">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">تتبع القضية</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">المدونة</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Contact Info */}
                    <div className="space-y-4 flex flex-col items-end sm:items-start">
                        <h3 className="text-lg font-bold text-foreground">تواصل معنا</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>المغرب, سلا</li>
                            <li>هاتف: +212657067384</li>
                            <li>mostafadrazy@gmail.com</li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div className="space-y-4 flex flex-col items-end sm:items-start">
                        <h3 className="text-lg font-bold text-foreground">تابعنا</h3>
                        <div className="flex items-center gap-4">
                            <Link href="#" aria-label="Facebook account" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" aria-label="Twitter account" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" aria-label="Instagram account" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" aria-label="Contact via Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground">
                        © 2025 قضية. جميع الحقوق محفوظة
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;