
    const search = document.querySelector('.search'),
    btn = document.querySelector('.btn'),
    input = document.querySelector('.search-input');

    btn.addEventListener('click', ()=>{
        search.classList.toggle('show-input');
    });

    input.addEventListener('focusout',()=>{
        search.classList.remove('show-input');
    });

