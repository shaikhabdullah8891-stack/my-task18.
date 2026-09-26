const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value;

    const bookingDate =
        document.getElementById("bookingDate").value;

    const bookingTime =
        document.getElementById("bookingTime").value;

    const guests =
        document.getElementById("guests").value;


    bookingMessage.textContent =
        `Table booked successfully for ${customerName} on ${bookingDate} at ${bookingTime} for ${guests} guest(s).`;


    bookingForm.reset();

});