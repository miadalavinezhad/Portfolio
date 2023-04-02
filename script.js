// Change HTML logo color
const html_logo = document.getElementById("html");
html_logo.onmouseenter = event => {
    event.target.src = "img/html-5.png";
};
html_logo.onmouseleave = event => {
    event.target.src = "img/htmlBW.png";
};

// Change CSS logo color
const css_logo = document.getElementById("css");
css_logo.onmouseenter = event => {
    event.target.src = "img/css-3.png";
};
css_logo.onmouseleave = event => {
    event.target.src = "img/css-3BW.png";
};

// Change git logo color
const git_logo = document.getElementById("git");
git_logo.onmouseenter = event => {
    event.target.src = "img/git.png";
};
git_logo.onmouseleave = event => {
    event.target.src = "img/gitBW.png";
};

// Change python logo color
const python_logo = document.getElementById("python");
python_logo.onmouseenter = event => {
    event.target.src = "img/python.png";
};
python_logo.onmouseleave = event => {
    event.target.src = "img/pythonBW.png";
};