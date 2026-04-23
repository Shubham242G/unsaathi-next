'use client'

import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ForYou from './ForYou';
import UnsaathiSolutions from './Solution';
import NewBeginning from './NewBegining';
import HassleFreeProcess from './HassleFreeProcess';
import ConnectWithUnsaathi from './ConnectWithUnsaathi';
import FaqAccordion from '../component/FaqAccordion';
import { fetchFaqsByCategory } from '@/app/utils/fetchFaqs';
import { Helmet } from 'react-helmet-async';
import { organizationSchema, websiteSchema, localBusinessSchema, faqSchemaFromData } from '../utils/schemaHelper';


export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const isDataReady = !loading && faqs !== null;
//   useReviReady(isDataReady);
  
  useEffect(() => {
    console.log('Home component mounted');
    
    fetchFaqsByCategory("home")
      .then(setFaqs)
      .catch(err => console.error("FAQs services page error:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
        <Helmet>
        <title>Unsaathi - Best Divorce Lawyers in Delhi NCR | Mutual & Contested Divorce</title>
        <meta 
          name="description" 
          content="Expert divorce lawyers serving Delhi NCR - Noida, Delhi, Gurgaon. Mutual consent & contested divorces from ₹20k. Free consultation. Call +91-9266877791." 
        />
        <meta name="keywords" content="divorce lawyer, mutual divorce, child custody, alimony, family law, Delhi, Noida, Gurgaon" />
        <link rel="canonical" href="https://www.unsaathi.com/" />
        
        {/* Organization Schema - for all pages */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        
        {/* Local Business Schema for main locations */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema("Delhi NCR", "/"))}
        </script>
        
        {/* Dynamic FAQ Schema from API */}
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchemaFromData(faqs))}
          </script>
        )}
      </Helmet>

      <Hero />
      <HassleFreeProcess />
      <AboutUs />
      <ForYou />
      <UnsaathiSolutions />
      <NewBeginning />
      <ConnectWithUnsaathi />
      <FaqAccordion faqs={faqs} />
    </div>
  );
}