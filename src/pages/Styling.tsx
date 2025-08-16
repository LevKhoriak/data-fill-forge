import { Palette, Circle, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

import { Link } from 'react-router-dom';

const Styling = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Palette className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{t('pages.styling.stylingOptions')}</h1>
          <p className="text-muted-foreground">{t('pages.styling.customizeBackgroundColors')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Background Color Controls */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-primary" />
              {t('pages.styling.backgroundColorControls')}
            </CardTitle>
            <CardDescription>
              {t('pages.styling.setRgbCmykColors')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="background-color" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="background-color">{t('pages.styling.rgbColor')}</TabsTrigger>
                <TabsTrigger value="cmyk-color">{t('pages.styling.cmykColor')}</TabsTrigger>
              </TabsList>

              <TabsContent value="background-color" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bg-rgb-red">{t('pages.styling.red')}</Label>
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
                    <Label htmlFor="bg-rgb-green">{t('pages.styling.green')}</Label>
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
                    <Label htmlFor="bg-rgb-blue">{t('pages.styling.blue')}</Label>
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
                    <Label htmlFor="bg-cmyk-cyan">{t('pages.styling.cyan')}</Label>
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
                    <Label htmlFor="bg-cmyk-magenta">{t('pages.styling.magenta')}</Label>
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
                    <Label htmlFor="bg-cmyk-yellow">{t('pages.styling.yellow')}</Label>
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
                    <Label htmlFor="bg-cmyk-black">{t('pages.styling.black')}</Label>
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
                {t('pages.styling.colorsChosenApply')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* SVG Preview Window */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              {t('pages.styling.svgPreview')}
            </CardTitle>
            <CardDescription>
              {t('pages.styling.previewOutputFile')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-muted/10">
                <div className="text-center space-y-2">
                  <Eye className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground">
                    {t('pages.styling.svgPreviewWillAppear')}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {t('pages.styling.applyStylingChanges')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  {t('pages.styling.refreshPreview')}
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  {t('pages.styling.downloadSvg')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/edit'>
            {t('pages.styling.backToEditData')}
          </Link>
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          <Link to='/export'>
            {t('pages.styling.continueToExport')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Styling;