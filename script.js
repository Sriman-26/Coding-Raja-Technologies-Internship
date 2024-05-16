function addnewwefield() {
    // To add multiple box via ADD button
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder", "Enter here");
    newnode.setAttribute("rows", 3);
    //Creating multiple boxes for for work Experince
    let we = document.getElementById("we");
    let weaddbtn = document.getElementById("weAddbutton");
    we.insertBefore(newnode, weaddbtn);
}

function addnewadfield() {
    // To add multiple box via ADD button
    let newnode1 = document.createElement("textarea");
    newnode1.classList.add("form-control");
    newnode1.classList.add("adField");
    newnode1.classList.add("mt-2");
    newnode1.setAttribute("placeholder", "Enter here");
    newnode1.setAttribute("rows", 3);
    //Creating multiple boxes for the academic details
    let ad = document.getElementById("ad");
    let adaddbtn = document.getElementById("adAddbutton");
    ad.insertBefore(newnode1, adaddbtn);
}

function generateCV() {
    //console.log("Generating CV")
    //Name Details
    let name = document.getElementById("name").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = name;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = name;
    //contact details
    document.getElementById("contactT").innerHTML = document.getElementById("contactno").value;
    //Address details
    document.getElementById("addressT").innerHTML = document.getElementById("Address").value;
    //Link details
    document.getElementById("gitT").innerHTML = document.getElementById("git").value;
    document.getElementById("instaT").innerHTML = document.getElementById("insta").value;
    document.getElementById("lkdT").innerHTML = document.getElementById("ldn").value;
    //Objective details
    document.getElementById("objT").innerHTML = document.getElementById("obj").value;
    //work Experience details
    let wet = document.getElementsByClassName("weField");
    let s = "";
    for (let e of wet) {
        s += `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = s;
    //Academic Details
    let adt = document.getElementsByClassName("adField");
    let s1 = "";
    for (let i of adt) {
        s1 += `<li> ${i.value} </li>`;
    }
    document.getElementById("adT").innerHTML = s1;
    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}
//Printing the generating CV
function printCV() {
    window.print();
}