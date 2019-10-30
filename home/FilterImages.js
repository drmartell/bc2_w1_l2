import { Component } from '../Component.js';

export class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML(htmlString) {
        return htmlString;
    }
}
