class ButtonCount extends HTMLElement {
        
    constructor() {
        super();
        let newbutton = document.createElement('button');
        newbutton.innerHTML = "Times Clicked : ";
        let count = document.createElement('output');
        count.textContent = 0;
        newbutton.append(count);
        newbutton.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent = currVal + 1;
        });
        this.attachShadow({ mode:"open" });
        this.shadowRoot.append(newbutton);
    }
}
customElements.define("button-count", ButtonCount);