window.addEventListener("DOMContentLoaded", (event) => {
    var rect = new Object();
    rect.leftTopCorner.X =40;
    rect.leftTopCorner.Y =40;
    rect.RightBottomCorner.X =40;
    rect.RightBottomCorner.Y =40;

    
});

function GetAllCorner(rectangle)
{
    console.log("Левый верхний угол : X: " + rectangle.leftTopCorner.X +
     "Y:" + rectangle.leftTopCorner.Y);
    console.log("Правый верхний угол : X: " + rectangle.RightBottomCorner.X + 
    "Y:" + rectangle.leftTopCorner.Y);
    console.log("Правый нижний угол : X: " + rectangle.RightBottomCorner.X + 
    "Y:" + rectangle.RightBottomCorner.Y);
    console.log("Левый верхний угол : X: " + rectangle.leftTopCorner.X + 
    "Y:" + rectangle.RightBottomCorner.Y);
}

function Get