import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/api';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  avatarUrl?: string;
  targetRole: string;
  seniority: string;
  creditsRemaining: number;
  totalCredits: number;
  token?: string;
  cvFileName?: string;
  cvSkills?: string[];
  cvAtsScore?: number;
  isEmailVerified?: boolean;
}

interface AuthContextType {
  user: UserProfile;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  consumeCredits: (amount: number) => boolean;
}

const DEFAULT_USER: UserProfile = {
  id: 'usr-active-candidate-01',
  name: 'Shakil Ahmed',
  email: 'shakil@inprep.ai',
  role: 'user',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  targetRole: 'Staff Backend & Distributed Systems Architect',
  seniority: 'Senior (6+ Yrs Infra)',
  creditsRemaining: 840,
  totalCredits: 1000,
  cvFileName: 'Shakil_Ahmed_Staff_Architect_CV.pdf',
  cvSkills: ['Go', 'Apache Kafka', 'Distributed Consensus', 'PostgreSQL', 'Kubernetes', 'AWS', 'Raft'],
  cvAtsScore: 94,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const stored = localStorage.getItem('inprep_user');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse stored user:', e);
    }
    return DEFAULT_USER;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('inprep_authenticated') === 'true';
    } catch {
      return false;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('inprep_user', JSON.stringify(user));
    } catch (e) {
      console.warn('Failed to persist user in localStorage:', e);
    }
  }, [user]);

  const login = async (email: string, _password?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const result = await loginUser(email);
      if (result && result.user) {
        const updated: UserProfile = {
          ...user,
          id: result.user.id || user.id,
          email: result.user.email || email,
          name: result.user.name || email.split('@')[0],
          targetRole: result.user.targetRole || user.targetRole,
        };
        setUser(updated);
        setIsAuthenticated(true);
        localStorage.setItem('inprep_authenticated', 'true');
        return true;
      }
      setIsAuthenticated(true);
      localStorage.setItem('inprep_authenticated', 'true');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticated(true);
      localStorage.setItem('inprep_authenticated', 'true');
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, _password?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = (name.trim() || cleanEmail.split('@')[0]);

      const result = await registerUser(cleanName, cleanEmail);

      const newUser: UserProfile = {
        id: result?.user?.id || `usr-${Date.now()}`,
        name: cleanName,
        email: cleanEmail,
        role: 'user',
        avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanName)}`,
        targetRole: result?.user?.targetRole || 'Select Target Role',
        seniority: result?.user?.seniority || 'Entry / Mid',
        creditsRemaining: 100,
        totalCredits: 100,
        cvFileName: undefined,
        cvSkills: [],
        cvAtsScore: undefined,
        isEmailVerified: false,
      };
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('inprep_authenticated', 'true');
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('inprep_user');
    localStorage.removeItem('inprep_authenticated');
    setUser(DEFAULT_USER);
    setIsAuthenticated(false);
  };

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const consumeCredits = (amount: number): boolean => {
    if (user.creditsRemaining >= amount) {
      setUser((prev) => ({
        ...prev,
        creditsRemaining: prev.creditsRemaining - amount,
      }));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
        consumeCredits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
