// Open modal with dynamic content
function openModal(id) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const image = document.getElementById("modal-image");
  const description = document.getElementById("modal-description");
  const video = document.getElementById("modal-video");

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent background scroll

  // Reset video
  video.style.display = "none";
  video.pause();

  // Load content based on ID
  if (id === "grad") {
    title.textContent = "Grad Planner";
    image.src = "grad-planner.jpg";
    description.textContent = "Automated course planning for universities using ML and Tableau.";
  } else if (id === "vr") {
    title.textContent = "VR Compliance Training";
    image.src = "vr-training.jpg";
    description.textContent = "Improved training effectiveness through usability testing.";
  } else if (id === "case1") {
    title.textContent = "Case Study Title";
    image.src = "case1.jpg";
    description.textContent = "Placeholder for case study details.";
  }
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal on Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
