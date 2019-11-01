import { ImageItem } from '../home/ImageItem.js';

const test = QUnit.test;

QUnit.module('Render Image');

test('renders html from data', assert => {
    // arrange
    const expected = /*html*/`
    <li>
        <div class="image-div">
            <img class="card-img" src="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003" alt="Cera image">
        </div>
        <div class="info-div">
            <h2 title="Three horns but still, horns. And who doesn't like The Land Before Time?">Cera</h2>
            <p class="horns-p">3</p>
        </div>
    </li>
    `;

    const hornedObj = {
        url: 'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003',
        title: 'Cera',
        description: 'Three horns but still, horns. And who doesn\'t like The Land Before Time?',
        keyword: 'triceratops',
        horns: 3,
    };
    // act
    const html = new ImageItem({ image: hornedObj }).renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});