document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = function ()
    {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}


var errorForm = document.getElementById("form-error");
if (errorForm.classList.contains("block")) {
    errorForm.classList.remove("block");
}
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле «Ваше имя»!");
        errorForm.classList.add("block");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле «Ваш телефон»!");
        errorForm.classList.add("block");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле «Автомобиль, который вас интересует»!");
        errorForm.classList.add("block");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
        errorForm.classList.remove("block");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.35) / 10) + 'px,' + ((event.clientY * 0.35) / 10) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});

// // Отдельно на кнопку в футере скрол наверх
// document.getElementById("ontop").onclick = function () {
//     document.getElementById("top").scrollIntoView({behavior: "smooth"});
//     console.log("On Top!");
// }

var ontopbtns = document.getElementsByClassName("ontop");
for (var i = 0; i < ontopbtns.length; i++) {
    // console.log(ontopbtns);
    ontopbtns[i].onclick = function () {
        document.getElementById("top").scrollIntoView({behavior: "smooth"});
        console.log("On Top!");
    }
}

document.getElementById("avto").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
    console.log("To CARS!");
}

document.getElementById("booking").onclick = function () {
    document.getElementById("price").scrollIntoView({behavior: "smooth"});
    console.log("To CARS!");
}