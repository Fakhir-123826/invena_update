// // pages/BlogDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaUser, FaCalendar, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const BlogDetail = () => {
//   const { blogId } = useParams();

//   const blogData = {
//     "1": {
//       title: "The Future of Digital Transformation in 2024",
//       category: "Articles",
//       author: "Sarah Johnson",
//       date: "January 15, 2024",
//       readTime: "5 min read",
//       image: "/assets/images/blog/digital-transformation-trends.webp",
//       content: `
//         <p>As we move further into 2024, digital transformation continues to evolve at an unprecedented pace. Organizations that embrace emerging technologies and adapt their strategies accordingly will be best positioned for success in the digital economy.</p>
        
//         <h3>Key Trends Shaping Digital Transformation</h3>
//         <p>The landscape of digital transformation is being reshaped by several key trends that business leaders need to understand and leverage:</p>
        
//         <h4>1. AI-Powered Automation</h4>
//         <p>Artificial intelligence is moving from experimentation to mainstream adoption. Companies are using AI to automate complex processes, enhance decision-making, and create personalized customer experiences at scale.</p>
        
//         <h4>2. Edge Computing</h4>
//         <p>With the proliferation of IoT devices, edge computing has become critical for processing data closer to its source. This reduces latency, improves performance, and enables real-time analytics.</p>
        
//         <h4>3. Cybersecurity Integration</h4>
//         <p>Security is no longer an afterthought but a fundamental component of digital transformation initiatives. Organizations are adopting zero-trust architectures and embedding security throughout the development lifecycle.</p>
        
//         <h3>Strategies for Success</h3>
//         <p>To succeed in digital transformation, organizations need to:</p>
//         <ul>
//           <li>Develop clear, measurable objectives aligned with business goals</li>
//           <li>Invest in talent and upskilling programs</li>
//           <li>Adopt agile methodologies and DevOps practices</li>
//           <li>Focus on customer experience as a competitive differentiator</li>
//           <li>Build scalable, cloud-native architectures</li>
//         </ul>
        
//         <p>The journey of digital transformation is ongoing. Organizations that view it as a continuous process of improvement and innovation will be the ones that thrive in the digital age.</p>
//       `,
//       tags: ["Digital Transformation", "Technology Trends", "Business Strategy"]
//     },
//     "2": {
//       title: "Cybersecurity Best Practices for Remote Workforces",
//       category: "Whitepapers",
//       author: "David Williams",
//       date: "January 10, 2024",
//       readTime: "10 min read",
//       image: "/assets/images/blog/cybersecurity-remote.webp",
//       content: `
//         <p>The shift to remote and hybrid work models has fundamentally changed the cybersecurity landscape. Organizations must adapt their security strategies to protect distributed workforces while maintaining productivity.</p>
        
//         <h3>Key Security Challenges</h3>
//         <p>Remote work introduces several unique security challenges:</p>
//         <ul>
//           <li>Securing home networks and personal devices</li>
//           <li>Managing access controls for distributed teams</li>
//           <li>Protecting sensitive data outside traditional network perimeters</li>
//           <li>Preventing phishing and social engineering attacks</li>
//           <li>Ensuring compliance with industry regulations</li>
//         </ul>
        
//         <h3>Essential Security Practices</h3>
//         <p>Implement these best practices to protect your remote workforce:</p>
        
//         <h4>1. Zero-Trust Security Model</h4>
//         <p>Adopt a zero-trust approach that verifies every access request, regardless of whether it comes from inside or outside the network.</p>
        
//         <h4>2. Multi-Factor Authentication (MFA)</h4>
//         <p>Require MFA for all remote access to company systems and data. This adds a critical layer of protection against compromised credentials.</p>
        
//         <h4>3. Endpoint Protection</h4>
//         <p>Deploy advanced endpoint detection and response (EDR) solutions to monitor and protect remote devices.</p>
        
//         <h4>4. Security Awareness Training</h4>
//         <p>Regular training helps employees recognize and avoid phishing attempts and other social engineering tactics.</p>
        
//         <h3>Conclusion</h3>
//         <p>Securing a remote workforce requires a comprehensive approach that combines technology, processes, and people. By implementing these best practices, organizations can significantly reduce their security risks while enabling productive remote work.</p>
//       `,
//       tags: ["Cybersecurity", "Remote Work", "Security Best Practices"]
//     }
//   };

//   const blog = blogData[blogId] || blogData["1"];

//   return (
//     <>
//       {/* Banner */}
//       <div className="blog-details-banner-large-image" style={{ backgroundImage: `url(${blog.image})` }}>
//         <div className="container h-100">
//           <div className="row h-100 align-items-center">
//             <div className="col-lg-12">
//               <div className="title-area-left text-center text-white">
//                 <h1 className="title text-white">{blog.title}</h1>
//                 <div className="meta d-flex justify-content-center gap-3 mt-3">
//                   <span><FaUser className="me-1" /> {blog.author}</span>
//                   <span><FaCalendar className="me-1" /> {blog.date}</span>
//                   <span><FaTag className="me-1" /> {blog.category}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <div className="blog-details-area-inner-content">
//                 <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                
//                 {/* Tags */}
//                 <div className="details-tag mt-5 pt-4 border-top">
//                   <h6>Tags:</h6>
//                   {blog.tags.map((tag, idx) => (
//                     <button key={idx}>{tag}</button>
//                   ))}
//                 </div>
                
//                 {/* Share Section */}
//                 <div className="details-share mt-4">
//                   <h6>Share:</h6>
//                   <button><FaFacebook /></button>
//                   <button><FaTwitter /></button>
//                   <button><FaLinkedin /></button>
//                   <button><FaEnvelope /></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Posts */}
//       <div className="rts-section-gap pt--0">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <h2 className="title">Related Posts</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             <div className="col-md-4">
//               <div className="single-blog-card-6">
//                 <Link to="/insights/2" className="thumbnail d-block overflow-hidden rounded-top">
//                   <img src="/assets/images/blog/related-1.webp" alt="Related Post" className="w-100" />
//                 </Link>
//                 <div className="inner-content p-4">
//                   <h4 className="title">The ROI of Digital Transformation</h4>
//                   <Link to="/insights/2" className="rts-read-more">Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="single-blog-card-6">
//                 <Link to="/insights/2" className="thumbnail d-block overflow-hidden rounded-top">
//                   <img src="/assets/images/blog/related-2.webp" alt="Related Post" className="w-100" />
//                 </Link>
//                 <div className="inner-content p-4">
//                   <h4 className="title">Cloud Migration Strategies</h4>
//                   <Link to="/insights/2" className="rts-read-more">Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="single-blog-card-6">
//                 <Link to="/insights/2" className="thumbnail d-block overflow-hidden rounded-top">
//                   <img src="/assets/images/blog/related-3.webp" alt="Related Post" className="w-100" />
//                 </Link>
//                 <div className="inner-content p-4">
//                   <h4 className="title">AI in Business: A Practical Guide</h4>
//                   <Link to="/insights/2" className="rts-read-more">Read More</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;

// pages/BlogDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaCalendar, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { getBlogPostBySlug, getBlogPosts } from "../services/api";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        // Fetch the current blog post
        const post = await getBlogPostBySlug(blogId);
        
        if (!post) {
          setError("Blog post not found");
          setLoading(false);
          return;
        }
        
        setBlog(post);
        
        // Fetch related posts (same category, excluding current)
        const allPosts = await getBlogPosts(1, 3);
        const filtered = allPosts.filter(p => p.id !== post.id).slice(0, 3);
        setRelatedPosts(filtered);
        
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };
    
    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get author name from WordPress data
  const getAuthorName = (post) => {
    if (post._embedded?.author?.[0]?.name) {
      return post._embedded.author[0].name;
    }
    return "Nex7 Team";
  };

  // Get categories
  const getCategories = (post) => {
    if (post._embedded?.['wp:term']?.[0]) {
      return post._embedded['wp:term'][0].map(term => term.name).join(", ");
    }
    return "Blog";
  };

  // Get featured image
  const getFeaturedImage = (post) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return "/assets/images/blog/default-banner.webp";
  };

  if (loading) {
    return (
      <div className="rts-section-gap text-center">
        <div className="loader"></div>
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="rts-section-gap text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="alert alert-danger">
                <h3>Post Not Found</h3>
                <p>{error || "The blog post you're looking for doesn't exist."}</p>
                <Link to="/insights" className="rts-btn btn-primary mt-3">
                  <FaArrowLeft className="me-2" /> Back to Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <div 
        className="blog-details-banner-large-image" 
        style={{ 
          backgroundImage: `url(${getFeaturedImage(blog)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div className="overlay" style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)"
        }}></div>
        <div className="container h-100" style={{ position: "relative", zIndex: 2 }}>
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <div className="title-area-left text-center text-white">
                <h1 className="title text-white">{blog.title?.rendered || blog.title}</h1>
                <div className="meta d-flex justify-content-center gap-3 mt-3 flex-wrap">
                  <span><FaUser className="me-1" /> {getAuthorName(blog)}</span>
                  <span><FaCalendar className="me-1" /> {formatDate(blog.date)}</span>
                  <span><FaTag className="me-1" /> {getCategories(blog)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="blog-details-area-inner-content">
                {/* Blog Content from WordPress */}
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content?.rendered || "" }} 
                />
                
                {/* Tags Section - From WordPress Categories/Tags */}
                {blog._embedded?.['wp:term']?.[0] && (
                  <div className="details-tag mt-5 pt-4 border-top">
                    <h6>Categories:</h6>
                    {blog._embedded['wp:term'][0].map((term, idx) => (
                      <button key={idx}>{term.name}</button>
                    ))}
                  </div>
                )}
                
                {/* Share Section */}
                <div className="details-share mt-4">
                  <h6>Share:</h6>
                  <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>
                    <FaFacebook />
                  </button>
                  <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${blog.title?.rendered}&url=${window.location.href}`, '_blank')}>
                    <FaTwitter />
                  </button>
                  <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title?.rendered}`, '_blank')}>
                    <FaLinkedin />
                  </button>
                  <button onClick={() => window.location.href = `mailto:?subject=${blog.title?.rendered}&body=${window.location.href}`}>
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="rts-section-gap pt--0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-style-one center">
                  <h2 className="title">Related Posts</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mt--20">
              {relatedPosts.map((relatedPost) => {
                const relatedImage = relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/assets/images/blog/default.webp";
                return (
                  <div key={relatedPost.id} className="col-md-4">
                    <div className="single-blog-card-6 h-100">
                      <Link to={`/insights/${relatedPost.slug}`} className="thumbnail d-block overflow-hidden rounded-top">
                        <img 
                          src={relatedImage} 
                          alt={relatedPost.title?.rendered} 
                          className="w-100" 
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </Link>
                      <div className="inner-content p-4">
                        <h4 className="title">{relatedPost.title?.rendered}</h4>
                        <div className="meta small text-muted mb-2">
                          {formatDate(relatedPost.date)}
                        </div>
                        <div 
                          className="excerpt mb-3"
                          dangerouslySetInnerHTML={{ 
                            __html: relatedPost.excerpt?.rendered?.substring(0, 100) + "..." || "" 
                          }} 
                        />
                        <Link to={`/insights/${relatedPost.slug}`} className="rts-read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Back to Blog Button */}
      <div className="rts-section-gap pt--0 pb--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link to="/insights" className="rts-btn btn-primary">
                <FaArrowLeft className="me-2" /> Back to All Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;