var view = {
    displayCatList: function (catname) {
        $('.catnames').append(`<p class='catname'>${catname}</p>`);
    },
    emptyCatView: function () {
        $('.imageSection').empty();
    },
    viewCatName: function (catName) {
        $('.imageSection').append(`<div class='catname'>${catName}</div>`);
    },
    viewCatClicks: function (clickCount) {
        $('.imageSection').append(`<div class='counter'>Clicks= ${clickCount} </div>`);
    },
    viewCatImage: function (imagePath) {
        $('.imageSection').append(`<img class='cat' src='Images/${imagePath}' alt='No image found'>`);
    },
    onNameClick: function (func) {
        $('.catname').on('click', function () {
            func($(this).text());
        });
    },
    updateCount: function (location, count) {
        count++;
        cats[location].count++;
        $('.counter').text(`Clicks=${count}`);
    },
    onClickCatImage: function (location) {
        $('.cat').on('click', function () {
            view.updateCount(location, cats[location].count);
        });
    }
};











