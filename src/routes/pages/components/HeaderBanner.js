import React, { useState } from "react";

const HeaderBanner = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ backgroundColor: '#505E6B', padding: '16px 10%', position: 'relative', textAlign: 'center' }}>
      <p style={{ color: '#FFFFFF', margin: 0, cursor: 'pointer', fontSize: '1rem' }} onClick={toggleDropdown}>
      In case your placement, Ad Space or bundle has been blocked, you may be able to appeal. Meta Monetization Policy
        <span style={{ marginLeft: '5px', textDecoration: 'underline' }}>Learn more.</span>
      </p>
      {isDropdownOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#505E6B', color: '#FFFFFF', padding: '10px' }}>
          <p style={{ margin: 0 }}>
            Meta Verified is a subscription bundle for creators and businesses that helps you show the world your profile is authentic and build credibility with your audience.
          </p>
          <a href="https://about.meta.com/technologies/meta-verified/" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Read more about Meta Verified</a>
        </div>
      )}
    </div>
  );
};

export default HeaderBanner;
