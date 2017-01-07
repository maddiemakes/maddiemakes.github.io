$(document).ready(function () {
    
    function openMenu() {
        $('.nav-trigger').attr('checked', true);
    }
    
    function closeMenu() {
        $('.nav-trigger').attr('checked', false);
    }
    
    $('.site-wrap').click(function() {
        closeMenu();
    });
    
    window.onscroll = closeMenu;
});