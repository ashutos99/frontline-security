import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h2 className="h2">Frontline Security & Manpower</h2>
        <span className="underline"></span>
        <div className="footer-wrapper">
          <div className="footer-card">
            <h2>
              About <span>us</span>
            </h2>
            <p>
              We are the leading security agency in Uttar Pradesh, specializing
              in private security in the Lucknow Region
            </p>
          </div>
          <div className="footer-card">
            <h2>
              Contact <span>us</span>
            </h2>
            <p>
              L-11/85, Sec-H, Aliganj, Lucknow
              <br /> Uttar Pradesh
              <br /> P : +91-9984-183-277
              <br /> F : 0522-4233205
              <br /> E : expu@email.com
            </p>
          </div>
        </div>
        <div className="last">
          All Rights Reserved. Frontline Securities & Manpower Company. 2020
        </div>
      </div>
    </footer>
  );
}
