import { Upload as UploadIcon, FileText, FileSpreadsheet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Upload = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <UploadIcon className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Upload Files</h1>
          <p className="text-muted-foreground">Upload your PDF template and CSV data file</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PDF Upload Panel */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              PDF Template
            </CardTitle>
            <CardDescription>
              Upload your PDF template file that will be filled with data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop your PDF file here</p>
                <p className="text-xs text-muted-foreground">or</p>
                <Button variant="outline" size="sm">
                  Browse Files
                </Button>
                <Input type="file" accept=".pdf" className="hidden" />
              </div>
            </div>

            {/* PDF Preview Placeholder */}
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                {/* TODO: Render uploaded PDF here */}
                PDF preview will appear here
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CSV Upload Panel */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              CSV Data File
            </CardTitle>
            <CardDescription>
              Upload your CSV file containing the data to fill the template
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <FileSpreadsheet className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop your CSV file here</p>
                <p className="text-xs text-muted-foreground">or</p>
                <Button variant="outline" size="sm">
                  Browse Files
                </Button>
                <Input type="file" accept=".csv" className="hidden" />
              </div>
            </div>

            {/* CSV Preview Placeholder */}
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <FileSpreadsheet className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                {/* TODO: Parse and render CSV data as table */}
                CSV data preview will appear here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="bg-gradient-primary shadow-elegant">
          Continue to Data Preview
        </Button>
      </div>
    </div>
  );
};

export default Upload;