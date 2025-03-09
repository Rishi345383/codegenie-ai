import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, History, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <Tabs defaultValue="projects" className="space-y-8">
        <TabsList>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Project {i}</h3>
                  <Code className="text-primary h-5 w-5" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Last modified: {new Date().toLocaleDateString()}
                </p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button size="sm">Open</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Code Generation #{i}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <History className="text-primary h-5 w-5" />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">User Preferences</h3>
              <Settings className="text-primary h-5 w-5" />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Default Programming Language</label>
                <select className="w-full p-2 rounded-md border">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>TypeScript</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Code Style</label>
                <select className="w-full p-2 rounded-md border">
                  <option>Standard</option>
                  <option>Google</option>
                  <option>Airbnb</option>
                </select>
              </div>
              <Button className="w-full">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}