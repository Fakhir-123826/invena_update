// components/TrustedClients.jsx (with animation)
import React, { useEffect, useRef } from "react";

const TrustedClients = () => {
  const sectionRef = useRef(null);
  
  const clientLogos = [
    { id: 1, image: "/assets/images/brands/01.webp", alt: "Business_client" },
    { id: 2, image: "/assets/images/brands/02.webp", alt: "Business_client" },
    { id: 3, image: "/assets/images/brands/03.webp", alt: "Business_client" },
    { id: 4, image: "/assets/images/brands/04.webp", alt: "Business_client" },
    { id: 5, image: "/assets/images/brands/05.webp", alt: "Business_client" },
    { id: 6, image: "/assets/images/brands/06.webp", alt: "Business_client" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.single');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="rts-trusted-client" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area-client-client text-center">
              <p className="client-title">Our Trusted Clients</p>
            </div>
          </div>
        </div>
        
        <div className="row mt--65">
          <div className="col-lg-12">
            <div className="client-three-wrapper">
              {clientLogos.map((client) => (
                <div key={client.id} className="single">
                  <img 
                    src={client.image} 
                    alt={client.alt} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;