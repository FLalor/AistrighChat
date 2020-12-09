    export interface IChat {
      id: string;
      displayName: string;
      email: string;
      type: 'human' | 'joined';
      message: string;
      createdAt: string;
      isMe: boolean;
    }
