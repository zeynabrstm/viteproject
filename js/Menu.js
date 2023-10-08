async function Menu() {
    let data = await fetch ("http://localhost:3000/menu");
   let res = await data.json()
   let menu = res.map((elem)=> {
    return `<li class="nav-item">
    <a class="nav-link text-white text-capitalize" href=${elem.link}>${elem.name}</a>
  </li>`;
   });
document.querySelector("ul.navbar-nav").innerHTML=menu.join("")
}
 export default Menu;