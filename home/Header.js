import { Component } from '../Component.js';

export class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1>Photo Gallery</h1>
                <img id="logo" src="./assets/gallery-logo.png" alt="Welcome to the Photo Gallery">
                <section id="options">
                    <select id="keyword">
                        <option value="" selected>All Types</option>
                        <option value="Rhino">rhino</option>
                        <option value="Unicorn">unicorn</option>
                        <option value="Unilego">unilego</option>
                        <option value="Triceratops">triceratops</option>
                        <option value="Markhor">markhor</option>
                        <option value="Mouflon">mouflon</option>
                        <option value="Addax">addax</option>
                        <option value="Chameleon">chameleon</option>
                        <option value="Lizard">lizard</option>
                        <option value="Dragon">dragon</option>
                    </select>
                    <select id="horns">
                        <option value="" selected>All Horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </section>
            </header>
        `;
    }
}
