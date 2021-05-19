/*button color*/
$(".one").hover(function() {
    $(this).css("background-color", "#ffcf00");
}, function() {
    $(this).css("background-color", "#00cdff");
});

$(".two").mouseenter(function() {
    $(this).css("background-color", "#ffcf00");
});

$(".two").mouseleave(function() {
    $(this).css("background-color", "#00cdff");
});

/* top button*/
$(".bimi").hover(function() {
    $(this).css("background-color", "#9bacb6");
}, function() {
    $(this).css("background-color", "inherit");
});

$("#colorchange").dblclick(function() {
    $("body").toggleClass("green");
    $("body").toggleClass("purple");
    $("button").toggleClass("three");
    $(this).removeClass("three");
});

/*button functions*/
$(".play-again").click(function() {
    $(".end-message").hide();
    $(".entry").show();
    $(".story1").text("Yay, we're on the final stage! Let's do this!");
    $(".story2").text("");
    $(".toRoom").show();
});

$(".toRoom").click(function() {
    $(".story1").text("We're in a big room now, but... Oh my god!");
    $(".story2").text("There's a big ferocious beast to our right! Should we fight it?");
    $(".toRoom").hide();
    $(".decision1").show();
});


/*decision 1*/
$(".fight").click(function() {
    $(".story1").text("Let's do it! Should we use our sword our our magic wand?");
    $(".story2").text("");
    $(".decision1").hide();
    $(".decisionMS2").show();
});

$(".no-fight").click(function() {
    $(".story1").text("Okay, it's be peaceful. Hopefully the monster is as well.");
    $(".story2").text("Should we run away and hide or stay and hope it doesn't kill us?");
    $(".decisionP2").show();
    $(".decision1").hide();
});

/*decision magic/sword-2*/
$(".sword").click(function() {
    $(".instructions").show();
    $(".instructions").text("(Double click the sword to pick it up!)");
    $(".story1").text("");
    $(".story2").text("");
    $(".story1").hide();
    $(".story2").hide();
    $(".decisionMS2").hide();
    $(".imgsword").show();
});

$(".no-sword").click(function() {
    $(".story1").text("Let's use our magic wand then!");
    $(".story2").text("Should we stun it or damage it?");
    $(".decisionMS2").hide();
    $(".decisionM3").show();
});

/*MAGIC*/

/*decision magic-3*/
$(".stun").click(function() {
    $(".instructions").show();
    $(".instructions").text("(Double click the wand to stun the monster!)");
    $(".story1").text("");
    $(".story2").text("");
    $(".story1").hide();
    $(".story2").hide();
    $(".decisionM3").hide();
    $(".wand").show();
});

$(".no-stun").click(function() {
    $(".story1").text("Uh oh, the spell wasn't enough! IT'S STILL MOVING, IT'S-");
    $(".story2").text("Our bodies have been ripped to shreds! :)");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionM3").hide();
});

/*wand*/
$(".wand").dblclick(function() {
    $(".wand").fadeOut();
    $(".instructions").fadeOut();
    $(".star1").delay(500).fadeIn();
    $(".star1").delay(500).fadeOut();
    $(".star2").delay(2000).fadeIn();
    $(".star2").delay(500).fadeOut();
    $(".star3").delay(3500).fadeIn();
    $(".star3").delay(500).fadeOut();
    $(".story1").text("We've done it! The monster is stunned!");
    $(".story2").text("Now, should we run away? Or should we run towards it and finish it off?");
    $(".story1").delay(5000).fadeIn();
    $(".story2").delay(5000).fadeIn();
    $(".decisionM4").delay(5000).fadeIn();
});

/*decision magic-4*/
$(".runaway").click(function() {
    $(".story1").text("Quick! Before the monster catches up!");
    $(".story2").text("Should we go behind the column or towards the burning door?");
    $(".decisionM4").hide();
    $(".decisionM5").show();
});

$(".no-runaway").click(function() {
    $(".story1").text("We run towards it, but! IT'S UNSTUNNED AHHHHHHH");
    $(".story2").text("That was a dumb choice. Now we're dead. :(");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionM4").hide();
});

/*decision magic-5*/
$(".column").click(function() {
    $(".story1").text("The monster isn't stupid. It saw us go behind the column.");
    $(".story2").text("The beast pounced on us and ripped us apart limb by limb!");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionM5").hide();
});

$(".no-column").click(function() {
    $(".story1").text("When we reach the door, we see two power-ups, a half-burnt doll and a telescope.");
    $(".story2").text("Which item should we use?");
    $(".decisionM5").hide();
    $(".decisionM6").show();
});

/*decision magic-6*/
$(".fish").click(function() {
    $(".story1").text("We launch the flamin' fish into the monster!");
    $(".story2").text("The monster disintegrates into ashes.");
    $(".end-message").show();
    $(".win-message").show();
    $(".lose-message").hide();
    $(".decisionM6").hide();
});

$(".no-fish").click(function() {
    $(".story1").text("We peer into the future and see ourselves dying ");
    $(".story2").text("as we wasted time looking into the telescope.");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionM6").hide();
});

/*SWORD*/

/*sword image*/
$(".imgsword").dblclick(function() {
    $(".imgsword").slideUp();
    $(".instructions").hide();
    $(".story1").text("Ok! Now, should we wait for the monster to come to us?");
    $(".story2").text("Or should we run up to it instead?");
    $(".story1").delay(500).fadeIn();
    $(".story2").delay(500).fadeIn();
    $(".decisionS3").delay(500).fadeIn();
});

/*decision sword-3*/
$(".stay").click(function() {
    $(".story1").text("We'll wait for it to come to us then.");
    $(".story2").text("The monster runs up and slaps the life out of us.");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionS3").hide();
});

$(".no-stay").click(function() {
    $(".story1").text("We're right in front of it now.");
    $(".story2").text("Quick, should we go for its leg or neck?");
    $(".decisionS3").hide();
    $(".decisionS4").show();
});

/*decision sword-4*/
$(".leg").click(function() {
    $(".story1").text("Great! The monster is losing it's balance!");
    $(".story2").text("Now should we go for the neck or another leg?");
    $(".decisionS4").hide();
    $(".decisionS5").show();
});

$(".no-leg").click(function() {
    $(".story1").text("The monster sees us running towards it's neck.");
    $(".story2").text("It turns its head and gobbles us up instead. Yum.");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionS4").hide();
});

/*decision sword-5*/
$(".neck").click(function() {
    $(".story1").text("We successfully sliced its head off!");
    $(".story2").text("I can see the exit now!");
    $(".end-message").show();
    $(".win-message").show();
    $(".lose-message").hide();
    $(".decisionS5").hide();
});

$(".no-neck").click(function() {
    $(".story1").text("We slice off another leg causing the monster to fall down.");
    $(".story2").text("Unfortunately, it fell on top of us. :(");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionS5").hide();
});

/*PEACEFUL*/

/*decision peaceful-2*/
$(".hide").click(function() {
    $(".story1").text("Good idea. We don't know if it's hositle or not yet.");
    $(".story2").text("Let's hide first. Should we go left or right?");
    $(".decisionP2").hide();
    $(".decisionP3").show();
});

$(".no-hide").click(function() {
    $(".story1").text("Alrigh- AHHHHHHHHH BEHIND YOU!");
    $(".story2").text("We were mauled by the monster. :'(");
    $(".end-message").show();
    $(".win-message").hide();
    $(".lose-message").show();
    $(".decisionP2").hide();
});

/*decision peaceful-3*/
$(".left").click(function() {
    $(".story1").text("This wasn't the right choice! It was the left!");
    $(".story2").text("The monster follows you and bites your head off. :(");
    $(".end-message").show();
    $(".lose-message").show();
    $(".win-message").hide();
    $(".decisionP3").hide();
});

$(".no-left").click(function() {
    $(".story1").text("This was the right choice! I don't see the monster behind us.");
    $(".story2").text("Hey, there's book here. Why don't we check it out?");
    $(".decisionP3").hide();
    $(".continue").show();
});

/*continue and image*/
$(".continue").click(function() {
    $(".story1").text("");
    $(".story2").text("");
    $(".story1").hide();
    $(".story2").hide();
    $(".continue").hide();
    $(".closed-book").show();
    $(".instructions").text("Double click the item to open it!");
    $(".instructions").show();
});

$(".closed-book").dblclick(function() {
    $(".story1").text("The book opens and reveals a giant yellow door--the exit!");
    $(".story2").text("We can escape this dark place now!");
    $(".instructions").hide();
    $(".closed-book").hide();
    $(".open-book").delay(500).fadeIn();
    $(".open-book").delay(500).fadeOut();
    $(".story1").delay(2000).fadeIn();
    $(".story2").delay(2000).fadeIn();
    $(".end-message").delay(2000).fadeIn();
    $(".win-message").delay(2000).fadeIn();
    $(".lose-message").hide();
});