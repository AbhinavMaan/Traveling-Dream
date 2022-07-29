var travel;
var australia;
var Dubai, du1, du2, du3;
var london, lo1, lo2, lo3;
var singapore, sing1, sing2, sing3;
var egypt;
var russia;
var Paris, pa1,pa2;
var america;
var but1;
var Istabul, in1, in2, in3;
var Italy;
var Canada;
var Back,back;
var more;
var place = 1;
var time = 0;
var slideshow;
var state = 0; 

function preload(){
    travel=loadImage("cover img.jpg");

    Canada=loadImage("can1.jpg");
    ca1=loadImage("can2.jpg");
    ca2=loadImage("can3.jpg");
    ca3=loadImage("can4.jpg");
    ca4=loadImage("can5.jpg");
    ca5=loadImage("can6.jpg");
    ca6=loadImage("can7.jpg");

    australia=loadImage("aus.jpg");
    au1=loadImage("aus1.jpg");
    au2=loadImage("aus2.jpg");
    au3=loadImage("aus3.jpg");
    au4=loadImage("aus4.jpg");
    au5=loadImage("aus5.jpg");
    au6=loadImage("aus6.jpg");

    Dubai=loadImage("dubai.jpg");
    du1=loadImage("dub1.jpg");
    du2=loadImage("dub2.jpg");
    du3=loadImage("dub3.jpg");
    du4=loadImage("dub4.jpg");
    du5=loadImage("dub5.jpg");
    du6=loadImage("dub6.jpg");
    du7=loadImage("dubai7.jpg");
    du8=loadImage("dub8.jpg");
    du9=loadImage("dub9.jpg");

    london=loadImage("lon.jpg");
    lo1 =loadImage("ld1.jpg");
    lo2 =loadImage("ld2.jpg");
    lo3 =loadImage("ld3.jpg");
    lo4 =loadImage("ld4.jpg");
    lo5 =loadImage("ld5.jpg");
    lo6 =loadImage("ld6.jpg");
    lo7 =loadImage("ld7.jpg");
    lo8 =loadImage("ld8.jpg");
    ld6 =loadImage("lon6.jpg");
     
    singapore=loadImage("Sin.jpg");
    sing1=loadImage("sin1.jpg");
    sing2=loadImage("sin2.jpg");
    sing3=loadImage("sin3.jpg");
    sing4=loadImage("sin4.jpg");
    sing5=loadImage("sin5.jpg");
    sing6=loadImage("sin6.jpg");
    sing7=loadImage("sin7.jpg");

    egypt=loadImage("egy.jpg");

    russia=loadImage("rus.jpg");
    rus1=loadImage("ru1.jpg");
    rus2=loadImage("ru2.jpg");
    rus3=loadImage("ru3.jpg");
    rus4=loadImage("ru4.jpg");
    rus5=loadImage("ru5.jpg");
    rus6=loadImage("ru6.jpg");

    Paris=loadImage("paris.jpg");
    pa1=loadImage("pr1.jpg");
    pa2=loadImage("pr2.jpg");
    pa3=loadImage("pr3.jpg");
    pa4=loadImage("pr4.jpg");
    pa5=loadImage("pr5.jpg");
    pa6=loadImage("lm.jpg");
    pa7=loadImage("et.jpg");

    america=loadImage("ame.jpg");
    am1=loadImage("ame1.jpg");
    am2=loadImage("ame2.jpg");
    am3=loadImage("ame3.jpg");
    am4=loadImage("ame4.jpg");
    am5=loadImage("ame5.jpg");
    am6=loadImage("ame6.jpg");

    Istanbul=loadImage("ist.jpg");
    in1=loadImage("ib1.jpg");
    in2=loadImage("ib2.jpg");
    in3=loadImage("ib3.jpg");
    in4=loadImage("ib4.jpeg");
    in5=loadImage("ib5.jpg");

    Italy=loadImage("ita.jpg");
    ita1=loadImage("it1.jpg");
    ita2=loadImage("it2.jpg");
    ita3=loadImage("it3.jpg");
    ita4=loadImage("it4.jpg");
    ita5=loadImage("it5.jpg");

    back=loadImage("back.jpg");
}

function setup(){
 createCanvas(windowWidth,windowHeight);

 but1 = createButton("Paris");
 but1.position(50,100);
 but1.size(50,30);
  
 but2 = createButton("Egypt");
 but2.position(300,100); 
 but2.size(50,30);

 but3 = createButton("Dubai");
 but3.position(550,100);
 but3.size(50,30);

 but4 = createButton("Singapore");
 but4.position(775,100);
 but4.size(80,30);

 but5 = createButton("Russia");
 but5.position(1025,100);
 but5.size(55,30);

 but6 = createButton("London");
 but6.position(1275,100);
 but6.size(60,30);

 but7 = createButton("America");
 but7.position(675,250);
 but7.size(60,30);

 but8 = createButton("Australia");
 but8.position(425,250);
 but8.size(70,30);

 but9 = createButton("Istanbul");
 but9.size(60,30);
 but9.position(175,250);

 but10 = createButton("Italy");
 but10.position(925,250);
 but10.size(50,30);

 but11 = createButton("Canada");
 but11.position(1175, 250);
 but11.size(70,30);

 Back = createButton("Back");
 Back.position(20,30);
 Back.size(60,30);
 Back.hide();

 more = createButton("More");
 more.position(windowWidth/1.04,00);
 more.size(53,windowHeight);
 more.hide();

 Close = createButton("Close");
 Close.position(1000, 30);
 Close.size(60,30);
 Close.hide();

 slideshow = createButton("Slideshow");
 slideshow.position(1250, 30);
 slideshow.size(80,30);

 background(travel);
 
  fill(17,82 ,2);
  textSize(20);
  text("Travel Ideas" , windowWidth/2.2, windowHeight/20);
   
}

function draw(){

  if(state === 1){
    time ++;
  }

  slideshow.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.hide();
    slideshow.hide();

    if(state === 0){
       state = 1; 
    }
    
    if(time === 00 || time > 00){
      background(000);
  
      fill(255);
      textSize(30);
      text("SlideShow", windowWidth/2.2, windowHeight/2);
    }

  });

  if(time > 100 && state === 1){
    background(pa1);
  }
  
  if (time > 200 && state === 1) {
    background(sing1);
  }

  if (time > 300 && state === 1) {
    background(rus2);
  }

  if (time > 400 && state === 1) {
    background(ita3);
  }

  if (time > 500 && state === 1) {
    background(am6);
  }

  if (time > 600 && state === 1) {
    background(du9);
  }

  if (time > 700 && state === 1) {
    background(ld6);
  }

  if (time > 800 && state === 1) {
    background(au6);
  }

  if (time > 900 && state === 1) {
    background(in1);
  }

  if (time > 1000 && state === 1) {
    background(Canada);
  }

  if (time > 1100 && state === 1) {
    background(travel);
    
    state = 0;
    time = 00;

    but1.show();
    but2.show();
    but3.show();
    but4.show();
    but5.show();
    but6.show();
    but7.show();
    but8.show();
    but9.show();
    but10.show();
    but11.show();
    Back.hide();
    more.hide();
    slideshow.show();

   fill(17,82 ,2);
   textSize(20);
   text("Travel Ideas" , windowWidth/2.2, windowHeight/20);
    
  }

  but1.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 2;
  
    var nd =  Math.round(random(1,8));

    switch (nd) {
      case 1: background(pa1);
      break;

      case 2: background(pa2);
      break;

      case 3: background(pa3);
      break;

      case 4: background(pa4);
      break;
      
      case 5: background(pa5);
      break;

      case 6: background(pa6);
      break;

      case 7: background(pa7);
      break;

      case 8: background(Paris);
      break;

      default: break;
    }
    
    fill(255, 0, 242);
    textSize(25);
    text("Paris", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Eiffel Tower", windowWidth/60, windowHeight/4);
    text("2. Louvre Museum", windowWidth/60, windowHeight/3.5);
    text("3. The Centre Pompidou", windowWidth/60, windowHeight/3.1);
    text("4. Disneyland Paris", windowWidth/60, windowHeight/2.8);
    text("5. Arc de Triomphe", windowWidth/60, windowHeight/2.5);
    text("6. Palace of Versailles", windowWidth/60, windowHeight/2.3);
  }); 

  but2.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place =3;

    background(egypt);

    fill(255, 242, 0);
    textSize(25);
    text("Egypt", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Cairo Tower[CAIRO]", windowWidth/60, windowHeight/4);
    text("2. The Gayer Anderson Museum", windowWidth/60, windowHeight/3.5);
    text("3. Al-Azhar Park", windowWidth/60, windowHeight/3.1);
    text("4. Cruise the Nile ", windowWidth/60, windowHeight/2.8);
    text("5. The great pyramid of giza[Giza]", windowWidth/60, windowHeight/2.55);
    text("6. Great Sphinx of Giza", windowWidth/60, windowHeight/2.365);
    text("7. Prince Mohamed Ali Palace", windowWidth/60, windowHeight/2.2);
    text("8. Giza Zoo", windowWidth/60, windowHeight/2.05);
    text("9. Khufu Ship", windowWidth/60, windowHeight/1.93);
    text("10. SOHO Square[Sharm el sheikh]", windowWidth/60, windowHeight/1.82);
    text("11. Desert Adventure", windowWidth/60, windowHeight/1.72);
    text("12. Old Market", windowWidth/60, windowHeight/1.63);
    text("13. Water Sports on Shark's Bay Beach", windowWidth/60, windowHeight/1.55);


  });

  but3.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 4;

    var and =  Math.round(random(1,9));

    switch (and) {
      case 1: background(du1);
      break;

      case 2: background(du2);
      break;

      case 3: background(du3);
      break;

      case 4: background(du4);
      break;
      
      case 5: background(du5);
      break;

      case 6: background(du6);
      break;

      case 7: background(du7);
      break;

      case 8: background(Dubai);
      break;

      case 9: background(du8)
      break;

      default: break;
    }
    
    fill(140, 0, 255);
    textSize(25);
    text("Dubai", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Dubai Frame", windowWidth/60, windowHeight/4);
    text("2. The dubai mall", windowWidth/60, windowHeight/3.5);
    text("3. The dubai fountain", windowWidth/60, windowHeight/3.1);
    text("4. Burj khalifa ", windowWidth/60, windowHeight/2.8);
    text("5. Global village", windowWidth/60, windowHeight/2.55);
    text("6. City walk", windowWidth/60, windowHeight/2.365);
    text("7. Dubai miracle garden", windowWidth/60, windowHeight/2.2);
    text("8. Ski dubai", windowWidth/60, windowHeight/2.05);
    text("9. Aquaventure waterpark", windowWidth/60, windowHeight/1.93);
    text("10. MOTIONGATE dubai", windowWidth/60, windowHeight/1.82);
    text("11. Desert Safari", windowWidth/60, windowHeight/1.72);
    text("12. Museum of Future", windowWidth/60, windowHeight/1.63);

  });

  but4.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 5;
   
    var rand =  Math.round(random(1,8));

    switch (rand) {
      case 1: background(sing1);
      break;

      case 2: background(sing2);
      break;

      case 3: background(sing3);
      break;

      case 4: background(sing4);
      break;
      
      case 5: background(sing5);
      break;

      case 6: background(sing6);
      break;

      case 7: background(sing7);
      break;

      case 8: background(singapore);
      break;
    
      default: break;
    }
    
    
    fill(39, 232, 151);
    textSize(25);
    text("Singapore", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Night safari", windowWidth/60, windowHeight/4);
    text("2. AIRZONE", windowWidth/60, windowHeight/3.5);
    text("3. ArtScience museum", windowWidth/60, windowHeight/3.1);
    text("4. Universal studios singapore", windowWidth/60, windowHeight/2.8);
    text("5. Marina bay sands", windowWidth/60, windowHeight/2.55);
    text("6. Gardens by the bay", windowWidth/60, windowHeight/2.365);
    text("7. Sentosa", windowWidth/60, windowHeight/2.2);

  });

  but5.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 6;

    var rass =  Math.round(random(1,6));

    switch (rass) {
      case 1: background(russia);
      break;

      case 2: background(rus2);
      break;

      case 3: background(rus3);
      break;

      case 4: background(rus4);
      break;
      
      case 5: background(rus5);
      break;

      case 6: background(rus6);
      break;

      default: break;
    }

    fill(247, 7, 55);
    textSize(25);
    text("Russia", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Red Square", windowWidth/60, windowHeight/4);
    text("2. All-Russian Exhibition Center", windowWidth/60, windowHeight/3.5);
    text("3. Tverskaya Street", windowWidth/60, windowHeight/3.1);
    text("4. Muzeon Park of Arts", windowWidth/60, windowHeight/2.8);
    text("5. Ostrov Mechty (Dream Island)", windowWidth/60, windowHeight/2.55);
    text("6. Manege Square", windowWidth/60, windowHeight/2.365);
    text("7. St. Isaac's Cathedral(Saint Petersburg)", windowWidth/60, windowHeight/2.2);
    text("8. Catherine Palace", windowWidth/60, windowHeight/2.05);
    text("9. MazaPark", windowWidth/60, windowHeight/1.93);
    text("10. Cruiser Aurora", windowWidth/60, windowHeight/1.82);
    text("11. River & Canal tour", windowWidth/60, windowHeight/1.72);
  });

  but6.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 7;

    var land =  Math.round(random(1,9));

    switch (land) {
      case 1: background(lo1);
      break;

      case 2: background(lo2);
      break;

      case 3: background(lo3);
      break;

      case 4: background(lo4);
      break;
      
      case 5: background(lo5);
      break;

      case 6: background(lo6);
      break;

      case 7: background(lo7);
      break;

      case 8: background(london);
      break;

      case 9: background(lo8)
      break;

      default: break;
    }

    fill(162, 122, 107);
    textSize(25);
    text("London", windowWidth/2.1, windowHeight/20);
    
    fill(255, 0, 0);
    textSize(18);
    text("1. The Shard", windowWidth/60, windowHeight/4);
    text("2. Lastminute.com london eye", windowWidth/60, windowHeight/3.5);
    text("3. Big ben", windowWidth/60, windowHeight/3.1);
    text("4. Trafalgar square", windowWidth/60, windowHeight/2.8);
    text("5. Buckingham palace", windowWidth/60, windowHeight/2.55);
    text("6. Hyde park", windowWidth/60, windowHeight/2.365);
    text("7. Wembley stadium", windowWidth/60, windowHeight/2.2);
    text("8. Warner Bros. Studio Tour London", windowWidth/60, windowHeight/2.05);

  });

  but8.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 9;

    var aust =  Math.round(random(1,7));

    switch (aust) {
      case 1: background(australia);
      break;

      case 2: background(au1);
      break;

      case 3: background(au2);
      break;

      case 4: background(au3);
      break;
      
      case 5: background(au4);
      break;

      case 6: background(au5);
      break;

      case 7: background(au6);
      break;

      default: break;
    }

    fill(0, 0, 0);
    textSize(25);
    text("Austalia", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. South Austalian Aviation Museum(Adelaide)", windowWidth/60, windowHeight/4);
    text("4. The beachouse(Glenelg)", windowWidth/60, windowHeight/2.8);
    text("3. Adelaide Oval", windowWidth/60, windowHeight/3.1);
    text("2. South Austalian Museum ", windowWidth/60, windowHeight/3.5);
    text("5. Funfields Themepark(Whittlesea)", windowWidth/60, windowHeight/2.55);
    text("6. Eureka Skydeck(Melbourne)", windowWidth/60, windowHeight/2.365);
    text("7. National Gallery of Victoria", windowWidth/60, windowHeight/2.2);
    text("8. Luna Park Melbourne", windowWidth/60, windowHeight/2.05);
    text("9. Warner Bros. Movie World", windowWidth/60, windowHeight/1.93);
    text("10. Dreamworld Australia(Gold Coast)", windowWidth/60, windowHeight/1.82);
    text("11. Sky Point Observation Deck", windowWidth/60, windowHeight/1.72);
    text("12. Wendy Whiteley's Secret Garden(Sydney)", windowWidth/60, windowHeight/1.63);
    text("13. Sydney Harbour Bridge", windowWidth/60, windowHeight/1.55);
    text("14. Madame Tussauds Sydney", windowWidth/60, windowHeight/1.47);
    text("15. Sydney Tower Eye", windowWidth/60, windowHeight/1.4);
    text("16. Sydney Park", windowWidth/60, windowHeight/1.34);
    text("17. Bondi Beach", windowWidth/60, windowHeight/1.285);

    
  });

  but7.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 8;

    var USA =  Math.round(random(1,6));

    switch (USA) {
      case 1: background(america);
      break;

      case 2: background(am1);
      break;

      case 3: background(am2);
      break;

      case 4: background(am3);
      break;
      
      case 5: background(am4);
      break;

      case 6: background(am5);
      break;

      default: break;
    }

    fill(247, 247, 247);
    textSize(25);
    text("America", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. The museum of modern art(New York)", windowWidth/60, 100);
    text("2. Statue of liberty", windowWidth/60, 125);
    text("3. Times square ", windowWidth/60, 150);
    text("4. Brooklyn Bridge ", windowWidth/60, 175);
    text("5. Coney Island", windowWidth/60, 200);
    text("6. Intrepid sea, air & space museum", windowWidth/60, 225);
    text("7. Washington square park", windowWidth/60, 250);
    text("8. Staten island ferry", windowWidth/60, 275);
    text("9. Bronx zoo", windowWidth/60, 300);
    text("10. Luna park in coney island", windowWidth/60, 325);
    text("11. Wollman rink", windowWidth/60, 350);
    text("12. Madame Tussauds San francisco(San Francisco)", windowWidth/60, 375);
    text("13. Golden gate bridge", windowWidth/60, 400);
    text("14. House of air trampoline park", windowWidth/60, 425);
    text("15. Magowan's infinite mirror maze", windowWidth/60, 450);
    text("16. Baker beach", windowWidth/60, 475);
    text("17. Millennium Park(Chicago)", windowWidth/60, 500);
    text("18. Navy Pier", windowWidth/60, 525);
    text("19. Cloud gate", windowWidth/60, 550);
    text("20. Skydeck Chicago", windowWidth/60, 575);
    text("21. Disneyland Park(Los Angeles)", windowWidth/60, 600);
    text("22. Universal studios hollywood", windowWidth/60, 625);
    text("23. Santa Monica Pier", windowWidth/60, 650);
    text("24. Hollywood Sign", windowWidth/2.5, 100);
    text("25. Sunset Blvd", windowWidth/2.5, 125);
    text("26. Hogwarts Express", windowWidth/2.5, 150);
    text("27. Hollywood & Highland", windowWidth/2.5, 175);
    text("28. Battleship USS lowa Museum", windowWidth/2.5, 200);
    text("29. Space Needle(Seattle)", windowWidth/2.5, 225);
    text("30. Woodland park zoo", windowWidth/2.5, 250);
    text("31. The museum of flight", windowWidth/2.5, 275);
    text("32. Lake union", windowWidth/2.5, 300);
    text("33. Museum of pop culture", windowWidth/2.5, 325);
    text("34. Las Vegas Mini Grand Prix Family Fun center(Las Vegas)", windowWidth/2.5, 350);
    text("35. Coca Cola Store", windowWidth/2.5, 375);
    text("36. Pinball Hall of Frame", windowWidth/2.5, 400);
    text("37. Hollywood Car Museum", windowWidth/2.5, 425);
    text("38. Wet'n Wild Las Vegas", windowWidth/2.5, 450);
    text("39. Red Rock Canyon National Conservation Area", windowWidth/2.5, 475);
    text("40. National Atomic Testing Museum", windowWidth/2.5, 500);
    text("41. Bellagio Gallery of Fine Art", windowWidth/2.5, 525);
    text("42. Bellagio Fountain", windowWidth/2.5, 550);
    text("43. Fremont Street Experience", windowWidth/2.5, 575);
    text("44. Universal Orlando Resort(Orlando)", windowWidth/2.5, 600);
    text("45. Walt Disney World Resort", windowWidth/2.5, 625);
    text("46. Epcot", windowWidth/2.5, 650);
    text("47. Disney's Hollywood Studios", windowWidth/1.5, 100);
    text("48. WonderWorks Orlando", windowWidth/1.5, 125);
    text("49. Titanic:The Artifact Exhibition", windowWidth/1.5, 150);
    text("50. LEGOLAND Florida Resort", windowWidth/1.5, 175);



  })

  but9.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 10;

    var ista =  Math.round(random(1,6));

    switch (ista) {
      case 1: background(in1);
      break;

      case 2: background(in2);
      break;

      case 3: background(in3);
      break;

      case 4: background(in4);
      break;
      
      case 5: background(in5);
      break;

      case 6: background(Istabul);
      break;
    
      default: break;
    }

    fill(47, 74, 93);
    textSize(25);
    text("Istanbul", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Grand Bazaar", windowWidth/60, windowHeight/4);
    text("2. Galata Tower", windowWidth/60, windowHeight/3.5);
    text("3. Bosphorus", windowWidth/60, windowHeight/3.1);
    text("4. Istanbul Theme Park", windowWidth/60, windowHeight/2.8);
    text("5. Emirgan Park", windowWidth/60, windowHeight/2.55);
    text("6. Madame Tussauds Istanbul", windowWidth/60, windowHeight/2.365);
    text("7. Heybeliada", windowWidth/60, windowHeight/2.2);
    text("8. Buyukada", windowWidth/60, windowHeight/2.05);
    text("9. The Blue Mosque", windowWidth/60, windowHeight/1.93);

  })

  but10.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 11;

    var italy =  Math.round(random(1,6));

    switch (italy) {
      case 1: background(italy);
      break;

      case 2: background(ita1);
      break;

      case 3: background(ita2);
      break;

      case 4: background(ita3);
      break;
      
      case 5: background(ita4);
      break;

      case 6: background(ita5);
      break;
    
      default: break;
    }

    fill(255, 154, 2);
    textSize(25);
    text("Italy", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Colosseum", windowWidth/60, windowHeight/4);
    text("2. Pantheon", windowWidth/60, windowHeight/3.5);
    text("3. Trevi Fountain", windowWidth/60, windowHeight/3.1);
    text("4. Roman Forum ", windowWidth/60, windowHeight/2.8);
    text("5. Altar of the Fatherland", windowWidth/60, windowHeight/2.55);
    text("6. Cinecitta world", windowWidth/60, windowHeight/2.365);
    text("7. Villa Borghese", windowWidth/60, windowHeight/2.2);
    text("8. Piazza di Spagna", windowWidth/60, windowHeight/2.05);
    text("9. Leaning Tower of Pisa", windowWidth/60, windowHeight/1.93);
    text("10. Sunlight Park", windowWidth/60, windowHeight/1.82);
    text("11. Rocca della Verruca", windowWidth/60, windowHeight/1.72);
    text("12. Parco delle Rimembranze", windowWidth/60, windowHeight/1.63);
    text("13. Doge's Palace", windowWidth/60, windowHeight/1.55);
    text("14. Lido di Venezia", windowWidth/60, windowHeight/1.47);
    text("15. Passo Fedaia(Northern Italy)", windowWidth/60, windowHeight/1.4);
  });

  but11.mousePressed(()=>{
    but1.hide();
    but2.hide();
    but3.hide();
    but4.hide();
    but5.hide();
    but6.hide();
    but7.hide();
    but8.hide();
    but9.hide();
    but10.hide();
    but11.hide();
    Back.show();
    more.show();
    slideshow.hide();
    place = 12;
   
    var rand =  Math.round(random(1,7));

    switch (rand) {
      case 1: background(Canada);
      break;

      case 2: background(ca1);
      break;

      case 3: background(ca2);
      break;

      case 4: background(ca3);
      break;
      
      case 5: background(ca4);
      break;

      case 6: background(ca5);
      break;

      case 7: background(ca6);
      break;
    
      default: break;
    }
    
    
    fill(39, 232, 151);
    textSize(25);
    text("Canada", windowWidth/2.1, windowHeight/20);

    fill(255, 0, 0);
    textSize(18);
    text("1. Yonge-Dundas Square(Toronto)", windowWidth/60, windowHeight/4);
    text("2. Nathan Phillips Square", windowWidth/60, windowHeight/3.5);
    text("3. High Park", windowWidth/60, windowHeight/3.1);
    text("4. CV Tower", windowWidth/60, windowHeight/2.8);
    text("5. Scarborough Bluffs Park", windowWidth/60, windowHeight/2.55);
    text("6. Toronto Railway Museum", windowWidth/60, windowHeight/2.365);
    text("7. Graffiti Alley", windowWidth/60, windowHeight/2.2);
    text("8. Canada Aviation and Space Museum(Ottawa)", windowWidth/60, windowHeight/2.05);
    text("9. Calypso Theme Waterpark", windowWidth/60, windowHeight/1.93);
    text("10. Jacques-Cartier Park", windowWidth/60, windowHeight/1.82);
    text("11. Laurier House National Historic Site", windowWidth/60, windowHeight/1.72);
    text("12. Banff National Park(Banff)", windowWidth/60, windowHeight/1.63);
    text("13. Tunnel Mountain Trail", windowWidth/60, windowHeight/1.55);
    text("14. Eureka Banff Escape Room Adventures", windowWidth/60, windowHeight/1.47);
    text("15. Mount Norquay", windowWidth/60, windowHeight/1.4);
    text("16. Aurora", windowWidth/60, windowHeight/1.34);


  });

  Back.mousePressed(()=>{
    background(travel);

    state = 0;

    but1.show();
    but2.show();
    but3.show();
    but4.show();
    but5.show();
    but6.show();
    but7.show();
    but8.show();
    but9.show();
    but10.show();
    but11.show();
    Back.hide();
    more.hide();
    slideshow.show();

   fill(17,82 ,2);
   textSize(20);
   text("Travel Ideas" , windowWidth/2.2, windowHeight/20);
    
  });

  more.mousePressed(()=>{
    openCan();
    more.hide();
    Close.show();
    Back.hide();
    
  });

  Close.mousePressed(()=>{
    closeCan();
    Close.hide();
    more.show();
    Back.show();
  });
 
}

function openCan(){
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.marginRight = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeCan(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.marginRight= "0";
  document.body.style.backgroundColor = "white";
}


