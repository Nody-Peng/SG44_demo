
export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  link?: string;
  content?: string; // 新增詳細內容欄位
  meetingLink?: string; // 新增：會議連結（選填）
  meetingLinkText?: string; // 新增：連結按鈕文字（選填）
  meetingTime?: string; // 新增：會議時間說明（選填）
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  isPast: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ConferenceInfo {
  title: string;
  subtitle: string;
  theme: string;
  themeEn: string;
  date: string;
  location: string;
  organizer: string;
}
