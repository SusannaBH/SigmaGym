export const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('planId');
    localStorage.removeItem('userId');
  };