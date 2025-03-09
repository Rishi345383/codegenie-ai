import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code2, Play, Download, Copy } from 'lucide-react';

export default function Playground() {
  const [code, setCode] = useState('');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Code Playground</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <Tabs defaultValue="generate">
            <TabsList className="mb-4">
              <TabsTrigger value="generate">Generate</TabsTrigger>
              <TabsTrigger value="explain">Explain</TabsTrigger>
              <TabsTrigger value="debug">Debug</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="space-y-4">
              <Textarea
                placeholder="Describe the code you want to generate..."
                className="min-h-[300px]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button className="w-full">
                <Code2 className="mr-2 h-4 w-4" />
                Generate Code
              </Button>
            </TabsContent>
            
            <TabsContent value="explain" className="space-y-4">
              <Textarea
                placeholder="Paste the code you want to understand..."
                className="min-h-[300px]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button className="w-full">
                Explain Code
              </Button>
            </TabsContent>
            
            <TabsContent value="debug" className="space-y-4">
              <Textarea
                placeholder="Paste the code you want to debug..."
                className="min-h-[300px]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button className="w-full">
                Debug Code
              </Button>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Output</h2>
            <div className="space-x-2">
              <Button variant="outline" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4 min-h-[300px] font-mono">
            {/* Output will be displayed here */}
          </div>
        </Card>
      </div>
    </div>
  );
}