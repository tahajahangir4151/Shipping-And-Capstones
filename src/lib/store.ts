import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// export const usePersistCounterStore = create(
//   persist<CounterState>(
//     (set) => ({
//       count: 0,
//       increase: () => set((state) => ({ count: state.count + 1 })),
//       decrease: () => set((state) => ({ count: state.count - 1 })),
//       reset: () => set({ count: 0 }),
//     }),
//     {
//       name: "counter-storage",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );
