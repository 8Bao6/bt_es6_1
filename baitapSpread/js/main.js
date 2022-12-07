let str = "Hover Me!";
let chuoi = [...str];
console.log(chuoi);

const renderHTMl = (data) => {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    content += `
    <span>${data[i]}</span>
    `;
  }
  document.querySelector(".heading").innerHTML = content;
};
renderHTMl(chuoi);
