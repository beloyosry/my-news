const relatedArticles = `
<a href="" class="article-link">
    <img src="" alt="">
    <div class="article-text mt-3">
        <span class="article-category"></span>
        <h5 class="article-title"></h5>
    </div>
</a>
`;

class RelatedArticles extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = relatedArticles;

        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("title");
        this.querySelector("span").innerText = this.getAttribute("category");
    }
}

window.customElements.define("article-component", RelatedArticles);
