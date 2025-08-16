"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const contentRefs = useRef([]);
  const visionRef = useRef(null);

  // === Animate "Why Infinitas?" section ===
  useEffect(() => {
    const about = aboutRef.current;
    const paragraphs = about.querySelectorAll("p");

    ScrollTrigger.create({
      trigger: about,
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: true,
    });

    paragraphs.forEach((p) => {
      const text = p.textContent;
      p.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        span.style.display = "inline-block";
        p.appendChild(span);
      });

      const spans = p.querySelectorAll("span");
      gsap.set(spans, { opacity: 0.2, y: 0 });  //Opacity text

      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.01,
        ease: "power1.out",
        scrollTrigger: {
          trigger: p,
          start: "top 30%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);

  // === Animate "Who We Are" card section ===
  useEffect(() => {
    const card = cardRef.current;

    // Card animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
        x: -60,
        rotateZ: -15,
        scale: 0.95,
      },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
        opacity: 1,
        y: 0,
        x: 0,
        rotateZ: 0,
        scale: 1,
        ease: "power3.out",
      }
    );
    // Content stagger reveal
    gsap.from(contentRefs.current, {
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  // ===  Our Values ===
  useEffect(() => {
    const container = visionRef.current;
    const sections = container.querySelectorAll("div");
    const totalScrollWidth = container.scrollWidth - container.clientWidth;

    ScrollTrigger.create({
      trigger: container,
      start: "top 0%",
      end: () => `+=${totalScrollWidth + 500}`,
      pin: true,
      scrub: true,
      // markers: true,
    });

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { x: 500 },
        {
          x: -1900,
          scrollTrigger: {
            trigger: container,
            start: "top 15%",
            end: () => `+=${totalScrollWidth + 500}`,
            scrub: true,
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="about-us-container">
      {/* WHY INFINITAS */}
      <section className="about-section" ref={aboutRef}>
        <h1 className="about-title">Why Infinitas ?</h1>
        <p className="about-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam nam, expedita minus atque saepe et quaerat aspernatur praesentium dolore asperiores suscipit sint libero sed doloremque repellendus quas quasi, officia fuga! Vel praesentium temporibus non dolores alias a sequi dicta distinctio accusamus velit quo deserunt voluptatibus repudiandae, consequatur suscipit provident omnis voluptas consequuntur. Vel alias minima saepe quidem totam, soluta nulla veritatis laudantium ducimus aperiam necessitatibus, iste quos sequi qui, maiores dolorem dolores nisi. Placeat dignissimos ullam, sunt, nobis explicabo est dolore consequuntur possimus, dolores sint cumque quos recusandae quo!
        </p>
      </section>

      {/* WHO WE ARE CARD */}
      <section
        className="about-section-wrapper"
        style={{ position: "relative" }}
      >
        <div
          className="about-who-we-are"
          ref={cardRef}
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="about-who-we-content">
            <h1 ref={(el) => (contentRefs.current[0] = el)}>Who We Are</h1>
            <p ref={(el) => (contentRefs.current[1] = el)}>
              Lorem ipsum dolor sit amet consectetur...
            </p>
          </div>
          <div className="about-who-experience">
            <div
              className="about-experience"
              ref={(el) => (contentRefs.current[2] = el)}
            >
              <h1 className="about-experience-title">30 Years</h1>
              <p>in Business</p>
            </div>
            <div
              className="about-clients"
              ref={(el) => (contentRefs.current[3] = el)}
            >
              <h1 className="about-clients-title">250+ Clients</h1>
              <p>across the globe</p>
            </div>
            <div
              className="about-Project"
              ref={(el) => (contentRefs.current[4] = el)}
            >
              <h1 className="about-Project-title">100+ Projects</h1>
              <p>completed successfully</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-our-value-wrapper">
        <div
          className="about-our-values"
          ref={visionRef}
          style={{ background: "#eee", padding: "4rem 2rem" }}
        >
          <div className="about-our-values-heading">
            <h1>Our Values</h1>
          </div>
          <div className="about-values-01">
            <h1 className="about-values-title">01</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore est optio nulla quidem
              atque?
            </p>
          </div>
          <div className="about-values-02">
            <h1 className="about-values-title">02</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore es optio nulla quidem
              atque?
            </p>
          </div>
          <div className="about-values-03">
            <h1 className="about-values-title">03</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore est opt io nulla
              quidem atque?
            </p>
          </div>
          <div className="about-values-04">
            <h1 className="about-values-title">04</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore est opt io nulla
              quidem atque?
            </p>
          </div>
          <div className="about-values-05">
            <h1 className="about-values-title">05</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore est opt io nulla
              quidem atque?
            </p>
          </div>
          <div className="about-values-05">
            <h1 className="about-values-title">06</h1>
            <p className="about-values-para">
              Lorem ipsum dolor sit amet6 consectetur adipisicing elit. Fuga,
              obcaecati quia quod iste dignissimos dolore est opt io nulla
              quidem atque?
            </p>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="about-vision-mission">
        <div className="about-vision"></div>
        <div className="about-mission"></div>
      </section>
      {/* Vision & Mission */}
    </div>
  );
}
