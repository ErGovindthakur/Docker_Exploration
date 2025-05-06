import { create } from "zustand";
import { persist } from "zustand/middleware";

type storeCounter = {
  count1: number;
  increment:()=>void;
  decrement:()=>void;
  reset:()=>void;
};

export const useCountStore = create<storeCounter>()(persist(
     ((set) => ({
          count1: 1,
          increment:()=>set((state)=>({count1:state.count1+1})),
          decrement:()=>set((state)=>({count1:state.count1-1})),
          reset:()=>set({count1:0})
        })),
        {
          name:"counter-Storage",
        }
));
