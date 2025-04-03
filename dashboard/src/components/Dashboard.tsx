import { reservations } from '../data/reservations';
import ReservationCard from './ReservationCard';

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {reservations.map((reservation, index) => (
        <ReservationCard key={index} reservation={reservation} />
      ))}
    </div>
  );
}

export default Dashboard;