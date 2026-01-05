var cursore = document.querySelector("#cursore")
var main = document.querySelector("#main")
var scrollediv = document.querySelector("#clogo")
 var tl = gsap.timeline()


main.addEventListener("mousemove",function(elem){
      gsap.to(cursore,{
        x:elem.x,
        y:elem.y,
        duration:0.3,

      })
     
})


 gsap.to("#clogo",{
    transform:"translate(-150%)",
    scrollTrigger:{
      trigger:"#clogo",
      scroller:"body",
      start:"top 60%",
        end:"top 40%",
        scrub:2,
        pin:true

        

    }
 })


 tl.from("#navbar , #nav1 h1 , #nav2 h4 ,#nav2 button",{
  y:-80,
  duration:0.5,
  delay:0.3,
  stagger:0.3,
 })

 tl.from("#part1 h1, #part1 p, #part1 button",{
  x:-50,
  duration:0.5,
  opacity:0,
  stagger:0.5,

 })

 tl.from("#part2",{
  x:500,
  duration:0.5,
  opacity:0,
  scale:0
 },"-=0.4")

 tl.from("#clogo h4",{
  y:40,
  opacity:0,
  duration:0.4,
  stagger:0.4

 })

//  page 2

tl.from("#bdiv button",{
   x:-100,
   duration:0.2,
   opacity:0,

   scrollTrigger:{
    trigger:"#bdiv button",
    scroller:"body",
    
    start:"top 90%",
    end:"top 40%",
    scrub:3
   }
})

tl.from("#bdiv p",{
   x:400,
   duration:0.2,
   opacity:0,

   scrollTrigger:{
    trigger:"#bdiv p",
    scroller:"body",
    
    start:"top 90%",
    end:"top 60%",
    scrub:3
   }
})

tl.from(".elem1.box1",{
  x:-500,
  opacity:0,
  duration:1,

  scrollTrigger:{
    trigger:".elem1.box1",
    scroller:"body",
     
    start:"top 60%",
    end:"top 30%",
    scrub:2,
    stagger:1,

  }
})

tl.from(".elem1.box3",{
  x:-500,
  opacity:0,
  duration:1,

  scrollTrigger:{
    trigger:".elem1.box3",
    scroller:"body",
    
    start:"top 60%",
    end:"top 30%",
    scrub:2,
    stagger:1,

  }
})

tl.from(".elem2.box2",{
  x:500,
  opacity:0,
  duration:1,

  scrollTrigger:{
    trigger:".elem1.box1",
    scroller:"body",
    
    start:"top 60%",
    end:"top 30%",
    scrub:2,
    stagger:1,

  }
})

tl.from(".elem2.box4",{
  x:500,
  opacity:0,
  duration:1,

  scrollTrigger:{
    trigger:".elem2.box4",
    scroller:"body",
     
    start:"top 60%",
    end:"top 30%",
    scrub:2,
    stagger:1,

  }
})

tl.from("#par1",{
   opacity:0,
   duration:0.23,

   scrollTrigger:{
    trigger:"#par1",
    scroller:"body",
    start:"top 80%",
    end:"top 60%",
    scrub:2
   }
})

// tl.from("#par1 .lef1h2,#par1 .lef1p,#par1.lef1button",{
//   x:-200,
//    opacity:0,
//    duration:0.23,

//    scrollTrigger:{
//     trigger:"#par1 .lef1h2,#par1 .lef2p ,#par1 .lef2button",
//     scroller:"body",
//     start:"top 30%",
//     end:"top 0%",
//     scrub:2,
//     stagger:0.3
//    }
// })
tl.from("#par1 .righ1",{
  x:500,
   opacity:0,
   duration:0.23,

   scrollTrigger:{
    trigger:"#par1 .righ",
    scroller:"body",
    
    start:"top 80%",
    end:"top 30%",
    scrub:2
   }
})

tl.from("#part23 #par2",{
  x:-200,
   opacity:0,
   duration:0.23,

   scrollTrigger:{
    trigger:"#part23 #par2",
    scroller:"body",
    start:"top 80%",
    end:"top 30%",
    scrub:2,
    stagger:1
   }
})

tl.from("#part23 #par3",{
x:200,
   opacity:0,
   duration:0.23,

  scrollTrigger:{
    trigger:"#part23 #par3",
    scroller:"body",
    start:"top 70%",
    end:"top 30%",
    scrub:2,

  }
})