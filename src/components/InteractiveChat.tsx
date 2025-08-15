import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Bot, User } from 'lucide-react';

interface InteractiveChatProps {
  onClose: () => void;
}

const InteractiveChat: React.FC<InteractiveChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your health journey assistant. I can help explain your test results, answer questions about your plan, or connect you with your team members. What would you like to know?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "Why was my cholesterol medication recommended?",
    "How is my progress compared to others?",
    "When is my next appointment?",
    "Can you explain my vitamin D results?"
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = {
        type: 'user' as const,
        content: inputValue,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const botResponse = getBotResponse(inputValue);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: botResponse,
          timestamp: new Date().toLocaleTimeString()
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('cholesterol')) {
      return 'Your cholesterol levels were elevated at 245 mg/dL (normal is <200). Dr. Chen recommended a Mediterranean-style diet and omega-3 supplements because this approach has been shown to reduce cholesterol by 15-20% in patients with similar profiles. The combination addresses both dietary cholesterol and inflammation, which are key factors in your case.';
    } else if (lowerQuestion.includes('vitamin d')) {
      return 'Your vitamin D was low at 18 ng/mL (optimal is 30-100). This deficiency can affect energy levels, immune function, and bone health. We recommended 4000 IU daily because your body weight and absorption profile suggest you need this higher dose to reach optimal levels within 6-8 weeks.';
    } else if (lowerQuestion.includes('progress')) {
      return 'You\'re doing exceptionally well! Your adherence rate is 87% compared to the average of 65%. Your energy levels have improved by 40% and sleep quality by 35% since starting. Most patients see these improvements around week 16, but you\'re ahead of schedule.';
    } else if (lowerQuestion.includes('appointment')) {
      return 'Your next comprehensive review is scheduled for March 15th with Dr. Chen. You also have a nutrition check-in with Lisa on March 8th, and your quarterly lab work is due the week of March 20th. Would you like me to send calendar invites?';
    } else {
      return 'That\'s a great question! Let me connect you with the right team member who can provide the most accurate information. In the meantime, you can find detailed explanations in your test results section, or I can help explain any specific aspect of your health journey.';
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-end p-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <MessageCircle size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Health Assistant</h3>
              <p className="text-sm opacity-90">Ask me anything about your journey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2`}>
                <div className="flex items-start space-x-2">
                  {message.type === 'bot' && (
                    <Bot size={16} className="mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 opacity-70`}>{message.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Bot size={16} />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
            <div className="space-y-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your health journey..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChat;