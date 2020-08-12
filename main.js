// var buttonVars = [
//     {id: 1, background: '#000000', textValue: 1},
//     {id: 2, background: '#2B8EAD', textValue: 2},
//     {id: 3, background: '#333333', textValue: 3},
//     {id: 4, background: '#6F98A8', textValue: 4},
//     {id: 5, background: '#FFFFFF', textValue: 5},
//     {id: 6, background: '#BFBFBF', textValue: 6},
//     {id: 7, background: '#EFEFEF', textValue: 7},
//     {id: 8, background: '#2F454E', textValue: 8},
//     {id: 9, background: '#72C3DC', textValue: 9},
// ];

var buttonVars = [
    {id: 1, background: '#6f98a8', textValue: 1},
    {id: 2, background: '#2b8ead', textValue: 2},
    {id: 3, background: '#2f454e', textValue: 3},
    {id: 4, background: '#2b8ead', textValue: 4},
    {id: 5, background: '#2f454e', textValue: 5},
    {id: 6, background: '#bfbfbf', textValue: 6},
    {id: 7, background: '#bfbfbf', textValue: 7},
    {id: 8, background: '#6f98a8', textValue: 8},
    {id: 9, background: '#2f454e', textValue: 9},
];

var cards = document.querySelectorAll(".card");
var buttons = document.querySelectorAll(".btn_interaction");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (buttons[i].innerText.toUpperCase() === 'SHUFFLE') {
            buttonVars.sort(() => .5 - Math.random()).forEach((f, index) => {
                cards[index].innerHTML = f.textValue;
                cards[index].style.background = f.background;
            });
        }
        if (buttons[i].innerText.toUpperCase() === 'SORT') {
            buttonVars.sort((x, y) => x.id - y.id).forEach((f, index) => {
                cards[index].innerHTML = f.textValue;
                cards[index].style.background = f.background;
            });            
        }
    });
}