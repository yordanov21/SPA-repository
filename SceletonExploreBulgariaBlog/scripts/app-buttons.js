function myFunction(e) {
    let btnText = e;
    let destination = btnText.parentNode.parentNode.parentNode;

    var mainSection = destination.childNodes[1];

    console.log(mainSection);
    var imageContainer = mainSection.childNodes[1];
    var image = imageContainer.childNodes[1];
    console.log(image);

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
        // image.style.height = '240px';
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        destination.style.width = '35%';
        // image.style.height = '420px';
    }
}

function myFunction101(e) {
    let btnText = e;
    let destination = btnText.parentNode.parentNode.parentNode;

    var mainSection = destination.childNodes[1];

    console.log(mainSection);
    var imageContainer = mainSection.childNodes[1];
    var image = imageContainer.childNodes[1];
    console.log(image);

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
        destination.style.width = '50%';
        // image.style.height = '240px';
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        destination.style.width = '60%';
        // image.style.height = '420px';
    }
}

var titleDestination;
var regionDestination;
var paragrah;
var imageDestination;

function getItfunction(e) {
    let btnText = e;
    let destination = btnText.parentNode.parentNode.parentNode;
    console.log(destination);
    var mainSection = destination.childNodes[1];
    console.log(mainSection);

    titleDestination = mainSection.childNodes[3];
    regionDestination = mainSection.childNodes[5];
    paragrah = mainSection.childNodes[7];

    imageDestination = mainSection.childNodes[1].childNodes[1].src;
    console.log(titleDestination);
    console.log(regionDestination);
    console.log(paragrah);
    console.log(imageDestination);
}

function loadDestination(e) {
    console.log(titleDestination);

    let btnText = e;
    console.log(btnText);

    let createForm = btnText.parentNode;
    console.log(createForm);
    let titleInput = createForm.childNodes[5].childNodes[3];
    let regionInput = createForm.childNodes[7].childNodes[3];
    let destinationInput = createForm.childNodes[9].childNodes[3];
    let imageInput = createForm.childNodes[11].childNodes[3];
    console.log(titleInput);
    console.log(regionInput);
    console.log(destinationInput);
    console.log(imageInput);
    titleInput.value = titleDestination.textContent;
    regionInput.value = regionDestination.textContent;
    destinationInput.textContent = paragrah.textContent;
    imageInput.value = imageDestination;
    // e.preventDefault();
}


function loadPicture() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function() {
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
}