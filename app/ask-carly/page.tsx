'use client';

import { useState } from 'react';

export default function AskCarlyPage() {
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  const mockMessages = [
    { from: 'user', text: 'What does this warning light mean?' },
    { from: 'carly', text: 'That’s your tire pressure warning! Make sure to check it soon. 🛞' },
    { from: 'user', text: 'When is my next oil change due?' },
    { from: 'carly', text: 'Based on your last entry, you’re due in 500 miles or 2 weeks. 🛢️' }
  ];

  return (
    <div className="space-y-4 px-2">
      <div className="space-y-2">
        {mockMessages.map((msg, idx) => (
          <div
            key={idx}
            className={\`max-w-[80%] p-2 rounded-lg \${msg.from === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-100'}\`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 left-0 right-0 max-w-screen-sm mx-auto px-4">
        <div className="flex items-center border rounded-full px-4 py-2 shadow bg-white">
          <button className="mr-2 text-xl">🎤</button>
          <input
            className="flex-1 outline-none"
            placeholder="Ask Carly anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="ml-2 text-xl" onClick={() => setShowModal(true)}>📷</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-[90%] max-w-sm text-center">
            <p className="text-lg font-semibold">Upload a photo</p>
            <button className="block w-full bg-blue-500 text-white py-2 rounded-lg">Scan a Barcode</button>
            <button className="block w-full bg-gray-200 py-2 rounded-lg">Take/Upload a Photo</button>
            <button className="text-sm text-gray-500 mt-2" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}