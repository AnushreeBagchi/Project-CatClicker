

var octopus ={
    onStart: function onStart(){
        for (var cat in cats)
        {
            view.displayCatList(cats[cat].name);
        }
    
        view.onNameClick (octopus.onCatNameClick );
    },
    onCatNameClick: function onCatNameClick(catname){
        view.emptyCatView();
        var location =model.catArrayLocation(catname);
        console.log(location );           
        view.viewCatName(cats[location].name);         
        view.viewCatClicks(cats[location].count);        
        view.viewCatImage (cats[location].image);        
        view.onClickCatImage (location);
    
    }
};

octopus.onStart();

