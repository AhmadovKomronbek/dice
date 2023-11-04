function random(){
    
    const text = document.querySelector(".container h1");
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");

    if (random1 > random2) {
        text.textContent ="Player 1 win";
    } else if (random1 < random2) {
        text.textContent ="Player 2 win";
    }else {
        text.textContent = "Draw";
    }
}

function putname(){
    console.log("hayir");
}

const firstBtn = document.getElementById("btn1");
firstBtn.addEventListener("click" , random);
