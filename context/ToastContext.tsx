'use client';
import { createContext, useCallback, useContext, useState } from 'react';

import { Toast } from '@/components/UI';

type Toast = {
  id: string;
  message: string;
  iconClass?: string;
  duration?: number; // ms
};

type ToastContextType = {
  showToast: (toast: Omit<Toast, 'id'>) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    ({ message, iconClass, duration = 4000 }: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = { id, message, iconClass, duration };
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    },
    []
  );
  console.log('first');
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed top-[100px] right-5 ${
          toasts.length && 'z-[1000000000000]'
        } space-y-3 flex flex-col`}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            iconClass={toast.iconClass}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};
