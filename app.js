// define images
if (window.innerWidth > 992) {
  var images = [
    "Rotato Frames/Untitled Frame 1.png",
    "Rotato Frames/Untitled Frame 2.png",
    "Rotato Frames/Untitled Frame 3.png",
    "Rotato Frames/Untitled Frame 4.png",
    "Rotato Frames/Untitled Frame 5.png",
    "Rotato Frames/Untitled Frame 6.png",
    "Rotato Frames/Untitled Frame 7.png",
    "Rotato Frames/Untitled Frame 8.png",
    "Rotato Frames/Untitled Frame 9.png",
    "Rotato Frames/Untitled Frame 10.png",
    "Rotato Frames/Untitled Frame 11.png",
    "Rotato Frames/Untitled Frame 12.png",
    "Rotato Frames/Untitled Frame 13.png",
    "Rotato Frames/Untitled Frame 14.png",
    "Rotato Frames/Untitled Frame 15.png",
    "Rotato Frames/Untitled Frame 16.png",
    "Rotato Frames/Untitled Frame 17.png",
    "Rotato Frames/Untitled Frame 18.png",
    "Rotato Frames/Untitled Frame 19.png",
    "Rotato Frames/Untitled Frame 20.png",
    "Rotato Frames/Untitled Frame 21.png",
    "Rotato Frames/Untitled Frame 22.png",
    "Rotato Frames/Untitled Frame 23.png",
    "Rotato Frames/Untitled Frame 24.png",
    "Rotato Frames/Untitled Frame 25.png",
    "Rotato Frames/Untitled Frame 26.png",
    "Rotato Frames/Untitled Frame 27.png",
    "Rotato Frames/Untitled Frame 28.png",
    "Rotato Frames/Untitled Frame 29.png",
    "Rotato Frames/Untitled Frame 30.png",
    "Rotato Frames/Untitled Frame 31.png",
    "Rotato Frames/Untitled Frame 32.png",
    "Rotato Frames/Untitled Frame 33.png",
    "Rotato Frames/Untitled Frame 34.png",
    "Rotato Frames/Untitled Frame 35.png",
    "Rotato Frames/Untitled Frame 36.png",
    "Rotato Frames/Untitled Frame 37.png",
    "Rotato Frames/Untitled Frame 38.png",
    "Rotato Frames/Untitled Frame 39.png",
    "Rotato Frames/Untitled Frame 41.png",
    "Rotato Frames/Untitled Frame 42.png",
    "Rotato Frames/Untitled Frame 43.png",
    "Rotato Frames/Untitled Frame 44.png",
    "Rotato Frames/Untitled Frame 45.png",
    "Rotato Frames/Untitled Frame 46.png",
    "Rotato Frames/Untitled Frame 47.png",
    "Rotato Frames/Untitled Frame 48.png",
    "Rotato Frames/Untitled Frame 49.png",
    "Rotato Frames/Untitled Frame 51.png",
    "Rotato Frames/Untitled Frame 52.png",
    "Rotato Frames/Untitled Frame 53.png",
    "Rotato Frames/Untitled Frame 54.png",
    "Rotato Frames/Untitled Frame 55.png",
    "Rotato Frames/Untitled Frame 56.png",
    "Rotato Frames/Untitled Frame 57.png",
    "Rotato Frames/Untitled Frame 58.png",
    "Rotato Frames/Untitled Frame 59.png"
  ];

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  var obj = { curImg: 0 };
  const intro = document.querySelector(".intro");
  const trigger = document.querySelector(".trigger");

  // create tween
  var tween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      repeat: 3,									// repeat 3 times
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        document.getElementById("myimg").src = images[obj.curImg];
        // document.querySelector(".myimg").attr("src", images[obj.curImg]); // set the image source
      }
    }
  );

  // init controller
  var controller = new ScrollMagic.Controller();
  const text = intro.querySelector("h1");
  const end = intro.querySelector("h1");

  // build scene
  var scene = new ScrollMagic.Scene({ triggerElement: intro, duration: 2000, triggerHook: 0 })
    .setTween(tween)
    .setPin(intro)
    .addTo(controller);

  const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });

  let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
  })
    .setTween(textAnim)
    .addTo(controller);

  // handle form change
  // $("form.move input[name=duration]:radio").change(function () {
  //   scene.duration($(this).val());
  // });
}