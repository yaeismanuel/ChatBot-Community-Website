import { create } from "zustand";

export const useMainStore = create(set => ({
  toggleMenuStatus: false,
  toggleMenu: (status) => {
    set({ toggleMenuStatus: status });
  }
}));
