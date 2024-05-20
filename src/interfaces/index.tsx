export interface Chat {
  id: number;
  contact: string;
  lastMessage: string;
  lastMessageTime: string;
}

export interface ChatDetail {
  contact: string;
  messages: {
    sender: string;
    content: string;
    time: string;
  }[];
}

export interface User {
  profile: {
    name: string;
    phone: string;
    photo: string;
    status: string;
    lastSeen: string;
  };
}
