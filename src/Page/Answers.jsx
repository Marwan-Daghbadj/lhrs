import React from "react";
import "./Answers.scss";

export default function Answers() {
  return (
    <>
      <div
        className="answers-container d-flex d-col gap"
        style={{ "--gap": "40px" }}
      >
        <div className="d-flex d-col gap-15">
          <h1>
            <span>Daghbadj Marwan</span>
          </h1>
          <p className="l d-flex d-row gap-10 mobile-d-col">
            <a href="tel:0971526251203">05 2625 1203</a>
            <a href="mailto:daghbadjmarwan@gmail.com">
              daghbadjmarwan@gmail.com
            </a>
          </p>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 1: HTML/CSS/JavaScript (30 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. Write a HTML code snippet to create a responsive real estate
              property listing page.
            </h3>
            <p>
              Please check the{" "}
              <a href="" className="underline" target="_blank">
                Github
              </a>{" "}
              link
            </p>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2. Write a CSS code snippet to style the property listing page
              with a modern and responsive design.
            </h3>
            <p>
              Please check the{" "}
              <a href="" className="underline" target="_blank">
                Github
              </a>{" "}
              link
            </p>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              3. Write a JavaScript code snippet to add interactivity to the
              property listing page.
            </h3>
            <p>
              Please check the{" "}
              <a href="" className="underline" target="_blank">
                Github
              </a>{" "}
              link
            </p>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 2: SEO (20 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. What are the most important SEO factors to consider when
              optimizing a real estate website?
            </h3>
            <ol>
              <li>High-Quality and Keyword-Optimized Content</li>
              <li>Mobile Optimization</li>
              <li>Fast Loading Speed</li>
              <li>Strong Webpage structure</li>
              <li>Social media backlinks</li>
            </ol>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2.How would you optimize a real estate property listing page for
              search engines?
            </h3>
            <ol>
              <li>Keyword Optimization</li>
              <li>High-Quality Images & Videos</li>
              <li>Strong Meta description</li>
              <li>Fast Loading Speed</li>
              <li>Mobile-Friendly</li>
            </ol>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 3: CTA and Pixel (20 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. What is the purpose of a Call-to-Action (CTA) button on a real
              estate website?
            </h3>
            <p>
              It helps convert website visitors into potential buyers or leads
              by guiding them toward the next step in the buying or renting
              process. Examples include: "Book a Tour," "Get Price Details," and
              "Contact Agent."
            </p>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2. How would you implement a Facebook pixel on a real estate
              website to track conversions and retarget users?
            </h3>
            <ol>
              <li>Create the Pixel</li>
              <li>Install the Pixel Code in the Website</li>
              <li>Set Up Conversion Tracking</li>
              <li>Verify Pixel Installation</li>
              <li>Set Up Retargeting Ads</li>
            </ol>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 4: GTM (20 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. What is the purpose of Google Tag Manager (GTM) on a real
              estate website?
            </h3>
            <p>
              It helps track user interactions, such as property views, form
              submissions, and CTA clicks, improving marketing insights.
            </p>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2. How would you set up GTM on a real estate website to track
              events and conversions?
            </h3>
            <ol>
              <li>Create & Install Google Tag Manager (GTM)</li>
              <li>Set Up Google Analytics (GA4) Tracking</li>
              <li>
                Track Key Real Estate Events (e.g., Property Views, Form
                Submissions)
              </li>
              <li>Track Conversions with Google Ads & Facebook Pixel</li>
              <li>Test & Publish the GTM Setup</li>
            </ol>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 5: Daily Updates and Content Management (20 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. How would you implement a content management system (CMS) on a
              real estate website to enable daily updates?
            </h3>
            <ol>
              <li>Choose a CMS (Dashboard)</li>
              <li>Facilitate Add/Edit Content</li>
              <li>Make Daily Content Updates As Needed</li>
              <li>Optimize for SEO & Performance</li>
            </ol>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2. What are the best practices for updating real estate property
              listings on a daily basis?
            </h3>
            <ol>
              <li>Optimize Listing Titles & Descriptions</li>
              <li>Use Available AI Tools</li>
              <li>Update Pricing & Availability</li>
              <li>Update To A High-Quality Images & Videos</li>
              <li>Remove Inactive Listings For Fresh Content</li>
            </ol>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>
            Section 6: Landing Page Design (30 points){" "}
            <a href="/" className="underline">
              Click here
            </a>
          </h2>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Section 7: Analytic Reporting (30 points)</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. How would you set up analytic reporting for a real estate
              website using Google Analytics?
            </h3>
            <p>
              After Installing the Google Tag In The Website, We Can Access The
              Reports From The Google Dashboard (Reports Section)
            </p>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              2. How would you track traffic and conversions from Google Ads,
              Meta, and other platforms?
            </h3>
            <ol>
              <li>Link Google Ads with GA4</li>
              <li>
                Set Up UTM Parameters for Other Platforms (Meta, LinkedIn, etc.)
              </li>
              <li>Set Up Conversion Tracking for Key Actions</li>
              <li>Track Meta (Facebook & Instagram) Ads Conversions</li>
              <li>Use Google Tag Manager (GTM) for Multi-Platform Tracking</li>
            </ol>
          </div>
          <div className="d-flex d-col gap-10">
            <h3>
              3. What metrics would you use to measure the success of a real
              estate website, and how would you use data to inform design and
              marketing decisions?
            </h3>
            <ol>
              <li>Traffic Sources</li>
              <li>Conversion Rate</li>
              <li>Bounce Rate </li>
              <li>Set Up Conversion Tracking for Key Actions</li>
              <li>Lead Quality & Cost per Lead (CPL)</li>
            </ol>
          </div>
        </div>
        <div className="section-container d-flex d-col gap-20">
          <h2>Bonus Points</h2>
          <div className="d-flex d-col gap-10">
            <h3>
              1. What would you improve on our website
              https://luxuryhomesrealestate.ae please explain if any
            </h3>
            <p>
              For a luxurious feel, i would use a rich color palette, elegant
              fonts, high-quality visuals, and smooth animations. I Would also
              add interactive showcases, and ample white space for a premium
              look.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
