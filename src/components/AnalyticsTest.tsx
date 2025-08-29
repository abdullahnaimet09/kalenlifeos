import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTrafficAnalytics } from "@/hooks/useTrafficAnalytics";

const AnalyticsTest: React.FC = () => {
  const { currentTraffic, getTrafficStats, createAffiliateLink, affiliateLinks } = useTrafficAnalytics();
  const stats = getTrafficStats();

  const testAffiliateLink = () => {
    const affiliate = createAffiliateLink("Test Affiliate");
    console.log("Created affiliate:", affiliate);
  };

  const simulateTraffic = (type: string) => {
    // Simulate different traffic sources
    const testUrls = {
      search: "https://www.google.com/search?q=test+query",
      social: "https://www.facebook.com/somepost",
      direct: "",
      referral: "https://example.com/referral",
      affiliate: "https://kalenlifeos.app?affiliate_id=TEST123"
    };

    // Update the current URL to simulate traffic
    const url = testUrls[type as keyof typeof testUrls];
    if (url) {
      window.history.pushState({}, '', url);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Analytics System Test</CardTitle>
          <CardDescription>
            Test the enhanced analytics system functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <Button onClick={() => simulateTraffic('search')} variant="outline" size="sm">
              Test Search
            </Button>
            <Button onClick={() => simulateTraffic('social')} variant="outline" size="sm">
              Test Social
            </Button>
            <Button onClick={() => simulateTraffic('direct')} variant="outline" size="sm">
              Test Direct
            </Button>
            <Button onClick={() => simulateTraffic('referral')} variant="outline" size="sm">
              Test Referral
            </Button>
            <Button onClick={() => simulateTraffic('affiliate')} variant="outline" size="sm">
              Test Affiliate
            </Button>
          </div>

          <Button onClick={testAffiliateLink} className="w-full">
            Create Test Affiliate Link
          </Button>

          <div className="space-y-2">
            <h4 className="font-semibold">Current Traffic:</h4>
            <pre className="text-xs bg-muted p-2 rounded">
              {JSON.stringify(currentTraffic, null, 2)}
            </pre>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Stats Summary:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div>Total Visits: {stats.totalVisits}</div>
              <div>Search: {stats.sources.search}</div>
              <div>Social: {stats.sources.social}</div>
              <div>Direct: {stats.sources.direct}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Affiliate Links ({affiliateLinks.length}):</h4>
            {affiliateLinks.map((link, index) => (
              <div key={link.id} className="text-sm bg-muted p-2 rounded">
                {index + 1}. {link.name} - {link.code} ({link.totalClicks} clicks)
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsTest;
