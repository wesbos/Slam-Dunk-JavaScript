setTimeout(function() {
  const headings = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

  let styles = ``;
  headings.forEach(heading => {
    const rando = `x${Math.floor(Math.random() * 16777215).toString(16)}`;
    heading.classList.add(rando);
    const text = heading.innerText.replace(`'`, `\\'`).replace(`\n`, '\\A ');
    console.log(heading.innerText);
    styles += `.${rando}:after { content: '${text}';}`;
  });

  const style = document.createElement('style');
  style.textContent = styles;
  document.body.appendChild(style);
}, 10); // wait for css to load
