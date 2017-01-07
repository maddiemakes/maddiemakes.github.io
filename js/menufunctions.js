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
    
    $(document).on("swipeleft swiperight", ".site-wrap", function(e) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ($.mobile.activePage.jqmData("panel") !== "open") {
            if (e.type === "swipeleft" ) {
                closeMenu();
            } else if (e.type === "swiperight") {
                openMenu();
            }
        }
    });
});