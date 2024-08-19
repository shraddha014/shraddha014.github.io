// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();
console.log("currentpage", currentPage);

// Map the paths to their corresponding link IDs
const navLinks = {
  "": "home-id",
  "index.html": "home-id",
  "experience.html": "experience-id",
  "education.html": "education-id",
  "projects.html": "projects-id",
};

// Get the ID of the link to activate
const activeLinkId = navLinks[currentPage];

// Add the 'active' class to the corresponding link
if (activeLinkId) {
  document.getElementById(activeLinkId).classList.add("active");
}
