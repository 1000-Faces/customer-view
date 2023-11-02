interface SessionData {
    [sessionId: string]: {
      userId: string;
      createdAt: Date;
    };
  }
  
  let sessionData: SessionData = {};
  
  // Function to create a new session
  export function createSession(userId: string): string {
    const sessionId = generateSessionId();
    sessionData[sessionId] = {
      userId: userId,
      createdAt: new Date(),
    };
    return sessionId;
  }
  
  // Function to get the user ID associated with a session
  export function getUserId(sessionId: string): string | null {
    const session = sessionData[sessionId];
    if (session) {
      return session.userId;
    }
    return null;
  }
  
  // Function to check if a session is valid
  export function isValidSession(sessionId: string): boolean {
    return sessionData.hasOwnProperty(sessionId);
  }
  
  // Function to generate a unique session ID
  function generateSessionId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let sessionId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      sessionId += characters.charAt(randomIndex);
    }
  
    return sessionId;
  }
  