


$(document).ready(function(){
    $a = $("#h");
    $b = $(".h1");
    console.log($a, $b)

   $c =  $("p").hide()
   console.log($c)

   $btn =  $("#btn");

   $btn.click(function(){
    // alert("button clicked")
    $a.css({
        "color": "red"
    })
   })


//    $btn.dblclick(function(){
//     alert("button clicked")
//    })



$btn.mouseenter(function(){
    // alert("kjbjkbvj")
    $b.hide(2000)
})
$btn.dblclick(function(){
    // alert("kjbjkbvj")
    $b.show(1000);

})

$inp =  $("#inp");
$body =  $("#body");
$inp.keypress(function(){
$body.css({
    "background": "red"
})


$inp.keyup(function(){
    $body.css({
        "background": "black"
    })
})
});

$inp.keydown(function(){
    $body.css({
        "background": "orange"
    })
})
})




