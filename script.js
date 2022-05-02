const btn = document.getElementById("btn");
const con = document.getElementById("container");

btn.addEventListener("click", () =>{
    notify();
})

function notify(){
    const noti = document.createElement('div');
    noti.classList.add("toast");
    noti.innerText="Life is Beautifull";
    con.appendChild(noti);

    setTimeout(()=>{
        noti.remove();
    },3000);
}