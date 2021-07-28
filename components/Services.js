import Image from "next/image";
import Link from "next/link";

import ContactForm from "./contactForm";

const serviceArray = [
  {
    id: "1",
    heading: "Security Training",
    content:
      "Our training Wing is staffed with professional security experts to keep themselves abreast of latest developments in security techniques.",
    img: "service-01.png",
  },
  {
    id: "2",
    heading: "Fire Prevention Services",
    content:
      "We are a trusted partner in qualified design, supply, installation and maintenance of all types of fire fighting & fire prevention systems.",
    img: "service-02.png",
  },
  {
    id: "3",
    heading: "Manpower Services",
    content:
      "Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or muliti-site entry points.",
    img: "service-03.png",
  },
  {
    id: "4",
    heading: "Personal Security",
    content:
      "We provide private security guards, with or without ammunition, to secure you, your personal space, or your loved ones.",
    img: "service-04.png",
  },
];
const contactArray = [
  {
    id: "1",
    heading: "Cost Effective",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.",
    img: "c-01.png",
  },
  {
    id: "2",
    heading: "24/7 Services",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.",
    img: "c-02.png",
  },
  {
    id: "3",
    heading: "Flat Rate Fees",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.",
    img: "c-03.png",
  },
];

export default function Services() {
  return (
    <>
      <section className="services" id="service">
        {serviceArray.map((service) => (
          <Card content={service} key={service.id} />
        ))}
      </section>
      <section className="about">
        <div className="container">
          <h1 className="h2">We Have 20 Years of Experience</h1>
          <span className="underline"></span>
          <p className="p">
            We, the Frontline Security Guard Services, are the leader in the
            field of Security Guards of Every Requirement is Registered under
            the Private Security Agencies (Regulation) Act, 2005. We provide
            Security Guards Services, Armed Guards Security Services, Trained
            Security Guards Services, Gun Man Security Services, VIP and
            Executive Security services, Corporate Security Services, Industrial
            Security Guards Services, Domestic Security Guards Services, Project
            and Event Security Services, Personal Body guards, Security Guards
            Training, Security Guards Recruitment Services, Security
            supervisors, Guarding Services Lady Security Officers Lucknow India.
            These cost effective services successfully meet the desired
            requirement of our clients.
          </p>
          <div className="cta">
            <Link href="#">
              <a className="btn-primary">CONTACT US</a>
            </Link>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="why-choose-us">
            <h2 className="h2">Why Choose Us</h2>
            <span className="underline"></span>
            <p className="p">
              At Frontline Security, our security personnel understand the
              specialized needs of customer environment.
            </p>
            {contactArray.map((item) => (
              <Card content={item} key={item.id} />
            ))}
          </div>
          <div className="contact-form" id="contact">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

const Card = ({ content }) => {
  return (
    <div className="service-card">
      <div className="service-img">
        <Image
          src={`/${content.img}`}
          alt="webCam"
          height={60}
          width={65}
          layout="intrinsic"
        />
      </div>
      <div className="service-content">
        <h2>{content.heading}</h2>
        <p>{content.content}</p>
      </div>
    </div>
  );
};
