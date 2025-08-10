import { useState, useRef, useEffect, useMemo } from "react";
import { Upload as UploadIcon, FileCode2, FileSpreadsheet, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

import { Link } from 'react-router-dom';

const Upload = () => {
  const [svgFile, setSvgFile] = useState<File | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const svgInputRef = useRef<HTMLInputElement>(null);
  const csvInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // 1) Keep this: preview URL + cleanup
const svgPreviewUrl = useMemo(
  () => (svgFile ? URL.createObjectURL(svgFile) : null),
  [svgFile]
);
useEffect(() => {
  return () => {
    if (svgPreviewUrl) URL.revokeObjectURL(svgPreviewUrl);
  };
}, [svgPreviewUrl]);

// 2) Add this: block stray drops on the whole page (optional, but nice)
useEffect(() => {
  const block = (e: DragEvent) => {
    e.preventDefault();
  };
  window.addEventListener("dragover", block);
  window.addEventListener("drop", block);
  return () => {
    window.removeEventListener("dragover", block);
    window.removeEventListener("drop", block);
  };
}, []);


  // add these two helpers
const processSvgFile = (file: File) => {
  const isSvg = file && (file.type === "image/svg+xml" || file.name.toLowerCase().endsWith(".svg"));
  if (!isSvg) {
    toast({ title: "Invalid file type", description: "Please upload an SVG file", variant: "destructive" });
    return;
  }
  setSvgFile(file);
  toast({ title: "SVG uploaded successfully", description: `${file.name} (${(file.size/1024/1024).toFixed(2)} MB)` });
};

const processCsvFile = (file: File) => {
  const isCsv = file && (file.type === "text/csv" || file.name.toLowerCase().endsWith(".csv"));
  if (!isCsv) {
    toast({ title: "Invalid file type", description: "Please upload a CSV file", variant: "destructive" });
    return;
  }
  setCsvFile(file);
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = (e.target?.result as string) ?? "";
    const lines = text.split(/\r?\n/).filter(Boolean);
    if (!lines.length) return;

    const headers = lines[0].split(",").map((h) => h.trim().replace(/(^"|"$)/g, ""));
    setCsvHeaders(headers);

    const data = lines.slice(1).map((line, idx) => {
      const values = line.split(",").map((v) => v.trim().replace(/(^"|"$)/g, ""));
      const row: any = { id: idx + 1 };
      headers.forEach((h, i) => (row[h] = values[i] ?? ""));
      return row;
    });
    setCsvData(data);
    toast({ title: "CSV uploaded successfully", description: `${file.name} — ${data.length} records found` });
  };
  reader.readAsText(file);
};

// drag state (optional but nice)
const [dragSvg, setDragSvg] = useState(false);
const [dragCsv, setDragCsv] = useState(false);

// shared util to block default navigation
const prevent = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

// SVG drop handlers
const onSvgDragOver = (e: React.DragEvent) => { prevent(e); setDragSvg(true); };
const onSvgDragLeave = (e: React.DragEvent) => { prevent(e); setDragSvg(false); };
const onSvgDrop = (e: React.DragEvent) => {
  prevent(e);
  setDragSvg(false);
  const file = e.dataTransfer.files?.[0];
  if (file) processSvgFile(file);
};

// CSV drop handlers
const onCsvDragOver = (e: React.DragEvent) => { prevent(e); setDragCsv(true); };
const onCsvDragLeave = (e: React.DragEvent) => { prevent(e); setDragCsv(false); };
const onCsvDrop = (e: React.DragEvent) => {
  prevent(e);
  setDragCsv(false);
  const file = e.dataTransfer.files?.[0];
  if (file) processCsvFile(file);
};



  const handleSvgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processSvgFile(file);
  };

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processCsvFile(file);
  };

  const removeSvgFile = () => {
    setSvgFile(null);
    if (svgInputRef.current) svgInputRef.current.value = "";
  };

  const removeCsvFile = () => {
    setCsvFile(null);
    setCsvData([]);
    setCsvHeaders([]);
    if (csvInputRef.current) csvInputRef.current.value = "";
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <UploadIcon className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Upload Files</h1>
          <p className="text-muted-foreground">Upload your SVG template and CSV data file</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SVG Upload Panel */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode2 className="h-5 w-5 text-primary" />
              SVG Template
            </CardTitle>
            <CardDescription>
              Upload your SVG template file that will be filled with data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              onDragOver={onSvgDragOver}
              onDragLeave={onSvgDragLeave}
              onDrop={onSvgDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragSvg ? "border-primary/70 bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
              }`}
            >
              <FileCode2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop your SVG file here</p>
                <p className="text-xs text-muted-foreground">or</p>
                <Button variant="outline" size="sm" onClick={() => svgInputRef.current?.click()}>
                  Browse Files
                </Button>
                <Input
                  ref={svgInputRef}
                  type="file"
                  accept=".svg,image/svg+xml"
                  className="hidden"
                  onChange={handleSvgUpload}
                />
              </div>
            </div>


            {/* SVG Preview */}
            {svgFile ? (
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileCode2 className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{svgFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(svgFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removeSvgFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  {svgPreviewUrl ? (
                    <img
                      src={svgPreviewUrl}
                      alt="SVG preview"
                      className="mx-auto max-h-72 object-contain"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">Preview not available</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    SVG preview (rendered via object URL)
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <FileCode2 className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">SVG preview will appear here</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* CSV Upload Panel (unchanged) */}
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
            <div
              onDragOver={onCsvDragOver}
              onDragLeave={onCsvDragLeave}
              onDrop={onCsvDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragCsv ? "border-primary/70 bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
              }`}
            >
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
                  accept=".csv,text/csv"
                  className="hidden"
                  onChange={handleCsvUpload}
                />
              </div>
            </div>


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
                              {row[header] || "-"}
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
                <p className="text-sm text-muted-foreground">CSV data preview will appear here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
          {svgFile && csvFile ? (
            <Button asChild className="bg-gradient-primary shadow-elegant">
              <Link to="/preview" state={{ svgFile, csvFile }}>
                Continue to Data Preview
              </Link>
            </Button>
          ) : (
            <Button disabled className="bg-gradient-primary shadow-elegant">
              Continue to Data Preview
            </Button>
          )}
      </div>
    </div>
  );
};

export default Upload;
