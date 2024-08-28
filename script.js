document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.getElementById("favicon");
  const favicons = ["reddragon.jpeg", "azuredragon.jpeg", "blackdragon.jpeg"];

  let currentFaviconIndex = 0;

  function changeFavicon() {
    currentFaviconIndex = (currentFaviconIndex + 1) % favicons.length;
    favicon.href = favicons[currentFaviconIndex];
  }

  setInterval(changeFavicon, 500); // Change favicon every 5 seconds

  // Marquee effect for the title
  const originalTitle = document.title;
  const marqueeText = "";
  let titleIndex = 0;

  function updateTitle() {
    document.title = marqueeText + originalTitle.slice(0, titleIndex);
    titleIndex++;
    if (titleIndex > originalTitle.length + marqueeText.length) {
      titleIndex = 0;
    }
  }

  setInterval(updateTitle, 200); // Update title every 200 milliseconds
});

function changeTheme() {
  const theme = document.getElementById("theme");
  if (theme.innerHTML == "Dark Mode") {
    theme.innerHTML = "Light Mode";
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  } else {
    theme.innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
