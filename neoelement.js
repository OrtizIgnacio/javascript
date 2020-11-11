import{LitElement, html, css} from 'lit-element';

export class NeoElement extends LitElement{

    static get styles(){
        return css`
            h2{
                color: green;
                text-shadow: 2px 2px #ff0000;
            }
        `;
    }

    static get properties(){
        return{
            nombre: {type:String},
            count: {type:Number}
        }
    }

    constructor(){
        super();
        this.nombre = "Nacho";
        this.count=1;
    }

    render(){
        return html`
            <h2>Mi componente de Lit</h2>
            <input type="text" id="nombre" value="${this.nombre}"/>
            <button @click="${this._verDatos}">ver nombre</button>
        `;
    }

    _verDatos(){
        console.log(this.shadowRoot.getElementById("nombre").value, this.count++);
    }
}

window.customElements.define('neo-element', NeoElement);