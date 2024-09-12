window.addEventListener("load", function () {
  document.getElementById("blurry-mess").style.opacity = "0";

  setTimeout(function () {
    document.getElementById("blurry-mess").remove();
  }, 200);
});

fetch("https://api.github.com/users/razyness")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const avatarUrl = data.avatar_url;
    const ghAvatarElement = document.getElementById("gh-avatar");

    if (ghAvatarElement) {
      ghAvatarElement.src = avatarUrl;
    }

    const faviconLink =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = `https://images.weserv.nl/?url=${avatarUrl}&fit=cover&mask=circle&maxage=7d`;

    if (!faviconLink.parentNode) {
      document.head.appendChild(faviconLink);
    }
  });
