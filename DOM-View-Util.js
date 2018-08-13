var view = {
    displayCatList: function (cats) {
        $('.catnames').empty();
        for (var cat in cats)
        {
            $('.catnames').append(`<p class='catname'>${cats[cat].name}</p>`);
        }
        
    },
    reset: function (){
        $('.catnames').empty();
        $('.imageSection').empty();
        $('.btnAdmin').addClass('hide');
        $('.adminpage').addClass('hide');
        $('.catname').unbind();
        $('.imageSection').unbind();
        $('.btnAdmin').unbind();
        $('.save').unbind();
        $('.cancel').unbind();
    },
    emptyCatView: function () {
        $('.imageSection').empty();
    },
    emptycontent: function (){
        $('.catnames').empty();
    }
    ,
    displaySelectedCat : function (catName,clickCount,imagePath){
        view.emptyCatView();
        $('.imageSection').append(`<div class='catname'>${catName}</div>`);
        //debugger;
        $('.imageSection').append(`<div class='counter'>Clicks= ${clickCount} </div>`);
        $('.imageSection').append(`<img class='cat' src='Images/${imagePath}' alt='No image found'>`);
        
    },
    onNameClick: function (func) {
        $('.catname').on('click', function () {
            func($(this).text());
        });
    },
    onClickCatImage: function (func) {
        //console.log(cats.count);
        $('.imageSection').on ('click', function (event){
            if (event.target.className==='cat')
            {
                func();
            }
        }); 
    },
    // onClickCatImage:  function (func){
    //     $('.cat').on ('click', function(){
    //         func();
    //     });
    // },
    displayAdminBtn:  function (){
        $('.btnAdmin').removeClass('hide');
    },   
    onadminclick: function  (func){
        $('.btnAdmin').on('click',func);
     }, 
    showAdminPage: function (){
        $('.adminpage').removeClass('hide');
    },
    onSaveClick: function (func){
        $('.save').on('click',function (){
            var newname=$('.inputname').val();
            var newurl=$('.inputurl').val();
            var newClickCount  =$('.inputclicks').val();
            func(newname,newurl,newClickCount);

        });
    },
    oncancelClick: function (){
        $('.cancel').on('click',function (){            
            $('.btnAdmin').addClass('hide');
            $('.adminpage').addClass('hide');
        });
    }

};












