import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';

const Footer = () => {
  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQ / Support", href: "/faq" },
  ];

  return (
    <footer id="contact" className="relative border-t border-border bg-[hsl(240,10%,3%)]">
      {/* Main Footer */}
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-0.5">
              <img src={logo} alt="Subify Nepal" className="h-16 w-auto" />
              <span className="font-bold text-xl tracking-tight">
                Subify <span className="text-muted-foreground font-medium">Nepal</span>
              </span>
            </div>

            <p className="text-muted-foreground text-sm max-w-sm">
              Your trusted source for premium subscriptions in Nepal. Genuine accounts, instant delivery, local support.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:subify.np@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={18} className="group-hover:text-primary" />
                </div>
                <span className="text-sm">subify.np@gmail.com</span>
              </a>

              <a
                href="tel:+9779766015476"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={18} className="group-hover:text-primary" />
                </div>
                <span className="text-sm">+977 9766015476</span>
              </a>
            </div>

            {/* Message Button */}
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/9779766015476?text=Hi%20Subify%20Nepal%2C%20I%20want%20to%20buy%20a%20premium%20subscription",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="btn-primary inline-flex"
            >
              <MessageCircle size={18} />
              Message Us Now
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="font-semibold text-lg">Legal & Support</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badge */}
            <div className="glass-card p-4 inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-500 text-lg">✓</span>
              </div>
              <div>
                <p className="font-medium text-sm">Verified Business</p>
                <p className="text-xs text-muted-foreground">Trusted by 500+ Nepali users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto py-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Subify Nepal. All rights reserved.
            <span className="mx-2">•</span>
            Premium subscription reselling service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
