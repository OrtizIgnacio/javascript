import {LitElement, html} from lit-LitElement


export class 
    
    static get 
    constructor(){
        this.obj = {
            id: 1,

        }
        this.data = [1, 2, 3, 4];
    }

    render(){
        return html`
            <ul>${this.data.map(item => html`<li>${item}</li>`)}</ul>
        `;
    }

    connectedCallback(){
        super.connectedCallback();
    }

    adoptedCallback(){

    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

