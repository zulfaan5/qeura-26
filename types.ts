
export type PageType = 'home' | 'day1' | 'day2' | 'day3' | 'register';

export interface EventItem {
  id: string;
  title: string;
  type: string;
  description: string;
  time: string;
  venue: string;
}

export interface DaySchedule {
  date: string;
  venueInfo: string;
  events: EventItem[];
}

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
}
