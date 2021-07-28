import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="banner ">
      <Image
        priority
        style={{ position: "absolute" }}
        src="/hero-1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        alt="to security personnels talking"
      />
      <div className="container row">
        <div className="banner-text">
          <h3>Frontline Security & Manpower</h3>
          <h1>Security Service</h1>
          <p>
            We are the leading security agency in Uttar Pradesh, specializing in
            private security in the Lucknow Region.
          </p>
          <div className="cta">
            <Link href="/work-with-us">
              <a className="btn-primary">Apply for job</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
