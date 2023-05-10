const changeTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
};

export default changeTheme;
