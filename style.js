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


// 3. BAKERY VIDEO & AUDIO SYNCHRONIZATION
const video = document.getElementById("bakeryVideo");
const audio = document.getElementById("bakeryAudio");

if (video && audio) {

    // Start the audio when the video starts
    video.addEventListener("play", () => {
        audio.currentTime = video.currentTime;

        audio.play().catch(() => {
            console.log("Audio playback was blocked by the browser.");
        });
    });


    // Pause the audio when the video is paused
    video.addEventListener("pause", () => {
        audio.pause();
    });


    // Keep the audio synchronized when the video is moved
    video.addEventListener("seeked", () => {
        audio.currentTime = video.currentTime;
    });


    // Loop the video and audio together
    video.addEventListener("ended", () => {
        video.currentTime = 0;
        audio.currentTime = 0;

        video.play().catch(() => {
            console.log("Video playback was blocked by the browser.");
        });

        audio.play().catch(() => {
            console.log("Audio playback was blocked by the browser.");
        });
    });
}
});
