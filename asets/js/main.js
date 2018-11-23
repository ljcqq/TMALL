$(".btTopa a ").hover(function(){
    $(this).css("textDecoration","underline")
},function(){
    $(this).css("textDecoration","none")
})
$(function(){
    // $.ajax({
    //     type:"post",
    //     url:"asets/data/data.josn",
    //     success:function(str){
    //         console.log(str)
    //         $(".btRta img").each(function(index,item){
    //
    //         })
    //     }
    $.ajax({
        type:"post",
        url:"asets/data/data.json",
        success:function(str){
            $(".btRta img").each(function(index,item){
                var src = str.Play[index].icon
                $(this).attr("src",src)
            })
            $(".btRta .p1").each(function(index,item){
                var title = str.Play[index].title
                $(this).text(title)
            })
            $(".btRta .p2").each(function(index,item){
                var inf = str.Play[index].inf
                $(this).text(inf)
            })
            $(".btRta .p3").each(function(index,item){
                var price = str.Play[index].price
                $(this).text(price)
            })
        }
    })

})
$(".btRta").hover(function () {
    $(this).css({
        "border":"1px solid red",
        "opacity":0.7,
        "boxSizing":"contentBox",
        "width":"1.84rem",
        "height":"2.76rem"
    })
},function(){
    $(this).css({
        "border":0,
        "opacity":1,
        "width":"1.88rem",
        "height":"2.8rem"
    })

})

function interaction(a,b) {
    var oSmrg2 = document.getElementsByClassName(a)
    var len = oSmrg2.length
    var src = 0
    for ( let i = 0 ; i < len ; i++) {
        oSmrg2[i].onclick = function() {
            var index = i;
            location.href = "html/info.html?id=" +b+"&&"+index
        }
    }
}
