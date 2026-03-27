import { memo } from 'react';
import Banner from './HomeCom/Banner';
import ScaleYourHairRepair from './HomeCom/ScaleYourHairRepair';
import Leadinghailrepair from './HomeCom/Leadinghailrepair';
import Aboutsection from './HomeCom/Aboutsection';
import TestimonialSection from './HomeCom/Testimonialsection';
import TabSliderSection from './HomeCom/TabSliderSection';
import InvoiceFast from './HomeCom/InvoiceFast';
import FeaturesSection from './HomeCom/Featuressection';

const Page = () => {
  return (
    <>
      <Banner  
        poster="/banner.png"
        video="/0_Hail_Car_3840x2160.mp4"
        title="Run Your Repair Business Like a Well-Tuned Machine"
        description="Find consistent hail damage repair jobs and grow your income with confidence"
        buttontitle="Get a Demo"
        buttonurl="/demo"
      />
      <Aboutsection
        badge="ABOUT US"
        title="Powering the Future of"
        titleHighlight="Hail Damage Repair"
        paragraphs={[
          'At Prorevv, we connect skilled hail damage repair technicians with real, high-quality job opportunities across the industry. Our platform is built to simplify how repair professionals find work, manage projects, and grow their business.',
          'From job assignment to work order management, we help repair professionals focus on what they do best — restoring vehicles with precision and confidence.',
        ]}
        btnText="Download Now"
        btnUrl="/download"
        imageSrc="/about-image.png"
      />
      <InvoiceFast 
        image="/invoice-fast.png"
        title="Invoice Fast and Get Paid Sooner"
        description={[
          "Avoid missing unpaid repair invoices and eliminate payment delays by tracking all your expenses and purchases in one auto shop management software. Offer your clients the possibility to pay their invoices online and send automatic email notifications when a client's auto repair service is due.", 
          "In addition to payment tracking, you can also check important statistics for your auto repair shop straight from your computer and laptop. The ARI team has worked hard to create a standalone program that works on Windows operating systems."
        ]}
        findOutBtnText="Find Out More"
        findOutBtnUrl="/"
        getEarlyText="Get Early Access"
        getEarlyUrl="/"
      />
      <TabSliderSection 
        title="Designed Specifically for Hail Repair Professionals"
      />
      <FeaturesSection
        badge="Features"
        heading="Powerful Tools Built for"
        subheading="Hail Repair Professionals"
        downloadText="Download Now"
        downloadUrl="/"
        getstartBtn="Get Started"
        getstartUrl="/"
      />
      <TestimonialSection />
      <Leadinghailrepair
          badge="Trusted by Professionals"
          title="Join the Leading Hail Repair"
          subtitle="Management Platform"
          description="Thousands of repair companies and technicians trust Prorevv to operate more efficiently and scale with confidence."
          downloadBtnText="Download Now"
          downloadBtnUrl="/"
      />
      <ScaleYourHairRepair
        title="Scale Your Hail Repair Business"
        description="Whether you're building a repair team or running jobs independently, Prorevv gives you complete control over your operations."
        subheading="Simple. Powerful. Built for performance."
        bookDemoTtitle="Book A Demo"
        bookDemoUrl="/"
        getStartTitle="Get Started"
        getStartUrl="/"
      />
    </>
  );
};

export default memo(Page);