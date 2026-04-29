

'use client'

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import FaqAccordion from '../../component/FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady';
import { organizationSchema, serviceSchema, faqSchemaFromData } from '../../utils/schemaHelper';

const MaintenanceAlimonyPage: React.FC = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding Maintenance and Alimony."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    fetchFaqsByCategory("maintenance-and-alimony")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  // Service Schema for Maintenance & Alimony
  const serviceDescription = "Not getting financial support after separation? Claim maintenance & alimony under Section 125 CrPC or HMA. Expert family lawyers at Unsaathi fight for your rights.";
  
  const serviceData = {
    name: "Maintenance & Alimony Services",
    description: serviceDescription,
    url: "/services/maintenance-and-alimony"
  };

  // Breadcrumb Schema
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unsaathi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://unsaathi.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Maintenance & Alimony",
        "item": "https://unsaathi.com/services/maintenance-and-alimony"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Maintenance & Alimony Lawyers in India | Consult Unsaathi</title>
        <meta 
          name="description" 
          content="Not getting financial support after separation? Claim maintenance & alimony under Section 125 CrPC or HMA. Expert family lawyers at Unsaathi fight for your rights. Talk to us now." 
        />
        <meta 
          name="keywords" 
          content="alimony, maintenance, spousal support, section 125 CrPC, Hindu Marriage Act, divorce financial support" 
        />
        <link rel="canonical" href="https://unsaathi.com/services/maintenance-and-alimony" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(serviceData.name, serviceData.description, serviceData.url)) }}
        />
        
        {/* Dynamic FAQ Schema from API */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFromData(faqs)) }}
          />
        )}
      </Head>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-center px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Maintenance & Alimony
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Financial Support After Separation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Maintenance, or alimony, is the financial support one spouse provides to the other after a divorce. It exists to ensure the dependent spouse can maintain a reasonable standard of living. It can be temporary (interim maintenance) during proceedings or long-term (permanent maintenance) after the divorce is finalized.
        </p>

        <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
        </div>
      </section>

      {/* Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">The Legal Framework</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Key laws governing maintenance and alimony in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 25 allows the court to order one spouse to pay a lump sum or monthly payments to the other for their maintenance and support after a divorce.
              </p>
            </div>

            {/* Hindu Adoption and Maintenance Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Adoption & Maintenance Act, 1956</h3>
              <p className="text-gray-700 text-sm">
                Under Section 18, a Hindu wife is entitled to be maintained by her husband throughout her lifetime, even if she lives separately under justified circumstances.
              </p>
            </div>

            {/* Muslim Women Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Women (Protection of Rights on Divorce) Act, 1986</h3>
              <p className="text-gray-700 text-sm">
                A divorced Muslim woman is entitled to a reasonable and fair provision and maintenance from her former husband, to be paid during the *iddat* period.
              </p>
            </div>

            {/* Parsi Marriage and Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Parsi Marriage & Divorce Act, 1936</h3>
              <p className="text-gray-700 text-sm">
                This Act empowers the court to order alimony, considering the husband's ability to pay and the wife's needs, ensuring she can live with dignity post-divorce.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                Applying to Christians, Section 37 allows the court to order the husband to secure a gross sum of money or annual payments for the wife's maintenance.
              </p>
            </div>
            
            {/* CrPC Section 125 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Section 125 of CrPC</h3>
              <p className="text-gray-700 text-sm">
                A secular provision, this allows a wife, child, or parent who is unable to maintain themselves to claim maintenance from their husband, father, or son, respectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Need Financial Support After Separation?
          </h2>
          <p className="text-[#c48e53] mb-8">
            Our expert lawyers can help you claim the maintenance and alimony you deserve. Get a free consultation today.
          </p>

          <div className="flex justify-center">
            <button onClick={handleWhatsAppClick}
              className="bg-[#c48e53] hover:bg-[#b57d45] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Connect With Our Legal Advisors
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* @ts-ignore - Bypass type checking for FaqAccordion */}
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default MaintenanceAlimonyPage;
