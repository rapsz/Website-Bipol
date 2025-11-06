import Header from "@/components/Header";
import BusFilter from "@/components/BusFilter";
import BusList from "@/components/BusList";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import TemperatureDisplay from "@/components/TemperatureDisplay";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Map Section */}
        <section id="home" className="relative h-[calc(100vh-4rem)]">
          <Map />
          <TemperatureDisplay />
          <BusFilter />
          <BusList />
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Tentang Bipol Tracker
              </h2>
              <p className="mb-8 text-muted-foreground">
                Bipol Tracker adalah platform pelacakan bus secara real-time untuk memberikan informasi akurat tentang posisi bus, estimasi kedatangan, dan status operasional. 
                Kami berkomitmen untuk meningkatkan pengalaman transportasi umum dengan teknologi modern yang mudah digunakan.
              </p>
              
              <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Jam Operasional Bus</h3>
                <p className="text-lg font-medium text-primary">06:00 - 17:30 WIB</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#BF1E2E]"></div>
                    <span className="text-sm text-muted-foreground">Rute Pagi (Merah)</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#159BB3]"></div>
                    <span className="text-sm text-muted-foreground">Rute Sore (Biru)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
