// // pages/Insights.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaCalendar, FaUser, FaTag } from "react-icons/fa";

// const Insights = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categories = ["all", "Articles", "Whitepapers", "Webinars", "News"];

//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Future of Digital Transformation in 2024",
//       category: "Articles",
//       author: "Sarah Johnson",
//       date: "Jan 15, 2024",
//       excerpt: "Explore the key trends shaping digital transformation strategies for the coming year...",
//       image: "/assets/images/blog/digital-transformation-trends.webp",
//       readTime: "5 min read"
//     },
//     {
//       id: 2,
//       title: "Cybersecurity Best Practices for Remote Workforces",
//       category: "Whitepapers",
//       author: "David Williams",
//       date: "Jan 10, 2024",
//       excerpt: "Comprehensive guide to securing remote teams in the modern workplace...",
//       image: "/assets/images/blog/cybersecurity-remote.webp",
//       readTime: "10 min read"
//     },
//     {
//       id: 3,
//       title: "Webinar: Cloud Migration Strategies",
//       category: "Webinars",
//       author: "Michael Chen",
//       date: "Jan 5, 2024",
//       excerpt: "Join our experts for an in-depth discussion on successful cloud migration...",
//       image: "/assets/images/blog/cloud-webinar.webp",
//       readTime: "60 min watch"
//     },
//     {
//       id: 4,
//       title: "Nex7 Announces Strategic Partnership with AWS",
//       category: "News",
//       author: "Emily Rodriguez",
//       date: "Dec 20, 2023",
//       excerpt: "New partnership expands cloud capabilities and service offerings...",
//       image: "/assets/images/blog/aws-partnership.webp",
//       readTime: "3 min read"
//     },
//     {
//       id: 5,
//       title: "AI-Powered Analytics: Transforming Business Intelligence",
//       category: "Articles",
//       author: "John Davis",
//       date: "Dec 15, 2023",
//       excerpt: "How artificial intelligence is revolutionizing data analytics and decision-making...",
//       image: "/assets/images/blog/ai-analytics.webp",
//       readTime: "7 min read"
//     },
//     {
//       id: 6,
//       title: "Guide to Legacy Modernization",
//       category: "Whitepapers",
//       author: "Lisa Wong",
//       date: "Dec 10, 2023",
//       excerpt: "Strategic approach to modernizing legacy systems for the digital age...",
//       image: "/assets/images/blog/legacy-modernization.webp",
//       readTime: "15 min read"
//     },
//   ];

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = activeCategory === "all" || post.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       {/* Banner */}
//       <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/insights-banner.webp')", height: "400px", display: "flex", alignItems: "center" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left text-center">
//                 <h1 className="title">Insights & Resources</h1>
//                 <p className="disc">Latest thinking from Nex7 experts</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="rts-section-gap pt--60">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <div className="search-area mb--40">
//                 <div className="rts-search-wrapper position-relative">
//                   <input 
//                     type="text" 
//                     placeholder="Search articles, whitepapers, and more..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="form-control py-3 ps-4 pe-5"
//                   />
//                   <button className="position-absolute end-0 top-0 h-100 px-3 border-0 bg-transparent">
//                     <FaSearch />
//                   </button>
//                 </div>
//               </div>
//               <div className="category-filters text-center mb--40">
//                 <ul className="nav-project-tab justify-content-center flex-wrap">
//                   {categories.map(cat => (
//                     <li key={cat}>
//                       <button 
//                         className={`${activeCategory === cat ? "active" : ""}`}
//                         onClick={() => setActiveCategory(cat)}
//                       >
//                         {cat === "all" ? "All" : cat}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="rts-section-gap pt--0">
//         <div className="container">
//           <div className="row g-4">
//             {filteredPosts.map(post => (
//               <div key={post.id} className="col-lg-4 col-md-6">
//                 <div className="single-blog-card-6 h-100">
//                   <Link to={`/insights/${post.id}`} className="thumbnail d-block overflow-hidden rounded-top">
//                     <img src={post.image} alt={post.title} className="w-100" style={{ height: "220px", objectFit: "cover" }} />
//                   </Link>
//                   <div className="inner-content p-4">
//                     <p className="top mb-2">
//                       <span className="badge bg-primary text-white px-3 py-1 rounded-pill">{post.category}</span>
//                     </p>
//                     <Link to={`/insights/${post.id}`}>
//                       <h4 className="title mb-3">{post.title}</h4>
//                     </Link>
//                     <div className="meta d-flex gap-3 mb-3 text-muted small">
//                       <span><FaCalendar className="me-1" /> {post.date}</span>
//                       <span><FaUser className="me-1" /> {post.author}</span>
//                       <span><FaTag className="me-1" /> {post.readTime}</span>
//                     </div>
//                     <p className="disc mb-3">{post.excerpt}</p>
//                     <Link to={`/insights/${post.id}`} className="rts-read-more">
//                       Read More <i className="fa-regular fa-arrow-right"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Whitepapers & Guides Section */}
//       <div className="rts-section-gap bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <span className="pre">Free Resources</span>
//                 <h2 className="title">Whitepapers & Guides</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <i className="fa-regular fa-file-pdf mb-3" style={{ fontSize: "48px", color: "#09637E" }}></i>
//                 <h4>Digital Transformation Guide</h4>
//                 <p>Comprehensive roadmap for successful digital transformation</p>
//                 <Link to="#" className="rts-btn btn-primary mt-3">Download Free</Link>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <i className="fa-regular fa-file-pdf mb-3" style={{ fontSize: "48px", color: "#09637E" }}></i>
//                 <h4>Cybersecurity Checklist</h4>
//                 <p>Essential security measures for modern businesses</p>
//                 <Link to="#" className="rts-btn btn-primary mt-3">Download Free</Link>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <i className="fa-regular fa-file-pdf mb-3" style={{ fontSize: "48px", color: "#09637E" }}></i>
//                 <h4>Cloud Migration Toolkit</h4>
//                 <p>Step-by-step guide to successful cloud migration</p>
//                 <Link to="#" className="rts-btn btn-primary mt-3">Download Free</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };














// // export default Insights;
// // pages/Insights.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaCalendar, FaUser, FaTag, FaFilePdf } from "react-icons/fa";
// import { useBlogPosts } from "../hooks/useWordPressData";

// const Insights = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;
  
//   // Fetch blog posts from WordPress
//   const { posts, loading, error, totalPages } = useBlogPosts(currentPage, postsPerPage);
//   const [filteredPosts, setFilteredPosts] = useState([]);

//   // Get unique categories from WordPress posts
//   const [categories, setCategories] = useState(["all"]);
  
//   // Fetch categories from WordPress
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_WP_API_URL || 'http://your-wordpress-site.com/wp-json/wp/v2'}/categories?per_page=100`);
//         const data = await response.json();
//         const catNames = ["all", ...data.map(cat => cat.name)];
//         setCategories(catNames);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         // Fallback categories
//         setCategories(["all", "Articles", "Whitepapers", "Webinars", "News"]);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Filter posts based on search and category
//   useEffect(() => {
//     if (!posts) return;
    
//     let filtered = [...posts];
    
//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(post => 
//         post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (post.excerpt.rendered && post.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (post.content && post.content.rendered.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }
    
//     // Filter by category
//     if (activeCategory !== "all") {
//       filtered = filtered.filter(post => {
//         // Check if post has categories and matches the selected category
//         if (post.categories && post.categories.length > 0) {
//           // You'll need to fetch category names or store them
//           return post.categories.includes(activeCategory);
//         }
//         // Fallback: check if post has a category meta field
//         return post.acf?.category === activeCategory;
//       });
//     }
    
//     setFilteredPosts(filtered);
//   }, [posts, searchTerm, activeCategory]);

//   // Helper function to format date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
//   };

//   // Helper function to get reading time
//   const getReadingTime = (content) => {
//     if (!content) return "5 min read";
//     const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
//     const minutes = Math.ceil(words / 200);
//     return `${minutes} min read`;
//   };

//   // Helper function to strip HTML from excerpt
//   const stripHtml = (html) => {
//     if (!html) return "";
//     const tmp = document.createElement("div");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   };

//   // Loading state
//   if (loading && currentPage === 1) {
//     return (
//       <>
//         {/* Banner */}
//         <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/insights-banner.webp')", height: "400px", display: "flex", alignItems: "center" }}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="title-area-left text-center">
//                   <h1 className="title">Insights & Resources</h1>
//                   <p className="disc">Latest thinking from Nex7 experts</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="rts-section-gap text-center">
//           <div className="loader"></div>
//           <p>Loading insights...</p>
//         </div>
//       </>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <>
//         <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/insights-banner.webp')", height: "400px", display: "flex", alignItems: "center" }}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="title-area-left text-center">
//                   <h1 className="title">Insights & Resources</h1>
//                   <p className="disc">Latest thinking from Nex7 experts</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="rts-section-gap text-center">
//           <p className="text-danger">Error loading insights: {error}</p>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       {/* Banner */}
//       <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/insights-banner.webp')", height: "400px", display: "flex", alignItems: "center" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left text-center">
//                 <h1 className="title">Insights & Resources</h1>
//                 <p className="disc">Latest thinking from Nex7 experts</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="rts-section-gap pt--60">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <div className="search-area mb--40">
//                 <div className="rts-search-wrapper position-relative">
//                   <input 
//                     type="text" 
//                     placeholder="Search articles, whitepapers, and more..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="form-control py-3 ps-4 pe-5"
//                   />
//                   <button className="position-absolute end-0 top-0 h-100 px-3 border-0 bg-transparent">
//                     <FaSearch />
//                   </button>
//                 </div>
//               </div>
//               <div className="category-filters text-center mb--40">
//                 <ul className="nav-project-tab justify-content-center flex-wrap">
//                   {categories.map(cat => (
//                     <li key={cat}>
//                       <button 
//                         className={`${activeCategory === cat ? "active" : ""}`}
//                         onClick={() => setActiveCategory(cat)}
//                       >
//                         {cat === "all" ? "All" : cat}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="rts-section-gap pt--0">
//         <div className="container">
//           {filteredPosts.length === 0 && !loading ? (
//             <div className="text-center py-5">
//               <h3>No posts found</h3>
//               <p>Try adjusting your search or filter criteria.</p>
//             </div>
//           ) : (
//             <>
//               <div className="row g-4">
//                 {filteredPosts.map(post => (
//                   <div key={post.id} className="col-lg-4 col-md-6">
//                     <div className="single-blog-card-6 h-100">
//                       <Link to={`/insights/${post.slug}`} className="thumbnail d-block overflow-hidden rounded-top">
//                         {post._embedded?.['wp:featuredmedia']?.[0] ? (
//                           <img 
//                             src={post._embedded['wp:featuredmedia'][0].source_url} 
//                             alt={post.title.rendered} 
//                             className="w-100" 
//                             style={{ height: "220px", objectFit: "cover" }} 
//                           />
//                         ) : (
//                           <div className="bg-secondary w-100 d-flex align-items-center justify-content-center" style={{ height: "220px" }}>
//                             <i className="fa-regular fa-image fa-3x text-white-50"></i>
//                           </div>
//                         )}
//                       </Link>
//                       <div className="inner-content p-4">
//                         <p className="top mb-2">
//                           <span className="badge bg-primary text-white px-3 py-1 rounded-pill">
//                             {post.acf?.category || "Article"}
//                           </span>
//                         </p>
//                         <Link to={`/insights/${post.slug}`}>
//                           <h4 className="title mb-3" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
//                         </Link>
//                         <div className="meta d-flex gap-3 mb-3 text-muted small flex-wrap">
//                           <span><FaCalendar className="me-1" /> {formatDate(post.date)}</span>
//                           <span><FaUser className="me-1" /> {post.acf?.author || post._embedded?.author?.[0]?.name || "Nex7 Team"}</span>
//                           <span><FaTag className="me-1" /> {getReadingTime(post.content?.rendered)}</span>
//                         </div>
//                         <p className="disc mb-3">
//                           {stripHtml(post.excerpt.rendered).substring(0, 120)}...
//                         </p>
//                         <Link to={`/insights/${post.slug}`} className="rts-read-more">
//                           Read More <i className="fa-regular fa-arrow-right"></i>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="pagination-wrapper mt--50">
//                   <ul className="pagination justify-content-center">
//                     <button 
//                       className={`btn btn-outline-primary mx-1 ${currentPage === 1 ? 'disabled' : ''}`}
//                       onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                       disabled={currentPage === 1}
//                     >
//                       Previous
//                     </button>
//                     {[...Array(totalPages)].map((_, i) => (
//                       <button
//                         key={i}
//                         className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
//                         onClick={() => setCurrentPage(i + 1)}
//                       >
//                         {i + 1}
//                       </button>
//                     ))}
//                     <button 
//                       className={`btn btn-outline-primary mx-1 ${currentPage === totalPages ? 'disabled' : ''}`}
//                       onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                       disabled={currentPage === totalPages}
//                     >
//                       Next
//                     </button>
//                   </ul>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>

//       {/* Whitepapers & Guides Section - Can also be made dynamic */}
//       <div className="rts-section-gap bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <span className="pre">Free Resources</span>
//                 <h2 className="title">Whitepapers & Guides</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <FaFilePdf className="mb-3" style={{ fontSize: "48px", color: "#09637E" }} />
//                 <h4>Digital Transformation Guide</h4>
//                 <p>Comprehensive roadmap for successful digital transformation</p>
//                 <a href="/assets/downloads/digital-transformation-guide.pdf" className="rts-btn btn-primary mt-3" download>Download Free</a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <FaFilePdf className="mb-3" style={{ fontSize: "48px", color: "#09637E" }} />
//                 <h4>Cybersecurity Checklist</h4>
//                 <p>Essential security measures for modern businesses</p>
//                 <a href="/assets/downloads/cybersecurity-checklist.pdf" className="rts-btn btn-primary mt-3" download>Download Free</a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="resource-card p-4 bg-white rounded-3 shadow-sm text-center h-100">
//                 <FaFilePdf className="mb-3" style={{ fontSize: "48px", color: "#09637E" }} />
//                 <h4>Cloud Migration Toolkit</h4>
//                 <p>Step-by-step guide to successful cloud migration</p>
//                 <a href="/assets/downloads/cloud-migration-toolkit.pdf" className="rts-btn btn-primary mt-3" download>Download Free</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Insights;



// pages/Insights.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Digital Transformation: Trends to Watch in 2024",
    slug: "future-digital-transformation-trends-2024",
    excerpt:
      "Explore the key trends shaping digital transformation in 2024, from AI integration to sustainable tech practices. Discover how businesses are leveraging emerging technologies to stay competitive.",
    date: "2024-03-15",
    author: "Sarah Johnson",
    authorTitle: "CEO & Digital Transformation Expert",
    category: "Digital Transformation",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Workforce",
    slug: "cybersecurity-best-practices-remote-workforce",
    excerpt:
      "Essential security measures to protect your organization in the era of hybrid work environments. Learn about zero-trust architecture and employee training.",
    date: "2024-03-10",
    author: "David Williams",
    authorTitle: "Head of Cybersecurity",
    category: "Cybersecurity",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Maximizing ROI with Cloud Migration: A Strategic Approach",
    slug: "maximizing-roi-cloud-migration",
    excerpt:
      "Learn how to optimize your cloud investment and achieve maximum return on your migration strategy. Best practices from successful enterprise migrations.",
    date: "2024-03-05",
    author: "Michael Chen",
    authorTitle: "CTO",
    category: "Cloud Computing",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Implementing AI in Manufacturing: A Case Study",
    slug: "implementing-ai-manufacturing-case-study",
    excerpt:
      "Real-world examples of how artificial intelligence is revolutionizing manufacturing processes. From predictive maintenance to quality control.",
    date: "2024-02-28",
    author: "Dr. Priya Patel",
    authorTitle: "Head of Data Science",
    category: "Artificial Intelligence",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing: Benefits and Challenges",
    slug: "rise-edge-computing-benefits-challenges",
    excerpt:
      "Understanding how edge computing is transforming data processing and reducing latency. Explore use cases across industries.",
    date: "2024-02-20",
    author: "James Wilson",
    authorTitle: "VP of Technology",
    category: "Cloud Computing",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Data Privacy Regulations: What Businesses Need to Know",
    slug: "data-privacy-regulations-business-guide",
    excerpt:
      "Navigate the complex landscape of data privacy laws and ensure compliance for your organization. GDPR, CCPA, and more.",
    date: "2024-02-15",
    author: "Emily Rodriguez",
    authorTitle: "Director of AI Solutions",
    category: "Cybersecurity",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Building Scalable Microservices Architecture",
    slug: "building-scalable-microservices-architecture",
    excerpt:
      "Best practices for designing and implementing microservices that scale with your business. Learn from real-world implementations.",
    date: "2024-02-10",
    author: "Alex Thompson",
    authorTitle: "Senior Software Architect",
    category: "App Development",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Sustainable IT: Reducing Your Carbon Footprint",
    slug: "sustainable-it-reducing-carbon-footprint",
    excerpt:
      "Strategies for making your technology infrastructure more environmentally friendly. Green data centers and energy-efficient coding.",
    date: "2024-02-05",
    author: "Lisa Martinez",
    authorTitle: "Sustainability Lead",
    category: "Digital Transformation",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "The Role of Blockchain Beyond Cryptocurrency",
    slug: "role-blockchain-beyond-cryptocurrency",
    excerpt:
      "Exploring real-world applications of blockchain technology in supply chain, healthcare, and finance. Beyond the hype.",
    date: "2024-01-28",
    author: "Robert Chang",
    authorTitle: "Blockchain Specialist",
    category: "Emerging Tech",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  },
  {
    id: 10,
    title: "Mobile App Development Trends for 2024",
    slug: "mobile-app-development-trends-2024",
    excerpt:
      "Stay ahead with the latest trends in mobile app development, from AI integration to cross-platform solutions like Flutter and React Native.",
    date: "2024-01-25",
    author: "Maria Garcia",
    authorTitle: "Mobile Development Lead",
    category: "App Development",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
];

const RESOURCES = [
  {
    id: 1,
    title: "Digital Transformation Guide 2024",
    description: "Comprehensive roadmap for successful digital transformation in the modern era",
    icon: "📈",
    pages: 45,
    size: "4.2 MB",
    downloadLink: "#",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices",
    description: "Essential security measures and compliance guidelines for modern businesses",
    icon: "🛡️",
    pages: 32,
    size: "3.1 MB",
    downloadLink: "#",
  },
  {
    id: 3,
    title: "Cloud Migration Toolkit",
    description: "Step-by-step guide to planning and executing a successful cloud migration",
    icon: "☁️",
    pages: 58,
    size: "5.7 MB",
    downloadLink: "#",
  },
  {
    id: 4,
    title: "AI Implementation Playbook",
    description: "Practical guide to integrating AI solutions in your business operations",
    icon: "🤖",
    pages: 42,
    size: "3.8 MB",
    downloadLink: "#",
  },
  {
    id: 5,
    title: "Mobile App Development Guide",
    description: "Best practices for building scalable and successful mobile applications",
    icon: "📱",
    pages: 38,
    size: "4.5 MB",
    downloadLink: "#",
  },
  {
    id: 6,
    title: "Data Analytics Handbook",
    description: "Leverage data to drive smarter business decisions and accelerate growth",
    icon: "📊",
    pages: 52,
    size: "6.1 MB",
    downloadLink: "#",
  },
];

const CATEGORIES = [
  "all",
  "Digital Transformation",
  "Cybersecurity",
  "Cloud Computing",
  "Artificial Intelligence",
  "App Development",
  "Emerging Tech",
];

const CAT_CLASS_MAP = {
  "Digital Transformation": "cat-dt",
  Cybersecurity: "cat-sec",
  "Cloud Computing": "cat-cloud",
  "Artificial Intelligence": "cat-ai",
  "App Development": "cat-app",
  "Emerging Tech": "cat-tech",
};

const PER_PAGE = 6;

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

// ── Blog Card
const BlogCard = ({ post, index }) => {
  const [hovered, setHovered] = useState(false);
  const catClass = CAT_CLASS_MAP[post.category] || "cat-dt";

  return (
    <div
      className={`insights-blog-card${hovered ? " hovered" : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/insights/${post.slug}`} className="card-img-wrap">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className={`card-cat-badge ${catClass}`}>{post.category}</span>
        <span className="card-time-badge">⏱ {post.readTime}</span>
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span className="card-date">📅 {formatDate(post.date)}</span>
        </div>
        <Link to={`/insights/${post.slug}`}>
          <h3 className="card-title">{post.title}</h3>
        </Link>
        <p className="card-excerpt">{post.excerpt.substring(0, 105)}…</p>
        <div className="card-footer">
          <div className="card-author">
            <div className="author-avatar">{getInitials(post.author)}</div>
            <span className="author-name">{post.author}</span>
          </div>
          <Link to={`/insights/${post.slug}`} className="card-read-btn">
            Read More
            <span className="card-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ── Resource Card
const ResourceCard = ({ resource }) => (
  <div className="resource-card">
    <div className="resource-icon-wrap">{resource.icon}</div>
    <h5 className="resource-title">{resource.title}</h5>
    <p className="resource-desc">{resource.description}</p>
    <div className="resource-meta">
      <span className="resource-meta-item">📄 {resource.pages} pages</span>
      <span className="resource-meta-item">📦 {resource.size}</span>
    </div>
    <a href={resource.downloadLink} className="download-btn" download>
      ⬇ Download Free
    </a>
  </div>
);

// ── Pagination
const Pagination = ({ currentPage, totalPages, onPageChange, totalItems }) => {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * PER_PAGE + 1;
  const end = Math.min(currentPage * PER_PAGE, totalItems);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      totalPages > 7 &&
      i !== 1 &&
      i !== totalPages &&
      Math.abs(i - currentPage) > 2
    ) {
      if (i === 2 || i === totalPages - 1) pages.push("...");
      continue;
    }
    pages.push(i);
  }

  return (
    <div className="pagination-wrap">
      <button
        className="pag-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <button key={`ellipsis-${i}`} className="pag-btn pag-num" disabled>
            …
          </button>
        ) : (
          <button
            key={p}
            className={`pag-btn pag-num${currentPage === p ? " active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        )
      )}
      <button
        className="pag-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
      <div className="pag-info">
        {start}–{end} of {totalItems}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  /* ── Filtering */
  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const matchCat =
        activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term);
      return matchCat && matchSearch;
    });
  }, [searchTerm, activeCategory]);

  /* ── Pagination */
  const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
  const pagedPosts = filteredPosts.slice(
    (safeCurrentPage - 1) * PER_PAGE,
    safeCurrentPage * PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
    setCurrentPage(1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you ${name || ""}! You've subscribed with: ${email}`);
      setEmail("");
      setName("");
    }
  };

  return (
    <>
      {/* ── STYLES ── */}
      <style>{`
        :root {
          --color-primary:   #088395;
          --color-secondary: #09637e;
          --color-blue:      #7ab2b2;
          --color-sky:       #ebf4f6;
          --color-dark:      #0a1628;
          --color-mid:       #1e3a4a;
          --color-text:      #2d4a58;
          --color-muted:     #6b8fa0;
          --color-border:    #d8edf2;
          --color-light:     #f5fafc;
          --ease:            cubic-bezier(0.4,0,0.2,1);
        }

        /* ── HERO ── */
        .ins-hero {
          position: relative;
          min-height: 520px;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 60%, var(--color-primary) 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px;
          font-family: 'DM Sans', sans-serif;
        }
        .ins-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(122,178,178,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,178,178,.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ins-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .ins-hero-orb-1 { width:400px; height:400px; background:rgba(8,131,149,.3);  top:-100px; right:-50px; }
        .ins-hero-orb-2 { width:250px; height:250px; background:rgba(122,178,178,.2); bottom:-60px; left:10%; }
        .ins-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }
        .ins-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          color: rgba(255,255,255,.9);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .05em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: insiFadeUp .6s var(--ease) both;
        }
        .ins-hero-badge::before {
          content: '';
          width: 8px; height: 8px;
          background: var(--color-blue);
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(122,178,178,.3);
          animation: insiPulse 2s infinite;
        }
        @keyframes insiPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(122,178,178,.3); }
          50%      { box-shadow: 0 0 0 8px rgba(122,178,178,.1); }
        }
        .ins-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem,5vw,4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          animation: insiFadeUp .6s .1s var(--ease) both;
        }
        .ins-hero-title em {
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          color: var(--color-blue);
        }
        .ins-hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,.75);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: insiFadeUp .6s .2s var(--ease) both;
        }
        .ins-hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          animation: insiFadeUp .6s .3s var(--ease) both;
          flex-wrap: wrap;
        }
        .ins-hero-stat { text-align: center; color: #fff; }
        .ins-hero-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-blue);
          line-height: 1;
        }
        .ins-hero-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,.6);
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-top: 4px;
        }
        .ins-hero-divider {
          width: 1px; height: 50px;
          background: rgba(255,255,255,.2);
          margin: auto 0;
        }
        @keyframes insiFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── TOP ACCENT ── */
        .ins-top-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue), var(--color-primary));
          background-size: 200% 100%;
          animation: insiShimmer 3s infinite linear;
        }
        @keyframes insiShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }

        /* ── SEARCH SECTION ── */
        .ins-search-section {
          background: #fff;
          padding: 50px 0 30px;
          font-family: 'DM Sans', sans-serif;
        }
        .ins-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .ins-search-wrap {
          position: relative;
          max-width: 680px;
          margin: 0 auto 32px;
        }
        .ins-search-input {
          width: 100%;
          padding: 18px 60px 18px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          border: 2px solid var(--color-border);
          border-radius: 16px;
          outline: none;
          background: var(--color-sky);
          color: var(--color-text);
          transition: all .3s var(--ease);
        }
        .ins-search-input:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(8,131,149,.1);
        }
        .ins-search-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          pointer-events: none;
        }
        .ins-filter-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding-bottom: 40px;
              flex-wrap: wrap;
        }
        .ins-filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 9px 22px;
          border-radius: 100px;
          border: 1.5px solid var(--color-border);
          background: transparent;
          color: var(--color-muted);
          cursor: pointer;
          transition: all .25s var(--ease);
          letter-spacing: .02em;
          max-width: 200px;
        }
        .ins-filter-btn:hover,
        .ins-filter-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 16px rgba(8,131,149,.3);
          
        }

        /* ── BLOG SECTION ── */
        .ins-blog-section {
          padding: 0 0 80px;
          font-family: 'DM Sans', sans-serif;
        }
        .ins-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .ins-results-count { font-family:'Syne',sans-serif; font-size:14px; color:var(--color-muted); }
        .ins-results-count strong { color:var(--color-primary); font-size:18px; }
        .ins-sort-label { font-size:13px; color:var(--color-muted); }
        .ins-blog-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 28px;
          margin-bottom: 60px;
        }

        /* ── BLOG CARD ── */
        .insights-blog-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8f2f5;
          transition: all .4s var(--ease);
          display: flex;
          flex-direction: column;
          animation: insiFadeUp .5s var(--ease) both;
        }
        .insights-blog-card.hovered {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(8,99,126,.12);
          border-color: var(--color-blue);
        }
        .insights-blog-card:nth-child(3n+2) { margin-top: 24px; }
        .insights-blog-card:nth-child(3n+3) { margin-top: 12px; }
        .card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
          display: block;
          text-decoration: none;
        }
        .card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .6s var(--ease);
        }
        .insights-blog-card.hovered .card-img-wrap img { transform: scale(1.08); }
        .card-cat-badge {
          position: absolute;
          top: 16px; left: 16px;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .06em;
          backdrop-filter: blur(10px);
        }
        .cat-dt    { background:rgba(8,131,149,.85);   color:#fff; }
        .cat-sec   { background:rgba(9,99,126,.85);    color:#fff; }
        .cat-cloud { background:rgba(122,178,178,.9);  color:var(--color-dark); }
        .cat-ai    { background:rgba(10,22,40,.85);    color:#fff; }
        .cat-app   { background:rgba(235,244,246,.9);  color:var(--color-secondary); border:1px solid rgba(8,131,149,.3); }
        .cat-tech  { background:rgba(8,131,149,.85);   color:#fff; }
        .card-time-badge {
          position: absolute;
          bottom: 12px; right: 14px;
          background: rgba(0,0,0,.55);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 100px;
        }
        .card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-meta { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .card-date { font-size:12px; color:var(--color-muted); display:flex; align-items:center; gap:5px; }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.4;
          margin-bottom: 12px;
          transition: color .2s;
          text-decoration: none;
          display: block;
        }
        .insights-blog-card.hovered .card-title { color: var(--color-primary); }
        .card-excerpt {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 20px;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #e8f2f5;
        }
        .card-author { display:flex; align-items:center; gap:10px; }
        .author-avatar {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-blue));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .author-name { font-size:13px; font-weight:500; color:var(--color-text); }
        .card-read-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          transition: gap .2s;
        }
        .insights-blog-card.hovered .card-read-btn { gap: 10px; }
        .card-arrow {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--color-sky);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          transition: all .3s;
        }
        .insights-blog-card.hovered .card-arrow {
          background: var(--color-primary);
          color: #fff;
        }

        /* ── PAGINATION ── */
        .pagination-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 50px;
          gap: 0;
        }
        .pag-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 22px;
          border: 1.5px solid var(--color-border);
          background: #fff;
          color: var(--color-muted);
          cursor: pointer;
          transition: all .25s var(--ease);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: -1px;
        }
        .pag-btn:first-child { border-radius: 12px 0 0 12px; margin-left:0; }
        .pag-btn:last-of-type { border-radius: 0 12px 12px 0; }
        .pag-btn.pag-num {
          padding: 12px 18px;
          min-width: 48px;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
        }
        .pag-btn:hover:not(.active):not(:disabled) {
          background: var(--color-sky);
          color: var(--color-primary);
          border-color: var(--color-primary);
          z-index: 1;
        }
        .pag-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 16px rgba(8,131,149,.35);
          z-index: 1;
        }
        .pag-btn:disabled { opacity:.4; cursor:not-allowed; }
        .pag-info {
          font-size: 13px;
          color: var(--color-muted);
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid var(--color-border);
          white-space: nowrap;
        }

        /* ── EMPTY STATE ── */
        .ins-empty {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1/-1;
        }
        .ins-empty-icon { font-size:64px; margin-bottom:20px; opacity:.35; }
        .ins-empty-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 10px;
        }
        .ins-empty-desc { color:var(--color-muted); margin-bottom:24px; }
        .ins-clear-btn {
          padding: 12px 28px;
          background: var(--color-primary);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all .3s;
        }
        .ins-clear-btn:hover { background:var(--color-secondary); transform:translateY(-2px); }

        /* ── RESOURCES SECTION ── */
        .ins-resources-section {
          background: linear-gradient(180deg, var(--color-sky) 0%, #fff 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .ins-resources-section::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(8,131,149,.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .ins-section-header { text-align:center; margin-bottom:56px; }
        .ins-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .ins-section-eyebrow::before,
        .ins-section-eyebrow::after {
          content: '';
          width: 30px; height: 1px;
          background: var(--color-primary);
          opacity: .5;
        }
        .ins-section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem,3.5vw,2.8rem);
          font-weight: 800;
          color: var(--color-dark);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .ins-section-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          color: var(--color-primary);
        }
        .ins-section-desc {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .ins-resources-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }
        .resource-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid var(--color-border);
          transition: all .35s var(--ease);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .resource-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue));
          transform: scaleX(0);
          transition: transform .3s var(--ease);
        }
        .resource-card:hover::before { transform: scaleX(1); }
        .resource-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(8,99,126,.1);
          border-color: transparent;
        }
        .resource-icon-wrap {
          width: 64px; height: 64px;
          background: var(--color-sky);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
          transition: all .3s;
        }
        .resource-card:hover .resource-icon-wrap {
          background: var(--color-primary);
          transform: scale(1.05);
        }
        .resource-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 10px;
        }
        .resource-desc {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.6;
          flex: 1;
          margin-bottom: 20px;
        }
        .resource-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px dashed var(--color-border);
        }
        .resource-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: var(--color-muted);
        }
        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 20px;
          background: var(--color-sky);
          color: var(--color-primary);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all .25s var(--ease);
          font-family: 'DM Sans', sans-serif;
          width: 100%;
        }
        .download-btn:hover {
          background: var(--color-primary);
          color: #fff;
          box-shadow: 0 8px 20px rgba(8,131,149,.25);
        }

        /* ── NEWSLETTER ── */
        .ins-newsletter-section {
          padding: 80px 0;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
        }
        .ins-newsletter-card {
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 50%, var(--color-primary) 100%);
          border-radius: 28px;
          padding: 64px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .ins-newsletter-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(122,178,178,.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .ins-newsletter-card::after {
          content: '';
          position: absolute;
          bottom: -80px; left: 30%;
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(8,131,149,.25) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .ins-nl-left { position:relative; z-index:2; }
        .ins-nl-icon { font-size:42px; margin-bottom:20px; display:block; }
        .ins-nl-title {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .ins-nl-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          color: var(--color-blue);
        }
        .ins-nl-desc { font-size:15px; color:rgba(255,255,255,.7); line-height:1.6; }
        .ins-nl-right { position:relative; z-index:2; }
        .ins-nl-form { display:flex; flex-direction:column; gap:14px; }
        .ins-nl-input {
          padding: 16px 20px;
          background: rgba(255,255,255,.12);
          border: 1.5px solid rgba(255,255,255,.2);
          border-radius: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: all .3s;
        }
        .ins-nl-input::placeholder { color:rgba(255,255,255,.5); }
        .ins-nl-input:focus {
          border-color: var(--color-blue);
          background: rgba(255,255,255,.18);
          box-shadow: 0 0 0 4px rgba(122,178,178,.15);
        }
        .ins-nl-submit {
          padding: 16px 24px;
          background: #fff;
          color: var(--color-primary);
          border: none;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .ins-nl-submit:hover {
          background: var(--color-blue);
          color: var(--color-dark);
          box-shadow: 0 8px 24px rgba(0,0,0,.2);
          
        }
        .ins-nl-note {
          font-size: 12px;
          color: rgba(255,255,255,.5);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .ins-blog-grid { grid-template-columns: repeat(2,1fr); }
          .ins-resources-grid { grid-template-columns: repeat(2,1fr); }
          .ins-newsletter-card { grid-template-columns:1fr; gap:32px; padding:40px; }
          .insights-blog-card:nth-child(3n+2),
          .insights-blog-card:nth-child(3n+3) { margin-top:0; }
        }
        @media (max-width: 600px) {
          .ins-blog-grid { grid-template-columns: 1fr; }
          .ins-resources-grid { grid-template-columns: 1fr; }
          .ins-hero-stats { gap:20px; }
          .ins-container { padding:0 20px; }
          .ins-hero-divider { display:none; }
          .ins-newsletter-card { padding:32px 24px; }
          .pagination-wrap { gap:4px; }
          .pag-btn { padding:10px 14px; font-size:13px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ins-hero">
        <div className="ins-hero-grid" />
        <div className="ins-hero-orb ins-hero-orb-1" />
        <div className="ins-hero-orb ins-hero-orb-2" />
        <div className="ins-hero-content">
          <div className="ins-hero-badge">✦ Knowledge Hub</div>
          <h1 className="ins-hero-title">
            Insights &amp; <em>Resources</em>
          </h1>
          <p className="ins-hero-subtitle">
            Latest thinking from Nex7 experts — stay ahead with trends, best
            practices &amp; deep-dives in technology.
          </p>
          <div className="ins-hero-stats">
            <div className="ins-hero-stat">
              <div className="ins-hero-stat-num">50+</div>
              <div className="ins-hero-stat-label">Articles</div>
            </div>
            <div className="ins-hero-divider" />
            <div className="ins-hero-stat">
              <div className="ins-hero-stat-num">12</div>
              <div className="ins-hero-stat-label">Whitepapers</div>
            </div>
            <div className="ins-hero-divider" />
            <div className="ins-hero-stat">
              <div className="ins-hero-stat-num">8</div>
              <div className="ins-hero-stat-label">Webinars</div>
            </div>
            <div className="ins-hero-divider" />
            <div className="ins-hero-stat">
              <div className="ins-hero-stat-num">6K+</div>
              <div className="ins-hero-stat-label">Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOP ACCENT ── */}
      <div className="ins-top-accent" />

      {/* ── SEARCH + FILTER ── */}
      <section className="ins-search-section">
        <div className="ins-container">
          <div className="ins-search-wrap">
            <input
              className="ins-search-input"
              type="text"
              placeholder="Search articles, topics, authors..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="ins-search-icon">🔍</span>
          </div>
          <div className="ins-filter-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`ins-filter-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat === "all" ? "All Topics" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="ins-blog-section">
        <div className="ins-container">
          <div className="ins-results-bar">
            <div className="ins-results-count">
              <strong>{filteredPosts.length}</strong> articles found
            </div>
            <div className="ins-sort-label">Sorted by latest ↓</div>
          </div>

          {pagedPosts.length === 0 ? (
            <div className="ins-blog-grid">
              <div className="ins-empty">
                <div className="ins-empty-icon">🗞</div>
                <div className="ins-empty-title">No articles found</div>
                <p className="ins-empty-desc">
                  Try adjusting your search or filter criteria.
                </p>
                <button className="ins-clear-btn" onClick={handleClearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="ins-blog-grid">
                {pagedPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                totalItems={filteredPosts.length}
                onPageChange={(p) => {
                  setCurrentPage(p);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </>
          )}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="ins-resources-section">
        <div className="ins-container">
          <div className="ins-section-header">
            <div className="ins-section-eyebrow">Free Resources</div>
            <h2 className="ins-section-title">
              Whitepapers &amp; <em>Guides</em>
            </h2>
            <p className="ins-section-desc">
              In-depth resources to help you navigate complex technology
              decisions with confidence.
            </p>
          </div>
          <div className="ins-resources-grid">
            {RESOURCES.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="ins-newsletter-section">
        <div className="ins-container">
          <div className="ins-newsletter-card">
            <div className="ins-nl-left">
              <span className="ins-nl-icon">✉️</span>
              <h3 className="ins-nl-title">
                Stay ahead of the <em>curve</em>
              </h3>
              <p className="ins-nl-desc">
                Get curated insights, trend reports, and exclusive resources
                delivered straight to your inbox every week. Join 6,000+ tech
                leaders.
              </p>
            </div>
            <div className="ins-nl-right">
              <form className="ins-nl-form" onSubmit={handleSubscribe}>
                <input
                  className="ins-nl-input"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="ins-nl-input"
                  type="email"
                  placeholder="Work email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="ins-nl-submit">
                  Subscribe to Newsletter →
                </button>
                <div className="ins-nl-note">
                  🔒 No spam, ever. Unsubscribe in one click.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;