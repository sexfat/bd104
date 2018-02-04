$(function () {

    TweenMax.fromTo('.section .title', 2, {
        x: -300,
        // y: -30,
        opacity: 0,
        scale: 1
    }, {
        x: 0,
        // y: 0,
        ease: Elastic.easeOut.config(1, 0.3),
        repeat: 2,
        repeatDelay: 1,
        opacity: 1,
        yoyo: true,
        scale: 1.5
    });

    TweenMax.fromTo('.section .desc', 1, {
        x: -300,
        // y: -30,
        // opacity: 0
    }, {
        x: 0,
        delay: 0.5,
        // y: 0,
        // ease: Bounce.easeOut ,
        // opacity: 1
    });


    var objects = ['.box1', '.box2', '.box3', '.box4'];

    TweenMax.staggerFromTo(objects, 0.3, {
        x: 0
    }, {
        x: 100,
        repeat: -1,
        repeatDelay: -1,
        yoyo: true,
        // ease: Bounce.easeOut
    }, 0.5)

    // Timelinemax

    var _btn = $('.btn');


    _btn.on('click', function () {
        var tl = new TimelineMax({
            // repeat: 1,
            // repeatDelay: 1,
            onComplete: parallax_moves
        });


        tl.add(TweenMax.from(".box01", 1, {
            x: 0,
            y: 400,
            opacity: 1,
            ease: Circ.easeInOut
        }));

        tl.add(TweenMax.from(".box02", 1, {
            x: 300,
            y: 0,
            delay: 2,
            opacity: 1,
            ease: Circ.easeInOut
        }));

        tl.add(TweenMax.from(".box03", 1, {
            x: 100,
            y: 0,
            delay: 1,
            opacity: 1,
            ease: Circ.easeInOut
        }));

        tl.add(TweenMax.from(".box04", 1, {
            x: 100,
            y: 500,
            delay: 1,
            opacity: 1,
            ease: Circ.easeInOut
        }));

        function parallax_moves() {
            var scene = document.getElementById('scenes');
            var parallax = new Parallax(scene);
        };
    });
});




//  scrollmagic
$(function(){

    var controller = new ScrollMagic.Controller();

    //場景一
    var tween_scece01 = TweenMax.fromTo('.section3 .boxscroll', 1, {
        x: -300,
    }, {
        x: 0
    });

    var scece_01 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: 400,
        duration: '230',
        // reverse: false

    })
    .setTween(tween_scece01)
    .addIndicators({
        name: 'secen 01'
    })
    .addTo(controller);

    
    //場景二
    
    var scece_02 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        offset: 100,


    })
    .setClassToggle('.boxer' , 'color')
    .addIndicators({
        name: 'secen 02'
    })
    .addTo(controller);











     // 加入class
     var bgc_scene = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        offset: 400,
        reverse: true
    })
    .setClassToggle('.section_5 .bg_all', 'bgc')
    .addIndicators({
        name: 'secen 05'
    })
    .addTo(controller);


console.log('add class ok');


var scene_statement = new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    duration: '230'


})
.on("enter", function () {
    document.getElementById('bgvid').play();
})
.on("leave", function () {
    document.getElementById('bgvid').pause();
})
.addIndicators({
    name: 'video'
})
.addTo(controller);
console.log('video ok');






//pin
var scene_sticky = new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    offset: '50',
    duration: '400'
})
.setPin('#sticky')
.addIndicators()
.addTo(controller);





  

});

