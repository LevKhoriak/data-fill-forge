import { useState, useRef } from "react";
import { Upload as UploadIcon, FileText, FileSpreadsheet, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const csvInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      toast({
        title: "PDF uploaded successfully",
        description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
    }
  };

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
      
      // Parse CSV file
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split('\n').filter(line => line.trim());
        
        if (lines.length > 0) {
          const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
          setCsvHeaders(headers);
          
          const data = lines.slice(1).map((line, index) => {
            const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
            const row: any = { id: index + 1 };
            headers.forEach((header, i) => {
              row[header] = values[i] || '';
            });
            return row;
          });
          
          setCsvData(data);
          toast({
            title: "CSV uploaded successfully",
            description: `${file.name} - ${data.length} records found`,
          });
        }
      };
      reader.readAsText(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
    }
  };

  const removePdfFile = () => {
    setPdfFile(null);
    if (pdfInputRef.current) {
      pdfInputRef.current.value = '';
    }
  };

  const removeCsvFile = () => {
    setCsvFile(null);
    setCsvData([]);
    setCsvHeaders([]);
    if (csvInputRef.current) {
      csvInputRef.current.value = '';
    }
  };

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
                <Button variant="outline" size="sm" onClick={() => pdfInputRef.current?.click()}>
                  Browse Files
                </Button>
                <Input 
                  ref={pdfInputRef}
                  type="file" 
                  accept=".pdf" 
                  className="hidden" 
                  onChange={handlePdfUpload}
                />
              </div>
            </div>

            {/* PDF Preview */}
            {pdfFile ? (
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{pdfFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removePdfFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    PDF preview ready for processing
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {/* TODO: Render uploaded PDF here */}
                    Full PDF rendering will be implemented
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  PDF preview will appear here
                </p>
              </div>
            )}
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
                <Button variant="outline" size="sm" onClick={() => csvInputRef.current?.click()}>
                  Browse Files
                </Button>
                <Input 
                  ref={csvInputRef}
                  type="file" 
                  accept=".csv" 
                  className="hidden" 
                  onChange={handleCsvUpload}
                />
              </div>
            </div>

            {/* CSV Preview */}
            {csvFile && csvData.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-3 bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{csvFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {csvData.length} records, {csvHeaders.length} columns
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removeCsvFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="max-h-64 overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {csvHeaders.map((header, index) => (
                          <TableHead key={index} className="text-xs font-medium">
                            {header}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {csvData.slice(0, 5).map((row, index) => (
                        <TableRow key={index}>
                          {csvHeaders.map((header, headerIndex) => (
                            <TableCell key={headerIndex} className="text-xs">
                              {row[header] || '-'}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {csvData.length > 5 && (
                    <div className="p-2 text-center text-xs text-muted-foreground bg-muted/20">
                      ... and {csvData.length - 5} more records
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <FileSpreadsheet className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  CSV data preview will appear here
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button 
          className="bg-gradient-primary shadow-elegant"
          disabled={!pdfFile || !csvFile}
        >
          Continue to Data Preview
        </Button>
      </div>
    </div>
  );
};

export default Upload;