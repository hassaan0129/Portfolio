import { create } from "zustand";

export const WORK_CATEGORIES = [
  "All",
  "AI UGC Ads",
  "VSL Production",
  "SaaS Animations",
  "Meta/TikTok Ads",
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