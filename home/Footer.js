import { Component } from '../Component.js';

export class Footer extends Component {
    renderHTML() {
        return /*html*/`
            <footer>
                Lab by Canadian Casey @<a href="https://www.alchemycodelab.com/">alchemycodelab</a>
            </footer>
        `;
    }
}
