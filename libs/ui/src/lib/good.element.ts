export class GoodElement extends HTMLElement {
    public static observedAttributes = ['framework'];

    // Random id for button
    rand = 'elem-' + Math.round(Math.random() * 100000000).toString(16);
    
    attributeChangedCallback(name: string, old: string, value: string) {
        this.innerHTML = `<div class="text-center"><h1 class="text-lg text-center font-medium mb-8">Amazing ${JSON.parse(value).text} test for Mike from Merlino!</h1>\
        <button id="` + this.rand + `" class="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-rose-500 border-rose-400 shadow-rose-300/30 hover:bg-rose-500 hover:text-rose-100">Click Me!</button></div>`;
    }

    /**
     * After web component is connected to DOM
     */
    connectedCallback() {
        setTimeout(() => {
            document.querySelector('#' + this.rand)?.addEventListener('click', this.handleClick);
        }, 100)
    }

    /**
     * Custom trigger events
     */
    handleClick() {
        window.dispatchEvent(new CustomEvent<{ message: string }>('btn-clicked', {detail: { message: 'Mike is passing data from Web Component to app'}}));
    }

}

customElements.define('merlino-mike-good', GoodElement);