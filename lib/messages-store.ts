// Simple message storage using browser's localStorage
export interface Message {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  date: string;
  status: 'read' | 'unread';
}

// Get messages from localStorage
export function getMessages(): Message[] {
  if (typeof window === 'undefined') {
    return [];
  }
  
  const storedMessages = localStorage.getItem('contactMessages');
  if (!storedMessages) {
    return [];
  }
  
  try {
    return JSON.parse(storedMessages);
  } catch (error) {
    console.error('Error parsing stored messages:', error);
    return [];
  }
}

// Save a new message
export function saveMessage(messageData: Omit<Message, 'id' | 'date' | 'status'>): Message {
  const messages = getMessages();
  
  const newMessage: Message = {
    ...messageData,
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    status: 'unread',
  };
  
  const updatedMessages = [newMessage, ...messages];
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  }
  
  return newMessage;
}

// Update message status
export function updateMessageStatus(id: number, status: 'read' | 'unread'): void {
  const messages = getMessages();
  const updatedMessages = messages.map(msg => 
    msg.id === id ? { ...msg, status } : msg
  );
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  }
}

// Delete a message
export function deleteMessage(id: number): void {
  const messages = getMessages();
  const updatedMessages = messages.filter(msg => msg.id !== id);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  }
}
