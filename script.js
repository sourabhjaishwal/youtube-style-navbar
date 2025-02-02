document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) =>
    item.addEventListener("click", () => {
      // Remove 'active' class from all items and add it to the clicked item
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    })
  );
});
