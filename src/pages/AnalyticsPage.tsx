import React, { useState } from 'react';
import TrafficAnalyticsDashboard from '@/components/TrafficAnalyticsDashboard';
import UTMLinkGenerator from '@/components/UTMLinkGenerator';
import AffiliateLinkManager from '@/components/AffiliateLinkManager';
import AnalyticsTest from '@/components/AnalyticsTest';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { useTrafficAnalytics } from '@/hooks/useTrafficAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Link, Users, TrendingUp, TestTube } from "lucide-react";

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { affiliateLinks, createAffiliateLink } = useTrafficAnalytics();

  // Initialize Google Analytics with your measurement ID
  useGoogleAnalytics({
    measurementId: 'G-GTZ9M16LGG', // Your GA4 measurement ID
    debugMode: process.env.NODE_ENV === 'development'
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Enhanced Analytics & Tracking</h1>
          <p className="text-muted-foreground">
            Comprehensive traffic source tracking, affiliate management, and detailed analytics
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics Dashboard
            </TabsTrigger>
            <TabsTrigger value="affiliates" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Affiliate Management
            </TabsTrigger>
            <TabsTrigger value="utm-generator" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              UTM Generator
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trends & Reports
            </TabsTrigger>
            <TabsTrigger value="test" className="flex items-center gap-2">
              <TestTube className="h-4 w-4" />
              Test System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <TrafficAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="affiliates" className="space-y-6">
            <AffiliateLinkManager 
              affiliateLinks={affiliateLinks}
              onCreateAffiliate={createAffiliateLink}
            />
          </TabsContent>

          <TabsContent value="utm-generator" className="space-y-6">
            <UTMLinkGenerator />
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="text-center py-12">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Advanced Trends & Reports</h3>
              <p className="text-muted-foreground">
                Detailed trend analysis and custom reports coming soon...
              </p>
            </div>
          </TabsContent>

          <TabsContent value="test" className="space-y-6">
            <AnalyticsTest />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsPage;
