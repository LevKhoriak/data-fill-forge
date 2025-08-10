import { Table as TableIcon, Plus, Minus, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Link } from 'react-router-dom';

const EditData = () => {
  // Mock editable data
  const mockData = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "Acme Corp", position: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "Tech Inc", position: "Developer" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", company: "Design Co", position: "Designer" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Edit className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Edit Data</h1>
          <p className="text-muted-foreground">Modify your CSV data directly in the table</p>
        </div>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="h-5 w-5 text-primary" />
              Editable Data Table
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Row
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Column
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            Edit cells directly by clicking on them. Add or remove rows and columns as needed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-16">Actions</TableHead>
                  <TableHead>
                    <div className="flex items-center justify-between">
                      ID
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center justify-between">
                      Name
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center justify-between">
                      Email
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center justify-between">
                      Company
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center justify-between">
                      Position
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row) => (
                  <TableRow key={row.id} className="hover:bg-muted/30">
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-destructive">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={row.id} 
                        className="h-8 text-sm border-0 bg-transparent hover:bg-muted/30 focus:bg-background"
                        readOnly
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={row.name} 
                        className="h-8 text-sm border-0 bg-transparent hover:bg-muted/30 focus:bg-background"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={row.email} 
                        className="h-8 text-sm border-0 bg-transparent hover:bg-muted/30 focus:bg-background"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={row.company} 
                        className="h-8 text-sm border-0 bg-transparent hover:bg-muted/30 focus:bg-background"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={row.position} 
                        className="h-8 text-sm border-0 bg-transparent hover:bg-muted/30 focus:bg-background"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {/* TODO: Connect edits to internal state */}
              Changes are automatically saved. Use the buttons above to add/remove rows and columns.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link to='/mapping'>
            Back to Field Mapping
          </Link>
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          <Link to='/styling'>
            Continue to Styling
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EditData;