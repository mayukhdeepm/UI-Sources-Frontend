import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Description.css';

const Description = () => {
  return (
    <div className="description-container">
      <nav className="sidebar4">
        <ul>
          <li className="active">ABOUT</li>
          <div className="divider"></div>

          <li>DETAILS</li>
          <div className="divider"></div>

          <li>HANDHELD SCREENSHOTS</li>
          <div className="divider"></div>

          <li>MOBILE SCREENSHOTS</li>
          <div className="divider"></div>

          <li>TABLET SCREENSHOTS</li>
        </ul>
      </nav>
      <main className="main-content">
        <section className="about">
          <h2>ABOUT</h2>
          <p>
            Discover a new dimension in photography with Polycam, the top-rated 3D capture app for Android. Ideal for
            architects, artists, designers, contractors, photographers, and anyone who wants to capture the world in a new
            way. Polycam offers innovative technology and advanced editing tools to bring your creativity to life.
          </p>
          <button className="read-more">Read more</button>
        </section>
        <div className="divider"></div>

        <section className="details">
          <h2>DETAILS</h2>
          <div className="details-grid">
            <div>
              <h3>Released on</h3>
              <p>May 8, 2023</p>
            </div>
            <div>
              <h3>Version</h3>
              <p>1.16.0</p>
            </div>
            <div>
              <h3>Size</h3>
              <p>300 MB</p>
            </div>
            <div>
              <h3>In app purchases</h3>
              <p>$0.99 - $99.99 per item</p>
            </div>
            <div>
              <h3>iPhone</h3>
              <p>Requires iOS 16.0 or later</p>
            </div>
            <div>
              <h3>Android</h3>
              <p>Requires v7.0 and later</p>
            </div>
          </div>
        </section>
        <div className="divider"></div>

        <section className="techstacks">
          <h2>TECHSTACKS</h2>
          <div className="techstack-grid">
            <div className="techstack-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxPAshO66Lk-refPUzQGoO4ki6mQkPfIvQLRQW-yXq6fy8OzWTXnnFFIdMuOmbH77OnI&usqp=CAU" alt="AR Toolkit" />
        <div className="divider"></div>

              <h3>AR Toolkit</h3>
              <p>40 APPS</p>
            </div>
            <div className="techstack-item">
              <img src="https://s.cafebazaar.ir/images/icons/com.google.ar.core-f98ba503-fa24-4515-bd40-0e73e94ec1e1_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="Google AR Core" />
        <div className="divider"></div>

              <h3>Google AR Core</h3>
              <p>BY NIANTIC INC.</p>
            </div>
            <div className="techstack-item">
              <img src="https://developer.apple.com/assets/elements/icons/arkit/arkit-128x128_2x.png" alt="Apple AR kit" />
        <div className="divider"></div>

              <h3>Apple AR kit</h3>
              <p>BY NIANTIC INC.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Description;