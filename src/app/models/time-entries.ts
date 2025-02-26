import { Field, CustomField } from './fields';

export class TimeEntryList {
  time_entries: TimeEntry[] = [];
  total_count = 0;
  offset = 0;
  limit = 0;
}

export class TimeEntry {
  id: number;
  project: Field;
  issue: {
    id: number
  };
  user: Field;
  activity: Field;
  hours: number;
  comments: string;
  spent_on: string;
  created_on: string;
  updated_on: string;
  // display extension
  isNew = false;
}

export class NewTimeEntry {
  issue_id: number;
  spent_on: string;
  hours: number;
  activity_id: number;
  activity_name: string;
  comments: string;
}

export class DayLog {
  date: string;
  dayOfWeek: number; // ISO, i.e. 1-7
  timeEntries: TimeEntryList;
  hoursLogged: number;
}

export class WeekLog {
  weekNumber: number; // ISO number of week in year, i.e. from 1
  startsWith: number; // day of week that starts the week 1 for Monday, 2 for Tusday, etc.
  numberOfWorkingDays: number;
  numberOfDays: number;
  dayLogs: DayLog[];
  hoursLogged: number;
}

export class Week {
  weekNumber: number;
  period: string;
}
