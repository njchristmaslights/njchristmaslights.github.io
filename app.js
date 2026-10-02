const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = quoteForm.querySelector("button");
  button.disabled = true;
  formNote.textContent = "Sending your quote request...";

  try {
    const data = new FormData(quoteForm);
    const areas = data.getAll("lighting_areas");
    data.delete("lighting_areas");
    data.set("lighting_areas", areas.join(", ") || "Not specified");
    const endpoint = quoteForm.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
    const response = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error("Quote request failed");
    const result = await response.json();
    if (result.success !== true && result.success !== "true") {
      throw new Error("Quote request was not accepted");
    }
    quoteForm.reset();
    formNote.textContent = "Thank you. Your quote request has been sent. We will be in touch soon.";
  } catch (error) {
    formNote.textContent = "We could not send that request. Please call, text, or email us directly.";
  } finally {
    button.disabled = false;
  }
});
