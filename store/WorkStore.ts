import { create } from "zustand";

export const WORK_CATEGORIES = [
  "All",
  "AI Ads",
  "UGC Ads",
  "VSL",
  "Motion Graphics",
] as const;

export type WorkCategory = (typeof WORK_CATEGORIES)[number];

interface WorkStore {
  activeCategory: WorkCategory;
  setActiveCategory: (category: WorkCategory) => void;
}

export const useWorkStore = create<WorkStore>((set) => ({
  activeCategory: "All",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));