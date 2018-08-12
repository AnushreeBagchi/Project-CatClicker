const cats=[{name:'Kittie',image:'image.png', count:0},
            {name:'Jane', image: 'catImage2.png',count:0},
            {name:'Jolly', image:'catImage3.png',count:0},
            {name:'Joita', image:'catImage4.png',count:0},
            {name:'Jishnu', image:'catImage5.png',count:0},
            {name:'Jonaki', image:'catImage6.png',count:0},
            {name:'Priyam', image:'catImage7.png',count:0},
            {name:'Monica', image:'catImage8.png',count:0}];



var model={
    catArrayLocation:  function  (name){
        for (let i =0;i<cats.length; i++){
            if (cats[i].name===name){
                var location= i;
            }
        }
        return  location;
    },
    currentLocation :undefined 
};

