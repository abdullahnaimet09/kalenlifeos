import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  Activity,
  Calendar as CalendarIcon,
  Filter,
  RefreshCw,
  Eye,
  Target,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Cell, Pie } from 'recharts';
import { format } from "date-fns";

const TrafficAnalyticsDashboard: React.FC = () => {
  const { currentTraffic, getTrafficStats, createAffiliateLink, affiliateLinks } = useTrafficAnalytics();
  const [stats, setStats] = useState<TrafficStats | null>(null);
  const [dateRange, setDateRange] = useState<'daily' | 'weekly' | 'monthly' | 'custom'>('daily');
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>(new Date());
  const [selectedAffiliate, setSelectedAffiliate] = useState<string>('');
  const [newAffiliateName, setNewAffiliateName] = useState<string>('');
  const [isCreatingAffiliate, setIsCreatingAffiliate] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      setStats(getTrafficStats());
    };
    
    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, [getTrafficStats]);

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

  const getPlatformIcon = (platform: string) => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('facebook')) return <Facebook className="h-4 w-4 text-blue-600" />;
    if (platformLower.includes('twitter') || platformLower.includes('x.com')) return <Twitter className="h-4 w-4 text-blue-400" />;
    if (platformLower.includes('instagram')) return <Instagram className="h-4 w-4 text-pink-500" />;
    if (platformLower.includes('linkedin')) return <Linkedin className="h-4 w-4 text-blue-700" />;
    if (platformLower.includes('youtube')) return <Youtube className="h-4 w-4 text-red-600" />;
    if (platformLower.includes('whatsapp')) return <MessageCircle className="h-4 w-4 text-green-500" />;
    if (platformLower.includes('telegram')) return <MessageCircle className="h-4 w-4 text-blue-500" />;
    if (platformLower.includes('google')) return <Search className="h-4 w-4 text-blue-500" />;
    if (platformLower.includes('bing')) return <Search className="h-4 w-4 text-blue-600" />;
    return <Globe className="h-4 w-4" />;
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

  const handleCreateAffiliate = () => {
    if (newAffiliateName.trim()) {
      setIsCreatingAffiliate(true);
      const affiliate = createAffiliateLink(newAffiliateName.trim());
      setNewAffiliateName('');
      setIsCreatingAffiliate(false);
    }
  };

  const getChartData = () => {
    if (!stats) return [];
    
    let data;
    if (dateRange === 'custom' && customStartDate && customEndDate) {
      // Filter data for custom date range
      data = stats.dateWiseStats.daily.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= customStartDate && itemDate <= customEndDate;
      });
    } else {
      data = stats.dateWiseStats[dateRange];
    }

    return data.map(item => ({
      name: dateRange === 'daily' ? item.date : dateRange === 'weekly' ? item.week : item.month,
      visits: item.visits,
      search: item.sources.search || 0,
      social: item.sources.social || 0,
      direct: item.sources.direct || 0,
      affiliate: item.sources.affiliate || 0,
      referral: item.sources.referral || 0,
      email: item.sources.email || 0
    }));
  };

  const getPieChartData = () => {
    if (!stats) return [];
    
    return Object.entries(stats.sources).map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: value as number,
      color: getSourceColor(key)
    })).filter(item => item.value > 0);
  };

  const getPlatformChartData = () => {
    if (!stats) return [];
    
    return Object.entries(stats.platformBreakdown)
      .map(([platform, count]) => ({
        name: platform,
        visits: count
      }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 15);
  };

  const getSearchEngineData = () => {
    if (!stats) return [];
    
    return Object.entries(stats.searchEngineBreakdown)
      .map(([engine, count]) => ({
        name: engine,
        visits: count
      }))
      .sort((a, b) => b.visits - a.visits);
  };

  const getSocialPlatformData = () => {
    if (!stats) return [];
    
    return stats.topSocialPlatforms.map(platform => ({
      name: platform.platform,
      visits: platform.count
    }));
  };

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Traffic Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time traffic source tracking and affiliate performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-sm">
            Total Visits: {stats.totalVisits}
          </Badge>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
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
                  {currentTraffic.socialPlatform && ` • Platform: ${currentTraffic.socialPlatform}`}
                  {currentTraffic.searchEngine && ` • Engine: ${currentTraffic.searchEngine}`}
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

      {/* Charts Section */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Traffic Trends</TabsTrigger>
          <TabsTrigger value="platforms">Platform Breakdown</TabsTrigger>
          <TabsTrigger value="affiliates">Affiliate Management</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Trends Over Time</CardTitle>
              <CardDescription>Visualize traffic patterns by date range</CardDescription>
              <div className="flex items-center gap-4 mt-4">
                <Select value={dateRange} onValueChange={(value: 'daily' | 'weekly' | 'monthly' | 'custom') => setDateRange(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>

                {dateRange === 'custom' && (
                  <div className="flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {customStartDate ? format(customStartDate, "PPP") : "Start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={customStartDate}
                          onSelect={setCustomStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <span>to</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {customEndDate ? format(customEndDate, "PPP") : "End date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={customEndDate}
                          onSelect={setCustomEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} name="Total Visits" />
                    <Line type="monotone" dataKey="search" stroke="#0088FE" strokeWidth={2} name="Search" />
                    <Line type="monotone" dataKey="social" stroke="#00C49F" strokeWidth={2} name="Social" />
                    <Line type="monotone" dataKey="direct" stroke="#FFBB28" strokeWidth={2} name="Direct" />
                    <Line type="monotone" dataKey="affiliate" stroke="#FF8042" strokeWidth={2} name="Affiliate" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Source Distribution</CardTitle>
                <CardDescription>Pie chart showing traffic source breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getPieChartData()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {getPieChartData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Traffic Sources</CardTitle>
                <CardDescription>Most common sources driving traffic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.topSources.map((source, index) => (
                    <div key={source.source} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">#{index + 1}</Badge>
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
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Search Engine Performance</CardTitle>
                <CardDescription>Traffic from specific search engines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getSearchEngineData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visits" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Platform Performance</CardTitle>
                <CardDescription>Traffic from specific social platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getSocialPlatformData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visits" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Platform Breakdown</CardTitle>
              <CardDescription>Explicit traffic from each platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Search Engines */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Search className="h-4 w-4 text-blue-500" />
                    Search Engines
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {getSearchEngineData().map((engine) => (
                      <div key={engine.name} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          {getPlatformIcon(engine.name)}
                          <span className="font-medium">{engine.name}</span>
                        </div>
                        <Badge variant="secondary">{engine.visits} visits</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Platforms */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-green-500" />
                    Social Media Platforms
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {getSocialPlatformData().map((platform) => (
                      <div key={platform.name} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          {getPlatformIcon(platform.name)}
                          <span className="font-medium">{platform.name}</span>
                        </div>
                        <Badge variant="secondary">{platform.visits} visits</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="affiliates" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Create Affiliate Link</CardTitle>
                <CardDescription>Generate unique affiliate links for tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="affiliateName">Affiliate Name</Label>
                  <Input
                    id="affiliateName"
                    placeholder="Enter affiliate name"
                    value={newAffiliateName}
                    onChange={(e) => setNewAffiliateName(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleCreateAffiliate} 
                  disabled={!newAffiliateName.trim() || isCreatingAffiliate}
                  className="w-full"
                >
                  <Target className="mr-2 h-4 w-4" />
                  Create Affiliate Link
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Affiliate Performance</CardTitle>
                <CardDescription>Track affiliate partner performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.topAffiliates.length > 0 ? (
                    stats.topAffiliates.map((affiliate, index) => (
                      <div key={affiliate.affiliateId} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-pink-500" />
                          <div>
                            <span className="font-medium">{affiliate.affiliateId}</span>
                            {affiliate.platforms.length > 0 && (
                              <div className="flex gap-1 mt-1">
                                {affiliate.platforms.slice(0, 3).map((platform, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {platform}
                                  </Badge>
                                ))}
                                {affiliate.platforms.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{affiliate.platforms.length - 3}
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
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
                      No affiliate traffic yet. Create an affiliate link to start tracking.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {affiliateLinks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Affiliate Links</CardTitle>
                <CardDescription>Manage and track your affiliate links</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {affiliateLinks.map((link) => (
                    <div key={link.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{link.name}</h4>
                        <p className="text-sm text-muted-foreground">{link.url}</p>
                        <p className="text-xs text-muted-foreground">
                          Created: {link.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{link.totalClicks} clicks</Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
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
