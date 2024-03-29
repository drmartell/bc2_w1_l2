import { Component } from '../Component.js';

export class AddImage extends Component {

    onRender(form) {
        const { onAdd } = this.props;
        // same as saying const onAdd = this.props.onAdd
        // i.e. this is destructuring of the props object to send the
        // value associated with the onAdd key into a local variable
        // called onAdd so that we can call it here
        // we need to do this in order to get it out of the object for use in this scope

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);

            onAdd({
                title: formData.get('title'),
                description: formData.get('description'),
                keyword: formData.get('keyword'),
                horns: formData.get('horns'),
                url: formData.get('url'),
            });
        });
    }
    
    renderHTML() {
        return /*html*/`
        <form action="/my-handling-form-page" method="post">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title">
            </div>
            <div>
                <label for="description">Description:</label>
                <input type="text" id="description" name="description">
            </div>
            <div>
                <label for="keyword">Keyword:</label>
                <input id="keyword" name="keyword">
            </div>
            <div>
                <label for="horns">Horns:</label>
                <input id="horns" name="horns" type="number" min="0">
            </div>
            <div>
                <label for="url">url:</label>
                <input id="url" name="url">
            </div>
            <div>
                <button id="submit" name="submit">Submit</button>
            </div>
        </form>
        `;
    }
}
