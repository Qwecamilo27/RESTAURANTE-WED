const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.sesult');

btn.addEventListener('click', countVowel );

function countVowel(){
    let vowelcount = 0;
    let wordVal = texto.value.toLowerCase();

    for(let i = 0; i < wordVal.length; i++ ){
        let latter = wordval[i];

        if (latter.match(/([a,e,i,o,u])/)){
            vowelcount++;
        }
    }
    result.innerHTML = `${text.value.toUpperCase()} tiene; `
     {vowelcount} vocales``;
}