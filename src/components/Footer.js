import React from "react";

function Footer() {
  return (
    <footer className="mt-5 py-3 bg-dark text-light">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} リミットネス Gym. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
