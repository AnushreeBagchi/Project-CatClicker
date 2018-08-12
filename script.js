
// const cats=['kittie','Jane','Jolly'];
// const images=['image.png','catImage2.png','catImage3.png'];

const cats=[{name:'Kittie',image:'image.png', count:0},
            {name:'Jane', image: 'catImage2.png',count:0},
            {name:'Jolly', image:'catImage3.png',count:0},
            {name:'Joita', image:'catImage4.png',count:0},
            {name:'Jishnu', image:'catImage5.png',count:0},
            {name:'Jonaki', image:'catImage6.png',count:0},
            {name:'Priyam', image:'catImage7.png',count:0},
            {name:'Monica', image:'catImage8.png',count:0}];

for (var cat in cats)
{
    $('.catnames').append(`<p class='catname'>${cats[cat].name}</p>`);                 
}

$('.catname').on ('click',function (){
    $('.imageSection').empty();
    for (let i =0;i<cats.length; i++){
        if (cats[i].name===$(this).text()){
            var location= i;
        }
    }
    $('.imageSection').append(`<div class='catname'>${cats[location].name}</div>`);
    $('.imageSection').append(`<div class='counter'>Clicks= ${cats[location].count} </div>`);
    $('.imageSection').append( `<img class='cat' src='Images/${cats[location].image}' alt='No image found'>`);
    $('.cat').on('click',function(){
        cats[location].count++;
        $('.counter').text(`Clicks=${cats[location].count}`);
    });

});
