declare const document: any;

const handSvgUrl = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f44b.svg";

function renderWavingHand(): void {
  if (typeof document === "undefined") return;

  const img = document.createElement("img");
  img.src = handSvgUrl;
  img.alt = "Waving hand";
  img.width = 120;
  img.height = 120;
  img.style.display = "block";

  document.body.appendChild(img);
}

renderWavingHand();
