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

bioVis = function(){
    console.log('hit');
}

jQuery(document).ready(function() {
    jQuery('.item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100,
       });
});

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(window).scroll(function() {
    if ($('.bio').isOnScreen() == true) {
     NavActive('bioButton') 
     console.log('bio');
   }
   else if ($('.myWork').isOnScreen() == true) {
     NavActive('workButton') 
     console.log('work');
   }
   else if ($('.mySkills').isOnScreen() == true && $('.social-footer').isOnScreen() == false) {
     NavActive('skillsButton') 
     console.log('skills');
   }
   else{
     NavActive('contactButton') 
     console.log('contact');
   }

});