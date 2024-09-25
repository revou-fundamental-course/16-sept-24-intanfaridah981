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

showSlide();

function showSlide() {
    let listimage = document.getElementsByClassName("photo-banner");

    let i = 0;
    while (i <listimage.length) {
        listimage[1].style.display = "none";
        indexedDB
    }

    letImage[0].style.display = "none";
    letImage[1].style.display = "none";
    letImage[2].style.display = "none";
    console.log(listimage);
}
