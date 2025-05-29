import { create } from "zustand";

type ToastType = "success" | "info" | "error";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
}

// Toast Store
export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Date.now();

    set((state) => {
      if (state?.toasts?.length < 3) {
        return {
          toasts: [...state?.toasts, { id, ...toast }],
        };
      } else {
        return {
          toasts: [...state?.toasts],
        };
      }
    });

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },
}));

// Global Toast Function
// toast()
export const toast = (toast: Omit<Toast, "id">) => useToastStore.getState().addToast(toast);
