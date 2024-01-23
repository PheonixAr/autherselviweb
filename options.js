const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

// const optionMenu2 = document.querySelector(".select-menu2"),
//       selectBtn2 = optionMenu.querySelector(".select-btn2"),
//       options2 = optionMenu.querySelectorAll(".option2"),
//       sBtn_text2 = optionMenu.querySelector(".sBtn-text2");

// selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

// options2.forEach(option2 =>{
//     option2.addEventListener("click", ()=>{
//         let selectedOption2 = option2.querySelector(".option-text2").innerText;
//         sBtn_text2.innerText = selectedOption2;
//         optionMenu2.classList.remove("active");
//     });
// });


// dropdown button

function show_list() {
    var courses = document.getElementById("courses_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown_button')) {
        document.getElementById('courses_id')
            .style.display = "none";
    }
}    
