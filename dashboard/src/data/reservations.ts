export interface Reservation {
    name: string;
    status: 'Pending' | 'Confirmed' | 'Canceled';
    resNo: string;
    checkIn: string;
    checkOut: string;
    email: string;
    phone: string;
    bookingDate: string;
    docs: 'Received' | 'Pending';
    guests: string;
    total: number;
    due: number;
  }
  
  export const reservations: Reservation[] = [
    {
      name: 'B. John Doe',
      status: 'Pending',
      resNo: '#12345',
      checkIn: '01/01/2024',
      checkOut: '01/05/2024',
      email: 'john.doe@example.com',
      phone: '+1 234-567-890',
      bookingDate: '12/25/2023',
      docs: 'Received',
      guests: '2 ♂ 1 ♀',
      total: 500,
      due: 200,
    },
    {
      name: 'Jane Smith',
      status: 'Canceled',
      resNo: '#12346',
      checkIn: '02/01/2024',
      checkOut: '02/03/2024',
      email: 'jane.smith@example.com',
      phone: '+1 987-654-321',
      bookingDate: '01/15/2024',
      docs: 'Pending',
      guests: '2 ♂ 1 ♀',
      total: 300,
      due: 100,
    },
    {
      name: 'Manoj',
      status: 'Confirmed',
      resNo: '#Testweq',
      checkIn: '03/01/2024',
      checkOut: '03/03/2024',
      email: 'nks@live.in',
      phone: '+1 989-654-321',
      bookingDate: '02/15/2024',
      docs: 'Pending',
      guests: '2 ♂ 1 ♀',
      total: 1300,
      due: 100,
    },
    {
      name: 'Robert Chen',
      status: 'Confirmed',
      resNo: '#12347',
      checkIn: '01/01/2024',
      checkOut: '01/15/2024',
      email: 'robert.chen@example.com',
      phone: '+1 555-123-4567',
      bookingDate: '12/30/2023',
      docs: 'Received',
      guests: '2 ♂ 1 ♀',
      total: 750,
      due: 50,
    },
    {
      name: 'Sarah Johnson',
      status: 'Pending',
      resNo: '#12348',
      checkIn: '02/05/2024',
      checkOut: '02/07/2024',
      email: 'sarah@example.com',
      phone: '+1 555-987-6543',
      bookingDate: '01/20/2024',
      docs: 'Pending',
      guests: '2 ♂ 0 ♀',
      total: 400,
      due: 400,
    },
    {
      name: 'Michael Brown',
      status: 'Confirmed',
      resNo: '#12349',
      checkIn: '01/20/2024',
      checkOut: '01/22/2024',
      email: 'm.brown@example.com',
      phone: '+1 555-789-0123',
      bookingDate: '01/05/2024',
      docs: 'Received',
      guests: '1 ♂ 0 ♀',
      total: 300,
      due: 150,
    },
    {
      name: 'Emma Wilson',
      status: 'Confirmed',
      resNo: '#12350',
      checkIn: '01/10/2024',
      checkOut: '01/15/2024',
      email: 'emma.wilson@example.com',
      phone: '+1 555-123-4567',
      bookingDate: '12/30/2023',
      docs: 'Received',
      guests: '2 ♂ 1 ♀',
      total: 750,
      due: 50,
    },
    {
      name: 'David Lee',
      status: 'Pending',
      resNo: '#12351',
      checkIn: '01/20/2024',
      checkOut: '01/22/2024',
      email: 'david.lee@example.com',
      phone: '+1 555-987-6543',
      bookingDate: '01/05/2024',
      docs: 'Pending',
      guests: '1 ♂ 0 ♀',
      total: 300,
      due: 150,
    },
    {
      name: 'Lisa Anderson',
      status: 'Confirmed',
      resNo: '#12352',
      checkIn: '01/20/2024',
      checkOut: '01/22/2024',
      email: 'lisa.anderson@example.com',
      phone: '+1 555-789-0123',
      bookingDate: '01/05/2024',
      docs: 'Received',
      guests: '1 ♂ 0 ♀',
      total: 300,
      due: 150,
    },
  ];