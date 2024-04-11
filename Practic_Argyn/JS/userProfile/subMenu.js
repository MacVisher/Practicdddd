const getSmallerSubMenu = document.getElementById('sub_menu_exit_button');
const getSubMenu = document.getElementById('sub_menu1');

let 
    class3 = 'sub_menu',
    class4 = 'changedSub_menu';
getSmallerSubMenu.addEventListener('click', function () {
    getSubMenu.classList.remove(class3);
    getSubMenu.classList.add(class4);
});