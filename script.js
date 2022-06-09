// Header navigation begynder -->
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
// Header navigation slut <--

// Carousel begynder - sektion 5 -->
// Kode lånt fra: https://www.youtube.com/watch?v=9HcxHDS2w1s&ab_channel=WebDevSimplified  med små rettelser start

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});
// kode lånt slut
// Carousel slutter  - sektion 5 <--

// Dato og tid begynder -->
function renderTime() {
	// Dato -->
	var mydate = new Date();
	var year = mydate.getYear();
	if (year < 1000) {
		year += 1900;
	}

	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag");
	var montharray = new Array("Januar", "Febuar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "October", "November", "December");
	// var year = mydate.getYear();
	// Dato slut <--

	// Tid -->
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	if (h == 24) {
		h = 0;
	} else if (h > 12) {
		h = h - 0;
	}

	var myClock = document.getElementById("clockDisplay");
	myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " ┃ " + h + ":" + m + ":" + s;
	myClock.innertext = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " ┃ " + h + ":" + m + ":" + s;
	//Tid <--

	setTimeout("renderTime()", 1000);
}

renderTime();
// Dato og tid Slutter <--

//adresse info begynder -->
const info = {
	kontakt: "Kontaktoplysninger",
	navn: "Kloster-Sølv",
	adresse: "Østergade 2 <br>8620 Kjellerup",

	// Metoder

	skrivAdresse: function () {
		footerInfo.innerHTML += `
		<div class="adresse">
			<h2 id="h2futter">${this.kontakt}</h2>
			<h3 id="adrh3">${this.navn}</h3>
			<p id="adressep">
				${this.adresse}
			</p>
			<a id="rutevej" href="https://www.google.dk/maps/dir//Kloster+S%C3%B8lv,+%C3%98stergade+2,+8620+Kjellerup/@56.2894871,9.3602007,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x464bf2008a6d5bad:0x482203f346f178a4!2m2!1d9.4304087!2d56.2895143!3e0?hl=da">Klik for rutevejledning</a>
		
			<p id="email" >E-mail: <a id="emailhref" href="mailto:info@klostersolv.dk">info@klostersolv.dk</a></p>
			<p id="tele" >Telefon: <a id="telehref" href="tel:86881172">86 88 11 72</a></p>
		
		</div>
	  `;
	},
};

info.skrivAdresse(); // adresse info Slutter <--
