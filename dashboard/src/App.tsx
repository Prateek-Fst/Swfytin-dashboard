import Dashboard from './components/Dashboard';
import { Input } from './components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from './components/ui/select';
import { Popover, PopoverTrigger, PopoverContent } from './components/ui/popover';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <div className="flex space-x-4">
          <Input placeholder="Search..." className="w-48" />
          <Select>
            <SelectTrigger>Communication</SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {/* Add more options */}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>Status</SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {/* Add more options */}
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Pick date range</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>Date picker placeholder</p>
              {/* Integrate a date picker library if needed */}
            </PopoverContent>
          </Popover>
          <Button>Actions</Button>
          <Button variant="primary">Create</Button>
        </div>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;