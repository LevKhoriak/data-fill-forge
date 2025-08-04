import { Settings, CheckSquare, Image } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FieldMapping = () => {
  // Mock CSV data for mapping
  const mockRecords = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      company: "Acme Corp", 
      position: "Manager",
      photo: "/path/to/photo1.jpg"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      company: "Tech Inc", 
      position: "Developer",
      photo: "/path/to/photo2.jpg"
    },
    { 
      id: 3, 
      name: "Bob Johnson", 
      email: "bob@example.com", 
      company: "Design Co", 
      position: "Designer",
      photo: "/path/to/photo3.jpg"
    },
  ];

  const renderFieldValue = (key: string, value: string) => {
    if (key === 'photo' && value.includes('.jpg')) {
      return (
        <div className="flex items-center gap-2">
          <Image className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{value}</span>
          <Badge variant="secondary" className="text-xs">Image</Badge>
        </div>
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Settings className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Field Mapping</h1>
          <p className="text-muted-foreground">Select which fields to fill in your PDF template</p>
        </div>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-primary" />
            Record Selection
          </CardTitle>
          <CardDescription>
            For each record, select which fields should be filled in the PDF template.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {mockRecords.map((record) => (
              <AccordionItem key={record.id} value={`record-${record.id}`}>
                <AccordionTrigger className="hover:bg-muted/30 px-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">#{record.id}</Badge>
                    <span className="font-medium">{record.name}</span>
                    <span className="text-muted-foreground text-sm">{record.company}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 pb-4 space-y-4">
                    {Object.entries(record).map(([key, value]) => {
                      if (key === 'id') return null;
                      return (
                        <div key={key} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/20">
                          <div className="flex items-center gap-3">
                            <Checkbox 
                              id={`${record.id}-${key}`}
                              className="data-[state=checked]:bg-primary"
                            />
                            <div className="space-y-1">
                              <label 
                                htmlFor={`${record.id}-${key}`}
                                className="text-sm font-medium capitalize cursor-pointer"
                              >
                                {key}
                              </label>
                              <div>
                                {renderFieldValue(key, value.toString())}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        {/* TODO: Track checkbox selections per field */}
                        Selected fields will be mapped to corresponding template positions
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">
          Back to Data Preview
        </Button>
        <Button className="bg-gradient-primary shadow-elegant">
          Continue to Edit Data
        </Button>
      </div>
    </div>
  );
};

export default FieldMapping;