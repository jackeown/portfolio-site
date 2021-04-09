let links = document.querySelectorAll("nav li");

for(let li of links){
    li.onclick = function(){
        for(let link of links){
            link.classList.remove("active");
        }
        li.classList.add("active");
    };
}
