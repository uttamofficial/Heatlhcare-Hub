import React, { useState } from 'react';
import { Send, Bot, Paperclip, Image } from 'lucide-react';
import axios from 'axios';

const API_KEY = 'AIzaSyC9Fim1LYld74q8ryEVrYLKidLQ5AI6gzI'; // You can move this to .env later

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: "Hello! I'm your AI Health Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        {
          contents: [
            {
              role: 'user',
              parts: [{ text: input }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 512,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            key: API_KEY,
          },
        }
      );

      const aiMessage = response.data.candidates[0]?.content?.parts[0]?.text || 'Sorry, I couldn’t understand that.';
      setMessages((prev) => [...prev, { type: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Gemini API error:', error?.response?.data || error.message);
      setMessages((prev) => [
        ...prev,
        { type: 'assistant', content: 'Something went wrong. Please try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold">AI Health Assistant</h2>
                <p className="text-sm text-gray-500">Online - Ready to assist</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl p-4">Typing...</div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Image className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your health question..."
                className="flex-1 border-none focus:ring-0 focus:outline-none"
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
