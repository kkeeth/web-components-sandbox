class HelloWorld extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent = 'Hello Web Components!!'
  }
}
customElements.define('hello-world', HelloWorld)