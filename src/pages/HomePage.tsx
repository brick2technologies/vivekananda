import Hero from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurActivities from "../components/Activities";
import WhyChooseUs from "../components/WhyChooseUs";
import ParentTestimonials from "../components/ParentTestimonials";
import AdmissionsCTA from "../components/AdmissionsCTA";

function HomePage() {
    return(
        <main>
            <Hero />
            <AboutSection />
            <OurActivities />
            <WhyChooseUs />
            <ParentTestimonials />
            <AdmissionsCTA />
        </main>
    );
}
export default HomePage;