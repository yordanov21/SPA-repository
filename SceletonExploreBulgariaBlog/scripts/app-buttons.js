// import controllers from '../controllers/index.js';

// let touristsitesBtn = document.getElementById('touristsites');

// console.log(touristsitesBtn);

// touristsitesBtn.addEventListener('click', () => {

//     this.get('#/cause/dashboard', controllers.cause.get.dashboard);
// })


function myFunction(e) {

    let btnText = e;
    let destination = btnText.parentNode.parentNode;

    var mainSection = destination.childNodes[1];

    console.log(mainSection);
    var paragrah = mainSection.childNodes[7];
    console.log(paragrah);

    var dots = paragrah.childNodes[1];
    var moreText = paragrah.childNodes[3];
    console.log(dots);
    console.log(moreText);



    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        destination.style.width = '20%';
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        destination.style.width = '40%';
    }
}