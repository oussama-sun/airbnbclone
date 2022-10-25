import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 py-16 pl-24 gap-4 bg-gray-100">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Support</h4>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Safety information</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Report a neighbourhood concern</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Community</h4>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Hosting</h4>
        <p>Try hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Airbnb</h4>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
    </footer>
  );
};

export default Footer;
