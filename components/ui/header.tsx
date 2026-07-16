import React from 'react'
import { cn } from '@/lib/utils'

const header = () => {
  return (
    <div className={cn("w-full px-10 py-6 font-inter text-[28px] font-bold")}>
      Redial & Guardrails
    </div>
  );
};

export default header;