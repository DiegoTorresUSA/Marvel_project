document.addEventListener("DOMContentLoaded", () =>{
   getHeroes(10)
    // getHeroesp(20)
});

/* ----DATOS API ver https://developer.marvel.com/docs
const ts = 1;
const pubKey = '1e4f4e96c273cfae3a27fb936b6a1a5f';
const hash= 'bbc5a1123f3bd1ce184d8f1a9691e6e7'

const [timestamp, publicKey, h] = [ts, pubKey, hash];

const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${h}&limit=2'
https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e4f4e96c273cfae3a27fb936b6a1a5f&hash=bbc5a1123f3bd1ce184d8f1a9691e6e7&limit=2
https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e4f4e96c273cfae3a27fb936b6a1a5f&hash=bbc5a1123f3bd1ce184d8f1a9691e6e7&limit=2
*/

const flex = document.querySelector('#card')
let contentHTML = '';

async function fetchMarvelAPI(url){
    const response = await fetch(url);
    return await response.json()
}



// const getHeroesp = async (limit) =>{
//     for (let i = 0; i < limit; i++) {
//         await fetch(urlAPI)
//             .then((response) => response.json())
//             .then(data => console.log(data));
//     }
// }
const getHeroes = async (limit) =>{
        await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&apikey=1e4f4e96c273cfae3a27fb936b6a1a5f`)
            .then((response) => response.json())
            .then(data => {
               for (const hero of data.data.results){
                   let urlHero = hero.urls[0].url;
                   // console.log(urlHero);
                   contentHTML += `<article class="card">
                                    <img src="/images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
                                    <div class="card-body">
                                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="card-body-img">
                                        <h1 class="card-body-title">
                                            ${hero.name}
                                        </h1>
                                        <a href="${urlHero}" target="_blank" class="card-body-text"><span>Comics</span></a>

                                    </div>
                                </article>
                                `
               }
               flex.innerHTML = contentHTML
            });
}
