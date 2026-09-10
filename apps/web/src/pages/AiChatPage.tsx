import React, { useState } from 'react';
import { Card, Button } from '@packages/ui';
import { AIChatMessage } from '@packages/types';
import { sendChatMessage } from '../services/api';

interface AiChatPageProps {
  onBack: () => void;
}

export const AiChatPage: React.FC<AiChatPageProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am your AI assistant connected to the Python AI service. How can I help you today?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: AIChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const data = await sendChatMessage(newMessages);
      const assistantMessage: AIChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'No response from model',
        timestamp: new Date().toISOString(),
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (err: any) {
      setMessages([
        ...newMessages,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `⚠️ Error connecting to AI Service: ${err.message}. Make sure the Python AI service is running on port 8000.`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Button variant="outline" size="sm" onClick={onBack}>
          ← Back to Home
        </Button>
        <h2 style={{ fontSize: '20px', fontWeight: 600 }}>AI Assistant (FastAPI Core)</h2>
      </div>

      <Card>
        <div style={{ minHeight: '400px', maxHeight: '500px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', paddingRight: '8px' }}>
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: m.role === 'user' ? '#4f46e5' : '#334155',
                color: '#fff',
                fontSize: '14px',
                lineHeight: 1.5,
              }}
            >
              <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '4px' }}>
                {m.role === 'user' ? 'You' : 'AI Assistant'}
              </div>
              {m.content}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: 'flex-start', padding: '12px 16px', borderRadius: '12px', background: '#334155', color: '#94a3b8', fontSize: '13px' }}>
              Thinking...
            </div>
          )}
        </div>

        <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <input
            type="text"
            placeholder="Type your prompt here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#fff',
              outline: 'none',
              fontSize: '14px',
            }}
          />
          <Button type="submit" isLoading={loading}>
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
};
