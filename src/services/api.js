// src/services/api.js
const WP_API_URL = 'http://localhost/invena/wordpress/wp-json/wp/v2';
const NEX7_API_URL = 'http://localhost/invena/wordpress/wp-json/nex7/v1';

// Helper function for API calls
const fetchAPI = async (endpoint, options = {}) => {
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    });
    
    if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
    }
    
    return response.json();
};

// Services API
export const getServices = async () => {
    return fetchAPI(`${WP_API_URL}/service?_embed&per_page=100`);
};

export const getServiceBySlug = async (slug) => {
    const services = await fetchAPI(`${WP_API_URL}/service?slug=${slug}&_embed`);
    return services[0];
};

// Case Studies API
export const getCaseStudies = async () => {
    return fetchAPI(`${WP_API_URL}/case_study?_embed&per_page=100`);
};

export const getCaseStudyBySlug = async (slug) => {
    const caseStudies = await fetchAPI(`${WP_API_URL}/case_study?slug=${slug}&_embed`);
    return caseStudies[0];
};

// Team Members API
export const getTeamMembers = async () => {
    return fetchAPI(`${WP_API_URL}/team?_embed&per_page=100`);
};

// Testimonials API
export const getTestimonials = async () => {
    return fetchAPI(`${WP_API_URL}/testimonial?_embed&per_page=100`);
};

// Blog Posts API
export const getBlogPosts = async (page = 1, perPage = 10) => {
    return fetchAPI(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}&status=publish`);
};

export const getBlogPostBySlug = async (slug) => {
    const posts = await fetchAPI(`${WP_API_URL}/posts?slug=${slug}&_embed&status=publish`);
    return posts[0] || null;
};
export const getBlogPostById = async (id) => {
    return fetchAPI(`${WP_API_URL}/posts/${id}?_embed`);
};

// Get related posts by category
export const getRelatedPosts = async (categoryId, excludeId, perPage = 3) => {
    return fetchAPI(`${WP_API_URL}/posts?_embed&categories=${categoryId}&exclude=${excludeId}&per_page=${perPage}&status=publish`);
};
// Get all categories
export const getCategories = async () => {
    return fetchAPI(`${WP_API_URL}/categories`);
};

// Get posts by category
export const getPostsByCategory = async (categorySlug, page = 1, perPage = 10) => {
    return fetchAPI(`${WP_API_URL}/posts?_embed&category_slug=${categorySlug}&page=${page}&per_page=${perPage}&status=publish`);
};

// Site Settings API
export const getSiteSettings = async () => {
    return fetchAPI(`${WP_API_URL}/settings`);
};

// Industries API (Custom)
export const getIndustries = async () => {
    return fetchAPI(`${WP_API_URL}/industry?_embed&per_page=100`);
};

// Careers API
export const getJobOpenings = async () => {
    return fetchAPI(`${WP_API_URL}/job?_embed&per_page=100`);
};

// Get Contact Options (Locations, Phones, etc.)
export const getContactInfo = async () => {
    const response = await fetch(`${WP_API_URL}/settings`); // Using the custom endpoint from earlier
    return response.json();
};

// Submit Form to Contact Form 7
// Add to src/services/api.js

// Contact Form Submission
export const submitContactForm = async (formData) => {
    try {
        const response = await fetch(`${NEX7_API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit form');
        }
        
        return data;
    } catch (error) {
        console.error('Contact form error:', error);
        throw error;
    }
};