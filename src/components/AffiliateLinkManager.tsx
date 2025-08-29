import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Plus, Eye, Trash2, Edit, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AffiliateLink } from "@/hooks/useTrafficAnalytics";

interface AffiliateLinkManagerProps {
  affiliateLinks: AffiliateLink[];
  onCreateAffiliate: (name: string) => AffiliateLink;
  onDeleteAffiliate?: (id: string) => void;
  onEditAffiliate?: (id: string, name: string) => void;
}

const AffiliateLinkManager: React.FC<AffiliateLinkManagerProps> = ({
  affiliateLinks,
  onCreateAffiliate,
  onDeleteAffiliate,
  onEditAffiliate
}) => {
  const { toast } = useToast();
  const [newAffiliateName, setNewAffiliateName] = useState<string>('');
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>('');

  const handleCreateAffiliate = () => {
    if (newAffiliateName.trim()) {
      setIsCreating(true);
      try {
        const affiliate = onCreateAffiliate(newAffiliateName.trim());
        setNewAffiliateName('');
        toast({
          title: "Affiliate link created!",
          description: `Created affiliate link for ${affiliate.name}`,
        });
      } catch (error) {
        toast({
          title: "Error creating affiliate link",
          description: "Please try again",
          variant: "destructive"
        });
      } finally {
        setIsCreating(false);
      }
    }
  };

  const handleEditAffiliate = (link: AffiliateLink) => {
    setEditingId(link.id);
    setEditName(link.name);
  };

  const handleSaveEdit = () => {
    if (editingId && editName.trim() && onEditAffiliate) {
      onEditAffiliate(editingId, editName.trim());
      setEditingId(null);
      setEditName('');
      toast({
        title: "Affiliate link updated!",
        description: "The affiliate link name has been updated",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName('');
  };

  const handleDeleteAffiliate = (id: string) => {
    if (onDeleteAffiliate) {
      onDeleteAffiliate(id);
      toast({
        title: "Affiliate link deleted!",
        description: "The affiliate link has been removed",
      });
    }
  };

  const copyToClipboard = async (url: string, name: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: `Affiliate link for ${name} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually",
        variant: "destructive"
      });
    }
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Create New Affiliate Link */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create New Affiliate Link
          </CardTitle>
          <CardDescription>
            Generate a unique affiliate link that works across all platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="affiliateName">Affiliate Name</Label>
            <Input
              id="affiliateName"
              placeholder="Enter affiliate name (e.g., John Doe, Tech Blog, etc.)"
              value={newAffiliateName}
              onChange={(e) => setNewAffiliateName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCreateAffiliate()}
            />
          </div>
          <Button 
            onClick={handleCreateAffiliate} 
            disabled={!newAffiliateName.trim() || isCreating}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            {isCreating ? 'Creating...' : 'Create Affiliate Link'}
          </Button>
        </CardContent>
      </Card>

      {/* Affiliate Links List */}
      {affiliateLinks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Affiliate Links
            </CardTitle>
            <CardDescription>
              Manage and track your affiliate links
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {affiliateLinks.map((link) => (
                <div key={link.id} className="border rounded-lg p-4 space-y-3">
                  {editingId === link.id ? (
                    // Edit Mode
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor={`edit-${link.id}`}>Affiliate Name</Label>
                        <Input
                          id={`edit-${link.id}`}
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleSaveEdit} size="sm">
                          Save
                        </Button>
                        <Button onClick={handleCancelEdit} variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-lg">{link.name}</h4>
                          <p className="text-sm text-muted-foreground font-mono break-all">
                            {link.url}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Code: {link.code}</span>
                            <span>Created: {link.createdAt.toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {link.totalClicks} clicks
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => copyToClipboard(link.url, link.name)}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Link
                        </Button>
                        <Button
                          onClick={() => openLink(link.url)}
                          variant="outline"
                          size="sm"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Test Link
                        </Button>
                        <Button
                          onClick={() => handleEditAffiliate(link)}
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        {onDeleteAffiliate && (
                          <Button
                            onClick={() => handleDeleteAffiliate(link.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        )}
                      </div>

                      {link.platforms.length > 0 && (
                        <div className="pt-2 border-t">
                          <p className="text-sm text-muted-foreground mb-2">Platforms used:</p>
                          <div className="flex flex-wrap gap-1">
                            {link.platforms.map((platform, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Affiliate Links</CardTitle>
          <CardDescription>
            Instructions for using your unique affiliate links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">For Affiliates:</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Share your unique link anywhere - social media, blogs, emails</li>
                <li>• The link works across all platforms automatically</li>
                <li>• Track performance in real-time</li>
                <li>• No need for different links per platform</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">For You:</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• See which platforms drive the most traffic</li>
                <li>• Track individual affiliate performance</li>
                <li>• Monitor traffic sources in real-time</li>
                <li>• Generate reports and analytics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AffiliateLinkManager;
