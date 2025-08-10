import { FileSpreadsheet, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import { Link } from 'react-router-dom';

const DataPreview = () => {
  const { t } = useLanguage();
  
  // Mock CSV data for preview
  const mockData = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "Acme Corp", position: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "Tech Inc", position: "Developer" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", company: "Design Co", position: "Designer" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{t('pages.preview.title')}</h1>
          <p className="text-muted-foreground">{t('pages.preview.description')}</p>
        </div>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            {t('pages.preview.csvDataTable')}
          </CardTitle>
          <CardDescription>
            {t('pages.preview.csvDataTableDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row) => (
                  <TableRow key={row.id} className="hover:bg-muted/30">
                    <TableCell className="font-mono text-sm">{row.id}</TableCell>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell className="text-muted-foreground">{row.email}</TableCell>
                    <TableCell>{row.company}</TableCell>
                    <TableCell>{row.position}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {/* TODO: Parse and render CSV data as table */}
              {t('pages.preview.totalRows')}: {mockData.length} | {t('pages.preview.columnsDetected')}: 5
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/'>
            {t('pages.preview.backToUpload')}
          </Link>
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          <Link to='/mapping'>
            {t('pages.preview.continueToMapping')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DataPreview;