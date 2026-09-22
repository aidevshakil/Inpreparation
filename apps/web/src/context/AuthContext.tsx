import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, loginWithGoogle } from '../services/api';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  avatarUrl?: string;
  targetRole: string;
  seniority: string;
  yearsOfExperience?: string | number;
  creditsRemaining: number;
  totalCredits: number;
  token?: string;
  cvFileName?: string;
  cvSkills?: string[];
  cvAtsScore?: number;
  isEmailVerified?: boolean;
  plan?: 'free' | 'pro' | 'premium';
}

interface AuthContextType {
  user: UserProfile;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  loginWithGoogleProvider?: (accessToken: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  consumeCredits: (amount: number) => boolean;
}

const DEFAULT_USER: UserProfile = {
  id: 'usr-active-candidate-01',
  name: 'Candidate User',
  email: '',
  role: 'user',
  avatarUrl: undefined,
  targetRole: '',
  seniority: '',
  yearsOfExperience: '',
  creditsRemaining: 100,
  totalCredits: 100,
  cvFileName: undefined,
  cvSkills: [],
  cvAtsScore: undefined,
  plan: 'free',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const stored = localStorage.getItem('inprep_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          // Purge legacy mock data if user never uploaded a CV
          if (parsed.cvFileName === 'Shakil_Ahmed_Staff_Architect_CV.pdf') {
            delete parsed.cvFileName;
            parsed.cvSkills = [];
            delete parsed.cvAtsScore;
          }
          if (parsed.targetRole === 'Full Stack Software Engineer' && !parsed.cvFileName) {
            parsed.targetRole = '';
          }
          if (parsed.targetRole === 'Select Target Role') {
            parsed.targetRole = '';
          }
          return { ...DEFAULT_USER, ...parsed };
        }
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

  const login = async (email: string, password?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const result = await loginUser(email, password);
      if (result && result.user) {
        const updated: UserProfile = {
          ...user,
          id: result.user.id || user.id,
          email: result.user.email || email,
          name: result.user.name || email.split('@')[0],
          targetRole: result.user.targetRole || 'Select Target Role',
          seniority: result.user.seniority || 'Entry / Mid',
          creditsRemaining: result.user.creditsRemaining ?? 100,
          totalCredits: result.user.totalCredits ?? 100,
          cvFileName: result.user.cvFileName || undefined,
          cvSkills: result.user.cvSkills || [],
          cvAtsScore: result.user.cvAtsScore || undefined,
          isEmailVerified: result.user.isEmailVerified || false,
        };
        setUser(updated);
        setIsAuthenticated(true);
        localStorage.setItem('inprep_authenticated', 'true');
        if (result.token) localStorage.setItem('inprep_token', result.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogleProvider = async (accessToken: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const result = await loginWithGoogle(accessToken);
      if (result && result.user) {
        const incomingEmail = (result.user.email || '').toLowerCase();
        const isSameAccount = !user?.email || user.email.toLowerCase() === incomingEmail;
        const base = isSameAccount ? user : DEFAULT_USER;

        const updated: UserProfile = {
          ...base,
          id: result.user.id || base.id,
          email: result.user.email || base.email,
          name: result.user.name || base.name,
          targetRole: result.user.targetRole || base.targetRole || '',
          avatarUrl: result.user.picture || result.user.avatarUrl || base.avatarUrl,
          seniority: result.user.seniority || base.seniority || 'Entry / Mid',
          creditsRemaining: result.user.creditsRemaining ?? base.creditsRemaining ?? 100,
          totalCredits: result.user.totalCredits ?? base.totalCredits ?? 100,
          cvFileName: result.user.cvFileName || base.cvFileName || undefined,
          cvSkills: (result.user.cvSkills && result.user.cvSkills.length > 0)
            ? result.user.cvSkills
            : (base.cvSkills || []),
          cvAtsScore: result.user.cvAtsScore || base.cvAtsScore || undefined,
          isEmailVerified: result.user.isEmailVerified ?? true,
        };
        setUser(updated);
        setIsAuthenticated(true);
        localStorage.setItem('inprep_authenticated', 'true');
        if (result.token) localStorage.setItem('inprep_token', result.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Google Login error:', error);
      return false;
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
    localStorage.removeItem('inprep_token');
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
        loginWithGoogleProvider,
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
