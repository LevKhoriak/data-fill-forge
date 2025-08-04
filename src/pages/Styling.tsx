import { Palette, Circle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Styling = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Palette className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Styling Options</h1>
          <p className="text-muted-foreground">Customize colors for text and background elements</p>
        </div>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-primary" />
            Color Controls
          </CardTitle>
          <CardDescription>
            Set RGB and CMYK colors for text and background elements in your PDF output.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text-color" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="text-color">Text Color</TabsTrigger>
              <TabsTrigger value="background-color">Background Color</TabsTrigger>
            </TabsList>

            <TabsContent value="text-color" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* RGB Controls */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">RGB Color</CardTitle>
                    <CardDescription>Red, Green, Blue values (0-255)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="text-rgb-red">Red</Label>
                      <Input 
                        id="text-rgb-red"
                        type="number" 
                        min="0" 
                        max="255" 
                        defaultValue="0"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-rgb-green">Green</Label>
                      <Input 
                        id="text-rgb-green"
                        type="number" 
                        min="0" 
                        max="255" 
                        defaultValue="0"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-rgb-blue">Blue</Label>
                      <Input 
                        id="text-rgb-blue"
                        type="number" 
                        min="0" 
                        max="255" 
                        defaultValue="0"
                        className="font-mono"
                      />
                    </div>
                    <div className="h-16 bg-black rounded-lg border flex items-center justify-center">
                      <span className="text-white text-sm">Preview</span>
                    </div>
                  </CardContent>
                </Card>

                {/* CMYK Controls */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">CMYK Color</CardTitle>
                    <CardDescription>Cyan, Magenta, Yellow, Black (0-100%)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="text-cmyk-cyan">Cyan (%)</Label>
                      <Input 
                        id="text-cmyk-cyan"
                        type="number" 
                        min="0" 
                        max="100" 
                        defaultValue="100"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-cmyk-magenta">Magenta (%)</Label>
                      <Input 
                        id="text-cmyk-magenta"
                        type="number" 
                        min="0" 
                        max="100" 
                        defaultValue="100"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-cmyk-yellow">Yellow (%)</Label>
                      <Input 
                        id="text-cmyk-yellow"
                        type="number" 
                        min="0" 
                        max="100" 
                        defaultValue="100"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-cmyk-black">Black (%)</Label>
                      <Input 
                        id="text-cmyk-black"
                        type="number" 
                        min="0" 
                        max="100" 
                        defaultValue="100"
                        className="font-mono"
                      />
                    </div>
                    <div className="h-16 bg-black rounded-lg border flex items-center justify-center">
                      <span className="text-white text-sm">Preview</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="background-color" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* RGB Controls */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">RGB Color</CardTitle>
                    <CardDescription>Red, Green, Blue values (0-255)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                    <div className="h-16 bg-white rounded-lg border flex items-center justify-center">
                      <span className="text-black text-sm">Preview</span>
                    </div>
                  </CardContent>
                </Card>

                {/* CMYK Controls */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">CMYK Color</CardTitle>
                    <CardDescription>Cyan, Magenta, Yellow, Black (0-100%)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                    <div className="h-16 bg-white rounded-lg border flex items-center justify-center">
                      <span className="text-black text-sm">Preview</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {/* TODO: Apply selected color to box/text styles */}
              Color values will be applied to the filled elements in your PDF output.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">
          Back to Edit Data
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          Continue to Export
        </Button>
      </div>
    </div>
  );
};

export default Styling;