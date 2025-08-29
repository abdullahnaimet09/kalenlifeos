import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrafficAnalyticsDashboard from "@/components/TrafficAnalyticsDashboard";
import AffiliateLinkManager from "@/components/AffiliateLinkManager";
import { useTrafficAnalytics } from "@/hooks/useTrafficAnalytics";

const AnalyticsPage: React.FC = () => {
  const { createAffiliateLink, affiliateLinks } = useTrafficAnalytics();

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Analytics & Affiliate Tracking</h1>
        <p className="text-muted-foreground">
          Track traffic sources, monitor affiliate performance, and analyze visitor patterns
        </p>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
          <TabsTrigger value="affiliates">Affiliate Management</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-4">
          <TrafficAnalyticsDashboard />
        </TabsContent>

        <TabsContent value="affiliates" className="space-y-4">
          <AffiliateLinkManager
            affiliateLinks={affiliateLinks}
            onCreateAffiliate={createAffiliateLink}
            onDeleteAffiliate={() => {}}
            onEditAffiliate={() => {}}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;
