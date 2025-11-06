import { Bus, Clock, MapPin, Circle } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

interface BusData {
  id: string;
  route: string;
  status: "active" | "stopped" | "approaching";
  eta: string;
  location: string;
}

const mockBusData: BusData[] = [
  {
    id: "BUS-001",
    route: "Rute 1 - Pusat - Utara",
    status: "active",
    eta: "5 menit",
    location: "Jl. Sudirman"
  },
  {
    id: "BUS-002",
    route: "Rute 2 - Pusat - Selatan",
    status: "approaching",
    eta: "2 menit",
    location: "Dekat Halte A"
  },
  {
    id: "BUS-003",
    route: "Rute 3 - Timur - Barat",
    status: "stopped",
    eta: "-",
    location: "Terminal Sentral"
  },
  {
    id: "BUS-004",
    route: "Rute 1 - Pusat - Utara",
    status: "active",
    eta: "12 menit",
    location: "Jl. Thamrin"
  },
];

const statusConfig = {
  active: {
    label: "Beroperasi",
    color: "bg-success",
    textColor: "text-success"
  },
  stopped: {
    label: "Berhenti",
    color: "bg-muted-foreground",
    textColor: "text-muted-foreground"
  },
  approaching: {
    label: "Mendekati Halte",
    color: "bg-warning",
    textColor: "text-warning"
  }
};

const BusList = () => {
  return (
    <Card className="absolute right-4 top-4 z-10 w-80 shadow-lg">
      <div className="border-b border-border p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Bus className="h-4 w-4" />
          Bus Beroperasi
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {mockBusData.length} bus aktif
        </p>
      </div>

      <ScrollArea className="h-96">
        <div className="space-y-3 p-4">
          {mockBusData.map((bus) => (
            <Card
              key={bus.id}
              className="cursor-pointer border border-border p-3 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{bus.id}</span>
                    <Circle
                      className={`h-2 w-2 fill-current ${statusConfig[bus.status].textColor}`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{bus.route}</p>
                </div>
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {statusConfig[bus.status].label}
                </Badge>
              </div>

              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{bus.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>ETA: {bus.eta}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default BusList;
