class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      document.createElement("div")
    );
    this.shadowRoot.innerHTML = `
        <h3> Блок </h3>
        <p> При клике ухожу в сумрак </p>
      `;
    this.shadowRoot.addEventListener("click", () => {
      this.shadowRoot.innerHTML = `
        <style>
          p {
            font-weight: bold;
          }
        </style>
        <p>Привет из Shadow Dom!</p>
      `;
    });
  }
}

export default Card;
