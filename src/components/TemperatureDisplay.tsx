import { Thermometer, Droplets, Clock } from 'lucide-react';
import useTemperature from '@/hooks/useTemperature';

const TemperatureDisplay = () => {
  const { temperature, humidity, location, timestamp, isLoading, error } = useTemperature();

  return (
    <div className="absolute top-4 left-4 z-10 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Thermometer className="h-5 w-5 text-red-500" />
        <h3 className="font-semibold text-gray-800">Suhu Sekitar</h3>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-6 w-20 rounded bg-gray-200"></div>
          <div className="h-4 w-16 rounded bg-gray-200 mt-1"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : temperature !== null ? (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">{temperature}°C</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <Droplets className="h-4 w-4" />
              <span>{humidity}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">Lokasi: {location}</p>
        </div>
      ) : (
        <div className="text-gray-500 text-sm">Data tidak tersedia</div>
      )}
    </div>
  );
};

export default TemperatureDisplay;