setInterval(() => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgb = "";

  rgb = [red, green, blue].join(",");
  console.log(rgb);

  document.body.style.background = "Rgb(" + rgb + ")";

  document.body.innerHTML = "<h2>Rgb(" + rgb + ")</2>";
}, 2000);
