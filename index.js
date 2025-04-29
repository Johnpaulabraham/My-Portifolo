// HAMBUGAR MENU
function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
}

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
}

// EMAIL.JS CONTACT
(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init({
		publicKey: "BnDmkQDogCglvlYjo",
	});
})();

const msg = document.querySelector(".form-message");

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			document.querySelector(".loader").classList.add("show");
			// these IDs from the previous steps
			emailjs.sendForm("service_pjqqtru", "template_2aneyqd", this).then(
				function () {
					document.getElementById("contact-form").reset();
					document.querySelector(".loader").classList.remove("show");
					msg.innerHTML = "";
					msg.innerHTML += `<span class="success-msg">Email Sent</span>`;
					msg.classList.add("show");
					setTimeout(() => msg.classList.remove("show"), 2000);
				},
				function () {
					document.querySelector(".loader").classList.toggle("show");
					msg.classList.add("show");
					msg.innerHTML += `<span class="error-msg">Email not Sent</span>`;
					setTimeout(() => msg.classList.remove("show"), 2000);
				}
			);
		});
};
