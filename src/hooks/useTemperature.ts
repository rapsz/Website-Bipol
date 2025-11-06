import { useState, useEffect } from 'react';

interface TemperatureData {
  temperature: number | null;
  humidity: number | null;
  location: string;
  timestamp: Date | null;
  isLoading: boolean;
  error: string | null;
}

const useTemperature = () => {
  const [data, setData] = useState<TemperatureData>({
    temperature: null,
    humidity: null,
    location: 'Bipolo',
    timestamp: null,
    isLoading: true,
    error: null,
  });

  // In a real implementation, this would fetch from an actual API or sensor endpoint
  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        setData(prev => ({ ...prev, isLoading: true, error: null }));
        
        // Simulating an API call to a temperature sensor endpoint
        // In a real implementation, you would replace this with an actual fetch call
        // Example: const response = await fetch('/api/sensors/temperature');
        // const result = await response.json();
        
        // For now, we'll simulate sensor data
        setTimeout(() => {
          setData({
            temperature: 28.5, // Example temperature in Celsius
            humidity: 65,      // Example humidity percentage
            location: 'Bipolo',
            timestamp: new Date(),
            isLoading: false,
            error: null,
          });
        }, 800);
      } catch (error) {
        setData({
          temperature: null,
          humidity: null,
          location: 'Bipolo',
          timestamp: null,
          isLoading: false,
          error: 'Failed to fetch temperature data',
        });
      }
    };

    fetchTemperatureData();

    // Set up interval to periodically update temperature (every 30 seconds)
    const interval = setInterval(fetchTemperatureData, 30000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export default useTemperature;