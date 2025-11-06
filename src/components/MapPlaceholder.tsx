import { MapPin, Navigation } from "lucide-react";
import { Card } from "./ui/card";

const MapPlaceholder = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Centered content */}
      <div className="relative flex h-full items-center justify-center">
        <Card className="w-96 p-6 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Peta Interaktif
          </h3>
          
          <p className="mb-4 text-sm text-muted-foreground">
            Untuk menampilkan peta real-time, Anda perlu menambahkan Mapbox API key.
          </p>

          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-left">
              <Navigation className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Cara Setup:</p>
                <ol className="mt-1 list-inside list-decimal space-y-1">
                  <li>Buat akun di <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a></li>
                  <li>Salin public access token Anda</li>
                  <li>Tambahkan ke environment variables</li>
                </ol>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Sementara itu, gunakan filter dan daftar bus untuk navigasi.
          </p>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-10 h-20 w-20 animate-pulse-subtle rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-20 right-20 h-32 w-32 animate-pulse-subtle rounded-full bg-secondary/10 blur-xl" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default MapPlaceholder;
