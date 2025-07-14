'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface WaitlistModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

export function WaitlistModal({ trigger, className }: WaitlistModalProps) {
  useEffect(() => {
    // Load the Tally embed script once
    if (!document.querySelector('script[src*="tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <Button
        data-tally-open="nWb57L"
        data-tally-layout="modal"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="0"
        data-tally-form-events-forwarding="1"
        className={`w-[152px] h-[56px] font-semibold text-16 rounded-full border-cs1 text-cs1 hover:bg-blue-50 transition-colors duration-200 ${className || ''}`}
        variant='outline'
      >
        Join Waitlist
      </Button>
    </>
  );
}
