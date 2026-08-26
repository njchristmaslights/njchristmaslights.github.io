const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const details = new FormData(quoteForm);
  const message = [
    "Hi NJ Christmas Lights LLC, I would like a free quote.",
    `Name: ${details.get("name")}`,
    `Phone: ${details.get("phone")}`,
    `Town: ${details.get("town")}`,
    `Service: ${details.get("service")}`,
    `Details: ${details.get("details") || "Not provided"}`
  ].join("\n");

  formNote.textContent = "Opening a text message with your quote details...";
  window.location.href = `sms:+19088926802?body=${encodeURIComponent(message)}`;
});
