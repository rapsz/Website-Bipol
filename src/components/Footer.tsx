import { Bus, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Bus className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Bipol Tracker</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Platform pelacakan bus real-time yang terhubung dengan IoT untuk pengalaman transportasi yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="transition-colors hover:text-foreground">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-foreground">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#help" className="transition-colors hover:text-foreground">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#privacy" className="transition-colors hover:text-foreground">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@bipoltracker.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Jl. Teknologi No. 123, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2025 Bipol Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
