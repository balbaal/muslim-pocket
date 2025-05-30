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
      // Maximum 1 toast only
      if (state?.toasts?.length < 1) {
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
    }, 1500);
  },
}));

// Global Toast Function
// toast()
export const toast = (toast: Omit<Toast, "id">) => useToastStore.getState().addToast(toast);
