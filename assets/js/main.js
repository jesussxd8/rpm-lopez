document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");
  const opinions = document.querySelectorAll(".opinion");

  /* ===== LOADER ===== */
  setTimeout(() => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => loader.remove()
    });
  }, 2200);

  /* ===== NAVBAR SCROLL ===== */
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* ===== MENU MÓVIL ===== */
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en cualquier enlace
  links.forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }));

  /* ===== ANIMACIONES SCROLL ===== */
  gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
      scrollTrigger: { trigger: sec, start: "top 85%" },
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out"
    });
  });

  /* ===== SLIDER DE OPINIONES ===== */
  let index = 0;
  setInterval(() => {
    opinions.forEach(o => o.classList.remove("active"));
    index = (index + 1) % opinions.length;
    opinions[index].classList.add("active");
  }, 4000);

  /* ===== FORMULARIO ===== */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("sending");
    gsap.to(form, { opacity: 0.7, duration: 0.5 });
    setTimeout(() => {
      form.innerHTML = `<p class="sent">✅ Tu mensaje se ha enviado correctamente.</p>`;
      gsap.from(".sent", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" });
    }, 1000);
  });
});
