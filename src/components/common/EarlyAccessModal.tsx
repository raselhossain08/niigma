'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useState } from 'react';
import { Label } from '../ui/label';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

interface EarlyAccessModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

export function EarlyAccessModal({
  trigger,
  className,
}: EarlyAccessModalProps) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Beta Form Submitted:', data);
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            className={`w-[152px] h-[56px] font-semibold text-16 rounded-full bg-cs1 hover:bg-cs1 transition-colors duration-200 text-white ${className || ''}`}
          >
            Join Beta
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[455px]">
        <DialogHeader>
          <DialogTitle className="text-31 text-black font-bold">
            Get Early Access
          </DialogTitle>
          <p className="text-16 font-normal leading-[150%]">
            We're rolling out access in phases. Join the waitlist to be first in
            line when new spots open.
          </p>
        </DialogHeader>

        {/* Avatar center between inputs */}
        <div className="relative grid  grid-cols-2 mt-4 gap-5">
          <div className="flex flex-col">
            <Label
              htmlFor="firstName"
              className=" mb-2 text-[#929495] font-semibold text-14 leading-[150%]"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              {...register('firstName')}
              className=" border border-[#D9D6D6] rounded-[8px] h-[52px] text-[#929495] font-semibold text-14"
            />
          </div>
          <div className="flex flex-col">
            <Label
              htmlFor="lastName"
              className=" mb-2 text-[#929495] font-semibold text-14 leading-[150%]"
            >
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Last name"
              {...register('lastName')}
              className=" border border-[#D9D6D6] rounded-[8px] h-[52px] text-[#929495] font-semibold text-14"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="email"
            className=" mb-2 text-[#929495] font-semibold text-14 leading-[150%]"
          >
            Email
          </Label>
          <Input
            id="email"
            placeholder="Email"
            {...register('email')}
            className=" border border-[#D9D6D6] rounded-[8px] h-[52px] text-[#929495] font-semibold text-14"
          />
        </div>
        <DialogFooter className="mt-6 grid grid-cols-2 gap-5">
          <Button
            variant="outline"
            className="w-full h-[56px] font-semibold text-16 rounded-full border-cs1 text-cs1 hover:bg-blue-50 transition-colors duration-200"
          >
            Join Waitlist
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="h-[56px] font-semibold text-16 rounded-full bg-cs1 hover:bg-cs1 transition-colors duration-200 text-white w-full"
          >
            Join Beta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
