customElements.define(
  'my-component',
  class MyComponent extends HTMLParagraphElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })
      shadow.innerHTML = `"<slot></slot>"`
    }
  }, {
  extends: 'p'
})