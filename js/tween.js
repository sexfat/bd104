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

    var tl = new TimelineMax({
        repeat: 1,
        repeatDelay: 1
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


    var scene = document.getElementById('scenes');
    var parallax = new Parallax(scene);

})