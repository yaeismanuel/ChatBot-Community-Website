import { create } from "zustand";

export const useMainStore = create(set => ({
  toggleMenuStatus: false,
  toggleMenu: () => {
    set(state => {
      toggleMenu: !state.toggleMenuStatus;
    });
  }
}));
