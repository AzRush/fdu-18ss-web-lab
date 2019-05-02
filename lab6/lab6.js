var figure,figcaption,regularExpression;
figure = document.querySelector("#featured img");
figcaption  = document.querySelector("#featured figcaption");
document.getElementById("thumbnails").addEventListener
("click",
    //changePath
    function (e)
    {
                regularExpression = /[0-9]+\.jpg$/;
                figure.src =  "images/medium/" + regularExpression.exec(e.target.src).toString();
                figure.title = e.target.title;
                figcaption.innerHTML  = e.target.title.toString();

    }
);
    //changeStyle
figcaption.style.transition = "opacity , 1s";
document.getElementById("featured").onmouseover = function ()
{
    figcaption.style.opacity = 0.8;
};
document.getElementById("featured").onmouseout = function ()
{
            figcaption.style.opacity = 0;
}




