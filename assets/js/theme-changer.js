let themeChanger = document.querySelector(".header-theme-changer");
let darkMode = localStorage.getItem('darkMode');

themeChanger.addEventListener("click", function () {
  themeChanger.offsetParent.classList.add("dark-theme");
});

const enableDarkMode = ()=> {
  document.body.classList.add("dark-theme");
  localStorage.setItem('darkMode', 'true');
}

const disableDarkMode = ()=> {
  document.body.classList.remove("dark-theme");
  localStorage.setItem('darkMode', 'false');
};

if (darkMode==="true"){
  enableDarkMode();
}
themeChanger.addEventListener("click", function () {
  darkMode= localStorage.getItem('darkMode');
  if (darkMode!=='true') {
    enableDarkMode();
  }else {
    disableDarkMode();
  }
})
