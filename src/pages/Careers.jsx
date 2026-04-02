// // pages/Careers.jsx
// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaClock, FaGraduationCap, FaHeart, FaUsers, FaCoffee, FaLaptop, FaTree } from "react-icons/fa";

// const Careers = () => {
//   const [selectedLocation, setSelectedLocation] = useState("all");

//   const openPositions = [
//     {
//       id: 1,
//       title: "Senior Cloud Architect",
//       department: "Cloud Services",
//       location: "New York, NY",
//       type: "Full-time",
//       experience: "5+ years",
//       description: "Lead cloud migration and architecture projects for enterprise clients."
//     },
//     {
//       id: 2,
//       title: "Cybersecurity Consultant",
//       department: "Cybersecurity",
//       location: "Remote",
//       type: "Full-time",
//       experience: "3+ years",
//       description: "Conduct security assessments and implement security frameworks."
//     },
//     {
//       id: 3,
//       title: "Full Stack Developer",
//       department: "Application Development",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       experience: "2+ years",
//       description: "Build custom applications using modern frameworks."
//     },
//     {
//       id: 4,
//       title: "Data Scientist",
//       department: "Data & AI",
//       location: "Austin, TX",
//       type: "Full-time",
//       experience: "3+ years",
//       description: "Develop machine learning models and data analytics solutions."
//     },
//     {
//       id: 5,
//       title: "DevOps Engineer",
//       department: "Cloud Services",
//       location: "Remote",
//       type: "Full-time",
//       experience: "4+ years",
//       description: "Implement CI/CD pipelines and infrastructure automation."
//     },
//     {
//       id: 6,
//       title: "IT Support Specialist",
//       department: "Managed IT Services",
//       location: "Chicago, IL",
//       type: "Full-time",
//       experience: "2+ years",
//       description: "Provide technical support and infrastructure management."
//     },
//   ];

//   const locations = ["all", "New York, NY", "San Francisco, CA", "Austin, TX", "Chicago, IL", "Remote"];

//   const filteredPositions = selectedLocation === "all" 
//     ? openPositions 
//     : openPositions.filter(p => p.location === selectedLocation);

//   const benefits = [
//     { icon: <FaHeart />, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
//     { icon: <FaGraduationCap />, title: "Learning & Development", description: "$5,000 annual education stipend" },
//     { icon: <FaUsers />, title: "Collaborative Culture", description: "Team events and social activities" },
//     { icon: <FaCoffee />, title: "Work-Life Balance", description: "Flexible hours and remote options" },
//     { icon: <FaLaptop />, title: "Modern Tech Stack", description: "Latest tools and equipment" },
//     { icon: <FaTree />, title: "Wellness Programs", description: "Gym membership and wellness stipend" },
//   ];

//   return (
//     <>
//       {/* Banner */}
//       <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/careers-banner.webp')", height: "450px", display: "flex", alignItems: "center" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left text-center">
//                 <h1 className="title">Join Our Team</h1>
//                 <p className="disc">Build your career at Nex7 - where innovation meets opportunity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Life at Nex7 Section */}
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-6">
//               <div className="title-style-one left">
//                 <span className="pre">Life at Nex7</span>
//                 <h2 className="title">A Culture of Innovation</h2>
//               </div>
//               <p className="disc">
//                 At Nex7, we believe that great technology is built by great people. 
//                 We foster a culture of collaboration, continuous learning, and innovation.
//               </p>
//               <div className="row mt--40">
//                 <div className="col-md-6">
//                   <h4>Our Values</h4>
//                   <ul className="list-unstyled">
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Innovation First</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Client Success</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Integrity</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Excellence</li>
//                   </ul>
//                 </div>
//                 <div className="col-md-6">
//                   <h4>Perks</h4>
//                   <ul className="list-unstyled">
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Competitive Salary</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Stock Options</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> 401(k) Matching</li>
//                     <li className="mb-2"><FaHeart className="text-primary me-2" /> Unlimited PTO</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="thumbnail">
//                 <img src="/assets/images/life-at-nex7.webp" alt="Life at Nex7" className="w-100 rounded-3" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="rts-section-gap bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <span className="pre">Employee Benefits</span>
//                 <h2 className="title">We Take Care of Our Team</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="col-lg-4 col-md-6">
//                 <div className="benefit-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                   <div style={{ fontSize: "40px", color: "#09637E", marginBottom: "15px" }}>{benefit.icon}</div>
//                   <h4>{benefit.title}</h4>
//                   <p>{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Graduate & Internship Programs */}
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-6">
//               <div className="thumbnail">
//                 <img src="/assets/images/internship-program.webp" alt="Internship Program" className="w-100 rounded-3" />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="title-style-one left">
//                 <span className="pre">Early Career</span>
//                 <h2 className="title">Graduate & Internship Programs</h2>
//               </div>
//               <p className="disc">
//                 Kickstart your career with Nex7's award-winning graduate program. 
//                 Gain hands-on experience, mentorship from industry leaders, and 
//                 opportunities to work on real-world projects.
//               </p>
//               <ul className="list-unstyled mt-3">
//                 <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> 12-week structured training</li>
//                 <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Mentorship program</li>
//                 <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Project-based learning</li>
//                 <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Full-time conversion opportunities</li>
//               </ul>
//               <a className="rts-btn btn-primary mt-4" href="#">Apply for Internship</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Open Positions */}
//       <div className="rts-section-gap bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <span className="pre">Join Our Team</span>
//                 <h2 className="title">Open Positions</h2>
//               </div>
//               <div className="location-filters text-center mt--30 mb--40">
//                 <ul className="nav-project-tab justify-content-center flex-wrap">
//                   {locations.map(loc => (
//                     <li key={loc}>
//                       <button 
//                         className={`${selectedLocation === loc ? "active" : ""}`}
//                         onClick={() => setSelectedLocation(loc)}
//                       >
//                         {loc === "all" ? "All Locations" : loc}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               {filteredPositions.map(position => (
//                 <div key={position.id} className="single-open-career">
//                   <div className="left-side">
//                     <h3 className="title">{position.title}</h3>
//                     <div className="bottom">
//                       <div className="single">
//                         <i className="fa-regular fa-building"></i>
//                         <span>{position.department}</span>
//                       </div>
//                       <div className="single">
//                         <FaMapMarkerAlt />
//                         <span>{position.location}</span>
//                       </div>
//                       <div className="single">
//                         <FaClock />
//                         <span>{position.type}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="right-side">
//                     <div className="bottom">
//                       <div className="single">
//                         <p>{position.description}</p>
//                         <span>Experience: {position.experience}</span>
//                       </div>
//                       <a href="#" className="rts-btn btn-primary">Apply Now</a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hiring Process Section */}
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <span className="pre">How We Hire</span>
//                 <h2 className="title">Our Hiring Process</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             <div className="col-md-3">
//               <div className="process-step text-center">
//                 <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>1</div>
//                 <h5>Application Review</h5>
//                 <p>Submit your application and resume</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="process-step text-center">
//                 <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>2</div>
//                 <h5>Initial Screening</h5>
//                 <p>Phone interview with recruiter</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="process-step text-center">
//                 <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>3</div>
//                 <h5>Technical Assessment</h5>
//                 <p>Skills evaluation and project review</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="process-step text-center">
//                 <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>4</div>
//                 <h5>Final Interview</h5>
//                 <p>Team interview and offer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Careers;


// pages/Careers.jsx
import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaGraduationCap, FaHeart, FaUsers, FaCoffee, FaLaptop, FaTree } from "react-icons/fa";
import { useJobOpenings, useSiteSettings } from "../hooks/useWordPressData";

const Careers = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const { jobs, loading: jobsLoading, error: jobsError } = useJobOpenings();
  const { settings, loading: settingsLoading } = useSiteSettings();

  // Extract unique locations from jobs
  const getUniqueLocations = () => {
    if (!jobs || jobs.length === 0) return ["all", "New York, NY", "San Francisco, CA", "Austin, TX", "Chicago, IL", "Remote"];
    
    const locations = [...new Set(jobs.map(job => job.acf?.location || job.location || "Remote"))];
    return ["all", ...locations];
  };

  const locations = getUniqueLocations();

  const filteredPositions = selectedLocation === "all" 
    ? jobs || [] 
    : (jobs || []).filter(job => {
        const jobLocation = job.acf?.location || job.location;
        return jobLocation === selectedLocation;
      });

  // Static benefits data (can also be moved to WordPress if needed)
  const benefits = [
    { icon: <FaHeart />, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: <FaGraduationCap />, title: "Learning & Development", description: "$5,000 annual education stipend" },
    { icon: <FaUsers />, title: "Collaborative Culture", description: "Team events and social activities" },
    { icon: <FaCoffee />, title: "Work-Life Balance", description: "Flexible hours and remote options" },
    { icon: <FaLaptop />, title: "Modern Tech Stack", description: "Latest tools and equipment" },
    { icon: <FaTree />, title: "Wellness Programs", description: "Gym membership and wellness stipend" },
  ];

  // Static values data (can also be moved to WordPress)
  const values = [
    { icon: <FaHeart />, title: "Innovation First", description: "We embrace cutting-edge technology" },
    { icon: <FaHeart />, title: "Client Success", description: "Your success is our success" },
    { icon: <FaHeart />, title: "Integrity", description: "Transparent and ethical dealings" },
    { icon: <FaHeart />, title: "Excellence", description: "Delivering high-quality solutions" },
  ];

  const perks = [
    { icon: <FaHeart />, title: "Competitive Salary", description: "Market-leading compensation" },
    { icon: <FaHeart />, title: "Stock Options", description: "Share in our success" },
    { icon: <FaHeart />, title: "401(k) Matching", description: "Secure your future" },
    { icon: <FaHeart />, title: "Unlimited PTO", description: "Work-life balance" },
  ];

  const hiringProcess = [
    { step: "1", title: "Application Review", description: "Submit your application and resume" },
    { step: "2", title: "Initial Screening", description: "Phone interview with recruiter" },
    { step: "3", title: "Technical Assessment", description: "Skills evaluation and project review" },
    { step: "4", title: "Final Interview", description: "Team interview and offer" },
  ];

  if (jobsLoading) {
    return (
      <div className="rts-section-gap text-center">
        <div className="loader"></div>
        <p>Loading career opportunities...</p>
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/careers-banner.webp')", height: "450px", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left text-center">
                <h1 className="title">{settings?.careers_title || "Join Our Team"}</h1>
                <p className="disc">{settings?.careers_subtitle || "Build your career at Nex7 - where innovation meets opportunity"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Life at Nex7 Section */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="title-style-one left">
                <span className="pre">{settings?.life_at_nex7_pre || "Life at Nex7"}</span>
                <h2 className="title">{settings?.life_at_nex7_title || "A Culture of Innovation"}</h2>
              </div>
              <p className="disc">
                {settings?.life_at_nex7_description || 
                  "At Nex7, we believe that great technology is built by great people. We foster a culture of collaboration, continuous learning, and innovation."}
              </p>
              <div className="row mt--40">
                <div className="col-md-6">
                  <h4>Our Values</h4>
                  <ul className="list-unstyled">
                    {values.map((value, index) => (
                      <li key={index} className="mb-2">
                        {React.cloneElement(value.icon, { className: "text-primary me-2" })}
                        {value.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Perks</h4>
                  <ul className="list-unstyled">
                    {perks.map((perk, index) => (
                      <li key={index} className="mb-2">
                        {React.cloneElement(perk.icon, { className: "text-primary me-2" })}
                        {perk.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail">
                <img 
                  src={settings?.life_at_nex7_image || "/assets/images/life-at-nex7.webp"} 
                  alt="Life at Nex7" 
                  className="w-100 rounded-3" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">{settings?.benefits_pre || "Employee Benefits"}</span>
                <h2 className="title">{settings?.benefits_title || "We Take Care of Our Team"}</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="benefit-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
                  <div style={{ fontSize: "40px", color: "#09637E", marginBottom: "15px" }}>{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graduate & Internship Programs */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img 
                  src={settings?.internship_image || "/assets/images/internship-program.webp"} 
                  alt="Internship Program" 
                  className="w-100 rounded-3" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-style-one left">
                <span className="pre">{settings?.internship_pre || "Early Career"}</span>
                <h2 className="title">{settings?.internship_title || "Graduate & Internship Programs"}</h2>
              </div>
              <p className="disc">
                {settings?.internship_description || 
                  "Kickstart your career with Nex7's award-winning graduate program. Gain hands-on experience, mentorship from industry leaders, and opportunities to work on real-world projects."}
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> 12-week structured training</li>
                <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Mentorship program</li>
                <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Project-based learning</li>
                <li className="mb-2"><FaGraduationCap className="text-primary me-2" /> Full-time conversion opportunities</li>
              </ul>
              <a className="rts-btn btn-primary mt-4" href="/contact">Apply for Internship</a>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">{settings?.open_positions_pre || "Join Our Team"}</span>
                <h2 className="title">{settings?.open_positions_title || "Open Positions"}</h2>
              </div>
              <div className="location-filters text-center mt--30 mb--40">
                <ul className="nav-project-tab justify-content-center flex-wrap">
                  {locations.map(loc => (
                    <li key={loc}>
                      <button 
                        className={`${selectedLocation === loc ? "active" : ""}`}
                        onClick={() => setSelectedLocation(loc)}
                      >
                        {loc === "all" ? "All Locations" : loc}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {jobsError && (
                <div className="alert alert-danger text-center">
                  Error loading job openings. Please try again later.
                </div>
              )}
              
              {!jobsError && filteredPositions.length === 0 && !jobsLoading && (
                <div className="text-center py-5">
                  <h4>No open positions at this time</h4>
                  <p>Check back soon for new opportunities!</p>
                </div>
              )}
              
              {filteredPositions.map(position => (
                <div key={position.id} className="single-open-career">
                  <div className="left-side">
                    <h3 className="title">{position.title.rendered}</h3>
                    <div className="bottom">
                      <div className="single">
                        <i className="fa-regular fa-building"></i>
                        <span>{position.acf?.department || position.categories?.[0]?.name || "Technology"}</span>
                      </div>
                      <div className="single">
                        <FaMapMarkerAlt />
                        <span>{position.acf?.location || position.location || "Remote"}</span>
                      </div>
                      <div className="single">
                        <FaClock />
                        <span>{position.acf?.employment_type || position.type || "Full-time"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="bottom">
                      <div className="single">
                        <div dangerouslySetInnerHTML={{ __html: position.excerpt.rendered || position.content.rendered.substring(0, 200) }} />
                        <span>Experience: {position.acf?.experience || position.experience || "2+ years"}</span>
                      </div>
                      <a href="#" className="rts-btn btn-primary apply-btn" data-job-id={position.id}>Apply Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Process Section */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">{settings?.hiring_process_pre || "How We Hire"}</span>
                <h2 className="title">{settings?.hiring_process_title || "Our Hiring Process"}</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {hiringProcess.map((step, index) => (
              <div key={index} className="col-md-3">
                <div className="process-step text-center">
                  <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
                    {step.step}
                  </div>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;