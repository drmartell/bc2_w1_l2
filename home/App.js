import { Component } from '../Component.js';
import { Header } from './Header.js';
import { ImageList } from './ImageList.js';
import { FilterImages } from './FilterImages.js';
import { images } from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
            person: 'caleb',
            sayHello: (name) => { alert(`Hello, ${name}`); }
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            images: images,
            onFilter: (keywordFilter, hornsFilter) => {
                
                let filtered = null;
        
                if (!keywordFilter && !hornsFilter) {
                    filtered = images;
                }
                else {
                    filtered = images.filter(image => (keywordFilter ? image.keyword === keywordFilter : true) &&
                        (hornsFilter > 0 ? image.horns >= hornsFilter : true));
                }

                const updateProps = { images: filtered };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
        
                <main>
                    <section class="options-section">
                        <!-- FilterCats goes here -->
                    </section>
                    <section class="list-section">
                        <!-- CatList goes here -->
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;