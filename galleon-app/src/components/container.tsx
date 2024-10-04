import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react';

interface ContainerGridProps {
  children: ReactNode;
  className?: string; // optional
}

export default function ContainerGrid({ children, className } : ContainerGridProps) {
  const defaultClass = 'w-full max-w-grid mx-auto'
  const combinedClasses = twMerge(defaultClass, className)
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}
