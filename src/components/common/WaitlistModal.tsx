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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Load Tally script when modal opens
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = () => {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        } else {
          // Fallback function if Tally is not loaded yet
          document
            .querySelectorAll('iframe[data-tally-src]:not([src])')
            .forEach((iframe: any) => {
              iframe.src = iframe.dataset.tallySrc;
            });
        }
      };
      script.onerror = () => {
        // Fallback if script fails to load
        document
          .querySelectorAll('iframe[data-tally-src]:not([src])')
          .forEach((iframe: any) => {
            iframe.src = iframe.dataset.tallySrc;
          });
      };

      // Only add script if it doesn't already exist
      if (
        !document.querySelector(
          'script[src="https://tally.so/widgets/embed.js"]'
        )
      ) {
        document.body.appendChild(script);
      } else if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="outline"
            className={`w-[152px] h-[56px] font-semibold text-16 rounded-full border-cs1 text-cs1 hover:bg-blue-50 transition-colors duration-200 ${className || ''}`}
          >
            Join Waitlist
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl">Join Our Waitlist</DialogTitle>
        </DialogHeader>

        <div className="mt-4 overflow-auto max-h-[60vh]">
          <iframe
            data-tally-src="https://tally.so/embed/nWb57L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join Waitlist"
            className="border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
