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
import TallyButton from './TallyButton';

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
    <>
      <TallyButton/>
      {/*  */}
    </>
  );
}
