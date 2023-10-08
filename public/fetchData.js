const fetchApi = async ()=>{
    try {
        
          let res = await fetch("https://zeynabrstm.github.io/test-Api/test.json");
          let jsonOut = await res.json();
          let output = await jsonOut.map(elem =>{
            if(elem.side === "left"){
                return `
                
                <div>${elem.title}</div>`

            }
          }).join("")
          document.querySelector ("div#app").innerHTML = output

    } catch (error) {
        throw error;
    }
}
export default {fetchApi}