const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = quoteForm.querySelector("button");
  button.disabled = true;
  formNote.textContent = "Sending your quote request...";

  try {
    const response = await fetch(quoteForm.action, {
      method: "POST",
      body: new FormData(quoteForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error("Quote request failed");
    quoteForm.reset();
    formNote.textContent = "Thank you. Your quote request has been sent. We will be in touch soon.";
  } catch (error) {
    formNote.textContent = "We could not send that request. Please call, text, or email us directly.";
  } finally {
    button.disabled = false;
  }
});
