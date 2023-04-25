const opinionCard = ` 
<a href="">
<div class="opinions-card">
    <h5></h5>
    <div class="user-info">
        <img src="" alt="">
        <span></span>
    </div>
</div>
</a>
`;

class OpinionCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = opinionCard;
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("h5").innerHTML = this.getAttribute("title");
        this.querySelector("span").innerHTML = this.getAttribute("user_name");
    }
}

window.customElements.define("opinion-card", OpinionCard);
