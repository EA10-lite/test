import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Section2 from "./Section2";

import "./styles/test.css";

export default function Test() {
  const scroller = useRef();
  const parentContainer = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector(".scroller");
    const bodyScrollBar = Scrollbar.init(scroller);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const sections = gsap.utils.toArray('.item');
    console.log(sections);

    window.onload = function(){

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#horizontal",
                start: "top top",
                scrub: true,
                pin: true,
                // snap: 1 / (sections.length - 1),
                scroller: scroller,
                // end: () => "+=" + parentContainer.current.offsetWidth,
                // invalidateOnRefresh: true,
            }
        })
    }

    // gsap.to(".horizontal", {
    //     duration: 4,
    //     x: 1000,
    //     scrollTrigger: {
    //         trigger: '#horizontal',
    //         start: "top center",
    //         scroller: scroller,
    //         toggleActions: "play none none reverse"
    //     }
    // })

    // horizontalSections.forEach(function (sec, i) {  
    
    //     var thisPinWrap = sec.querySelector('.pin-wrap');
    //     var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
        
    //     var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

    //     gsap.fromTo(thisAnimWrap, { 
    //         x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: sec,   
    //             // scroller: document.body, // neccessary setting for smooth-scrollbar on body
    //             pinType: 'transform', // neccessary setting for smooth-scrollbar on body
    //             start: "top top",
    //             end: () => "+=" + thisAnimWrap.scrollWidth,
    //             pin: thisPinWrap,
    //             invalidateOnRefresh: true,
    //             anticipatePin: 1,
    //             scrub: true,
    //             //markers: true,
    //         }
    //     });

    // });
    // gsap.to(".box" , {
    //     duration: 4,
    //     borderRadius: '50%',
    //     scale: 100,
    //     x: 1000,
    //     scale: 1.5,
    //     scrollTrigger: {
    //         trigger: "#box",
    //         start: "top center",
    //         scroller: scroller,
    //         toggleActions: "play none none reset"
    //     }
    // })

    gsap.to(".box",{
        width: "100vh",
        height: "100vh",
        scale: 10,
        ease: true,
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            scrub: true,
            markers: true,
            scroller: scroller,
        }
    })

  }, []);

  return (
    <div className="App">
      <div ref={scroller} className="scroller">
        <div className="section section--1">
          <h1>
            React (CRA)
            <br />
            ScrollTrigger / smooth scrollbar
          </h1>
        </div>
        
        <section className="blank">
            <h1>ScrollTrigger and smooth-scrollbar demo</h1>
            <p>...</p>
        </section>

        <div id="section2" className="section section--2">
            <div id="box" className="box">
                {/* <h3>.box</h3> */}
            </div>
        </div>
        
        <section className="horizontal" id="horizontal">
            <div className="pin-wrap" id="pinThis-0">
                <div className="animation-wrap to-right" id="animateThis-0" ref={parentContainer}>
                
                <div className="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
                <div className="item">Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt ipsum repellendus totam optio distinctio. Laborum suscipit quia aperiam.</div>
                <div className="item">Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla impedit, dolores ullam hic commodi nobis nam. Dolorem expedita laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a quibusdam inventore!</div>
                <div className="item">Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa unde perspiciatis minima.</div>
                <div className="item">Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam ducimus delectus reprehenderit unde, non laborum voluptate laboriosam, officiis at ea!</div>
                <div className="item">Rem nobis facere provident magni minima iste commodi aliquam harum? Facere error quos cumque perspiciatis voluptatibus deserunt maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias ipsam placeat voluptas!</div>
                <div className="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
                <div className="item">Magnam eveniet inventore assumenda ullam. At saepe voluptatibus sed dicta reiciendis, excepturi nisi perferendis, accusantium est suscipit tempora dolorum praesentium cupiditate doloribus non? Sint numquam recusandae dolore quis esse ea?</div>
                <div className="item">Temporibus cum dolor minima consequatur esse veritatis enim nemo cupiditate laborum doloribus reiciendis perferendis, quas fugit earum rerum, at beatae alias amet aspernatur dolorem dolore error commodi. Perspiciatis, reiciendis amet!</div>
                <div className="item">Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!</div>
            
                </div>
            </div>
        </section>
        
        
        <section className="blank">
        <h1>Nothing to see here...</h1>
        <p>...</p>
        </section>
        
        
        
        {/* <section className="horizontal">
        <div className="pin-wrap" id="pinThis-1">
            <div className="animation-wrap to-left" id="animateThis-1">
            <div className="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
            <div className="item">Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt ipsum repellendus totam optio distinctio. Laborum suscipit quia aperiam.</div>
            <div className="item">Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla impedit, dolores ullam hic commodi nobis nam. Dolorem expedita laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a quibusdam inventore!</div>
            <div className="item">Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa unde perspiciatis minima.</div>
            <div className="item">Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam ducimus delectus reprehenderit unde, non laborum voluptate laboriosam, officiis at ea!</div>
            <div className="item">Rem nobis facere provident magni minima iste commodi aliquam harum? Facere error quos cumque perspiciatis voluptatibus deserunt maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias ipsam placeat voluptas!</div>
            <div className="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
            <div className="item">Magnam eveniet inventore assumenda ullam. At saepe voluptatibus sed dicta reiciendis, excepturi nisi perferendis, accusantium est suscipit tempora dolorum praesentium cupiditate doloribus non? Sint numquam recusandae dolore quis esse ea?</div>
            <div className="item">Temporibus cum dolor minima consequatur esse veritatis enim nemo cupiditate laborum doloribus reiciendis perferendis, quas fugit earum rerum, at beatae alias amet aspernatur dolorem dolore error commodi. Perspiciatis, reiciendis amet!</div>
            <div className="item">Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!</div>
        
            </div>
        </div>
        </section> */}
        
        <section className="blank">
        <h1>...little laggy, isn't it?</h1>
        <p>...</p>
        </section>
      </div>
    </div>
  );
}
