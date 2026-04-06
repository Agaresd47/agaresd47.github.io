const lastUpdated = document.querySelector("#last-updated");

if (lastUpdated) {
  const locale = document.documentElement.lang === "zh-CN" ? "zh-CN" : "en-US";

  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  lastUpdated.textContent = formatter.format(new Date());
}
