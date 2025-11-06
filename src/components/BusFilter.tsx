import { Search, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card } from "./ui/card";

const BusFilter = () => {
  return (
    <Card className="absolute left-4 top-4 z-10 w-80 p-4 shadow-lg">
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Filter Bus</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari nomor bus..."
              className="pl-9"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">
            Pilih Rute
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua Rute" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Rute</SelectItem>
              <SelectItem value="route-1">Rute 1 - Pusat - Utara</SelectItem>
              <SelectItem value="route-2">Rute 2 - Pusat - Selatan</SelectItem>
              <SelectItem value="route-3">Rute 3 - Timur - Barat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">
            Status Bus
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="active">Sedang Beroperasi</SelectItem>
              <SelectItem value="stopped">Berhenti</SelectItem>
              <SelectItem value="approaching">Mendekati Halte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Terapkan Filter
        </Button>
      </div>
    </Card>
  );
};

export default BusFilter;
