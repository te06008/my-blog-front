import { atom } from 'recoil';

export const DARK = 'DARK';
export const LIGHT = 'LIGHT';

const isOsLightMode = () => {
  const localValue = localStorage.getItem('theme') || '';
  if (localValue === LIGHT) return true;
  if (localValue === DARK) return false;
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    localStorage.setItem('theme', DARK);
    return false;
  }
  localStorage.setItem('theme', LIGHT);
  return true;
};

export const isOsLightThemeAtom = atom<boolean>({
  key: 'isOsLightThemeAtom',
  default: isOsLightMode(),
});
