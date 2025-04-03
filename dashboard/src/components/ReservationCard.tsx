import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  Users,
  MoreVertical,
} from 'lucide-react';
import { Reservation } from '../data/reservations';

interface ReservationCardProps {
  reservation: Reservation;
}

function ReservationCard({ reservation }: ReservationCardProps) {
  const {
    name,
    status,
    resNo,
    checkIn,
    checkOut,
    email,
    phone,
    bookingDate,
    docs,
    guests,
    total,
    due,
  } = reservation;

  const statusVariant =
    status === 'Pending'
      ? 'warning'
      : status === 'Confirmed'
      ? 'success'
      : 'destructive';

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <User className="h-6 w-6" />
          <div>
            <CardTitle className="font-bold">{name}</CardTitle>
            <p className="text-sm text-gray-400">{resNo}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={statusVariant}>{status}</Badge>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          <p className="text-sm">
            {checkIn} - {checkOut}
          </p>
        </div>
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2" />
          <p className="text-sm">{email}</p>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <p className="text-sm">{phone}</p>
        </div>
        <div className="flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          <p className="text-sm">Booking Date: {bookingDate}</p>
        </div>
        <div className="flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          <p className="text-sm">Docs: {docs}</p>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2" />
          <p className="text-sm">{guests}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p>Total: ${total}</p>
          <p className="text-red-500">Due: ${due}</p>
        </div>
        <Button variant="outline">View Room</Button>
      </CardFooter>
    </Card>
  );
}

export default ReservationCard;