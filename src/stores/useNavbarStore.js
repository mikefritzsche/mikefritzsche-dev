import { create } from 'zustand';

const useNavbarStore = create((set) => ({
  fadeOut: false,
  showNavbar: false,
  setFadeOut: (fadeOut) => set({ fadeOut }),
  setShowNavbar: (showNavbar) => set({ showNavbar }),
}));

export default useNavbarStore;
