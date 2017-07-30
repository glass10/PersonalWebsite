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
        classToAdd: 'visible animated fadeIn',
        offset: 100,
       });
});

// jQuery(document).ready(function(){
//     $(window).scroll(function() {
//     const section = ["bio", "workInfo", "contactMe", "mySkills" ];
//     const options = ["bioButton", "workButton", "skillsButton", "contactButton"];
//     for(var i = 0; i < 4; i++){
//         var top_of_element = $("." + section[i]).offset().top;
//         var bottom_of_element = $("." + section[i]).offset().top + $("." + section[i]).outerHeight();
//         var bottom_of_screen = $(window).scrollTop() + $(window).height();
//         var top_of_screen = $(window).scrollTop();

//         if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//             // The element is visible, do something
//             NavActive(options[i]);
//             console.log(section[i]);
//         }
//         else {
//             // The element is not visible, do something else
//         }
//     }
//     });
// });

jQuery.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();// Get the full height of current element
elemtHeight = Math.round(elemtHeight);// Round it to whole humber

var bounds = this.offset();// Coordinates of current element
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

//Usage:
$(window).on('scroll', function() {
  if( $('.bio').isFullyVisible() ){
    console.log('bio')
    NavActive('bioButton');
  }
  else if( $('.workTable').isFullyVisible() ){
    console.log('work')
    NavActive('workButton');
  }
  else if( $('.social-footer').isFullyVisible() ){
    console.log('contact')
    NavActive('skillsButton');
  }
  if( $('.mySkills').isFullyVisible() ){
    console.log('skills')
    NavActive('contactButton');
  }
});