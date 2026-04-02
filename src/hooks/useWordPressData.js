// src/hooks/useWordPressData.js
import { useState, useEffect } from 'react';
import * as api from '../services/api';

const WP_API_URL = 'http://localhost/invena/wordpress/wp-json/wp/v2';
	const NEX7_API_URL = 'http://localhost/invena/wordpress/wp-json/nex7/v1';
export const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await api.getServices();
                setServices(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return { services, loading, error };
};

export const useService = (slug) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        
        const fetchService = async () => {
            try {
                const data = await api.getServiceBySlug(slug);
                setService(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchService();
    }, [slug]);

    return { service, loading, error };
};

export const useCaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const data = await api.getCaseStudies();
                setCaseStudies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudies();
    }, []);

    return { caseStudies, loading, error };
};

export const useCaseStudy = (slug) => {
    const [caseStudy, setCaseStudy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        
        const fetchCaseStudy = async () => {
            try {
                const data = await api.getCaseStudyBySlug(slug);
                setCaseStudy(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudy();
    }, [slug]);

    return { caseStudy, loading, error };
};

export const useTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const data = await api.getTeamMembers();
                setTeamMembers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTeamMembers();
    }, []);

    return { teamMembers, loading, error };
};

export const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await api.getTestimonials();
                setTestimonials(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    return { testimonials, loading, error };
};

// src/hooks/useWordPressData.js - Add this if missing
export const useBlogPosts = (page = 1, perPage = 9) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const data = await api.getBlogPosts(page, perPage);
                setPosts(data);
                
                // Get total pages from response headers
                const response = await fetch(`${import.meta.env.VITE_WP_API_URL}/posts?page=${page}&per_page=${perPage}`);
                const total = response.headers.get('X-WP-TotalPages');
                setTotalPages(total ? parseInt(total) : 0);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [page, perPage]);

    return { posts, loading, error, totalPages };
};
export const useBlogPost = (slug) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        
        const fetchPost = async () => {
            try {
                const data = await api.getBlogPostBySlug(slug);
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    return { post, loading, error };
};

export const useSiteSettings = () => {
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await api.getSiteSettings();
                setSettings(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    return { settings, loading, error };
};

export const useIndustries = () => {
    const [industries, setIndustries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIndustries = async () => {
            try {
                const data = await api.getIndustries();
                setIndustries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchIndustries();
    }, []);

    return { industries, loading, error };
};

export const useJobOpenings = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await api.getJobOpenings();
                setJobs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return { jobs, loading, error };
};


// Add this to src/hooks/useWordPressData.js

// Add/Update the useContactForm hook
export const useContactForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const submitForm = async (formData) => {
        setSubmitting(true);
        setError(null);
        setSuccess(false);
        
        try {
            // Validate form data
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                throw new Error('Please fill in all required fields');
            }
            
            if (!formData.email.includes('@')) {
                throw new Error('Please enter a valid email address');
            }
            
            // console.log('Submitting form to:', `${NEX7_API_URL}/contact`);
            console.log('Form data:', formData);
            
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
                throw new Error(data.message || `Server error: ${response.status}`);
            }
            
            if (data.success) {
                setSuccess(true);
                return { success: true, data };
            } else {
                throw new Error(data.message || 'Unknown error occurred');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setError(err.message || 'Network error. Please try again.');
            return { success: false, error: err.message };
        } finally {
            setSubmitting(false);
        }
    };
    
    return { submitForm, submitting, success, error };
};