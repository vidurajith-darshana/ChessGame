
var lastClickedImg;
var lastClickedImgId;
var lastClickedDiv;
var isClicked;

var id=[["#div-opposite-rook-1","#div-opposite-knight-1","#div-opposite-bishop-1","#div-opposite-king",
    "#div-opposite-queen","#div-opposite-bishop-2","#div-opposite-knight-2","#div-opposite-rook-2"],
    ["#div-opposite-porn-1","#div-opposite-porn-2","#div-opposite-porn-3","#div-opposite-porn-4",
        "#div-opposite-porn-5","#div-opposite-porn-6","#div-opposite-porn-7","#div-opposite-porn-8"],
    ["#div-opposite-line1-1","#div-opposite-line1-2","#div-opposite-line1-3","#div-opposite-line1-4",
        "#div-opposite-line1-5","#div-opposite-line1-6","#div-opposite-line1-7","#div-opposite-line1-8"],
    ["#div-opposite-line2-1","#div-opposite-line2-2","#div-opposite-line2-3","#div-opposite-line2-4",
        "#div-opposite-line2-5","#div-opposite-line2-6","#div-opposite-line2-7","#div-opposite-line2-8"],
    ["#div-myside-line2-1","#div-myside-line2-2","#div-myside-line2-3","#div-myside-line2-4","#div-myside-line2-5",
        "#div-myside-line2-6","#div-myside-line2-7","#div-myside-line2-8"],["#div-myside-line1-1",
        "#div-myside-line1-2","#div-myside-line1-3","#div-myside-line1-4","#div-myside-line1-5",
        "#div-myside-line1-6","#div-myside-line1-7","#div-myside-line1-8"],["#div-myside-porn-1",
        "#div-myside-porn-2","#div-myside-porn-3","#div-myside-porn-4","#div-myside-porn-5",
        "#div-myside-porn-6","#div-myside-porn-7","#div-myside-porn-8"],["#div-myside-rook-1","#div-myside-knight-1",
        "#div-myside-bishop-1","#div-myside-king","#div-myside-queen","#div-myside-bishop-2","#div-myside-knight-2",
        "#div-myside-rook-2"]];

var points=[[0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7]];

points[0][0]=1;
points[0][1]=1;
points[0][2]=1;
points[0][3]=1;
points[0][4]=1;
points[0][5]=1;
points[0][6]=1;
points[0][7]=1;

points[1][0]=1;
points[1][1]=1;
points[1][2]=1;
points[1][3]=1;
points[1][4]=1;
points[1][5]=1;
points[1][6]=1;
points[1][7]=1;

points[2][0]=0;
points[2][1]=1;
points[2][2]=0;
points[2][3]=0;
points[2][4]=0;
points[2][5]=0;
points[2][6]=0;
points[2][7]=0;

points[3][0]=0;
points[3][1]=0;
points[3][2]=0;
points[3][3]=0;
points[3][4]=0;
points[3][5]=0;
points[3][6]=0;
points[3][7]=0;

points[4][0]=0;
points[4][1]=0;
points[4][2]=0;
points[4][3]=0;
points[4][4]=0;
points[4][5]=0;
points[4][6]=0;
points[4][7]=0;

points[5][0]=0;
points[5][1]=0;
points[5][2]=0;
points[5][3]=0;
points[5][4]=0;
points[5][5]=0;
points[5][6]=0;
points[5][7]=0;

points[6][0]=1;
points[6][1]=1;
points[6][2]=1;
points[6][3]=1;
points[6][4]=1;
points[6][5]=1;
points[6][6]=1;
points[6][7]=1;

points[7][0]=1;
points[7][1]=1;
points[7][2]=1;
points[7][3]=1;
points[7][4]=1;
points[7][5]=1;
points[7][6]=1;
points[7][7]=1;

var icons=[id[0][0],id[0][1],id[0][2],id[0][3],id[3][4],id[0][5],id[0][6],id[0][7],
            id[1][0],id[1][1],id[1][2],id[1][3],id[1][4],id[1][5],id[1][6],id[1][7],
            id[6][0],id[2][1],id[6][2],id[6][3],id[6][4],id[6][5],id[6][6],id[6][7],
            id[7][0],id[7][1],id[7][2],id[7][3],id[7][4],id[7][5],id[7][6],id[7][7]];


var imgID=["#img-opposite-rook-1","#img-opposite-knight-1","#img-opposite-bishop-1","#img-opposite-king","#img-opposite-queen",
    "#img-opposite-bishop-2","#img-opposite-knight-2","#img-opposite-rook-2","#img-opposite-porn-1","#img-opposite-porn-2",
    "#img-opposite-porn-3","#img-opposite-porn-4","#img-opposite-porn-5","#img-opposite-porn-6","#img-opposite-porn-7","#img-opposite-porn-8",
    "#img-myside-porn-1","#img-myside-porn-2","#img-myside-porn-3","#img-myside-porn-4","#img-myside-porn-5","#img-myside-porn-6",
    "#img-myside-porn-7","#img-myside-porn-8","#img-myside-rook-1","#img-myside-knight-1","#img-myside-bihsop-1","#img-myside-king", "#img-myside-queen",
    "#img-myside-bishop-2","#img-myside-knight-2","#img-myside-rook-2"];

//////////////////////////////////////////For Rook Moments////////////////////////////////////////////////////////////////////////////






$("#div2").find("#img-myside-rook-1").on("click",function () {

    mysiderook1();


})
function mysiderook1() {
    rookMovements(24,0,16)
    lastClickedImg=icons[24];
    lastClickedImgId=event.target.id;
}

$("#div2").find("#img-myside-rook-2").on("click",function () {

    mysiderook2()

})
function mysiderook2() {
    rookMovements(31,0,16)
    lastClickedImg=icons[31];
    lastClickedImgId=event.target.id;

}

$("#div2").find("#img-opposite-rook-2").on("click",function () {

    oppositerook2();

})

function oppositerook2() {
    rookMovements(7,16,32)
    lastClickedImg=icons[7];
    lastClickedImgId=event.target.id;
}

$("#div2").find("#img-opposite-rook-1").on("click",function () {

    oppositerook1()
    
})
function oppositerook1() {
    rookMovements(0,16,32)
    lastClickedImg=icons[0];
    lastClickedImgId=event.target.id;
}


function rookMovements(p,q,r){

    setChessBoardAgain();

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }

    var count=0;

    if(x<1 && x>6 && y>0 && y<7){

        if(x===0){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }

        if(x===7){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
    }

    if(x>0 && x<7 && y>0 && y<7){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }
    }

    if(x<1 && y===0){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }

    if(x<1 && y===7){

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }
    if(x>6 && y===7){

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }

    if(x>6 && y===0){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }
    }
    if(x>0 && x<7){

        if(y===7){
            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
        if(y===0){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
    }

    if(count>0){
        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
    }else{
        $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
    }


}

////////////////////// For pawn moments////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#div2").find("#img-opposite-porn-1").click(function () {

    oppositeporn1();

})
function  oppositeporn1() {
    setChessBoardAgain();
    lastClickedImg=icons[8];
    lastClickedImgId=event.target.id;


    disableOtherEvents();


    var position=event.target.id;
    if(icons[8].substring(1)===position.replace("img","div")){
        if(points[2][0]===0){
            $(id[1][0]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][0]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][0]===0){
                $(id[3][0]).css("background-image", "url('image/greenwood.jpg')")
            }
            for(var i=16;i<32;i++){

                if(points[2][1]===1 && id[2][1]===icons[i]){
                    $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            for(var i=16;i<32;i++){

                if(points[2][1]===1 && id[2][1]===icons[i]){
                    $(id[1][0]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
                    break;
                }else{
                    $(id[1][0]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(8)
    }
    oppositePawnLastStep(8)
}

$("#div2").find("#img-opposite-porn-2").on("click",function () {

    oppositeporn2()
})

function oppositeporn2() {
    lastClickedImg=icons[9];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[9].substring(1)===position.replace("img","div")){

        if(points[2][1]===0){
            $(id[1][1]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][1]===0){
                $(id[3][1]).css("background-image", "url('image/greenwood.jpg')")

            }
            for(var i=16;i<32;i++){

                if(points[2][0]===1 && id[2][0]===icons[i]){

                    $(id[2][0]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][2]===1 && id[2][2]===icons[i]){
                    $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{

            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][2]===1 && id[2][2]===icons[i]) {
                    $(id[1][1]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][0] === 1 && id[2][0] === icons[i]) {
                        $(id[2][0]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][0]===1 && id[2][0]===icons[i]){
                    $(id[1][1]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][0]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][2] === 1 && id[2][2] === icons[i]) {
                        $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][1]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(9)
    }
    oppositePawnLastStep(9)
}

$("#div2").find("#img-opposite-porn-3").on("click",function () {

    oppositeporn3()
})
function oppositeporn3() {
    lastClickedImg=icons[10];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[10].substring(1)===position.replace("img","div")){
        if(points[2][2]===0){
            $(id[1][2]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][2]===0){
                $(id[3][2]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][3]===1 && id[2][3]===icons[i]){
                    $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][1]===1 && id[2][1]===icons[i]){
                    $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][3]===1 && id[2][3]===icons[i]) {
                    $(id[1][2]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][1] === 1 && id[2][1] === icons[i]) {
                        $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][1]===1 && id[2][1]===icons[i]){
                    $(id[1][2]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][1]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][3] === 1 && id[2][3] === icons[i]) {
                        $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][2]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(10)
    }
    oppositePawnLastStep(10)
}

$("#div2").find("#img-opposite-porn-4").on("click",function () {

    oppositeporn4()
})
function oppositeporn4() {
    lastClickedImg=icons[11];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[11].substring(1)===position.replace("img","div")){
        if(points[2][3]===0){
            $(id[1][3]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][3]===0){
                $(id[3][3]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][4]===1 && id[2][4]===icons[i]){
                    $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][2]===1 && id[2][2]===icons[i]){
                    $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][4]===1 && id[2][4]===icons[i]) {
                    $(id[1][3]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][2] === 1 && id[2][2] === icons[i]) {
                        $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][2]===1 && id[2][2]===icons[i]){
                    $(id[1][3]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][2]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][4] === 1 && id[2][4] === icons[i]) {
                        $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][3]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(11)
    }
    oppositePawnLastStep(11)
}

$("#div2").find("#img-opposite-porn-5").on("click",function () {

    oppositeporn5()
})
function  oppositeporn5() {
    lastClickedImg=icons[12];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[12].substring(1)===position.replace("img","div")){
        if(points[2][4]===0){
            $(id[1][4]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][4]===0){
                $(id[3][4]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][5]===1 && id[2][5]===icons[i]){
                    $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][3]===1 && id[2][3]===icons[i]){
                    $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][5]===1 && id[2][5]===icons[i]) {
                    $(id[1][4]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][3] === 1 && id[2][3] === icons[i]) {
                        $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][3]===1 && id[2][3]===icons[i]){
                    $(id[1][4]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][3]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][5] === 1 && id[2][5] === icons[i]) {
                        $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][4]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(12)
    }
    oppositePawnLastStep(12)
}
$("#div2").find("#img-opposite-porn-6").on("click",function () {

    oppositeporn6()
})
function oppositeporn6() {
    lastClickedImg=icons[13];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[13].substring(1)===position.replace("img","div")){
        if(points[2][5]===0){
            $(id[1][5]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][5]===0){
                $(id[3][5]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][4]===1 && id[2][4]===icons[i]){
                    $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][6]===1 && id[2][6]===icons[i]){
                    $(id[2][6]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][6]===1 && id[2][6]===icons[i]) {
                    $(id[1][5]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][6]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][4] === 1 && id[2][4] === icons[i]) {
                        $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][4]===1 && id[2][4]===icons[i]){
                    $(id[1][5]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][4]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][6] === 1 && id[2][6] === icons[i]) {
                        $(id[2][6]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][5]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(13)
    }
    oppositePawnLastStep(13)
}

$("#div2").find("#img-opposite-porn-7").on("click",function () {

    oppositeporn7()
})
function oppositeporn7() {
    lastClickedImg=icons[14];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[14].substring(1)===position.replace("img","div")){
        if(points[2][6]===0){
            $(id[1][6]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][6]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][6]===0){
                $(id[3][6]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][5]===1 && id[2][5]===icons[i]){
                    $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[2][7]===1 && id[2][7]===icons[i]){
                    $(id[2][7]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=16;i<32;i++){

                if(points[2][7]===1 && id[2][7]===icons[i]) {
                    $(id[1][6]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][7]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][5] === 1 && id[2][5] === icons[i]) {
                        $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[2][5]===1 && id[2][5]===icons[i]){
                    $(id[1][6]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[2][7] === 1 && id[2][7] === icons[i]) {
                        $(id[2][7]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[1][6]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(14)
    }
    oppositePawnLastStep(14)
}


$("#div2").find("#img-opposite-porn-8").on("click",function () {

    oppositeporn8()
})
function oppositeporn8() {
    lastClickedImg=icons[15];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[15].substring(1)===position.replace("img","div")){
        if(points[2][7]===0){
            $(id[1][7]).css("background-image", "url('image/bluewood.jpg')")
            $(id[2][7]).css("background-image", "url('image/greenwood.jpg')")
            if(points[3][7]===0){
                $(id[3][7]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=16;i<32;i++){

                if(points[2][6]===1 && id[2][6]===icons[i]){
                    $(id[2][6]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            for(var i=16;i<32;i++){

                if(points[2][5]===1 && id[2][5]===icons[i]){
                    $(id[1][7]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[2][5]).css("background-image", "url('image/greenwood.jpg')")
                    break;
                }else{
                    $(id[1][7]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        oppositeElse(15)
    }
    oppositePawnLastStep(15)
}


$("#div2").find("#img-myside-porn-1").on("click",function () {

    mysideporn1();
})
function mysideporn1(){
    lastClickedImg=icons[16];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[16].substring(1)===position.replace("img","div")){
        if(points[5][0]===0){
            $(id[6][0]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][0]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][0]===0){
                $(id[4][0]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][1]===1 && id[5][1]===icons[i]){
                    $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            for(var i=0;i<16;i++){

                if(points[5][1]===1 && id[5][1]===icons[i]){
                    $(id[6][0]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
                    break;
                }else{
                    $(id[6][0]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(16);
    }
    mysidePawnLastStep(16);
}

$("#div2").find("#img-myside-porn-2").on("click",function () {

    mysideporn2()
})
function mysideporn2(){
    lastClickedImg=icons[17];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[17].substring(1)===position.replace("img","div")){
        if(points[5][1]===0){
            $(id[6][1]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][1]===0){
                $(id[4][1]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][0]===1 && id[5][0]===icons[i]){
                    $(id[5][0]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][2]===1 && id[5][2]===icons[i]){
                    $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=0;i<16;i++){

                if(points[5][0]===1 && id[5][0]===icons[i]) {
                    $(id[6][1]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][0]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][2] === 1 && id[5][2] === icons[i]) {
                        $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[5][2]===1 && id[5][2]===icons[i]){
                    $(id[6][1]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][0] === 1 && id[5][0] === icons[i]) {
                        $(id[5][0]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[6][1]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(17)
    }
    mysidePawnLastStep(17)
}

$("#div2").find("#img-myside-porn-3").on("click",function () {

    mysideporn3()
})
function mysideporn3(){
    lastClickedImg=icons[18];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[18].substring(1)===position.replace("img","div")){
        if(points[5][2]===0){
            $(id[6][2]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][2]===0){
                $(id[4][2]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][1]===1 && id[5][1]===icons[i]){
                    $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][3]===1 && id[5][3]===icons[i]){
                    $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=0;i<16;i++){

                if(points[5][1]===1 && id[5][1]===icons[i]) {
                    $(id[6][2]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][3] === 1 && id[5][3] === icons[i]) {
                        $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[5][3]===1 && id[5][3]===icons[i]){
                    $(id[6][2]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][1] === 1 && id[5][1] === icons[i]) {
                        $(id[5][1]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[6][2]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(18)
    }
    mysidePawnLastStep(18)
}

$("#div2").find("#img-myside-porn-4").on("click",function () {

    mysideporn4()
})
function mysideporn4(){
    lastClickedImg=icons[19];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[19].substring(1)===position.replace("img","div")){
        if(points[5][3]===0){
            $(id[6][3]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][3]===0){
                $(id[4][3]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][2]===1 && id[5][2]===icons[i]){
                    $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][4]===1 && id[5][4]===icons[i]){
                    $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=0;i<16;i++){

                if(points[5][2]===1 && id[5][2]===icons[i]) {
                    $(id[6][3]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][4] === 1 && id[5][4] === icons[i]) {
                        $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[5][4]===1 && id[5][4]===icons[i]){
                    $(id[6][3]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][2] === 1 && id[5][2] === icons[i]) {
                        $(id[5][2]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[6][3]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(19)
    }
    mysidePawnLastStep(19)
}

$("#div2").find("#img-myside-porn-5").on("click",function () {

    mysideporn5();
})
function mysideporn5() {
    lastClickedImg=icons[20];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[20].substring(1)===position.replace("img","div")){
        if(points[5][4]===0){
            $(id[6][4]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][4]===0){
                $(id[4][4]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][3]===1 && id[5][3]===icons[i]){
                    $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][5]===1 && id[5][5]===icons[i]){
                    $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=0;i<16;i++){

                if(points[5][3]===1 && id[5][3]===icons[i]) {
                    $(id[6][4]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][5] === 1 && id[5][5] === icons[i]) {
                        $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[5][5]===1 && id[5][5]===icons[i]){
                    $(id[6][4]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][3] === 1 && id[5][3] === icons[i]) {
                        $(id[5][3]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[6][4]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(20)
    }
    mysidePawnLastStep(20)
}

$("#div2").find("#img-myside-porn-6").on("click",function () {

    mysideporn6()
})
function mysideporn6(){
    lastClickedImg=icons[21];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[21].substring(1)===position.replace("img","div")){
        if(points[5][5]===0){
            $(id[6][5]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][5]===0){
                $(id[4][5]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][4]===1 && id[5][4]===icons[i]){
                    $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][6]===1 && id[5][6]===icons[i]){
                    $(id[5][6]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            var count=0;

            for(var i=0;i<16;i++){

                if(points[5][4]===1 && id[5][4]===icons[i]) {
                    $(id[6][5]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][6] === 1 && id[5][6] === icons[i]) {
                        $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else if(points[5][6]===1 && id[5][6]===icons[i]){
                    $(id[6][5]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][6]).css("background-image", "url('image/greenwood.jpg')")
                    if (points[5][4] === 1 && id[5][4] === icons[i]) {
                        $(id[5][4]).css("background-image", "url('image/greenwood.jpg')")
                    }
                    count++;
                    if(count===2)break;
                }else{
                    $(id[6][5]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(21)
    }
    mysidePawnLastStep(21)
}

$("#div2").find("#img-myside-porn-7").on("click",function () {

    mysideporn7()
})
function mysideporn7(){
    lastClickedImg=icons[22];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[22].substring(1)===position.replace("img","div")){
        if(points[5][6]===0){
            $(id[6][6]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][6]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][6]===0){
                $(id[4][6]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][5]===1 && id[5][5]===icons[i]){
                    $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                }
                if(points[5][7]===1 && id[5][7]===icons[i]){
                    var count=0;

                    for(var i=0;i<16;i++){

                        if(points[5][5]===1 && id[5][5]===icons[i]) {
                            $(id[6][6]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[5][7] === 1 && id[5][7] === icons[i]) {
                                $(id[5][7]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else if(points[5][7]===1 && id[5][7]===icons[i]){
                            $(id[6][6]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[5][7]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[5][5] === 1 && id[5][5] === icons[i]) {
                                $(id[5][5]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else{
                            $(id[6][6]).css("background-image", "url('image/redwood.jpg')")
                        }
                    }
                }
            }

        }else{
            $(id[6][6]).css("background-image", "url('image/redwood.jpg')")
        }
    }else{
        mysideElse(22)
    }
    mysidePawnLastStep(22)
}

$("#div2").find("#img-myside-porn-8").on("click",function () {

    mysideporn8()
})
function mysideporn8(){
    lastClickedImg=icons[23];
    lastClickedImgId=event.target.id;
    setChessBoardAgain();

    var position=event.target.id;

    if(icons[23].substring(1)===position.replace("img","div")){
        if(points[5][7]===0){
            $(id[6][7]).css("background-image", "url('image/bluewood.jpg')")
            $(id[5][7]).css("background-image", "url('image/greenwood.jpg')")
            if(points[4][7]===0){
                $(id[4][7]).css("background-image", "url('image/greenwood.jpg')")
            }

            for(var i=0;i<16;i++){

                if(points[5][6]===1 && id[5][6]===icons[i]){
                    $(id[5][6]).css("background-image", "url('image/greenwood.jpg')")
                }
            }

        }else{
            for(var i=0;i<16;i++){

                if(points[5][6]===1 && id[5][6]===icons[i]){
                    $(id[6][7]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[5][6]).css("background-image", "url('image/greenwood.jpg')")
                    break;
                }else{
                    $(id[6][7]).css("background-image", "url('image/redwood.jpg')")
                }
            }
        }
    }else{
        mysideElse(23)
    }
    mysidePawnLastStep(23)
}


function oppositePawnLastStep(p){

    for(var x=2;x<7;x++){
        if(icons[p]===id[x][0] ){

            if(points[x+1][0]===0){

                $(id[x][0]).css("background-image", "url('image/bluewood.jpg')")
                $(id[x+1][0]).css("background-image", "url('image/greenwood.jpg')")
                for(var i=16;i<24;i++){

                    if(points[x+1][1]===1 && icons[i]===id[x+1][1]){
                        $(id[x+1][1]).css("background-image", "url('image/greenwood.jpg')")
                    }
                }
            }else{
                for(var i=16;i<24;i++){

                    if(points[x+1][1]===1 && icons[i]===id[x+1][1]){
                        $(id[x][0]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[x+1][1]).css("background-image", "url('image/greenwood.jpg')")
                        break;
                    }else{
                        $(id[x][0]).css("background-image", "url('image/redwood.jpg')")
                    }
                }
            }
        }else if(icons[p]===id[x][7]){
            if(points[x+1][7]===0){

                $(id[x][7]).css("background-image", "url('image/bluewood.jpg')")
                $(id[x+1][7]).css("background-image", "url('image/greenwood.jpg')")
                for(var i=16;i<24;i++){

                    if(points[x+1][6]===1 && icons[i]===id[x+1][6]){
                        $(id[x+1][6]).css("background-image", "url('image/greenwood.jpg')")
                    }
                }
            }else{
                for(var i=16;i<24;i++){

                    if(points[x+1][6]===1 && icons[i]===id[x+1][6]){
                        $(id[x][7]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[x+1][6]).css("background-image", "url('image/greenwood.jpg')")
                        break;
                    }else{
                        $(id[x][7]).css("background-image", "url('image/redwood.jpg')")
                    }
                }
            }
        }
    }
}

function mysidePawnLastStep(p) {

    for(var x=5;x>0;x--){
        if(icons[p]===id[x][0] ){

            if(points[x-1][0]===0){

                $(id[x][0]).css("background-image", "url('image/bluewood.jpg')")
                $(id[x-1][0]).css("background-image", "url('image/greenwood.jpg')")
                for(var i=0;i<16;i++){

                    if(points[x-1][1]===1 && icons[i]===id[x-1][1]){
                        $(id[x-1][1]).css("background-image", "url('image/greenwood.jpg')")
                    }
                }
            }else{
                for(var i=0;i<16;i++){

                    if(points[x-1][1]===1 && icons[i]===id[x-1][1]){
                        $(id[x][0]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[x-1][1]).css("background-image", "url('image/greenwood.jpg')")
                        break;
                    }else{
                        $(id[x][0]).css("background-image", "url('image/redwood.jpg')")
                    }
                }
            }
        }else if(icons[p]===id[x][7]){
            if(points[x-1][7]===0){

                $(id[x][7]).css("background-image", "url('image/bluewood.jpg')")
                $(id[x-1][7]).css("background-image", "url('image/greenwood.jpg')")
                for(var i=0;i<16;i++){

                    if(points[x-1][6]===1 && icons[i]===id[x-1][6]){
                        $(id[x-1][6]).css("background-image", "url('image/greenwood.jpg')")
                    }
                }
            }else{
                for(var i=0;i<16;i++){

                    if(points[x-1][6]===1 && icons[i]===id[x-1][6]){
                        $(id[x][7]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[x-1][6]).css("background-image", "url('image/greenwood.jpg')")
                        break;
                    }else{
                        $(id[x][7]).css("background-image", "url('image/redwood.jpg')")
                    }
                }
            }
        }
    }
}

function oppositeElse(p) {

    outer: for(var x=2;x<7;x++){
        for(var y=1;y<7;y++){
            if(icons[p]===id[x][y]){

                if(points[x+1][y]===0){
                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y]).css("background-image", "url('image/greenwood.jpg')")

                    for(var i=16;i<24;i++){
                        if(points[x+1][y-1]===1 && id[x+1][y-1]===icons[i]){
                            $(id[x+1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                        }
                        if(points[x+1][y+1]===1 && id[x+1][y+1]===icons[i] ){
                            $(id[x+1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                        }
                    }
                    break outer;

                }else{
                    var count=0;

                    for(var i=16;i<32;i++){

                        if(points[x+1][y-1]===1 && id[x+1][y-1]===icons[i]) {
                            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[x+1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[x+1][y+1] === 1 && id[x+1][y+1] === icons[i]) {
                                $(id[x+1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else if(points[x+1][y+1]===1 && id[x+1][y+1]===icons[i]){
                            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[x+1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[x+1][y-1] === 1 && id[x+1][y-1] === icons[i]) {
                                $(id[x+1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else{
                            if(count===1){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            }else{
                                $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
                            }
                        }
                    }
                }
            }
        }
    }
}

function mysideElse(p) {

    outer: for(var x=5;x>0;x--){
        for(var y=1;y<7;y++){
            if(icons[p]===id[x][y]){

                if(points[x-1][y]===0){
                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y]).css("background-image", "url('image/greenwood.jpg')")

                    for(var i=0;i<16;i++){
                        if(points[x-1][y-1]===1 && id[x-1][y-1]===icons[i]){
                            $(id[x-1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                        }
                        if(points[x-1][y+1]===1 && id[x-1][y+1]===icons[i] ){
                            $(id[x-1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                        }
                    }
                    break outer;

                }else{
                    var count=0;

                    for(var i=0;i<16;i++){

                        if(points[x-1][y+1]===1 && id[x-1][y+1]===icons[i]) {
                            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[x-1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[x-1][y-1] === 1 && id[x-1][y-1] === icons[i]) {
                                $(id[x-1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else if(points[x-1][y-1]===1 && id[x-1][y-1]===icons[i]){
                            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            $(id[x-1][y-1]).css("background-image", "url('image/greenwood.jpg')")
                            if (points[x-1][y+1] === 1 && id[x-1][y+1] === icons[i]) {
                                $(id[x-1][y+1]).css("background-image", "url('image/greenwood.jpg')")
                            }
                            count++;
                            if(count===2)break;
                        }else{
                            if(count===1){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                            }else{
                                $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
                            }
                        }
                    }
                }
            }
        }
    }
}






//////////////////////////////////////////////////////for Knight Moments////////////////////////////////////////////////////////////




$("#div2").find("#img-opposite-knight-1").on("click",function () {

    oppositeknight1();

})
function oppositeknight1() {
    knightMoments(1,16,32);
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[1];
}

$("#div2").find("#img-opposite-knight-2").on("click",function () {

    oppositeknight2();


})
function oppositeknight2() {
    knightMoments(6,16,32);
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[6];
}

$("#div2").find("#img-myside-knight-1").on("click",function () {

    mysideknight1();

})
function mysidekinght1() {
    knightMoments(25,0,16);
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[25];
}

$("#div2").find("#img-myside-knight-2").on("click",function () {

    mysideknight2();


})
function mysideknight2() {
    knightMoments(30,0,16);
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[30];
}


function knightMoments(p,q,r) {

    setChessBoardAgain();

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }

    var count=0;

    if((x>=2 && x<=5) && y>0 && y<7){

        if(points[x+2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;

        }
        if(points[x+2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(points[x-2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(points[x-2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((y>=2 && y<=5) && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((y>=2 && y<=5) && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((y>=2 && y<=5) && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((y>=2 && y<=5) && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(y<2 && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(y<2 && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(y>5 && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(y>5 && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }

        //------------------------------------------------------------------------------------------------------//

        if(y>5 && points[x-1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }

        if(y>5 && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(y<2 && points[x-1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(y<2 && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }

        if(points[x+2][y-1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x+2][y+1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x-2][y+1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x-2][y-1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((y>=2 && y<=5) && points[x-1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((y>=2 && y<=5) && points[x-1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((y>=2 && y<=5) && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((y>=2 && y<=5) && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }

    }else if(x<2 && y>0 && y<7){

        if(points[x+2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;

        }
        if(points[x+2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===1 && (y>=2 && y<=5) && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===1 && (y>=2 && y<=5) && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===1 && (y>=2 && y<=5) && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===1 && (y>=2 && y<=5) && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===0 && (y>=2 && y<=5) && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===0 && (y>=2 && y<=5) && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===0 && (y>=2 && y<=5) && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===0 && (y>=2 && y<=5) && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===1 && (y>=2 && y<=5) && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===1 && (y>=2 && y<=5) && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===1 && (y>=2 && y<=5) && points[x-1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===1 && (y>=2 && y<=5) && points[x-1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x+2][y-1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x+2][y+1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }

    }else if(x>5 && y>0 && y<7){

        if(points[x-2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(points[x-2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===6 && (y>=2 && y<=5) && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===6 && (y>=2 && y<=5) && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===6 && (y>=2 && y<=5) && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===6 && (y>=2 && y<=5) && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===7 && (y>=2 && y<=5) && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===7 && (y>=2 && y<=5) && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x===7 && (y>=2 && y<=5) && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===7 && (y>=2 && y<=5) && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===6 && (y>=2 && y<=5) && points[x+1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===6 && (y>=2 && y<=5) && points[x+1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===6 && (y>=2 && y<=5) && points[x-1][y-2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(x===6 && (y>=2 && y<=5) && points[x-1][y+2]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x-2][y+1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }

        }
        if(points[x-2][y-1]===1){

            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }

    }else{

        if((x>=2 && x<=5) && y===0 && points[x+2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }

        if((x>=2 && x<=5) && y===0 && points[x-2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===7 && points[x+2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===7 && points[x-2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===0 && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }

        if((x>=2 && x<=5) && y===0 && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===7 && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===7 && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if((x>=2 && x<=5) && y===0 && points[x+1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===0 && points[x-1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===7 && points[x+1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===7 && points[x-1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===0 && points[x+2][y+1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===0 && points[x-2][y+1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===7 && points[x+2][y-1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if((x>=2 && x<=5) && y===7 && points[x-2][y-1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }

        if(x<2 && y===0 && points[x+2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && y===0 && x===1 && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && y===0 && x===1 && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && y===0 && x===0 && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && y===0 && x===0 && points[x+1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && y===0 && x===1 && points[x-1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && y===0 && x===1 && points[x+1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && y===0 && points[x+2][y+1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && y===0 && points[x-2][y+1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===6 && y===0 && points[x+1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===6 && y===0 && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===7 && y===0 && points[x-1][y+2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===7 && y===0 && points[x-1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && x===6 && y===0 && points[x-1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && x===6 && y===0 && points[x+1][y+2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y+2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y+2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && y===0 && points[x-2][y+1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y+1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && y===7 && points[x-2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===6 && y===7 && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===6 && y===7 && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===7 && y===7 && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x>5 && x===7 && y===7 && points[x-1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }

        if(x>5 && x===6 && y===7 && points[x-1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x>5 && x===6 && y===7 && points[x+1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }

        if(x>5 && y===7 && points[x-2][y-1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && y===7 && points[x+2][y-1]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && x===1 && y===7 && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && x===1 && y===7 && points[x-1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && x===0 && y===7 && points[x+1][y-2]===0){
            $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
            $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
            count++;
        }
        if(x<2 && x===0 && y===7 && points[x+1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && x===1 && y===7 && points[x-1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x-1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x-1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && x===1 && y===7 && points[x+1][y-2]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+1][y-2]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+1][y-2]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(x<2 && y===7 && points[x+2][y-1]===1){
            for(var i=q;i<r;i++){
                if(icons[i]===id[x+2][y-1]){

                    $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                    $(id[x+2][y-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                    break;

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

}




/////////////////////////////////////////////////For Bishop Moments////////////////////////////////////////////////////////



$("#div2").find("#img-opposite-bishop-1").on("click",function () {

    oppositebishop1();


})
function oppositebishop1() {
    bishopMovements(2,16,32)
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[2];
}

$("#div2").find("#img-opposite-bishop-2").on("click",function () {

    oppositebishop2()


})
function oppositebishop2() {
    bishopMovements(5,16,32)
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[5];
}

$("#div2").find("#img-myside-bishop-1").on("click",function () {

    mysidebishop1();


})
function mysidebishop1() {
    bishopMovements(26,0,16)
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[26];
}

$("#div2").find("#img-myside-bishop-2").on("click",function () {

    mysidebishop2()


})
function mysidebishop2() {
    bishopMovements(29,0,16)
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[29];
}


function bishopMovements(p,q,r) {

    setChessBoardAgain();

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }
    var count=0;

    if(x<1 && y>0 && y<7) {

        if (points[1][y+1]===0 || points[1][y+1]===1) {

            var z=y;

            outer:for (var i = 1; i < 8; i++) {
                for (var j = z; j < 8; j++) {
                    if (points[i][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[1][y-1]===0 || points[1][y-1]===1) {

            var z=y;

            outer:for (var i = 1; i < 8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>6 && y>0 && y<7) {

        if (points[6][y+1]===0 || points[6][y+1]===1) {

            var z=y;

            outer:for (var i = 6; i >0; i--) {
                for (var j = z; j < 8; j++) {
                    if (points[i][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[6][y-1]===0 || points[6][y-1]===1) {

            var z=y;

            outer:for (var i = 6; i > 0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>6 && y===0) {

        if (points[6][y+1]===0 || points[6][y+1]===1) {

            var z=y;

            outer:for (var i = 6; i >0; i--) {
                for (var j = z; j < 8; j++) {

                    if (points[i][j+1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x<1 && y===0) {

        if (points[1][y+1]===0 || points[1][y+1]===1) {

            var z=y;

            outer:for (var i = 1; i <8; i++) {
                for (var j = z; j < 8; j++) {

                    if (points[i][j+1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x<1 && y===7) {

        if (points[1][y-1]===0 || points[1][y-1]===1) {

            var z=y;

            outer:for (var i = 1; i <8; i++) {
                for (var j = z; j >=0; j--) {

                    if (points[i][j-1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x>6 && y===7) {

        if (points[6][y-1]===0 || points[6][y-1]===1) {

            var z=y;

            outer:for (var i = 6; i >=0; i--) {
                for (var j = z; j >0; j--) {

                    if (points[i][j-1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x>0 && x<7 && y===0){

        if (points[x+1][y+1]===0 || points[x+1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i < 8; i++) {
                for (var j = z; j < 8; j++) {
                    if (points[i+1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i+1][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i+1][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y+1]===0 || points[x-1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j <8; j++) {
                    if (points[i-1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i-1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }

    }

    if(x>0 && x<7 && y===7){

        if (points[x+1][y-1]===0 || points[x+1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i < 8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i+1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i+1][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i+1][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y-1]===0 || points[x-1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i-1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i-1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>0 && x<7 && y>0 && y<7){

        if (points[x-1][y-1]===0 || points[x-1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i-1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i-1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y+1]===0 || points[x-1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j <8; j++) {
                    if (points[i-1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i-1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x+1][y+1]===0 || points[x+1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i <8; i++) {
                for (var j = z; j <8; j++) {
                    if (points[i+1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i+1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i+1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if (points[x+1][y-1]===0 || points[x+1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i <8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i+1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i+1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i+1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

}



////////////////////////////////////////////////For King Movements///////////////////////////////////////////////////////////



$("#div2").find("#img-myside-king").on("click",function () {

    lastClickedImg=icons[3];
    lastClickedImgId=event.target.id;

})

$("#div2").find("#img-opposite-king").on("click",function () {

    kingMovements(3,16,32,27)
    lastClickedImgId=event.target.id;
    lastClickedImg=icons[27];
})

function kingMovements(p,q,r,s) {

    setChessBoardAgain();

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }

    var count=0;

    if(x<1 && x>6 && y>0 && y<7){

        if(x===0){
            if(points[x+1][y]===0){
                if(points[x+2][y]!==icons[s] && points[x+2][y+1]!==icons[s] && points[x+2][y-1]!==icons[s]){
                    $(id[x+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++
                }
            }
            if(points[x+1][y]===1){
                for(var k=q;k<r;k++){

                    if(icons[k]===id[x+1][y] && points[x+2][y]!==icons[s] && points[x+2][y+1]!==icons[s] && points[x+2][y-1]!==icons[s]){
                        $(id[x+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++
                        break;
                    }

                }

            }
        }

    }

    if(count>0){
        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
    }else{
        $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
    }


}



///////////////////////////////////////////////////////For Queen Moments////////////////////////////////////////////////////////////////////////////////


$("#div2").find("#img-myside-queen").on("click",function () {

    mysidequeen();

})
function mysidequeen() {
    setChessBoardAgain();
    bishopMovementsForQueen(28,0,16)
    rookMovementsForQueen(28,0,16)
    lastClickedImg=icons[28];
    lastClickedImgId=event.target.id;
}

$("#div2").find("#img-opposite-queen").on("click",function () {

    oppositequeen();

})
function oppositequeen() {
    setChessBoardAgain();
    rookMovementsForQueen(4,16,32)
    bishopMovementsForQueen(4,16,32)
    lastClickedImg=icons[4];
    lastClickedImgId=event.target.id;
}


function bishopMovementsForQueen(p,q,r) {

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }
    var count=0;

    if(x<1 && y>0 && y<7) {

        if (points[1][y+1]===0 || points[1][y+1]===1) {

            var z=y;

            outer:for (var i = 1; i < 8; i++) {
                for (var j = z; j < 8; j++) {
                    if (points[i][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[1][y-1]===0 || points[1][y-1]===1) {

            var z=y;

            outer:for (var i = 1; i < 8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>6 && y>0 && y<7) {

        if (points[6][y+1]===0 || points[6][y+1]===1) {

            var z=y;

            outer:for (var i = 6; i >0; i--) {
                for (var j = z; j < 8; j++) {
                    if (points[i][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[6][y-1]===0 || points[6][y-1]===1) {

            var z=y;

            outer:for (var i = 6; i > 0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>6 && y===0) {

        if (points[6][y+1]===0 || points[6][y+1]===1) {

            var z=y;

            outer:for (var i = 6; i >0; i--) {
                for (var j = z; j < 8; j++) {

                    if (points[i][j+1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x<1 && y===0) {

        if (points[1][y+1]===0 || points[1][y+1]===1) {

            var z=y;

            outer:for (var i = 1; i <8; i++) {
                for (var j = z; j < 8; j++) {

                    if (points[i][j+1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x<1 && y===7) {

        if (points[1][y-1]===0 || points[1][y-1]===1) {

            var z=y;

            outer:for (var i = 1; i <8; i++) {
                for (var j = z; j >=0; j--) {

                    if (points[i][j-1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x>6 && y===7) {

        if (points[6][y-1]===0 || points[6][y-1]===1) {

            var z=y;

            outer:for (var i = 6; i >=0; i--) {
                for (var j = z; j >0; j--) {

                    if (points[i][j-1]===0){

                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }
    if(x>0 && x<7 && y===0){

        if (points[x+1][y+1]===0 || points[x+1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i < 8; i++) {
                for (var j = z; j < 8; j++) {
                    if (points[i+1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i+1][j+1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i+1][j+1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y+1]===0 || points[x-1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j <8; j++) {
                    if (points[i-1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i-1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }

    }

    if(x>0 && x<7 && y===7){

        if (points[x+1][y-1]===0 || points[x+1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i < 8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i+1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i+1][j-1]===1){

                        for(var k=q;k<r;k++){

                            if(icons[k]===id[i+1][j-1]){

                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y-1]===0 || points[x-1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i-1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i-1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

    if(x>0 && x<7 && y>0 && y<7){

        if (points[x-1][y-1]===0 || points[x-1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j >=0; j--) {
                    if (points[i-1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i-1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x-1][y+1]===0 || points[x-1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i >0; i--) {
                for (var j = z; j <8; j++) {
                    if (points[i-1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i-1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i-1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i-1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }
        if (points[x+1][y+1]===0 || points[x+1][y+1]===1) {

            var z=y;

            outer:for (var i = x; i <8; i++) {
                for (var j = z; j <8; j++) {
                    if (points[i+1][j+1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z++;
                        break;
                    }else if(points[i+1][j+1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i+1][j+1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j+1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if (points[x+1][y-1]===0 || points[x+1][y-1]===1) {

            var z=y;

            outer:for (var i = x; i <8; i++) {
                for (var j = z; j >=0; j--) {
                    if (points[i+1][j-1]===0){
                        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                        $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        z--;
                        break;
                    }else if(points[i+1][j-1]===1){

                        for(var k=q;k<r;k++){
                            if(icons[k]===id[i+1][j-1]){
                                $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
                                $(id[i+1][j-1]).css("background-image", "url('image/greenwood.jpg')")
                                count++;
                                break outer;
                            }
                        }
                        break outer;
                    }else{
                        break outer;
                    }

                }
            }
        }

        if(count===0){
            $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
        }
    }

}

function rookMovementsForQueen(p,q,r){

    var x;
    var y;

    for(var k=0;k<8;k++){
        for(var l=0;l<8;l++){
            if(icons[p]===id[k][l]){
                x=k;
                y=l;
            }
        }
    }

    var count=0;

    if(x<1 && x>6 && y>0 && y<7){

        if(x===0){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }

        if(x===7){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
    }

    if(x>0 && x<7 && y>0 && y<7){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }
    }

    if(x<1 && y===0){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }

    if(x<1 && y===7){

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i<7;i++){
            if(points[i+1][y]===0){
                $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i+1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i+1][y]){
                        $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }
    if(x>6 && y===7){

        outer:for(var i=y;i>0;i--){
            if(points[x][i-1]===0){
                $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i-1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i-1]){
                        $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

    }

    if(x>6 && y===0){

        outer:for(var i=y;i<7;i++){
            if(points[x][i+1]===0){
                $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[x][i+1]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[x][i+1]){
                        $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }

        outer:for(var i=x;i>0;i--){
            if(points[i-1][y]===0){
                $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                count++;
            }else if(points[i-1][y]===1){
                for(var k=q;k<r;k++){
                    if(icons[k]===id[i-1][y]){
                        $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                        count++;
                        break outer;
                    }
                }
                break outer;
            }
        }
    }
    if(x>0 && x<7){

        if(y===7){
            outer:for(var i=y;i>0;i--){
                if(points[x][i-1]===0){
                    $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i-1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i-1]){
                            $(id[x][i-1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
        if(y===0){
            outer:for(var i=y;i<7;i++){
                if(points[x][i+1]===0){
                    $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[x][i+1]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[x][i+1]){
                            $(id[x][i+1]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }

            outer:for(var i=x;i>0;i--){
                if(points[i-1][y]===0){
                    $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i-1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i-1][y]){
                            $(id[i-1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
            outer:for(var i=x;i<7;i++){
                if(points[i+1][y]===0){
                    $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                    count++;
                }else if(points[i+1][y]===1){
                    for(var k=q;k<r;k++){
                        if(icons[k]===id[i+1][y]){
                            $(id[i+1][y]).css("background-image", "url('image/greenwood.jpg')")
                            count++;
                            break outer;
                        }
                    }
                    break outer;
                }
            }
        }
    }

    if(count>0){
        $(id[x][y]).css("background-image", "url('image/bluewood.jpg')")
    }else{
        $(id[x][y]).css("background-image", "url('image/redwood.jpg')")
    }
}


///////////////////////////////////////////click on divs////////////////////////////////////////////////////

$("#div2").find(id[2][1]).on("click",function () {


    if($(this).css('background-image').indexOf("greenwood.jpg")!=-1){

        $(imgID[8]).animate({left: '75px',top:'5px'});
        setChessBoardAgain();
        $(imgID[17]).fadeOut();
        enableMatchedEvents();

    }

})





































































































































function disableOtherEvents() {

    for(var i=0;i<32;i++){

        $("#div2").find(imgID[i]).off("click");

    }
    
}

function enableMatchedEvents() {

    var oppositeCount=0;
    var mysideCount=0;

    for(var i=16;i<32;i++){
        if(lastClickedImgId===imgID[i].substring(1)){
            mysideCount++;
            break;
        }

    }
    for(var i=0;i<16;i++){
        if(lastClickedImgId===imgID[i].substring(1)){
            oppositeCount++;
            break;
        }

    }
    if(mysideCount>0){

        $("#div2").find(imgID[0]).on("click",oppositerook1());
        $("#div2").find(imgID[1]).on("click",oppositeknight1());
        $("#div2").find(imgID[2]).on("click",oppositebishop1());
        $("#div2").find(imgID[4]).on("click",oppositequeen());
        $("#div2").find(imgID[5]).on("click",oppositebishop2());
        $("#div2").find(imgID[6]).on("click",oppositeknight2());
        $("#div2").find(imgID[7]).on("click",oppositerook2());
        $("#div2").find(imgID[8]).on("click",oppositeporn1());
        $("#div2").find(imgID[9]).on("click",oppositeporn2());
        $("#div2").find(imgID[10]).on("click",oppositeporn3());
        $("#div2").find(imgID[11]).on("click",oppositeporn4());
        $("#div2").find(imgID[12]).on("click",oppositeporn5());
        $("#div2").find(imgID[13]).on("click",oppositeporn6());
        $("#div2").find(imgID[14]).on("click",oppositeporn7());
        $("#div2").find(imgID[15]).on("click",oppositeporn8());

    }else if(oppositeCount>0){
       // console.log(3)
        $("#div2").find(imgID[16]).click(mysideporn1());
        $("#div2").find(imgID[17]).click(mysideporn2());
        $("#div2").find(imgID[18]).click(mysideporn3());
        $("#div2").find(imgID[19]).click(mysideporn4());
        $("#div2").find(imgID[20]).click(mysideporn5());
        $("#div2").find(imgID[21]).click(mysideporn6());
        $("#div2").find(imgID[22]).click(mysideporn7());
        $("#div2").find(imgID[23]).click(mysideporn8());
        $("#div2").find(imgID[24]).click(mysiderook1());
        $("#div2").find(imgID[25]).click(mysidekinght1());
        $("#div2").find(imgID[26]).click(mysidebishop1());
        $("#div2").find(imgID[28]).click(mysidequeen());
        $("#div2").find(imgID[29]).click(mysidebishop2());
        $("#div2").find(imgID[30]).click(mysideknight2());
        $("#div2").find(imgID[31]).click(mysiderook2());

    }

    console.log("opposite Count:"+oppositeCount)
    console.log("myside Count:"+mysideCount)

}


function setChessBoardAgain() {

    var forBlack = 0;
    var forWhite = 0;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (forBlack === 1 && j === 7) {
                $(id[i][j]).css("background-image", "url('image/whitewood.jpg')");
                forWhite = 0;
                forBlack = 1;
            } else if (forWhite === 1 && j === 7) {
                $(id[i][j]).css("background-image", "url('image/darkwood.jpg')");
                forWhite = 1;
                forBlack = 0;
            } else if (forWhite === 0) {
                $(id[i][j]).css("background-image", "url('image/whitewood.jpg')");
                forWhite = 1;
                forBlack = 0;
            } else if (forBlack === 0) {
                $(id[i][j]).css("background-image", "url('image/darkwood.jpg')");
                forWhite = 0;
                forBlack = 1;
            }
        }
    }
}