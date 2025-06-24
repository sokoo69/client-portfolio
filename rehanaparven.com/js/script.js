document.addEventListener('DOMContentLoaded', function() {
    // --- SITE-WIDE DYNAMIC DATA FOR REHANA PARVEN ---
    const siteData = {
        personalInfo: {
            name: "Rehana Parven",
            greeting: "Hello, I'm",
            mainTitle: "Rehana <span>Parven</span>",
            typedStrings: ['A Digital Marketing Specialist', 'An SEO & SMM Expert', 'A Public Health Communicator', 'A Freelance Professional'],
            heroDescription: "Leveraging a unique background in public health to create data-driven digital marketing strategies that deliver impactful results.",
            email: "rainaparven@gmail.com",
            phone: "+8801704346622",
            location: "Dhaka, Bangladesh",
            copyrightYear: "2025"
        },
        socialLinks: [
            { name: "LinkedIn", url: "#", iconClass: "fab fa-linkedin-in" }, // IMPORTANT: Add correct LinkedIn URL
            { name: "Facebook", url: "#", iconClass: "fab fa-facebook-f" }, // Optional: Add URL or remove
        ],
        about: {
            pageTitle: "About Me | Rehana Parven",
            sectionTitle: "About <span>Me</span>",
            imageSrc: "images/about.jpg", // IMPORTANT: Client needs to provide a professional photo
            imageAlt: "About Rehana Parven",
            badgeYears: "20+",
            badgeText: "Years Professional Experience",
            heading: "Digital Marketing Specialist with a Public Health Background",
            paragraph1: "I am a dedicated professional transitioning from a distinguished 20+ year career in public health and international service to the dynamic world of digital marketing. My journey is fueled by a passion for communication and a desire to help businesses and organizations achieve their online goals.",
            paragraph2: "My extensive background in research, data analysis, and developing awareness campaigns provides me with a unique, strategic perspective on marketing challenges. I combine this experience with certified expertise in SEO, SMM, and content strategy to deliver measurable and meaningful results.",
            details: [
                { label: "Name", value: "Rehana Parven" },
                { label: "Email", value: "rainaparven@gmail.com" },
                { label: "From", value: "Dhaka, Bangladesh" },
                { label: "Languages", value: "English, Bengali" },
                { label: "Certification", value: "HubSpot (SEO, Digital Marketing)" },
                { label: "Experience", value: "UN Mission, Hajj Medical Team" }
            ]
        },
        skills: {
            pageTitle: "My Skills | Rehana Parven",
            sectionTitle: "My <span>Skills</span>",
            marketing: [
                { name: "SEO (On-Page & Off-Page)", percentage: 90 }, { name: "Social Media Marketing (SMM)", percentage: 85 },
                { name: "Google & Meta Ads", percentage: 80 }, { name: "Keyword Research & Strategy", percentage: 88 },
                { name: "Content Strategy & Creation", percentage: 82 }, { name: "Email Marketing (HubSpot)", percentage: 75 }
            ],
            professional: [
                { name: "Public Health Communication", percentage: 95 }, { name: "Research & Data Analysis", percentage: 90 },
                { name: "International Team Coordination", percentage: 85 }, { name: "Project Management", percentage: 80 },
                { name: "Canva & WordPress", percentage: 88 }, { name: "Critical Thinking", percentage: 95 }
            ]
        },
        services: {
            pageTitle: "My Services | Rehana Parven",
            sectionTitle: "My <span>Services</span>",
            items: [
                { id: "seo", icon: "fas fa-search-dollar", title: "Search Engine Optimization (SEO)", points: ["On-Page & Off-Page SEO", "Technical SEO Audits", "Keyword Research & Analysis", "Backlink Strategy", "Local SEO Optimization", "Performance Reporting"], aosDelay: "100", contactSubject: "SEO Services Inquiry" },
                { id: "smm", icon: "fas fa-hashtag", title: "Social Media Marketing (SMM)", points: ["Social Media Strategy", "Paid Ad Campaigns (Meta/Facebook)", "Content Creation & Scheduling", "Community Management", "Increasing Traffic & Engagement", "Analytics & Reporting"], aosDelay: "200", contactSubject: "SMM Inquiry" },
                { id: "content", icon: "fas fa-pencil-alt", title: "Content & Email Marketing", points: ["Content Strategy & Development", "Blog & Article Writing", "Email Campaign Management (HubSpot)", "Content Design with Canva", "WordPress Content Management"], aosDelay: "300", contactSubject: "Content Marketing Inquiry" },
                { id: "health-comm", icon: "fas fa-heartbeat", title: "Public Health Campaign Strategy", points: ["Digital Outreach for Health Programs", "Awareness Campaign Development", "Patient Education Materials", "Targeted Health Messaging", "Support for NGOs & Wellness Brands"], aosDelay: "400", contactSubject: "Health Campaign Inquiry" }
            ]
        },
        contact: {
            pageTitle: "Contact Me | Rehana Parven",
            sectionTitle: "Get In <span>Touch</span>",
            heading: "Let's Discuss Your Project",
            introParagraph: "I am currently available for freelance projects and remote opportunities. Feel free to reach out for collaborations, project inquiries, or just a friendly hello. I'm always open to discussing new ideas.",
            formActionURL: "YOUR_FORM_SUBMISSION_URL_HERE" // IMPORTANT: Replace with your actual form endpoint
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
    if (document.querySelector('.hero')) {
        document.title = `${siteData.personalInfo.name} | Digital Marketing Specialist`;
        populateText('hero-greeting', siteData.personalInfo.greeting);
        const heroName = document.querySelector('.hero h1');
        if(heroName) heroName.innerHTML = `${siteData.personalInfo.mainTitle} <br/> <span id="typed"></span>`;
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
                if (index === 2) { // Creates two columns
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
});