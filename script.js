const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const sideMenu = document.querySelector(".side-menu");


menuButton.addEventListener("click", function() {
    sideMenu.classList.add("open");
});


closeButton.addEventListener("click", function() {
    sideMenu.classList.remove("open");
});


// HERO IMAGE SLIDER

const heroImages = document.querySelectorAll(".hero-image");

let currentImage = 0;

setInterval(function() {

    heroImages[currentImage].classList.remove("active");

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    heroImages[currentImage].classList.add("active");

}, 4000);


// TRAINER DATA

const trainers = [

    {
        name: "Arjun Sharma",
        specialization: "Muscle Building",
        location: "Phagwara",
        certification: "NASM",
        experience: 6,
        fee: 800,
        rating: 4.9,
        image: "images/trainerM1.png"
    },

    {
        name: "Simran Kaur",
        specialization: "Yoga",
        location: "Jalandhar",
        certification: "ACE",
        experience: 5,
        fee: 600,
        rating: 4.8,
        image: "images/trainerF1.png"
    },

    {
        name: "Rahul Verma",
        specialization: "Boxing",
        location: "LPU",
        certification: "ISSA",
        experience: 7,
        fee: 900,
        rating: 4.9,
        image: "images/trainerM2.png"
    },

    {
        name: "Neha Kapoor",
        specialization: "Weight Loss",
        location: "Kapurthala",
        certification: "ACE",
        experience: 4,
        fee: 500,
        rating: 4.7,
        image: "images/trainerF2.png"
    },

    {
        name: "Kabir Singh",
        specialization: "Swimming",
        location: "Jalandhar",
        certification: "NASM",
        experience: 8,
        fee: 1000,
        rating: 4.9,
        image: "images/trainerM3.png"
    },

    {
        name: "Priya Mehta",
        specialization: "Posture Rehab",
        location: "Phagwara",
        certification: "ISSA",
        experience: 5,
        fee: 700,
        rating: 4.8,
        image: "images/trainerF3.jpg"
    }

];


const trainerGrid = document.getElementById("trainer-grid");


// DISPLAY TRAINERS

function displayTrainers(trainerList) {

    trainerGrid.innerHTML = "";

    if (trainerList.length === 0) {
    trainerGrid.innerHTML =
        '<p class="no-results">No trainers found. Try changing your filters.</p>';
    return;
}

    trainerList.forEach(function(trainer) {

        const card = document.createElement("div");

        card.classList.add("trainer-card");

        card.innerHTML = `
            <img src="${trainer.image}" alt="${trainer.name}">

            <div class="trainer-info">

                <h3>${trainer.name}</h3>

                <p class="specialization">
                    ${trainer.specialization}
                </p>

                <span class="certification">
                    ${trainer.certification}
                </span>

                <p>${trainer.experience} Years Experience</p>

                <p>₹${trainer.fee} / hour</p>

                <p>⭐ ${trainer.rating}</p>

                <p>📍 ${trainer.location}</p>

                <button class="profile-button" data-index="${trainers.indexOf(trainer)}">
                    View Profile
                </button>

            </div>
        `;

        trainerGrid.appendChild(card);

    });


    // VIEW PROFILE BUTTONS

    
const profileButtons = document.querySelectorAll(".profile-button");

profileButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const index = button.dataset.index;
        const trainer = trainers[index];

        document.getElementById("modal-image").src = trainer.image;
        document.getElementById("modal-image").alt = trainer.name;

        document.getElementById("modal-name").textContent = trainer.name;
        document.getElementById("modal-specialization").textContent = trainer.specialization;
        document.getElementById("modal-certification").textContent = trainer.certification;
        document.getElementById("modal-experience").textContent = trainer.experience + " Years Experience";
        document.getElementById("modal-fee").textContent = "₹" + trainer.fee + " / hour";
        document.getElementById("modal-rating").textContent = "⭐ " + trainer.rating;
        document.getElementById("modal-location").textContent = "📍 " + trainer.location;

        document.getElementById("modal-bio").textContent =
            trainer.name + " specializes in " + trainer.specialization.toLowerCase() +
            " and has " + trainer.experience + " years of experience helping clients work toward their fitness goals.";

        document.getElementById("profile-modal").style.display = "flex";

    });

});


}


// DISPLAY ALL TRAINERS WHEN PAGE LOADS

displayTrainers(trainers);

// Use the same coach directory for coach reviews so names stay in sync.
const coachReviewSelect = document.getElementById("coach-name");
trainers.forEach(function(trainer) {
    const option = document.createElement("option");
    option.value = trainer.name;
    option.textContent = trainer.name + " — " + trainer.specialization;
    coachReviewSelect.appendChild(option);
});

// Demo sign-in and coach application forms; submissions are not sent to a server.
const signInModal = document.getElementById("sign-in-modal");
const signInButton = document.getElementById("sign-in-button");
const signInClose = document.getElementById("sign-in-close");

signInButton.addEventListener("click", function() {
    signInModal.classList.add("open");
    signInModal.setAttribute("aria-hidden", "false");
});

signInClose.addEventListener("click", closeSignInModal);
signInModal.addEventListener("click", function(event) {
    if (event.target === signInModal) closeSignInModal();
});

function closeSignInModal() {
    signInModal.classList.remove("open");
    signInModal.setAttribute("aria-hidden", "true");
}

document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault();
    this.querySelector(".form-demo-feedback").textContent = "Welcome back!";
});

const registerForm = document.getElementById("register-form");
const signInForm = document.getElementById("sign-in-form");
const signInSwitch = document.querySelector(".auth-switch");
const registerSwitch = document.querySelector(".register-switch");

document.getElementById("show-register").addEventListener("click", function() {
    signInForm.hidden = true;
    signInSwitch.hidden = true;
    registerForm.hidden = false;
    registerSwitch.hidden = false;
});

document.getElementById("show-sign-in").addEventListener("click", function() {
    registerForm.hidden = true;
    registerSwitch.hidden = true;
    signInForm.hidden = false;
    signInSwitch.hidden = false;
});

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    this.querySelector(".form-demo-feedback").textContent = "Your account has been created.";
});

document.getElementById("google-demo-button").addEventListener("click", function() {
    signInForm.querySelector(".form-demo-feedback").textContent = "Google sign-in selected.";
});

const joinCoachButton = document.getElementById("join-fitfinder-button");
const joinCoachForm = document.getElementById("join-coach-form");
document.getElementById("join-coach-close").addEventListener("click", function() {
    joinCoachForm.hidden = true;
});
joinCoachButton.addEventListener("click", function() {
    joinCoachForm.hidden = !joinCoachForm.hidden;
    if (!joinCoachForm.hidden) {
        joinCoachForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
        document.getElementById("join-coach-name").focus();
    }
});

joinCoachForm.addEventListener("submit", function(event) {
    event.preventDefault();
    this.querySelector(".form-demo-feedback").textContent = "Thanks for your interest! Your application has been submitted.";
    this.reset();
});

document.querySelectorAll("#website-review-form, #coach-review-form").forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let feedback = this.querySelector(".form-demo-feedback");
        if (!feedback) {
            feedback = document.createElement("p");
            feedback.className = "form-demo-feedback";
            feedback.setAttribute("aria-live", "polite");
            this.appendChild(feedback);
        }
        feedback.textContent = "Thanks for sharing your feedback!";
        this.reset();
    });
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// FILTER ELEMENTS

const locationFilter = document.getElementById("location-filter");

const specializationFilter =
    document.getElementById("specialization-filter");

const findCoachButton =
    document.getElementById("find-coach-button");

const trainerSection =
    document.getElementById("trainers-section");


// FIND A COACH BUTTON

findCoachButton.addEventListener("click", function() {

    const selectedLocation = locationFilter.value;

    const selectedSpecialization =
        specializationFilter.value;


    const filteredTrainers = trainers.filter(function(trainer) {

        return (
            (selectedLocation === "" ||
                trainer.location === selectedLocation) &&

            (selectedSpecialization === "" ||
                trainer.specialization === selectedSpecialization)
        );

    });


    displayTrainers(filteredTrainers);


    trainerSection.scrollIntoView({
        behavior: "smooth"
    });

});

const profileModal = document.getElementById("profile-modal");
const modalClose = document.getElementById("modal-close");

modalClose.addEventListener("click", function() {
    profileModal.style.display = "none";
});


 // CONSULTATION FORM

const consultationButton = document.getElementById("consultation-button");
const consultationModal = document.getElementById("consultation-modal");
const consultationClose = document.getElementById("consultation-close");
const consultationForm = document.getElementById("consultation-form");


// OPEN THE CONSULTATION FORM

consultationButton.addEventListener("click", function() {

    document.getElementById("profile-modal").style.display = "none";

    consultationModal.style.display = "flex";

});


// CLOSE THE CONSULTATION FORM

consultationClose.addEventListener("click", function() {

    consultationModal.style.display = "none";

});


// SUBMIT THE FORM

consultationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your free consultation request has been submitted!");

    consultationForm.reset();

    consultationModal.style.display = "none";

});


/* BMI CALCULATOR */

const bmiButton = document.querySelector(".bmi-button");
const bmiModal = document.getElementById("bmi-modal");
const bmiClose = document.getElementById("bmi-close");
const bmiForm = document.getElementById("bmi-form");
const bmiResult = document.getElementById("bmi-result");

bmiButton.addEventListener("click", function() {
    bmiModal.style.display = "flex";
});

bmiClose.addEventListener("click", function() {
    bmiModal.style.display = "none";
});

bmiModal.addEventListener("click", function(event) {
    if (event.target === bmiModal) {
        bmiModal.style.display = "none";
    }
});

bmiForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const height = Number(document.getElementById("bmi-height").value);
    const weight = Number(document.getElementById("bmi-weight").value);

    if (height <= 0 || weight <= 0) {
        bmiResult.textContent = "Please enter a valid height and weight.";
        return;
    }

    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy weight range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    bmiResult.textContent =
        "Your BMI is " + bmi.toFixed(1) + ". Category: " + category + ".";
});
