window.onload = function() {
function lopata(){
    var child = document.getElementById('canvas-font'),
        parant = document.querySelector('.page_canvas'),
        Wchild = child.offsetWidth,
        Hchild = child.offsetHeight;
    parant.style.width = Wchild * 1.5 + 'px';
    parant.style.height = Hchild * 1.5 + 'px';


}
lopata();
var canvas = document.getElementById('canvas-font'),
     ctx = canvas.getContext('2d'),
     check = false,
     img = new Image(),
     operation = [],
     tools = [],
     size = [],
     mX = document.getElementById('mouseX'),
     mY = document.getElementById('mouseY'),
     mouseX,
     mouseY,
     pensil= document.getElementById('pensil'),
     erasel= document.getElementById('erasel'),
    fileimg = document.getElementById('header_option-file'),
    moveimg = document.getElementById('page_tools-tools-move'),
    big = document.getElementById('big'),
    middle = document.getElementById('middle'),
    small = document.getElementById('small'),
    imageImOnW,
    imageImOnH,
    sizeE,
    canvasWidth = document.getElementById('header_size-width'),
    canvasHeight = document.getElementById('header_size-height'),
    imgw = document.getElementById('page_tools-propertis-width'),
    imgh = document.getElementById('page_tools-propertis-height'),
    invertimg = document.getElementById('page_tools-propertis-invert'),
    color = document.getElementById('color');
    size.push(big);
    size.push(middle);
    size.push(small);
    tools.push(pensil);
    tools.push(erasel);

    canvasWidth.onchange = function(){
        canvas.width = canvasWidth.value
        canvas.width = canvasWidth.value
    }

    canvasHeight.onchange = function(){
        canvas.height = canvasHeight.value
        canvas.height = canvasHeight.value
    }

    small.onclick = function(){
        ctx.lineWidth = 1;
        sizeE = 1;
    }
    middle.onclick = function(){
        ctx.lineWidth = 5;
        sizeE = 5;
    }
    big.onclick = function(){
        ctx.lineWidth = 10;
        sizeE = 10;
    }
    handl(tools,'t-active');
    handl(size,'t-active');
    function handl(arr ,classNam){
        for(var i = 0; i<arr.length; i++) {
            arr[i].onmousedown = handeler(arr[i], classNam, arr);
        }
         function handeler(e,classNam, arr){
         return function() {
             for (var a = 0; a < arr.length; a++) {
                 arr[a].removeAttribute('class');
             }
             e.setAttribute('class', classNam)
         }
         }
    }

    color.onchange = function(){
            ctx.strokeStyle =  color.value;
    }
    fileimg.addEventListener('change', function(){
        var file = fileimg.files[0],
            reader = new FileReader();
        reader.onload = function(e){
            var result = e.target.result;
            img.onload = function(){
                canvas.width = this.width;;
                canvas.height = this.height;
                ctx.drawImage(img, 0,0, this.width,this.height);
                imageImOnW = this.width;
                imageImOnH = this.height;
                imgw.value = this.width;
                imgh.value = this.height;
                canvasWidth.value = this.width;
               canvasHeight.value = this.height;


            }
            img.src = result;
        }
        reader.onerror = function(e){
            console.log(e.target.error.code)
        }
        reader.readAsDataURL(file);

    },false)
        pensil.onclick = function () {
            canvas.onmousedown = function () {
                check = true;
                ctx.beginPath();
                canvas.onmousemove = function (e) {
                    mouseX = e.offsetX;
                    mouseY = e.offsetY;
                    mX.innerHTML = mouseX;
                    mY.innerHTML = mouseY;
                    if (check) {
                        ctx.lineTo(mouseX, mouseY);
                        ctx.stroke();
                    }
                }
            }
            canvas.onmouseup = function(){
                check = false;
            }
        }
        erasel.onclick = function () {
            canvas.onmousedown = function () {
                check = true;
                ctx.beginPath();
                canvas.onmousemove = function (e) {
                    mouseX = e.offsetX;
                    mouseY = e.offsetY;
                    if (check) {
                        ctx.clearRect(mouseX, mouseY, sizeE, sizeE)
                    }
                }
            }
            canvas.onmouseup = function(){
                check = false;
            }

        }
    moveimg.onclick = function(){
        canvas.onmousedown = function() {
            canvas.onmousemove = function (e) {
                mouseX = e.offsetX  - imgw.value / 2;
                mouseY = e.offsetY - imgh.value / 2 ;
                canvas.width = canvas.width;
                ctx.drawImage(img, mouseX,mouseY,imgw.value,imgh.value);
            }
        }
        canvas.onmouseup = function(){
            canvas.onmousemove = null;
        }
        }

    imgw.addEventListener('change', imgWH, false)
    imgh.addEventListener('change', imgWH, false)

    function imgWH(){
        canvas.width = canvas.width;
        ctx.drawImage(img, 0,0, imgw.value,imgh.value);
    }
    invertimg.onclick = function(){
       var imgData =  ctx.getImageData(0,0,imgw.value,imgh.value);
        for(var i =0; i < imgData.data.length; i+=4) {
            for(var j = i; j< i+3; j++){
                imgData.data[j] = 255 - imgData.data[j];
            }
        }
        ctx.putImageData(imgData, 0, 0)
        }










}
