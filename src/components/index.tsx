import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Index: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const toggleMenu = () => {
        const menu = document.getElementById("mobile-menu");
        if (menu) {
            menu.classList.toggle("show");
        }
    };
    
    return (
        
        <>
            <div className="body">

            <nav data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                    <div className="container-3 w-container">
                        <a href="#" className="brand w-nav-brand">
                            <div className="text-block-18">&lt;C/&gt;</div>
                            <div className="text-block-17">Delic Development</div>
                        </a>
                        <nav role="navigation" className="nav-menu w-nav-menu" id="mobile-menu">
                            <a href="#home" className="nav-link w-nav-link">Home</a>
                            <a href="#about-me" className="nav-link w-nav-link">About me</a>
                            <a href="#my-services" className="nav-link w-nav-link">My services</a>
                            <a href="#my-projects" className="nav-link w-nav-link">My projects</a>
                            <a href="#contact" className="nav-link w-nav-link">Contact</a>
                        </nav>
                        <div className="menu-button w-nav-button" onClick={toggleMenu}>
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </nav>

                <figure id="home" className="hero-section">
                    <div className="w-layout-blockcontainer container hero-container w-container">
                        <h1 className="heading-2" data-aos="fade-down">Delic Development</h1>
                        <div className="main-text-block-div" data-aos="zoom-in">
                            <div className="main-profile-cart">
                                <div className="main-profile-cart-img-name-info" data-aos="fade-right">
                                    <div className="main-profile-cart-picture">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fccb6733911617e01abf1_IMG_20241010_122957.jpg" loading="lazy" sizes="96px" alt="" className="image" />
                                    </div>
                                    <div className="text-block-6">Srđan</div>
                                    <div className="text-block-7">Full-stack developer</div>
                                </div>
                                <div className="main-profile-cart-social-links">
                                    <div className="main-profile-cart-social-link" data-aos="fade-left">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fcf701acb7fad9ed8cbb8_icon-mail.svg" loading="lazy" alt="" className="main-profile-cart-social-link-icon" />
                                        <a href="mailto:delicdevelopment@gmail.com" className="link">delicdevelopment@gmail.com</a>
                                    </div>
                                    <div className="main-profile-cart-social-link" data-aos="fade-left" data-aos-delay="200">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fcf705983c9ebed456d0d_icon-map-pin.svg" loading="lazy" alt="" className="main-profile-cart-social-link-icon" />
                                        <div>Serbia, Novi Sad</div>
                                    </div>
                                    <div className="main-profile-cart-social-link" data-aos="fade-left" data-aos-delay="400">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fcf70664ff5ccd0cae8be_icon-briefcase.svg" loading="lazy" alt="" className="main-profile-cart-social-link-icon" />
                                        <div>Full-time / Freelaner</div>
                                    </div>
                                </div>
                                <div className="main-profile-cart-skils" data-aos="zoom-in-up">
                                    <div className="tb-sklils">C</div>
                                    <div className="tb-sklils">C++</div>
                                    <div className="tb-sklils">C#</div>
                                    <div className="tb-sklils">.NET</div>
                                    <div className="tb-sklils">PYTHON</div>
                                    <div className="tb-sklils">HTML</div>
                                    <div className="tb-sklils">CSS</div>
                                    <div className="tb-sklils">JS</div>
                                    <div className="tb-sklils">REACT</div>
                                    <div className="tb-sklils">...</div>
                                </div>
                                <a href="/assets/images/cv.png" download="Srdjan Delic CV.png" className="link-block w-inline-block" data-aos="fade-up">
                                    <div>Download CV</div>
                                    <img
                                        src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fd0bf348aaec8c04c86a9_icon-download.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                    />
                                </a>
                            </div>
                            <div className="main-text-and-languages-div" data-aos="fade-left">
                                <div className="main-text-div">
                                    <div className="text-block-3" data-aos="fade-down">&lt;h1 &gt;</div>
                                    <h1 className="heading">
                                        Hey<br />
                                        I &#x27;m <a href="#" className="link-2">Srđan Delić</a>
                                        ,<br />Full-Stack Developer
                                    </h1>
                                    <div className="text-block-2" data-aos="fade-up">&lt;/h1 &gt;</div>
                                    <div className="main-text-intro" data-aos="fade-up">
                                        <div className="text-block-4">&lt;p &gt;</div>
                                        <p className="paragraph">I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                                        <div className="text-block-5">&lt;/p &gt;</div>
                                        <a href="#email-form" className="div-block w-inline-block" data-aos="zoom-in">
                                            <div className="text-block-8">Let &#x27;s Talk</div>
                                            <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fcf701acb7fad9ed8cbb8_icon-mail.svg" loading="lazy" alt="" className="image-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="main-info-right-side-div" data-aos="fade-up">
                                    <div className="main-info-right-side">
                                        <div className="text-block">6</div>
                                        <div className="main-info-right-side-div-right-part">
                                            <div>Programing</div>
                                            <div>Languages</div>
                                        </div>
                                    </div>
                                    <div className="main-info-right-side" data-aos="fade-up" data-aos-delay="200">
                                        <div className="text-block">3</div>
                                        <div className="main-info-right-side-div-right-part">
                                            <div>Years of</div>
                                            <div>Experience</div>
                                        </div>
                                    </div>
                                    <div className="main-info-right-side" data-aos="fade-up" data-aos-delay="400">
                                        <div className="text-block">8+</div>
                                        <div className="main-info-right-side-div-right-part">
                                            <div>Web</div>
                                            <div>Projects</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>

                <section id="about-me" className="about-me-section">
                    <div className="w-layout-blockcontainer container about-me-container w-container">
                        <div className="about-me-wrapper">
                            <div className="about-me-block-div" data-aos="fade-right">
                                <h2 className="heading-3">About me</h2>
                                <div className="about-me-text-block" data-aos="fade-up">
                                    <div className="text-block-11">&lt;p &gt;</div>
                                    <div className="text-block-9">
                                        <span className="text-span-3">Hello!</span>
                                        <br />
                                        I am a fourth-year student of Applied Software Engineering at the Faculty of Technical Sciences in Novi Sad. During my studies, I have focused on web development, with a strong passion for creating modern, responsive, and customized websites. My experience includes developing static, dynamic, blog, and e-commerce websites, as well as implementing server-side logic for seamless client-server interactions.<br />
                                        <br />
                                        I frequently use <span className="text-span-4">Webflow </span>
                                        to design websites, as it allows for quick and intuitive creation of visually appealing solutions. For more advanced projects, I rely on <span className="text-span-5">TypeScript </span>
                                        and <span className="text-span-5">React</span>
                                        . In addition to frontend development, I have experience working with backend technologies like <span className="text-span-5">Python </span>
                                        and <span className="text-span-5">ASP.NET.</span>
                                        <br />
                                        <br />
                                        I am proficient in programming languages such as <span className="text-span-5">C</span>
                                        , <span className="text-span-5">C++</span>
                                        , <span className="text-span-5">C#</span>
                                        , <span className="text-span-5">Python</span>
                                        , <span className="text-span-5">Julia</span>
                                        , <span className="text-span-5">Java</span>
                                        , and<span className="text-span-5">SQL</span>
                                        (Oracle and PostgreSQL), enabling me to deliver complete software solutions.
                                    </div>
                                    <div className="text-block-10">&lt;/p &gt;</div>
                                </div>
                            </div>
                            <div className="about-me-image-div" data-aos="fade-left">
                                <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/672fe42a6888b1e1934f09ca_Image.png" loading="lazy" width="495" alt="" className="image-3" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="my-services" className="services-section">
                    <div className="w-layout-blockcontainer container services-container w-container">
                        <div className="service-wrapper">
                            <h2 className="heading-5" data-aos="fade-down">The services I offer</h2>
                            <div className="services-block-div" data-aos="zoom-in">
                                <div className="service-div" data-aos="fade-right">
                                    <div className="serviceimage">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/6730b7f17f36d1b750722cb9_Globe.svg" loading="lazy" alt="" className="image-4" />
                                    </div>
                                    <h3 className="heading-6">Web development</h3>
                                    <div className="text-block-12">Modern and mobile-ready web site that will help you reach all of your marketing.</div>
                                </div>
                                <div className="service-div" data-aos="fade-up">
                                    <div className="serviceimage">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/6730b7f0b952f0584a7b9707_Design.svg" loading="lazy" alt="" className="image-5" />
                                    </div>
                                    <h3 className="heading-6">UI / UX Design</h3>
                                    <div className="text-block-12">Create intuitive interfaces anddelightful user experiences by blendingaesthetics with usability.</div>
                                </div>
                                <div className="service-div" data-aos="fade-left">
                                    <div className="serviceimage">
                                        <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/6730bfbbf40f98fed8127e84_pngwing.png" loading="lazy" alt="" className="image-6" />
                                    </div>
                                    <h3 className="heading-6">Webflow Web Development</h3>
                                    <div className="text-block-12">Custom e-commerce, blog, and business websites that are visually engaging, mobile-responsive, and easy to manage—designed to enhance your online presence and connect with your audience.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="my-projects" className="my-projects-section">
                    <div className="w-layout-blockcontainer container my-projects-container w-container">
                        <h1 className="heading-9" data-aos="fade-down">My Projects</h1>
                        <div className="projects-list-div" data-aos="zoom-in">
                            <div className="project-link" data-aos="fade-right">
                                <div className="project-black-hower"></div>
                                <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/67859b82eaf8af29e810999a_Screenshot%202025-01-12%20160258.png" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 450px, 33vw" alt="" className="project-image" />
                                <div className="project-link-text">Social Media Platform</div>
                                <a href="https://social-media-project-drs.vercel.app/" className="project-text-link">Go on page</a>
                            </div>
                            <div className="project-link" data-aos="fade-up">
                                <div className="project-black-hower"></div>
                                <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/67859b839e82c2434466658b_Screenshot%202025-01-12%20160503.png" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 450px, 33vw" alt="" className="project-image" />
                                <div className="project-link-text">Digital Menu</div>
                                <a href="https://digital-menus-react.vercel.app/menu/sun-burgers" className="project-text-link">Go on page</a>
                            </div>
                            <div className="project-link" data-aos="fade-left">
                                <div className="project-black-hower"></div>
                                <img src="https://cdn.prod.website-files.com/672fc812f73995494b0356b0/67859b826228f3ca04e5131b_git.png" loading="lazy" alt="" className="project-image" />
                                <div className="project-link-text">More on GitHub</div>
                                <a href="https://github.com/SrgaSRB" className="project-text-link">Go on page</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="contact" className="contact-section">
                    <div className="w-layout-blockcontainer container contact-container w-container">
                        <div className="contact-block-div">
                            <div className="contact-div-h2-and-line" data-aos="fade-down">
                                <h2 className="heading-8">Contact</h2>
                                <div className="contact-block-div-line">
                                    <div className="contact-line-dot"></div>
                                    <div className="contact-line-dot"></div>
                                </div>
                            </div>
                            <div className="text-block-15" data-aos="fade-up">I’m currently available for freelance work</div>
                            <div className="contact-send-message-text-div" data-aos="zoom-in">
                                <div className="text-block-16">Send me a message</div>
                            </div>
                            <div className="form-block w-form" data-aos="fade-up">
                                <form method="get" name="email-form" data-name="Email Form" id="email-form" className="form">
                                    <div className="form-name-and-email-div">
                                        <div className="form-name" data-aos="fade-right">
                                            <label htmlFor="name" className="field-label">Your name*</label>
                                            <input className="form-input w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your name" type="text" id="name" required />
                                        </div>
                                        <div className="form-email" data-aos="fade-left">
                                            <label htmlFor="email" className="field-label-2">Tour email*</label>
                                            <input className="form-input w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email" type="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="form-message-div" data-aos="zoom-in">
                                        <label htmlFor="field" className="field-label-3">Your message*</label>
                                        <input className="form-input w-input" maxLength={256} name="field" data-name="Field" placeholder="Enter your needs" type="text" id="field" required />
                                    </div>
                                    <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Send Message" data-aos="fade-up" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Index;