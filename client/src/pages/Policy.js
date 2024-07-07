import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import { fetchPolicyContent } from './api'; // Import function to fetch policy content

const PrivacyPolicy = () => {
  const [policyContent, setPolicyContent] = React.useState(null);

  React.useEffect(() => {
    const getPolicyData = async () => {
      const policyText = await fetchPolicyContent();
      setPolicyContent(policyText);
    };

    getPolicyData();
  }, []);

  return (
    <PageLayout>
      <div className="policy-section">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-content" dangerouslySetInnerHTML={{ __html: policyContent }}>
          {/* Policy content will be displayed here */}
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
