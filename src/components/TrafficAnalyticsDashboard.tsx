import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTrafficAnalytics, TrafficStats } from "@/hooks/useTrafficAnalytics";
import { 
  Search, 
  Share2, 
  Globe, 
  Users, 
  Mail, 
  TrendingUp, 
  ExternalLink,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const TrafficAnalyticsDashboard: React.FC = () => {
  const { currentTraffic, getTrafficStats } = useTrafficAnalytics();
  const [stats, setStats] = useState<TrafficStats | null>(null);

  useEffect(() => {
    const updateStats = () => {
      setStats(getTrafficStats());
    };
    
    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, [getTrafficStats]);

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getSourceIcon = (type: string) => {
    switch (type) {
      case 'search': return <Search className="h-4 w-4" />;
      case 'social': return <Share2 className="h-4 w-4" />;
      case 'direct': return <Globe className="h-4 w-4" />;
      case 'referral': return <ExternalLink className="h-4 w-4" />;
      case 'affiliate': return <Users className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getSourceColor = (type: string) => {
    switch (type) {
      case 'search': return 'bg-blue-500';
      case 'social': return 'bg-green-500';
      case 'direct': return 'bg-purple-500';
      case 'referral': return 'bg-orange-500';
      case 'affiliate': return 'bg-pink-500';
      case 'email': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Traffic Analytics</h1>
          <p className="text-muted-foreground">
            Real-time traffic source tracking and analytics
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          Total Visits: {stats.totalVisits}
        </Badge>
      </div>

      {/* Current Traffic Source */}
      {currentTraffic && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Current Visit Source
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${getSourceColor(currentTraffic.type)}`}>
                {getSourceIcon(currentTraffic.type)}
              </div>
              <div>
                <p className="font-semibold">{currentTraffic.source}</p>
                <p className="text-sm text-muted-foreground">
                  {currentTraffic.type} • {currentTraffic.medium}
                  {currentTraffic.affiliateId && ` • Affiliate: ${currentTraffic.affiliateId}`}
                </p>
                <p className="text-xs text-muted-foreground">
                  {currentTraffic.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Traffic Sources Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Traffic</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.search}</div>
            <Progress 
              value={stats.totalVisits > 0 ? (stats.sources.search / stats.totalVisits) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalVisits > 0 ? ((stats.sources.search / stats.totalVisits) * 100).toFixed(1) : 0}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Social Media</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.social}</div>
            <Progress 
              value={stats.totalVisits > 0 ? (stats.sources.social / stats.totalVisits) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalVisits > 0 ? ((stats.sources.social / stats.totalVisits) * 100).toFixed(1) : 0}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Direct Traffic</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.direct}</div>
            <Progress 
              value={stats.totalVisits > 0 ? (stats.sources.direct / stats.totalVisits) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalVisits > 0 ? ((stats.sources.direct / stats.totalVisits) * 100).toFixed(1) : 0}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affiliate Traffic</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.affiliate}</div>
            <Progress 
              value={stats.totalVisits > 0 ? (stats.sources.affiliate / stats.totalVisits) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalVisits > 0 ? ((stats.sources.affiliate / stats.totalVisits) * 100).toFixed(1) : 0}% of total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="sources" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sources">Top Sources</TabsTrigger>
          <TabsTrigger value="search">Search Engines</TabsTrigger>
          <TabsTrigger value="social">Social Platforms</TabsTrigger>
          <TabsTrigger value="affiliates">Affiliates</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Traffic Sources</CardTitle>
              <CardDescription>Most common sources driving traffic to your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topSources.map((source, index) => (
                  <div key={source.source} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <span className="font-medium">{source.source}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {source.count} visits
                      </span>
                      <div className="w-32">
                        <Progress value={source.percentage} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">
                        {source.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search Engine Traffic</CardTitle>
              <CardDescription>Traffic from organic search results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topSearchEngines.length > 0 ? (
                  stats.topSearchEngines.map((engine, index) => (
                    <div key={engine.engine} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Search className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{engine.engine}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {engine.count} visits
                        </span>
                        <Badge variant="secondary">
                          {((engine.count / stats.sources.search) * 100).toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No search engine traffic yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Traffic</CardTitle>
              <CardDescription>Traffic from social media platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topSocialPlatforms.length > 0 ? (
                  stats.topSocialPlatforms.map((platform, index) => (
                    <div key={platform.platform} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Share2 className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {platform.count} visits
                        </span>
                        <Badge variant="secondary">
                          {((platform.count / stats.sources.social) * 100).toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No social media traffic yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="affiliates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Performance</CardTitle>
              <CardDescription>Traffic and conversions from affiliate partners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topAffiliates.length > 0 ? (
                  stats.topAffiliates.map((affiliate, index) => (
                    <div key={affiliate.affiliateId} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-pink-500" />
                        <span className="font-medium">{affiliate.affiliateId}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {affiliate.count} visits
                        </span>
                        <Badge variant="secondary">
                          {((affiliate.count / stats.sources.affiliate) * 100).toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No affiliate traffic yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Referral Traffic</CardTitle>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.referral}</div>
            <p className="text-xs text-muted-foreground">
              From other websites
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Traffic</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.email}</div>
            <p className="text-xs text-muted-foreground">
              From email campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unknown Sources</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sources.unknown}</div>
            <p className="text-xs text-muted-foreground">
              Unidentified sources
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrafficAnalyticsDashboard;
