import { drawHeart } from './heart.js';
import anime from '/lib/anime.es.js';
// import * as PIXI from '/lib/pixi.js';

// CONSTANTS
const width = window.innerWidth;
const height = window.innerHeight;

// REFERENCES
const cHeart = document.getElementById('canvas-heart');
const ctx = cHeart.getContext('2d');
const btn1 = document.getElementById('button1');
const btn2_b = document.getElementById('button2-back-image');
const btn2_f = document.getElementById('button2-foreward-image');
const btn3_b = document.getElementById('button3-back-image');
const btn_music = document.getElementById('music-play-image');

// draw heart
cHeart.width = width;
cHeart.height = height;
drawHeart(cHeart);

// set up buttons position
btn1.width = width / 2;
btn1.style.left = `${width / 2 - btn1.width / 2 - 20}px`;
btn1.style.top = `${height - btn1.height}px`;

// btn2_f.width = width / 2;
// btn2_f.style.left = `${width - btn2_f.width - 5}px`;
// btn2_f.style.top = `${height * 2 - btn2_f.height - 5}px`;

// btn2_b.width = width / 2;
// btn2_b.style.left = `${5}px`;
// btn2_b.style.top = `${height * 2 - btn2_f.height - 5}px`;

// btn3_b.width = width / 2;
// btn3_b.style.left = `${5}px`;
// btn3_b.style.top = `${height * 3 - btn2_f.height - 5}px`;

const p = document.querySelector('#p-click');
p.style.left = `${width / 2 - 130}px`;
p.style.top = `${height / 2 - 100}px`;

btn_music.style.left = `${width - btn_music.width - 5}px`;
btn_music.style.top = `${height - btn_music.height - 5}px`;

const image1 = document.querySelector('#image1');

// set up animation
const anime1 = anime({
    targets: '#image1',
    // top: `${height + 200}px`,
    right: 0,
    opacity: 1,
    duration: 1000,
    easing: 'easeInOutQuad',
    autoplay: false
});

// set up listeners
btn1.addEventListener('click', (e) => {
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    })
});

p.addEventListener('click', (e) => {
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    })
    image1.style.display = "block";
    anime1.restart();
});

// btn2_b.addEventListener('click', (e) => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// });

// btn2_f.addEventListener('click', (e) => {
//     window.scrollTo({
//         top: height * 2,
//         behavior: 'smooth'
//     })
// });

// btn3_b.addEventListener('click', (e) => {
//     window.scrollTo({
//         top: height,
//         behavior: 'smooth'
//     })
// });

btn_music.addEventListener('click', (e) => {
    const audio = document.querySelector('#music');
    console.log(audio);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

window.addEventListener('wheel', (e) => {
    const y = e.pageY;
    const direct = e.deltaY > 0 ? 'down' : 'up';
    let top = 0;
    if (y > 0 && y < height) {
        if (direct === 'down') {
            top = height;
        } else {
            top = 0;
        }
    } else if (y > height && y < height * 2) {
        if (direct === 'down') {
            top = height * 2;
        } else {
            top = 0;
        }
    } else if (y > height * 2 && y < height * 3) {
        if (direct === 'down') {
            top = height * 2;
        } else {
            top = height;
        }
    }

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
});

const app = new PIXI.Application({ background: '#000000', width: width, height: height, });
document.body.appendChild(app.view);

const background = PIXI.Sprite.from('/image/background.jpg');

// bunny.anchor.set(0.5);

background.width = app.screen.width;
background.height = app.screen.height;
background.alpha = 0.3;

// bunny.x = app.screen.width / 2;
// bunny.y = app.screen.height / 2;

app.stage.addChild(background);
const bunny1 = PIXI.Sprite.from('/image/background.png');
bunny1.scale.x = 0.2;
bunny1.scale.y = 0.2;
app.stage.addChild(bunny1);



const image_list = [];

for (let image_path in image_list) {
    const bunny = PIXI.Sprite.from(image_path);
    bunny.scale.x = 0.2;
    bunny.scale.y = 0.2;
    app.stage.addChild(bunny);
    setTimeout(() => {

    }, timeout);
}


// app.ticker.add((delta) => {
//     bunny.rotation += 0.1 * delta;
//     });
