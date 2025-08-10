import { Palette, Circle, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Link } from 'react-router-dom';

const Styling = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Palette className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Styling Options</h1>
          <p className="text-muted-foreground">Customize background colors for elements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Background Color Controls */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-primary" />
              Background Color Controls
            </CardTitle>
            <CardDescription>
              Set RGB and CMYK colors for the background of the template.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="background-color" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="background-color">RGB Color</TabsTrigger>
                <TabsTrigger value="cmyk-color">CMYK Color</TabsTrigger>
              </TabsList>

              <TabsContent value="background-color" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bg-rgb-red">Red</Label>
                    <Input 
                      id="bg-rgb-red"
                      type="number" 
                      min="0" 
                      max="255" 
                      defaultValue="255"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-rgb-green">Green</Label>
                    <Input 
                      id="bg-rgb-green"
                      type="number" 
                      min="0" 
                      max="255" 
                      defaultValue="255"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-rgb-blue">Blue</Label>
                    <Input 
                      id="bg-rgb-blue"
                      type="number" 
                      min="0" 
                      max="255" 
                      defaultValue="255"
                      className="font-mono"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cmyk-color" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bg-cmyk-cyan">Cyan (%)</Label>
                    <Input 
                      id="bg-cmyk-cyan"
                      type="number" 
                      min="0" 
                      max="100" 
                      defaultValue="0"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-cmyk-magenta">Magenta (%)</Label>
                    <Input 
                      id="bg-cmyk-magenta"
                      type="number" 
                      min="0" 
                      max="100" 
                      defaultValue="0"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-cmyk-yellow">Yellow (%)</Label>
                    <Input 
                      id="bg-cmyk-yellow"
                      type="number" 
                      min="0" 
                      max="100" 
                      defaultValue="0"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-cmyk-black">Black (%)</Label>
                    <Input 
                      id="bg-cmyk-black"
                      type="number" 
                      min="0" 
                      max="100" 
                      defaultValue="0"
                      className="font-mono"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                The colors chosen will apply to the background of the output file.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* SVG Preview Window */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              SVG Preview
            </CardTitle>
            <CardDescription>
              Preview your output file with the applied styling changes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-muted/10">
                <div className="text-center space-y-2">
                  <Eye className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground">
                    SVG preview will appear here
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    Apply styling changes to see the preview update
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Refresh Preview
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Download SVG
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/edit'>
            Back to Edit Data
          </Link>
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          <Link to='/export'>
            Continue to Export
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Styling;