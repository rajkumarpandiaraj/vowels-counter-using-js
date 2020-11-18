const textForm = document.querySelector('.form')
const inputText = document.querySelector('.text-input');
const result = document.querySelector('.result');
const word = document.querySelector('.word');
const count = document.querySelector('.count')

textForm.addEventListener('submit', e =>{
    e.preventDefault();
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    const text = inputText.value;
    for(let i=0; i < text.length; i++){
        if(vowels.includes(text[i])){
            counter += 1
        }
    }
    result.style.display = 'block';
    word.textContent = text
    count.textContent = counter

    inputText.value = ''
})