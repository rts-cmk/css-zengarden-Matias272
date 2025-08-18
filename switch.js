const skiftBtn = document.querySelector(".extra2");

let toggle = false;

skiftBtn.addEventListener('click', () => {
  const linkEl = document.querySelector('link[href="styles-22.css"], link[href="style.css"]');
  
  linkEl.href = toggle ? 'styles-22.css' : 'style.css';
  toggle = !toggle;
});
