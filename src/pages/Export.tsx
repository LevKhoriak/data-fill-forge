import { Download, FileText, FileCheck, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

import { Link } from 'react-router-dom';
import { useState } from "react";

const Export = () => {
  const { t } = useLanguage();
  const [outputFormat, setOutputFormat] = useState("PDF");
  
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Download className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{t('pages.export.exportFinalDesign')}</h1>
          <p className="text-muted-foreground">{t('pages.export.generateFilledTemplates')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Export Settings */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t('pages.export.exportSettings')}
            </CardTitle>
            <CardDescription>
              {t('pages.export.configureExportOptions')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="output-format">{t('pages.export.outputFormat')}</Label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger>
                  <SelectValue placeholder={t('pages.export.selectFormat')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">PDF (.pdf)</SelectItem>
                  <SelectItem value="AI">Adobe Illustrator (.ai)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full bg-gradient-primary shadow-elegant hover:shadow-soft transition-all duration-200"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                {t('pages.export.generateFiles')} {outputFormat}
              </Button>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                {/* TODO: Trigger export with selected model + template */}
                {t('pages.export.willGenerateFinalDesign')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Export Summary */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-primary" />
              {t('pages.export.exportSummary')}
            </CardTitle>
            <CardDescription>
              {t('pages.export.reviewWhatWillBeExported')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{t('pages.export.template')}</span>
                <span className="text-sm text-muted-foreground">armat_r10n.svg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{t('pages.export.modelChosen')}</span>
                <span className="text-sm text-muted-foreground">Armat R10N</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{t('pages.export.outputFormat')}:</span>
                <span className="text-sm text-muted-foreground">{outputFormat}</span>
              </div>
            </div>

            {/* Progress indicator placeholder */}
            <div className="pt-4 space-y-2 hidden">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-sm">{t('pages.export.generatingFiles')}</span>
              </div>
              <Progress value={60} className="h-2" />
              <p className="text-xs text-muted-foreground">{t('pages.export.processingRecord')} 2 {t('common.of')} 3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/styling'>
            {t('pages.export.backToStyling')}
          </Link>
        </Button>
        <Button variant="outline">
          <Link to='/'>
            {t('pages.export.startOver')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Export;