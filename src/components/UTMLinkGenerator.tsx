import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UTMLink {
  baseUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm?: string;
  utmContent?: string;
  affiliateId?: string;
}

const UTMLinkGenerator: React.FC = () => {
  const { toast } = useToast();
  const [utmLink, setUtmLink] = useState<UTMLink>({
    baseUrl: 'https://www.kalenlifeos.app',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmTerm: '',
    utmContent: '',
    affiliateId: ''
  });

  const [generatedUrl, setGeneratedUrl] = useState<string>('');

  const predefinedSources = [
    'google', 'facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 
    'tiktok', 'pinterest', 'reddit', 'email', 'newsletter', 'blog', 
    'affiliate', 'partner', 'influencer'
  ];

  const predefinedMediums = [
    'cpc', 'social', 'email', 'affiliate', 'referral', 'organic', 
    'banner', 'video', 'podcast', 'webinar', 'event'
  ];

  const predefinedCampaigns = [
    'summer-sale', 'black-friday', 'christmas', 'new-year', 'product-launch',
    'brand-awareness', 'lead-generation', 'conversion', 'retargeting'
  ];

  const generateUTMUrl = () => {
    if (!utmLink.baseUrl || !utmLink.utmSource || !utmLink.utmMedium || !utmLink.utmCampaign) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields (Base URL, Source, Medium, Campaign)",
        variant: "destructive"
      });
      return;
    }

    const url = new URL(utmLink.baseUrl);
    
    // Add UTM parameters
    url.searchParams.set('utm_source', utmLink.utmSource);
    url.searchParams.set('utm_medium', utmLink.utmMedium);
    url.searchParams.set('utm_campaign', utmLink.utmCampaign);
    
    if (utmLink.utmTerm) {
      url.searchParams.set('utm_term', utmLink.utmTerm);
    }
    
    if (utmLink.utmContent) {
      url.searchParams.set('utm_content', utmLink.utmContent);
    }

    // Add affiliate ID if provided
    if (utmLink.affiliateId) {
      url.searchParams.set('affiliate_id', utmLink.affiliateId);
    }

    setGeneratedUrl(url.toString());
  };

  const copyToClipboard = async () => {
    if (generatedUrl) {
      try {
        await navigator.clipboard.writeText(generatedUrl);
        toast({
          title: "Link copied!",
          description: "UTM link has been copied to clipboard",
        });
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Please copy the link manually",
          variant: "destructive"
        });
      }
    }
  };

  const openLink = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank');
    }
  };

  const createPresetLink = (preset: {
    source: string;
    medium: string;
    campaign: string;
    description: string;
  }) => {
    setUtmLink(prev => ({
      ...prev,
      utmSource: preset.source,
      utmMedium: preset.medium,
      utmCampaign: preset.campaign
    }));
  };

  const presets = [
    {
      source: 'facebook',
      medium: 'social',
      campaign: 'brand-awareness',
      description: 'Facebook Brand Awareness'
    },
    {
      source: 'instagram',
      medium: 'social',
      campaign: 'product-launch',
      description: 'Instagram Product Launch'
    },
    {
      source: 'email',
      medium: 'email',
      campaign: 'newsletter',
      description: 'Email Newsletter'
    },
    {
      source: 'google',
      medium: 'cpc',
      campaign: 'summer-sale',
      description: 'Google Ads Summer Sale'
    },
    {
      source: 'affiliate',
      medium: 'affiliate',
      campaign: 'partner-promotion',
      description: 'Affiliate Partner Promotion'
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">UTM Link Generator</h1>
        <p className="text-muted-foreground">
          Create trackable links for your marketing campaigns
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Link Generator Form */}
        <Card>
          <CardHeader>
            <CardTitle>Generate UTM Link</CardTitle>
            <CardDescription>
              Fill in the details to create a trackable link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="baseUrl">Base URL *</Label>
              <Input
                id="baseUrl"
                placeholder="https://yoursite.com"
                value={utmLink.baseUrl}
                onChange={(e) => setUtmLink(prev => ({ ...prev, baseUrl: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="utmSource">Source *</Label>
                <Select value={utmLink.utmSource} onValueChange={(value) => setUtmLink(prev => ({ ...prev, utmSource: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {predefinedSources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source.charAt(0).toUpperCase() + source.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="utmMedium">Medium *</Label>
                <Select value={utmLink.utmMedium} onValueChange={(value) => setUtmLink(prev => ({ ...prev, utmMedium: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medium" />
                  </SelectTrigger>
                  <SelectContent>
                    {predefinedMediums.map((medium) => (
                      <SelectItem key={medium} value={medium}>
                        {medium.toUpperCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="utmCampaign">Campaign *</Label>
              <Select value={utmLink.utmCampaign} onValueChange={(value) => setUtmLink(prev => ({ ...prev, utmCampaign: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign" />
                </SelectTrigger>
                <SelectContent>
                  {predefinedCampaigns.map((campaign) => (
                    <SelectItem key={campaign} value={campaign}>
                      {campaign.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="utmTerm">Term (Optional)</Label>
                <Input
                  id="utmTerm"
                  placeholder="keyword"
                  value={utmLink.utmTerm}
                  onChange={(e) => setUtmLink(prev => ({ ...prev, utmTerm: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="utmContent">Content (Optional)</Label>
                <Input
                  id="utmContent"
                  placeholder="banner, text, image"
                  value={utmLink.utmContent}
                  onChange={(e) => setUtmLink(prev => ({ ...prev, utmContent: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="affiliateId">Affiliate ID (Optional)</Label>
              <Input
                id="affiliateId"
                placeholder="affiliate123"
                value={utmLink.affiliateId}
                onChange={(e) => setUtmLink(prev => ({ ...prev, affiliateId: e.target.value }))}
              />
            </div>

            <Button onClick={generateUTMUrl} className="w-full">
              <Link className="mr-2 h-4 w-4" />
              Generate UTM Link
            </Button>
          </CardContent>
        </Card>

        {/* Generated Link */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Link</CardTitle>
            <CardDescription>
              Your trackable UTM link will appear here
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedUrl ? (
              <>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm break-all">{generatedUrl}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                  <Button onClick={openLink} variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <Link className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Generate a UTM link to see it here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Presets */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Presets</CardTitle>
          <CardDescription>
            Click on a preset to quickly fill the form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => createPresetLink(preset)}
              >
                <Badge variant="secondary" className="mr-2">
                  {preset.source}
                </Badge>
                {preset.description}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UTM Parameters Guide */}
      <Card>
        <CardHeader>
          <CardTitle>UTM Parameters Guide</CardTitle>
          <CardDescription>
            Understanding UTM parameters for better tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">utm_source</h4>
                <p className="text-sm text-muted-foreground">
                  The source of traffic (e.g., google, facebook, newsletter)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">utm_medium</h4>
                <p className="text-sm text-muted-foreground">
                  The marketing medium (e.g., cpc, social, email, affiliate)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">utm_campaign</h4>
                <p className="text-sm text-muted-foreground">
                  The specific campaign name (e.g., summer-sale, product-launch)
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">utm_term</h4>
                <p className="text-sm text-muted-foreground">
                  Keywords for paid search campaigns
                </p>
              </div>
              <div>
                <h4 className="font-semibold">utm_content</h4>
                <p className="text-sm text-muted-foreground">
                  Used to differentiate similar content or links
                </p>
              </div>
              <div>
                <h4 className="font-semibold">affiliate_id</h4>
                <p className="text-sm text-muted-foreground">
                  Track affiliate partner performance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UTMLinkGenerator;
