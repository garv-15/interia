const app = document.getElementById("app");
const buttons = document.querySelectorAll(".pill-nav button");

async function loadPage(page, push = true) {
  const res = await fetch(`/partials/${page}.html`);
  app.innerHTML = await res.text();

  buttons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-page="${page}"]`)?.classList.add("active");

  if (push) history.pushState({ page }, "", page === "home" ? "/" : `/${page}`);
}

buttons.forEach(btn => {
  btn.onclick = () => loadPage(btn.dataset.page);
});

window.onpopstate = e => {
  loadPage(e.state?.page || "home", false);
};

loadPage(location.pathname.replace("/", "") || "home", false);
