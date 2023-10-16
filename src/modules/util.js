export const setBreakpiont = breakpiont => {
  let screenWidth = 0;
  
  return () => {
    let isBreakpiont = false;

    if (!screenWidth ||
      (innerWidth < breakpiont && screenWidth >= breakpiont) ||
      (innerWidth >= breakpiont && screenWidth < breakpiont)) {
      isBreakpiont = true;
    }

    screenWidth = innerWidth;
    return isBreakpiont;
  }
};