'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const bannerRef = useRef(null);
  const homeBannerRef = useRef(null);
  const gridCenterRef = useRef(null);
  const collageRef = useRef(null);
  const collageImagesRefs = useRef([]);

  useEffect(() => {
    const banner = bannerRef.current;
    const homeBanner = homeBannerRef.current;
    const gridCenter = gridCenterRef.current;
    const collage = collageRef.current;
    const collageImages = collageImagesRefs.current;

    // Hide grid collage initially
    gsap.set(collage, { opacity: 0, pointerEvents: 'none' });
    gsap.set(collageImages, { opacity: 0, filter: 'blur(12px)' });

    const moveDistance = 200; // Adjust for your layout

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeBanner,
        start: 'top 4%',
        end: 'top -45%', // Adjust for when to show grid
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
        onLeave: () => {
          // Pin banner in grid center after finished scrolling
          banner.style.transform = 'none';
          gridCenter.appendChild(banner);
        },
        onEnterBack: () => {
          banner.style.transform = 'none';
          homeBanner.appendChild(banner);
        }
      }
    });

    tl.to(banner, {
      scale: 0.15,
      y: moveDistance,
      ease: 'power1.inOut',
    }, 0);

    // Fade in grid collage & images as banner nears final position
    tl.to(collage, {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.3,
      ease: 'power1.out'
    }, '-=0.2'); // Fade in collage just before banner reaches target

    collageImages.forEach((img, i) => {
      tl.to(img, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        ease: 'power1.out',
      }, 0.5 + i * 0.15);
    });
  }, []);

  // Collect refs for grid images
  const addCollageRef = (el, index) => {
    if (el && !collageImagesRefs.current.includes(el)) {
      collageImagesRefs.current[index] = el;
    }
  };

  return (
    <div className="home-section">
      <div className="home-container">
        <div className="home-banner" ref={homeBannerRef}>
          <img
            ref={bannerRef}
            className="home-image"
            src="/image.png"
            alt="Banner"
          />
        </div>
        <div className="home-content"></div>
      </div>
    </div>
  );
}
