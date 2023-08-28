import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";


@customElement("my-element")
export class MyElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <div>All set</div>
    `;
    }

    static styles = css`
        div {
            color: green;
        }
  `;
}
