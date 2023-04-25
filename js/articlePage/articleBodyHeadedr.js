const articleBodyHeader = `
<div class="article-img">
    <img src="" alt="">
</div>
<div class="article-subtitle">
    <span></span>
</div>
<div class="article-datetime">
    <time datetime=""></time>
</div>
`;

class ArticleBodyHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = articleBodyHeader;

        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("span").innerText = this.getAttribute("subtitle");
        this.querySelector("time").innerText = this.getAttribute("date");
        this.querySelector("time").setAttribute(
            "datetime",
            this.getAttribute("date")
        );
    }
}

window.customElements.define("article-body-header", ArticleBodyHeader);
