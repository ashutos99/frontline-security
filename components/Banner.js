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
          <h1>Security Services</h1>
          <p>
          We, the Frontline Security, are the leader in the field of Security Guards of Every Requirement is Registered under the Private Security Agencies (Regulation) Act, 2005. We are inviting applications for different posts in our company kindly fill your details at Apply Online Page.
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
