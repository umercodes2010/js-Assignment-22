

// QUESTION NO 1 //

function showBox() {

    document.getElementById("title").innerHTML = "H'i Areeb"
    document.getElementById("msg").innerHTML = "Hi My name is areeb i'am beginner frontend web developer!"
    document.getElementById("box").className = "box";

};

// QUESTION NO 2 //

function imgHover() {

    document.getElementById("img").className = "img";

};

function imgOut() {

    document.getElementById("img").className = "";

};


// QUESTION NO 3 //

function highNotices() {

    let someNotices = document.getElementById("notice-box");
    let notices = someNotices.getElementsByTagName("p");

    for (let i = 0; i < notices.length; i++) {

        notices[0].innerHTML = "School will remain closed on Friday.";
        notices[1].innerHTML = "Submit your assignment before Monday.";
        notices[2].innerHTML = "Annual sports day will be held next week.";
        notices[3].innerHTML = "Students must bring their ID cards.";
        notices[4].innerHTML = "Parent-teacher meeting is scheduled for Saturday.";
        notices[i].className = "paragraphs";

    }

};

// QUESTION NO 4 //

function highRules() {

    let studentRules = document.getElementById("student-rules");
    let highlightRules = studentRules.getElementsByTagName("p");

    for (let i = 0; i < highlightRules.length; i++) {

        highlightRules[0].innerHTML = "Rule 1";
        highlightRules[1].innerHTML = "Rule 2";
        highlightRules[2].innerHTML = "Rule 3";
        highlightRules[i].className = "paragraph";

    }

};

// QUESTION NO 5 //

function highCourse() {

    let courseRules = document.getElementById("course-information");
    let highlightCourse = courseRules.getElementsByTagName("p");

    for (let i = 0; i < highlightCourse.length; i++) {

        highlightCourse[0].innerHTML = "HTML";
        highlightCourse[1].innerHTML = "CSS";
        highlightCourse[2].innerHTML = "JAVASCRIPT";
        highlightCourse[i].className = "paragraph";

    }

};