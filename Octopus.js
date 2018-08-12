

var octopus ={
    onStart: function onStart(){
        view.reset();
        view.displayCatList(cats);
        view.onadminclick(function()  {
            view.showAdminPage();
            view.onSaveClick((newname, newurl,newClickCount)=>octopus.updateCatArray(newname, newurl,newClickCount));
        });
        view.onNameClick (octopus.onCatNameClick );
    },
    onCatNameClick: function onCatNameClick(catname){
        view.emptyCatView();
        var location =model.catArrayLocation(catname);
        model.currentLocation=location;
        octopus.rendercat(location);       
        view.onClickCatImage (function (){
            octopus.incrementCounter(location);
        });
        view.displayAdminBtn();
    
    },
    incrementCounter: function (location){        
        cats[location].count++;
        octopus.rendercat(location);
  
    },
    rendercat: function (location){
        view.displaySelectedCat (cats[location].name,cats[location].count,cats[location].image); 
    },
    updateCatArray: function (newname, newurl,newClickCount){
       console.log(model.currentLocation);
       var location= model.currentLocation;
       //debugger;
       cats[location].name=newname;
       cats[location].image=newurl;
       cats[location].count=newClickCount;
       octopus.onStart();

    }
};

octopus.onStart();

