import { Component } from '../Component.js';

export class Header extends Component {

    // onRender(select) {
    //     const onFilter = this.props.onFilter;

    //     select.addEventListener('input', () => {
    //         onFilter(select.value);
    //     });
    // }
    
    renderHTML() {
        return /*html*/`
            <header>
                <h1>Photo Gallery</h1>
                <img id="logo" src="./assets/gallery-logo.png" alt="Welcome to the Photo Gallery">
            </header>
        `;
    }
}
