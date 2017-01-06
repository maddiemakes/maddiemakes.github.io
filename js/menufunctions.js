$(document).ready(function () {
    
    function closeMenu() {
        $('.nav-trigger').attr('checked', false);
    }
    
    $('.site-wrap').click(function() {
        closeMenu();
    });
    
    window.onscroll = closeMenu;
});