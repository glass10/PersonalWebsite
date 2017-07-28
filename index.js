NavActive = function(id){
    const options = ["bioButton", "workButton", "skillsButton", "contactButton"];
    for(var i = 0; i < 4; i++){
        const id2 = options[i];
        const obj = document.getElementById(id2);
        if(id2 === id){
            obj.className = "active"
        }
        else{
            obj.className = "";
        }
        
    }
}

jQuery(document).ready(function() {
    jQuery('.item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100,
       });
});