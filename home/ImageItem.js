import { Component } from '../Component.js';

export class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li>
                <div class="image-div">
                    <img class="card-img" src="${image.url}" alt="${image.title} image">
                </div>
                <div class="info-div">
                    <h2 title="${image.description}">${image.title}</h2>
                    <p class="horns-p">${image.horns}</p>
                </div>
            </li>
        `;
    }
}
