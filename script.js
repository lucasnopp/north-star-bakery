document.addEventListener("DOMContentLoaded", () => {
   // 1. DYNAMIC CALENDAR VALIDATOR
// Prevents selecting past dates
const dateInput = document.getElementById("pickup-date");

if (dateInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const minDateString = `${year}-${month}-${day}`;

    dateInput.setAttribute("min", minDateString);
}


// 2. CONTACT & PRE-ORDER FORM SUBMISSION HANDLER
const preorderForm = document.querySelector("form");

if (preorderForm) {
    preorderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const clientName = document
            .getElementById("client-name")
            .value
            .trim();

        const requestTypeElement =
            document.getElementById("request-type");

        const selectedTypeText =
            requestTypeElement.options[
                requestTypeElement.selectedIndex
            ].text;

        alert(
            `Thank you, ${clientName}!\n\n` +
            `Your request for "${selectedTypeText}" has been received. ` +
            `Our team will review your order details and respond via ` +
            `email within 24 hours.`
        );

        preorderForm.reset();
    });
}

    });
