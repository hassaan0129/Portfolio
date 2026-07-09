import type { WorkCategory } from "@/store/WorkStore";

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: Exclude<WorkCategory, "All">;
  youtubeId: string;
  isShort: boolean;
  metrics?: string;
}

export const PROJECTS: Project[] = [
  // AI Ads (3)
  { id: "ai1", title: "AI Ad Creative", category: "AI Ads", youtubeId: "1GQ9WR2YNDc", isShort: true },
  { id: "ai2", title: "AI Ad Variant", category: "AI Ads", youtubeId: "TLR7bKHRuGY", isShort: true },
  { id: "ai3", title: "AI Performance Hook", category: "AI Ads", youtubeId: "XNERf0BlVDI", isShort: true },
  
  // UGC Ads (3)
  { id: "ugc1", title: "UGC Hook Testing", category: "UGC Ads", youtubeId: "79ZKtpN_eJM", isShort: true },
  { id: "ugc2", title: "UGC Storytelling", category: "UGC Ads", youtubeId: "7Y3P1_CUHvI", isShort: true },
  { id: "ugc3", title: "UGC Product Demo", category: "UGC Ads", youtubeId: "Q62JO0NRItE", isShort: true },
  
  // VSL (2)
  { id: "vsl1", title: "High-Converting VSL", category: "VSL", youtubeId: "CWduyNyX0VA", isShort: true },
  { id: "vsl2", title: "Long-Form Sales Letter", category: "VSL", youtubeId: "XoWZDl_7sRs", isShort: true },
  
  // Motion Graphics (4)
  { id: "mg1", title: "Kinetic Typography", category: "Motion Graphics", youtubeId: "fkMel8Z5BHI", isShort: true },
  { id: "mg2", title: "Product Overlay", category: "Motion Graphics", youtubeId: "tYnAKzkivWM", isShort: true },
  { id: "mg3", title: "Brand Motion Identity", category: "Motion Graphics", youtubeId: "IeVlxTVJ7mU", isShort: false },
  { id: "mg4", title: "Seamless Transitions", category: "Motion Graphics", youtubeId: "mABEX08JX2A", isShort: true },
];

export const SERVICES = [
  {
    title: "AI UGC Ads",
    description:
      "High-velocity ad variants engineered with AI tools. Scripted and edited for maximum hook rate, built to find your winning creative faster.",
  },
  {
    title: "VSL Editing",
    description:
      "Long-form video sales letters structured purely for conversion. We pace the edit for the offer, optimizing drop-off points to drive sales.",
  },
  {
    title: "Motion Graphics",
    description:
      "Kinetic typography, 3D product overlays, and seamless transitions that make complex offers easily digestible and visually premium.",
  },
];

export const PROCESS_STEPS = [
  {
    label: "Strategy & Scripting",
    description: "We audit your funnel, map your audience avatars, and script the angles before we ever touch a timeline.",
  },
  {
    label: "Editing & Iteration",
    description: "We build the core assets, layer motion graphics, and pace the edit to eliminate friction and maximize watch time.",
  },
  {
    label: "Scaling & Delivery",
    description: "We deliver platform-native variants designed for split-testing, giving your media buyers the ammo they need to scale.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our hook rate doubled in the first batch. AGENZ drove our CPA down by 30% within two weeks of testing their UGC creatives.",
    name: "Sarah Chen",
    role: "Growth Lead, Glow Skincare",
  },
  {
    quote:
      "The VSL restructure was a gamechanger. They cut the fluff, paced the offer perfectly, and we saw a 3.2x ROAS on day one.",
    name: "Priya Patel",
    role: "CMO, Nectar Supplements",
  },
  {
    quote:
      "We stopped briefing them entirely. They just know exactly what converts for our demographic. Pure performance craft.",
    name: "Marcus Webb",
    role: "Founder, Ridge Apparel",
  },
];