const lastUpdated = document.querySelector("#last-updated");

if (lastUpdated) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  lastUpdated.textContent = formatter.format(new Date());
}
