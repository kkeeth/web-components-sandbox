class HelloWorld extends HTMLElement {
  constructor() {
    super()
    this.name = 'Web Components!!'
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(property, oldValue, newValue) {
    console.log(oldValue, newValue)
    if (oldValue === newValue) return
    this[property] = newValue
  }

  // connect component
  connectedCallback() {
    this.textContent = `Hello ${this.name}`
  }
}
customElements.define('hello-world', HelloWorld)
