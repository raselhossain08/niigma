// components/TallyButton.tsx
'use client';

import { useEffect } from 'react';

export default function TallyButton() {
  useEffect(() => {
    if (!document.querySelector('script[src*="tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <button
      data-tally-open="nr96xL" // Replace with your real form ID
      data-tally-layout="modal"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-form-events-forwarding="1"
      className="h-[56px] font-semibold text-16 rounded-full bg-cs1 hover:bg-cs1 transition-colors duration-200 text-white w-full md:w-[152px]"
    >
      Join Beta
    </button>
  );
}
