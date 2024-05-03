export interface AnnouncementsComponentData {
  announcements: AnnouncementData[];
}

export interface AnnouncementsProps extends AnnouncementsComponentData {}

export interface AnnouncementData {
  id: string;
  title: string;
  date: string;
  content: string;
}