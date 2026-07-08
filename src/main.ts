import "./style.css";

const imagePaths: string[] = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
];

function renderGallery(paths: string[]): void {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  for (const path of paths) {
    const section = document.createElement("section");
    const img = document.createElement("img");
    img.src = path;
    img.alt = "";
    section.appendChild(img);
    app.appendChild(section);
  }
}

renderGallery(imagePaths);
