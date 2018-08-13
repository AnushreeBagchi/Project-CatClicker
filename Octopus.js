

var octopus ={
    onStart: function onStart(){
        view.reset();
        view.displayCatList(cats);
        view.onadminclick(function()  {
            view.showAdminPage();
            view.onSaveClick((newname, newurl,newClickCount)=>octopus.updateCatArray(newname, newurl,newClickCount));
            view.oncancelClick(); 
        });
        view.onNameClick (octopus.onCatNameClick );
        view.onClickCatImage (function (){
            octopus.incrementCounter(model.currentLocation);
        });
    },
    onCatNameClick: function onCatNameClick(catname){
        //view.emptyCatView();
        var location =model.catArrayLocation(catname);
        model.currentLocation=location;
        octopus.rendercat(location);       
        view.displayAdminBtn();    
    },
    
    incrementCounter: function (location){   
        console.log(location,cats[location].count);     
        cats[location].count++;
        octopus.rendercat(location);
  
    },
    rendercat: function (location){
        view.displaySelectedCat (cats[location].name,cats[location].count,cats[location].image); 
    },
    updateCatArray: function (newname, newurl,newClickCount){
       console.log(model.currentLocation);
       var currlocation= model.currentLocation;       
       cats[currlocation].name=newname;
       cats[currlocation].image=newurl;
       cats[currlocation].count=newClickCount;
       octopus.onStart();

    }
};

octopus.onStart();

