let fullName = document.querySelector("#fullName");
let mobileName = document.querySelector("#mobileName");
let emailAdd = document.querySelector("#emailAdd");
let appDate = document.querySelector("#appDate");
// let appTimeStart = document.querySelector("#appTimeStart");
// let appTimeEnd = document.querySelector("#appTimeEnd");

let conCreation = document.querySelector("#conCreation");
let socMediaMngt = document.querySelector("#socMediaMngt");
let grapDesign = document.querySelector("#grapDesign");
let cusDomain = document.querySelector("#cusDomain");
let analReport = document.querySelector("#analReport");
let socMediaEng = document.querySelector("#socMediaEng");
let infMarketing = document.querySelector("#infMarketing");
let custSupport = document.querySelector("#custSupport");

let personalBtn = document.querySelector("#personalBtn");
let professionalBtn = document.querySelector("#professionalBtn");
let ultimateBtn = document.querySelector("#ultimateBtn");

let nameError = document.querySelector("#nameError");
let mobileError = document.querySelector("#mobileError");
let emailError = document.querySelector("#emailError");
let appDateError = document.querySelector("#appDateError");
let appTimeStartError = document.querySelector("#appTimeStartError");
let appTimeEndError = document.querySelector("#appTimeEndError");
let messageOne = [];
let messageTwo = [];
let messageThree = [];
let messageFour = [];
let messageFive = [];
let messageSix = [];

let errorMsgs = [];

let bookNowBtn = document.querySelector("#bookNowBtn");

// event listener
bookNowBtn.addEventListener("click", validateForm);
// appDate.addEventListener("change", validateAppDate);
// appTimeStart.addEventListener("change", validateAppStart);
// appTimeEnd.addEventListener("change", validateAppEnd);
personalBtn.addEventListener("click", personalPackage);
professionalBtn.addEventListener("click", professionalPackage);
ultimateBtn.addEventListener("click", ultimatePackage);

// limits the calendar to current Date
// appDate.setAttribute("min", currentDate());

function validateForm(e) {
    e.preventDefault();

    let fullNameValue = fullName.value;
    let mobileNameValue = mobileName.value;
    let emailAddValue = emailAdd.value;
    let appDateValue = appDate.value;
    // let appTimeStartValue = appTimeStart.value;
    // let appTimeEndValue = appTimeEnd.value;
   
    // deletes repetitive error messages
    messageOne.length = 0;
    messageTwo.length = 0;
    messageThree.length = 0;
    messageFour.length = 0;
    messageFive.length = 0;
    messageSix.length = 0;

    errorMsgs.length = 0;

    let emailRegX = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mobileRegX = /^(09|\+639)\d{9}$/;

    if (fullNameValue === "" || fullNameValue == null) {
        messageOne.push("*Name is Required !");
        errorMsgs.push(messageOne); // checking before sending email
        nameError.style.color = "red";
    }

    if (mobileNameValue.match(mobileRegX)) {
        console.log("res");
    } else if (mobileNameValue === "" || mobileNameValue == null) {
        messageTwo.push("*Phone Number is Required !");
        errorMsgs.push(messageTwo); // checking before sending email
        mobileError.style.color = "red";
    }else if(mobileNameValue !== mobileRegX) {
        messageTwo.push("*Your Phone Number is Invalid !");
        errorMsgs.push(messageTwo); // checking before sending email
        mobileError.style.color = "red";
    } else {
        messageTwo.push("*Not a Phone Number !");
        errorMsgs.push(messageTwo); // checking before sending email
        mobileError.style.color = "red";
    }

    if (emailAddValue.match(emailRegX)) {
        console.log("res");
    } else if (emailAddValue === "" || emailAddValue == null) {
        messageThree.push("*Email Address is Required !");
        errorMsgs.push(messageThree); // checking before sending email
        emailError.style.color = "red";
    } else {
        messageThree.push("*Invalid Email Address !");
        errorMsgs.push(messageThree); // checking before sending email
        emailError.style.color = "red";
    }

    if (appDateValue === "") {
        messageFour.push("*Appointment Date is Required !");
        errorMsgs.push(messageFour); // checking before sending email
        appDateError.style.color = "red";

    }

    // if (appTimeStartValue === "" || appTimeStartValue == null) {
    //     messageFive.push("*Please enter time for the meeting.");
    //     errorMsgs.push(messageFive); // checking before sending email
    //     appTimeStartError.style.color = "red";
    // }

    // if (appTimeEndValue === "" || appTimeEndValue == null) {
    //     messageSix.push("*Please enter time for the meeting!");
    //     errorMsgs.push(messageSix); // checking before sending email
    //     appTimeEndError.style.color = "red";
    // }

    nameError.innerHTML = messageOne.join("<br>");
    mobileError.innerHTML = messageTwo.join("<br>");
    emailError.innerHTML = messageThree.join("<br>");
    appDateError.innerHTML = messageFour.join("<br>");
    // appTimeStartError.innerHTML = messageFive.join("<br>");
    // appTimeEndError.innerHTML = messageSix.join("<br>");

    // reuse purpose
    if (errorMsgs.length > 0) {
        console.log("Error message/s exist.")
        alert("Email not sent. Check booking form.");
        return false;
    } else {
        console.log("Sending an email...")
        sendEmail(e);
    }
}

// get current Date
function currentDate() {

    let today = new Date();
    let day = today.getDate();
    day = day < 10 ? `0${day}` : day;
    let MM = today.getMonth() + 1;
    MM = MM < 10 ? `0${MM}` : MM;
    let year = today.getFullYear();

    return year + "-" + MM + "-" + day
}

// IVY ADDED
// event listener
conCreation.addEventListener("change", computeEstPrice);
socMediaMngt.addEventListener("change", computeEstPrice);
grapDesign.addEventListener("change", computeEstPrice);
cusDomain.addEventListener("change", computeEstPrice);
analReport.addEventListener("change", computeEstPrice);
socMediaEng.addEventListener("change", computeEstPrice);
infMarketing.addEventListener("change", computeEstPrice);
custSupport.addEventListener("change", computeEstPrice);

// Variables
let conCreationDiv = document.getElementById("conCreationDiv");
let socMediaMngtDiv = document.getElementById("socMediaMngtDiv");
let grapDesignDiv = document.getElementById("grapDesignDiv");
let cusDomainDiv = document.getElementById("cusDomainDiv");
let analReportDiv = document.getElementById("analReportDiv");
let socMediaEngDiv = document.getElementById("socMediaEngDiv");
let infMarketingDiv = document.getElementById("infMarketingDiv");
let custSupportDiv = document.getElementById("custSupportDiv");
let totalEstimatedPriceDiv = document.getElementById("totalEstimatedPriceDiv");

//Prices Variables
let totalEstimatedPrice = 0;
let conCreationPrice = parseInt(conCreation.getAttribute("data-val"));
let socMediaMngtPrice = parseInt(socMediaMngt.getAttribute("data-val"));
let grapDesignPrice = parseInt(grapDesign.getAttribute("data-val"));
let cusDomainPrice = parseInt(cusDomain.getAttribute("data-val"));
let analReportPrice = parseInt(analReport.getAttribute("data-val"));
let socMediaEngPrice = parseInt(socMediaEng.getAttribute("data-val"));
let infMarketingPrice = parseInt(infMarketing.getAttribute("data-val"));
let custSupportPrice = parseInt(custSupport.getAttribute("data-val")); 

function personalPackage() {
    resetPackages();

    conCreationDiv.style.display = "block";
    socMediaMngtDiv.style.display = "block";
    grapDesignDiv.style.display = "block";
    cusDomainDiv.style.display = "block";

    conCreation.checked = true;
    socMediaMngt.checked = false;
    grapDesign.checked = false;
    cusDomain.checked = true;

    computeEstPrice();

}

function professionalPackage() {
    resetPackages();

    conCreationDiv.style.display = "block";
    socMediaMngtDiv.style.display = "block";
    grapDesignDiv.style.display = "block";
    cusDomainDiv.style.display = "block";
    analReportDiv.style.display = "block";
    socMediaEngDiv.style.display = "block";

    conCreation.checked = true;
    socMediaMngt.checked = false;
    grapDesign.checked = false;
    cusDomain.checked = true;
    analReport.checked = false;
    socMediaEng.checked = true;

    computeEstPrice();

}

function ultimatePackage() {
    resetPackages();

    conCreationDiv.style.display = "block";
    socMediaMngtDiv.style.display = "block";
    grapDesignDiv.style.display = "block";
    cusDomainDiv.style.display = "block";
    analReportDiv.style.display = "block";
    socMediaEngDiv.style.display = "block";
    infMarketingDiv.style.display = "block";
    custSupportDiv.style.display = "block";

    conCreation.checked = true;
    socMediaMngt.checked = false;
    grapDesign.checked = false;
    cusDomain.checked = true;
    analReport.checked = false;
    socMediaEng.checked = true;
    infMarketing.checked = true;
    custSupport.checked = false;

    computeEstPrice();
}

// collect checked items
let checkedItems = [];
let checkedServices = document.querySelector("#checkedServices");
let totalPrice = document.querySelector("#totalPrice");
checkedServices.setAttribute("hidden", "");
totalPrice.setAttribute("hidden", "");
let item = "";

function computeEstPrice(){
    totalEstimatedPrice = 0;
    checkedItems.length = 0;
    item = "";
    if(conCreation.checked){
        totalEstimatedPrice = totalEstimatedPrice + conCreationPrice;
        checkedItems.push("Content Creation");
    }
    if(socMediaMngt.checked){
        totalEstimatedPrice = totalEstimatedPrice + socMediaMngtPrice;
        checkedItems.push("Social Media Management");
    }
    if(grapDesign.checked){
        totalEstimatedPrice = totalEstimatedPrice + grapDesignPrice;
        checkedItems.push("Graphic Design");
    }
    if(cusDomain.checked){
        totalEstimatedPrice = totalEstimatedPrice + cusDomainPrice;
        checkedItems.push("Free Custom Domain");
    }
    if(analReport.checked){
        totalEstimatedPrice = totalEstimatedPrice + analReportPrice;
        checkedItems.push("Monthly Analytical Report");
    }
    if(socMediaEng.checked){
        totalEstimatedPrice = totalEstimatedPrice + socMediaEngPrice;
        checkedItems.push("Social Media Engagement");
    }
    if(infMarketing.checked){
        totalEstimatedPrice = totalEstimatedPrice + infMarketingPrice;
        checkedItems.push("Influencer Marketing");
    }
    if(custSupport.checked){
        totalEstimatedPrice = totalEstimatedPrice + custSupportPrice;
        checkedItems.push("24/7 Customer Support");
    }
    
    totalEstimatedPriceDiv.innerText = "₱" + totalEstimatedPrice;

    // send to booking
    checkedItems.forEach(formatCheckedServices);
    checkedServices.innerHTML = item;
    totalPrice.value = "₱" + totalEstimatedPrice;
}

function resetPackages(){
    conCreation.checked = false;
    socMediaMngt.checked = false;
    grapDesign.checked = false;
    cusDomain.checked = false;
    analReport.checked = false;
    socMediaEng.checked = false;
    infMarketing.checked = false;
    custSupport.checked = false;

    conCreationDiv.style.display = "none";
    socMediaMngtDiv.style.display = "none";
    grapDesignDiv.style.display = "none";
    cusDomainDiv.style.display = "none";
    analReportDiv.style.display = "none";
    socMediaEngDiv.style.display = "none";
    infMarketingDiv.style.display = "none";
    custSupportDiv.style.display = "none";
}

// format checked items
function formatCheckedServices(value) {
    item += "* " + value + "\n";
}

// send email (working) *************************************************************
// input
let meetingForm = document.querySelector("#meetingForm");

// event listener
// meetingForm.addEventListener("submit", sendEmail);

let pubKey = "VcIAqcxCb5BlhsJKw";
let serviceID = "service_ukzjjro";
let templateID = "template_7uvidc6";

function sendEmail(e){
    e.preventDefault();
    
    meetingForm.setAttribute("method", "post");
    emailjs.sendForm(serviceID, templateID, meetingForm, pubKey)
    .then(function() {
        console.log('SUCCESS!');
        alert("Email sent successfully");
    }, function(error) {
        console.log('FAILED...', error);
        alert('FAILED...', error);
    });

    meetingForm.reset();
}
// send email (working) *************************************************************