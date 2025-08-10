import { Download, FileText, FileCheck, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { Link } from 'react-router-dom';

const Export = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Download className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Export PDF</h1>
          <p className="text-muted-foreground">Generate your filled PDF files</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Export Settings */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Export Settings
            </CardTitle>
            <CardDescription>
              Configure your export options before generating the files.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="output-format">Output Format</Label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                  <SelectItem value="ai">Adobe Illustrator (.ai)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="naming-convention">File Naming</Label>
              <Select defaultValue="name-based">
                <SelectTrigger>
                  <SelectValue placeholder="Select naming convention" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-based">Based on Name field</SelectItem>
                  <SelectItem value="id-based">Based on ID field</SelectItem>
                  <SelectItem value="sequential">Sequential numbering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full bg-gradient-primary shadow-elegant hover:shadow-soft transition-all duration-200"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Generate PDF Files
              </Button>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                {/* TODO: Trigger export with selected model + template */}
                This will generate one PDF file for each selected record with the specified template and styling.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Export Summary */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-primary" />
              Export Summary
            </CardTitle>
            <CardDescription>
              Review what will be exported before proceeding.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Template:</span>
                <span className="text-sm text-muted-foreground">template.pdf</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Records:</span>
                <span className="text-sm text-muted-foreground">3 selected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Fields mapped:</span>
                <span className="text-sm text-muted-foreground">5 fields</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Output format:</span>
                <span className="text-sm text-muted-foreground">PDF</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Files to be generated:</h4>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">• john-doe.pdf</div>
                <div className="text-sm text-muted-foreground">• jane-smith.pdf</div>
                <div className="text-sm text-muted-foreground">• bob-johnson.pdf</div>
              </div>
            </div>

            {/* Progress indicator placeholder */}
            <div className="pt-4 space-y-2 hidden">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-sm">Generating files...</span>
              </div>
              <Progress value={60} className="h-2" />
              <p className="text-xs text-muted-foreground">Processing record 2 of 3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/styling'>
            Back to Styling
          </Link>
        </Button>
        <Button variant="outline">
          <Link to='/'>
            Start Over
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Export;