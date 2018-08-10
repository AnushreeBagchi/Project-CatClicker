let count=0;
const cats=['kittie','Jane'];
const images=['image.png','catImage2.png'];

for (var cat in cats)
{
    $('.content').append(`<div >
                        <h3 class='name' >${cats[cat]}</h3>
                        <div >
                            <img class='cat' src =${images[cat]} alt="Unable to load image">
                            <div class='counterBlock'>
                                <div>Click count =  </div>
                                <div class='counter'> 0 </div>
                            </div>
                         </div>
                    </div>`);
}

$('.cat').on('click',function(){
    count++;
    //console.log(count);
    //$('.counter').text(count);
    var c=$(this).siblings().children('.counter').text();
    c++;
    $(this).siblings().children('.counter').text(c);
    
});



