import { Component } from '../Component.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { ImageList } from './ImageList.js';
import { FilterImages } from './FilterImages.js';
import { images } from '../data/images.js';
import { AddImage } from './AddImage.js';

export class App extends Component {

    onRender(dom) { 
        const header = new Header();

        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            images: images,
            onFilter: ({ keywordFilter, hornsFilter }) => { 

                let filtered = null;
        
                if (!keywordFilter && !hornsFilter) {
                    filtered = images;
                }
                else {
                    filtered = images.filter(image =>
                        (keywordFilter ? image.keyword === keywordFilter : true) &&
                        (hornsFilter > 0 ? image.horns >= hornsFilter : true));
                }

                const updateProps = { images: filtered };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const headerTag = dom.getElementsByTagName('header')[0];
        headerTag.appendChild(filterImagesDOM);

        const addImageSection = dom.querySelector('.form-section');
        const addImage = new AddImage({
            images: images,
            onAdd: newImage => {
                images.push(newImage);
                imageList.update(images);
            }
        });
        const addImageDOM = addImage.renderDOM();
        addImageSection.appendChild(addImageDOM);

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
                <main>
                    <section class="options-section">
                        <!-- FilterImages goes here -->
                    </section>
                    <section class="list-section">
                        <!-- ImageList goes here -->
                    </section>
                    <section class="form-section">
                        <!-- AddImage Form goes here -->
                    </section>
                </main>
            </div>
        `;
    }
}
