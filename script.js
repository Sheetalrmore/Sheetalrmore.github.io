function openModal(id) {
  document.getElementById("modal").style.display = "flex";

  // Example dynamic content
  if (id === "grad") {
    document.getElementById("modal-title").textContent = "Grad Planner";
    document.getElementById("modal-image").src = "grad-planner.jpg";
    document.getElementById("modal-description").textContent = "Automated course planning for universities using ML and Tableau.";
  } else if (id === "vr") {
    document.getElementById("modal-title").textContent = "VR Compliance Training";
    document.getElementById("modal-image").src = "vr-training.jpg";
    document.getElementById("modal-description").textContent = "Improved training effectiveness through usability testing.";
  } else if (id === "case1") {
    document.getElementById("modal-title").textContent = "Case Study Title";
    document.getElementById("modal-image").src = "case1.jpg";
    document.getElementById("modal-description").textContent = "Placeholder for case study details.";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
