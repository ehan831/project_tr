// function search_champion() {
//     // 검색어 받아오기
//     let input = document.getElementById('search_right').value;
//
//     // 검색어 소문자로 변경(영어인 경우)
//     input = input.toLowerCase();
//
//     //
//     let x = document.getElementsByClassName('champions');
//
//     console.log('input & x', input, x);
//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         } else {
//             x[i].style.display = "list-item";
//         }
//     }
// }


// 검색바 - 온키로 작동
function auto_complete_right() {
    let arr = champions;    // 챔피언 리스트를 받음
    let current_focus;      // 키보드 움직임을 받음
    let input_text = document.getElementById('search_right').value;      // 검색어를 받음
    let parent_node = document.getElementById('autocomplete_right');      // parent node 찾기

    let input = document.getElementById('search_right').value;

    // 검색어 소문자로 변경(영어인 경우)
    input = input.toLowerCase();

    //
    let x = document.getElementsByClassName('champions');

    console.log('input & x', input, x);
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }

    close_lists(parent_node, input_text);      // 기존에 열려있던 결과 리스트 갱신
    if (!input_text) {
        return false;
    }

    current_focus = -1;

    let a = document.createElement("DIV");
    a.setAttribute("id", this.id + "auto_complete_list");
    a.setAttribute("class", "auto_complete_items");
    parent_node.appendChild(a);

    // 검색어와 챔피언리스트 목록 내에서 일치하는 항목 찾기
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, input_text.length).toUpperCase() == input_text.toUpperCase()) {
            let b = document.createElement("DIV");
            b.innerHTML = "<strong><u>" + arr[i].substr(0, input_text.length) + "</u></strong>";
            b.innerHTML += arr[i].substr(input_text.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            b.addEventListener("click", function () {
                input_text.value = this.getElementsByTagName("input")[0].value;
                close_lists(parent_node, input_text);
                console.log(b.innerText);       // 클릭한 챔피언 이름
                let clicked_champion = b.innerText;
                search_button_right(clicked_champion);
            });
            a.appendChild(b);
        }
    }
}


// 검색버튼 - display: none 상태
function search_button_right(clicked_champion) {
    const search1 = document.getElementById("search_right");
    let input;

    if(clicked_champion != null) {
        input = clicked_champion;
    } else {
        input = search1.value;
    }

    console.log('input right: ', input);
    window.alert(input);

    search1.value = "";
}


// 자동완성 키워드 중에 클릭된 키워드로 검색해주기
function selected_list() {
    let champions = document.getElementsByClassName('champions');
    let clicked_champion = champions.event.target;
    console.log(clicked_champion.getElementsByTagName('div').value);
    // console.log("뭐가 찍히나. ", champions.event.target.toString());

    // let search_bar = document.getElementById('search1');
    // search_bar.innerHTML.concat(champions.event.target.toString());
}


// 입력 텍스트에 따라 새롭게 결과 뿌려줌
function close_lists(parent_node, input_text) {
    let x = document.getElementsByClassName("auto_complete_items");

    for (let i = 0; i < x.length; i++) {
        if (event != x[i] && event != input_text) {
            parent_node.removeChild(x[i]);
        }
    }
}

//
// document.getElementById('search1').addEventListener("keydown", function (e) {
//     let x = document.getElementById((this.id + "auto_complete_list"));
//     if (x) {
//         x = x.getElementsByTagName("div");
//     }
//     if (e.keyCode == 40) {  // down
//         current_focus++;
//         add_active(x);
//     } else if (e.keyCode == 38) { // up
//         current_focus--;
//         add_active(x);
//     } else if (e.keyCode == 13) {  // enter
//         e.preventDefault();
//         if(current_focus > -1) {
//             if (x) x[current_focus].click();
//         }
//     }
// });
//
//
// function add_active(x) {
//     if (!x) return false;
//     remove_active(x);
//     if (current_focus >= x.length) {
//         current_focus = 0;
//     }
//     if (current_focus < 0) {
//         current_focus = (x.length -1);
//     }
//     x[current_focus].classList.add("auto_complete_active");
// }
//
//
// function remove_active(x) {
//     for (let i = 0; i < x.length; i++) {
//         x[i].classList.remove("auto_complete_active");
//     }
// }
//
//
// document.addEventListener("click", function (e) {
//     close_lists(e.target);
//     console.log("e.target: ", e.target);
// });
