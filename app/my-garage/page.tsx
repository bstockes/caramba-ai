'use client';

import { useState } from 'react';

export default function MyGaragePage() {
  const [vin, setVin] = useState('');

  const vehicles = [
    {
      vin: '1HGCM82633A004352',
      year: 2020,
      make: 'Toyota',
      model: 'Camry',
      services: [
        { date: '2024-05-10', type: 'Oil Change' },
        { date: '2024-03-20', type: 'Tire Rotation' }
      ]
    },
    {
      vin: '2T1BURHE0GC123456',
      year: 2018,
      make: 'Honda',
      model: 'Civic',
      services: [
        { date: '2024-04-05', type: 'Brake Inspection' },
        { date: '2024-02-18', type: 'Battery Replacement' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Enter VIN:</label>
        <input
          type="text"
          placeholder="e.g. 1HGCM82633A004352"
          className="w-full border px-4 py-2 rounded"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {vehicles.map((car, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm bg-gray-50">
            <div className="font-bold text-lg">{car.year} {car.make} {car.model}</div>
            <div className="text-sm text-gray-600 mb-2">VIN: {car.vin}</div>
            <div>
              <div className="font-semibold mb-1">Service History:</div>
              <ul className="list-disc pl-5 text-sm text-gray-800">
                {car.services.map((s, i) => (
                  <li key={i}>{s.date} — {s.type}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}