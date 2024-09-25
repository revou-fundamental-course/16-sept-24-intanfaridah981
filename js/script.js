// ini javascript

replaceName();

function replaceName() {
    let name = prompt("Masukan nama anda");
    console.log(name);
    document.getElementById("user-name").innerHTML = name;
}

function validateForm() {
    let inputName = document.getElementById("input-name").value;
    if (inputName == "") {
        alert("Inputan Kosong");
    } else {
        document.getElementById("result-form").innerHTML = inputName;
        alert("Sukses Submit Form");
    }
}

let indexSlide = 1;
showSlide();

function nextSlide(n){
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listimage = document.getElementsByClassName("photo-banner");

    //Hide All Image
    let i = 0;
    while (i <listimage.length) {
        listImage[i].style.display="none";
        i++;
    }

    letImage[indexSlide - 1].style.display = "block";
    console.log(listImage);
}

setInterval(() => nextSlide (1), 2000)