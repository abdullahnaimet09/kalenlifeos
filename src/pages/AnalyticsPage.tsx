import React, { useState } from 'react';
import TrafficAnalyticsDashboard from '@/components/TrafficAnalyticsDashboard';
import UTMLinkGenerator from '@/components/UTMLinkGenerator';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Link } from "lucide-react";

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Initialize Google Analytics with your measurement ID
  useGoogleAnalytics({
    measurementId: 'G-GTZ9M16LGG', // Your GA4 measurement ID
    debugMode: process.env.NODE_ENV === 'development'
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Analytics & Tracking</h1>
          <p className="text-muted-foreground">
            Monitor your traffic sources and create trackable links
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Traffic Analytics
            </TabsTrigger>
            <TabsTrigger value="utm-generator" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              UTM Link Generator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <TrafficAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="utm-generator" className="space-y-6">
            <UTMLinkGenerator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsPage;
