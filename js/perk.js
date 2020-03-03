// $(function() {
//     $('ul.tab li').click(function() {
//         var activeTab = $(this).attr('data-tab');
//         $('ul.tab li').removeClass('current');
//         $('.tab_content').removeClass('current');
//         $(this).addClass('current');
//         $('#' + activeTab).addClass('current');
//     })
// });

function perk_tab(evt, tab_name) {
    // Declare all variables
    console.log(evt, tab_name);
    let i, tab_content, tab_link;

    // 숨김처리
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    //
    tab_link = document.getElementsByClassName("tab_link");
    for (i = 0; i < tab_link.length; i++) {
        tab_link[i].className = tab_link[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}