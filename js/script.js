document.addEventListener('DOMContentLoaded', function() {
    // --- SITE-WIDE DYNAMIC DATA FOR REHANA PARVEN ---
    const siteData = {
        personalInfo: {
            name: "Rehana Parven",
            greeting: "Hello, I'm",
            mainTitle: "Rehana <span>Parven</span>",
            typedStrings: [
                'A Digital Marketing Specialist',
                'An SEO & SMM Expert',
                'A Public Health Communicator',
                'A Data-Driven Strategist',
                'A Freelance Professional'
            ],
            heroDescription: "Leveraging a unique background in public health to create data-driven digital marketing strategies that deliver impactful results. I specialize in transforming complex information into compelling campaigns that resonate with target audiences.",
            email: "rainaparven@gmail.com",
            phone: "+8801704346622",
            location: "Dhaka, Bangladesh",
            copyrightYear: "2025"
        },
        socialLinks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/rehanaparven/", iconClass: "fab fa-linkedin-in" }, // IMPORTANT: Add correct LinkedIn URL
            { name: "Facebook", url: "https://www.facebook.com/rehanaparven", iconClass: "fab fa-facebook-f" }, // Optional: Add URL or remove
            { name: "Twitter", url: "#", iconClass: "fab fa-twitter" }, // Placeholder
            { name: "Instagram", url: "#", iconClass: "fab fa-instagram" } // Placeholder
        ],
        about: {
            pageTitle: "About Me | Rehana Parven",
            sectionTitle: "About <span>Me</span>",
            imageSrc: "images/rehana-photo.png", // Updated to professional photo
            imageAlt: "Rehana Parven - Digital Marketing Specialist",
            badgeYears: "20+",
            badgeText: "Years Professional Experience",
            heading: "Digital Marketing Specialist with a Unique Public Health Perspective",
            paragraph1: "I am a dedicated professional with over two decades of experience in public health and international service, now passionately transitioning into the dynamic field of digital marketing. My journey is driven by a deep-seated belief in the power of effective communication and a commitment to helping businesses and organizations achieve their online objectives with integrity and impact.",
            paragraph2: "My extensive background in epidemiological research, data analysis, and designing large-scale public awareness campaigns has equipped me with a unique, analytical, and empathetic approach to marketing challenges. I combine this rich experience with certified expertise in SEO, Social Media Marketing, Content Strategy, and Email Marketing to craft data-driven strategies that not only attract but also genuinely engage and convert target audiences. I excel at translating complex concepts into clear, actionable messages, a skill honed through years of public health advocacy.",
            details: [
                { label: "Name", value: "Rehana Parven" },
                { label: "Email", value: "rainaparven@gmail.com" },
                { label: "From", value: "Dhaka, Bangladesh" },
                { label: "Languages", value: "English, Bengali, Hindi (Conversational)" },
                { label: "Certifications", value: "HubSpot (SEO, Digital Marketing), Google Ads" },
                { label: "Previous Experience", value: "UN Mission, Hajj Medical Team, Public Health Research" }
            ]
        },
        skills: {
            pageTitle: "My Skills | Rehana Parven",
            sectionTitle: "My <span>Skills</span>",
            marketing: [
                { name: "SEO (On-Page, Off-Page, Technical)", percentage: 92 },
                { name: "Social Media Marketing (SMM)", percentage: 88 },
                { name: "Google Ads & Meta Ads Campaigns", percentage: 85 },
                { name: "Keyword Research & Competitor Analysis", percentage: 90 },
                { name: "Content Strategy & Copywriting", percentage: 87 },
                { name: "Email Marketing (HubSpot, Mailchimp)", percentage: 80 },
                { name: "Google Analytics & Data Reporting", percentage: 85 }
            ],
            professional: [
                { name: "Public Health Communication", percentage: 95 },
                { name: "Research & Data Analysis", percentage: 93 },
                { name: "Cross-Cultural Team Coordination", percentage: 88 },
                { name: "Strategic Planning & Execution", percentage: 85 },
                { name: "Canva & Adobe Creative Suite Basics", percentage: 88 },
                { name: "WordPress CMS Management", percentage: 82 },
                { name: "Critical Thinking & Problem Solving", percentage: 95 }
            ]
        },
        services: {
            pageTitle: "My Services | Rehana Parven",
            sectionTitle: "My <span>Services</span>",
            items: [
                {
                    id: "seo",
                    icon: "fas fa-search-dollar",
                    title: "Search Engine Optimization (SEO)",
                    points: [
                        "Comprehensive On-Page & Off-Page SEO",
                        "Technical SEO Audits & Implementation",
                        "In-depth Keyword Research & Strategy",
                        "High-Quality Backlink Acquisition",
                        "Local SEO Optimization for Businesses",
                        "Performance Monitoring & Reporting (Google Analytics)"
                    ],
                    aosDelay: "100",
                    contactSubject: "SEO Services Inquiry"
                },
                {
                    id: "smm",
                    icon: "fas fa-hashtag",
                    title: "Social Media Marketing (SMM)",
                    points: [
                        "Tailored Social Media Strategy Development",
                        "Effective Paid Ad Campaigns (Meta/Facebook, Instagram)",
                        "Engaging Content Creation & Scheduling",
                        "Community Management & Engagement",
                        "Boosting Brand Awareness & Traffic",
                        "Detailed Analytics & ROI Reporting"
                    ],
                    aosDelay: "200",
                    contactSubject: "SMM Inquiry"
                },
                {
                    id: "content",
                    icon: "fas fa-pencil-alt",
                    title: "Content & Email Marketing",
                    points: [
                        "Strategic Content Planning & Development",
                        "Compelling Blog Posts & Article Writing",
                        "Email Campaign Design & Management (HubSpot, Mailchimp)",
                        "Visually Appealing Content Design (Canva)",
                        "WordPress Content Management & Optimization",
                        "Lead Nurturing & Conversion-Focused Content"
                    ],
                    aosDelay: "300",
                    contactSubject: "Content Marketing Inquiry"
                },
                {
                    id: "health-comm",
                    icon: "fas fa-heartbeat",
                    title: "Public Health Campaign Strategy",
                    points: [
                        "Digital Outreach for Health & Wellness Programs",
                        "Development of Impactful Awareness Campaigns",
                        "Creation of Accessible Patient Education Materials",
                        "Targeted Health Messaging for Diverse Audiences",
                        "Strategic Support for NGOs & Wellness Brands",
                        "Ethical Communication & Misinformation Combatting"
                    ],
                    aosDelay: "400",
                    contactSubject: "Health Campaign Inquiry"
                }
            ]
        },
        contact: {
            pageTitle: "Contact Me | Rehana Parven",
            sectionTitle: "Get In <span>Touch</span>",
            heading: "Let's Discuss Your Project",
            introParagraph: "I am currently available for freelance projects, remote opportunities, and collaborations that align with my expertise in digital marketing and public health communication. Whether you have a specific project in mind, need strategic advice, or just want to connect, I'm always open to discussing new ideas and exploring how I can help your organization thrive online.",
            formActionURL: "YOUR_FORM_SUBMISSION_URL_HERE" // IMPORTANT: Replace with your actual form endpoint (e.g., Formspree, Netlify Forms)
        }
    };

    // --- UTILITY FUNCTIONS ---
    function populateText(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) element.innerHTML = text; // Use innerHTML for text with HTML tags like <span>
    }
    function populateHref(elementId, url) {
        const element = document.getElementById(elementId);
        if (element) element.href = url;
    }
    function populateSocialLinks(containerId, linksArray) {
        const container = document.getElementById(containerId);
        if (container) {
            let linksHTML = '';
            linksArray.forEach(link => {
                linksHTML += `<a href="${link.url}" target="_blank" aria-label="${link.name}"><i class="${link.iconClass}"></i></a>`;
            });
            container.innerHTML = linksHTML;
        }
    }

    // --- AOS Initialization ---
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // --- Typed.js Initialization ---
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: siteData.personalInfo.typedStrings,
            typeSpeed: 70, backSpeed: 40, backDelay: 1500, startDelay: 500, loop: true,
        });
    }
    
    // --- DYNAMIC CONTENT RENDERING ---
    let currentPath = window.location.pathname.split("/").pop() || 'index.html';

    // Homepage dynamic content
    if (document.querySelector('.hero-upgraded')) {
        document.title = `${siteData.personalInfo.name} | Digital Marketing Specialist`;
        populateText('hero-greeting', siteData.personalInfo.greeting);
        populateText('hero-description', siteData.personalInfo.heroDescription);
    }

    // About page dynamic content
    if (document.getElementById('about-dynamic-content')) {
        document.title = siteData.about.pageTitle;
        populateText('about-section-title', siteData.about.sectionTitle);
        const aboutImageEl = document.getElementById('about-image-src');
        if(aboutImageEl) {
            aboutImageEl.src = siteData.about.imageSrc;
            aboutImageEl.alt = siteData.about.imageAlt;
        }
        populateText('about-badge-years', siteData.about.badgeYears);
        populateText('about-badge-text', siteData.about.badgeText);
        populateText('about-heading', siteData.about.heading);
        populateText('about-paragraph1', siteData.about.paragraph1);
        populateText('about-paragraph2', siteData.about.paragraph2);
        
        const detailsContainer = document.getElementById('about-details-container');
        if (detailsContainer) {
            let detailsHTML = '<div class="detail-item">';
            siteData.about.details.forEach((item, index) => {
                detailsHTML += `<p><span>${item.label}:</span> ${item.value}</p>`;
                if (index === 2) { // Creates two columns for better layout
                    detailsHTML += '</div><div class="detail-item">';
                }
            });
            detailsHTML += '</div>';
            detailsContainer.innerHTML = detailsHTML;
        }
        populateSocialLinks('about-social-links', siteData.socialLinks);
    }

    // Skills page dynamic content
    const skillsListContainer = document.getElementById('skills-list-container');
    if (skillsListContainer) {
        document.title = siteData.skills.pageTitle;
        populateText('skills-section-title', siteData.skills.sectionTitle);
        function createSkillCategoryHTML(title, iconClass, skillsDataArray, aosAnimation) {
            let skillsItemsHTML = skillsDataArray.map(skill => `
                <div class="skill-item">
                    <div class="skill-info"><span>${skill.name}</span><span>${skill.percentage}%</span></div>
                    <div class="progress-bar"><div class="progress" style="width: ${skill.percentage}%"></div></div>
                </div>`).join('');
            return `<div class="skills-category" data-aos="${aosAnimation}"><div class="skill-category-header"><h3><i class="${iconClass}"></i> ${title}</h3></div>${skillsItemsHTML}</div>`;
        }
        const markSkillsHTML = createSkillCategoryHTML("Digital Marketing", "fas fa-bullhorn", siteData.skills.marketing, "fade-right");
        const profSkillsHTML = createSkillCategoryHTML("Professional & Technical", "fas fa-user-tie", siteData.skills.professional, "fade-left");
        skillsListContainer.innerHTML = markSkillsHTML + profSkillsHTML;
    }

    // Services page dynamic content
    const servicesGridContainer = document.getElementById('services-grid-container');
    if (servicesGridContainer) {
        document.title = siteData.services.pageTitle;
        populateText('services-section-title', siteData.services.sectionTitle);
        servicesGridContainer.innerHTML = siteData.services.items.map(service => {
            let pointsHTML = service.points.map(point => `<li>${point}</li>`).join('');
            return `
                <div id="${service.id}" class="service-card" data-aos="zoom-in" data-aos-delay="${service.aosDelay}">
                    <div class="service-icon"><i class="${service.icon}"></i></div>
                    <h3>${service.title}</h3>
                    <ul>${pointsHTML}</ul>
                    <a href="contact.html?subject=${encodeURIComponent(service.contactSubject)}" class="read-more">Get Quote <i class="fas fa-arrow-right"></i></a>
                </div>`;
        }).join('');
    }

    // Contact page dynamic content
    if (currentPath === 'contact.html') {
        document.title = siteData.contact.pageTitle;
        populateText('contact-section-title', siteData.contact.sectionTitle);
        const contactInfoContainer = document.querySelector('.contact-info');
        if(contactInfoContainer) {
            contactInfoContainer.querySelector('h3').innerText = siteData.contact.heading;
            contactInfoContainer.querySelector('p').innerText = siteData.contact.introParagraph;
            contactInfoContainer.querySelector('.info-item:nth-of-type(1) p').innerText = siteData.personalInfo.email;
            contactInfoContainer.querySelector('.info-item:nth-of-type(2) p').innerText = siteData.personalInfo.phone;
            contactInfoContainer.querySelector('.info-item:nth-of-type(3) p').innerText = siteData.personalInfo.location;
        }
        populateSocialLinks('contact-social-links', siteData.socialLinks);
        const contactForm = document.getElementById('contact-form');
        if(contactForm) contactForm.action = siteData.contact.formActionURL;
    }
    
    // Footer dynamic content (on all pages)
    document.querySelectorAll('.footer-about h3').forEach(el => el.textContent = siteData.personalInfo.name);
    document.querySelectorAll('.footer-bottom p').forEach(el => el.innerHTML = `&copy; ${siteData.personalInfo.copyrightYear} ${siteData.personalInfo.name}. All Rights Reserved.`);
    document.querySelectorAll('.footer-contact').forEach(el => {
        el.querySelector('li:nth-of-type(1) span').textContent = siteData.personalInfo.email;
        el.querySelector('li:nth-of-type(2) span').textContent = siteData.personalInfo.phone;
        el.querySelector('li:nth-of-type(3) span').textContent = siteData.personalInfo.location;
    });
    document.querySelectorAll('.footer-social').forEach(el => populateSocialLinks(el.id, siteData.socialLinks));
     // Assign unique IDs to footer social divs if they don't have one
    document.querySelectorAll('.footer-social:not([id])').forEach((el, index) => {
        const uniqueId = `footer-social-links-${index}`;
        el.id = uniqueId;
        populateSocialLinks(uniqueId, siteData.socialLinks);
    });

    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('visible', window.scrollY > 300);
        });
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Contact form query parameter handling for subject
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    const subjectField = document.querySelector('#contact-form input[name="subject"]');
    if (subjectParam && subjectField) {
        subjectField.value = subjectParam;
    }
    
    // --- Particles.js Initialization (NEW) ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0ff" /* Matches your primary color */
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f0ff", /* Matches your primary color */
                    "opacity": 0.3,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.7
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});
