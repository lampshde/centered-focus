import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

@customElement('center-focus')
export default class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }
    `;
  }

  @property({type: Boolean, reflect: true })
  centered = true;

  connectedCallback() {
    super.connectedCallback();
    const center = window.innerHeight/2;
    const oldVal = center;
    window.addEventListener('scroll', (event) => {
      const rect = this.getBoundingClientRect();
      this.centered = rect.top < center && rect.bottom > center;
      this.requestUpdate('centered', oldVal);
    }, false);
  }

  render(){
    return html`
        <slot></slot>
    `;
  }
}
