console.log('ttt')
const getSmallerAside = document.getElementById('aside_slide_button');
const getAside = document.getElementById('aside');

let class1 = 'aside'
let class2 = 'changeAside'

getSmallerAside.addEventListener('click', function () {
    console.log('sss')
    if (getAside.classList.contains(class1)) {
        getAside.classList.remove(class1);
        getAside.classList.add(class2);
    } else {
        getAside.classList.remove(class2);
        getAside.classList.add(class1);
    }
});


