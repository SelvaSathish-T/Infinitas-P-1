import React from "react";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid-section">
        <div className="footer-heading">
          <h2>infinitas</h2>
        </div>
        <div className="footer-grid-item-1">
          <div className="footer-item">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Service</Link>
            <Link href="">Industrie</Link>
            <Link href="">Team</Link>
            <Link href="">Careers</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <div className="footer-grid-item-2">
          <Link href="mailto:/">info@infinitasadvisory.com</Link>
        </div>
        <div className="footer-grid-item-3">
          <Link href="tel:/">+91 9840159274</Link>
        </div>
        <div className="footer-grid-item-4">
          <div className="footer-item">
            <Link href="">Terms of Service</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Cookie Policy</Link>
          </div>
        </div>
        <div className="footer-grid-item-5">
          <div className="footer-item">
            <Link href="">Follow us on social media</Link>
            <Link href="">Facebook</Link>
            <Link href="">Twitter</Link>
            <Link href="">LinkedIn</Link>
            <Link href="">Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
