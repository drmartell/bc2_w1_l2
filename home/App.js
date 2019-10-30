import { Component } from '../Component.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { ImageList } from './ImageList.js';
import { FilterImages } from './FilterImages.js';
import { images } from '../data/images.js';

export class App extends Component {

    onRender(dom) { 
        const header = new Header(
            {
                //images: images,
                // onFilter: (keywordFilter, hornsFilter) => {
                
                //     let filtered = null;
        
                //     if (!keywordFilter && !hornsFilter) {
                //         filtered = images;
                //     }
                //     else {
                //         filtered = images.filter(image => (keywordFilter ? image.keyword === keywordFilter : true) &&
                //         (hornsFilter > 0 ? image.horns >= hornsFilter : true));
                //     }

                //     const updateProps = { images: filtered };
                //     imageList.update(updateProps);
                // }
            }
        );

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
            // WILL POTENTIALLY NEED TO REMOVE THESE PARAMETERS
            onFilter: (keywordFilter, hornsFilter) => {
                
                keywordFilter = dom.querySelector('#keyword').value.toLowerCase();
                hornsFilter = dom.querySelector('#horns').value;
                console.log(keywordFilter);
                console.log(hornsFilter);

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

        const filterImagesDOM = filterImages.renderDOM(`
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
    `);

        const headerTag = dom.getElementsByTagName('header')[0];
        headerTag.appendChild(filterImagesDOM);

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
                </main>
            </div>
        `;
    }
}
