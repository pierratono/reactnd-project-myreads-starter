import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <figure className="not-found-gif">
        <img
          src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
          alt="Page Not Found"
        />
      </figure>
      <figcaption style={{ textAlign: "center" }}>
        GIF by MINI Italia - https://gph.is/2EXDRe3
      </figcaption>

      <div className="home-link">
        <Link to="/">Return to MyReads App</Link>
      </div>
      <p className="home-copyright">
        Copyright © {new Date().getFullYear()} Pierratono Costa MAHORO
      </p>
    </div>
  );
}
