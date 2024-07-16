async function getinfo() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
   
    const list = await response.json();
    const data = list.count;
    const news = list.recipes;
 
    const result = news.map(function(ele){
return `
 <div class='soso'>
       <h2> ${ele.title} </h2>
       <img src="${ele.image_url}"/>
 </div>


`;
    }).join('');
    document.querySelector(".recipes").innerHTML=result;
}



getinfo();