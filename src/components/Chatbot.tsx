"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Zap, Bot, User } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

const PRESET_ANSWERS = {
  subsidy: "Under the PM-Surya Ghar Muft Bijli Yojana, residential solar installations receive upfront central subsidies: ₹30,000 per kW up to 2kW, and ₹18,000 for the 3rd kW. Maximum subsidy is ₹78,000 for systems 3kW or larger! Our team handles 100% of the portal application.",
  cost: "A standard residential solar system costs approximately ₹60,000 to ₹75,000 per kW before subsidies. A typical 3kW system will cost around ₹2,00,000 but after the ₹78,000 subsidy, the net cost drops to just ₹1,22,000!",
  netmeter: "Net Metering exports excess solar power generated during the day back to the government utility grid. Your electricity bill is adjusted based on Net Generation = Imports minus Exports. We handle all approvals and bi-directional meter installations.",
  advisor: "We would love to help! Please fill out our contact form or call us at +91 79 4000 1000. Our EPC specialists will arrange a free site evaluation and load analysis within 24 hours.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "Namaste! I am the ROXX Energy assistant. How can I help you power your home, business, or farm with clean renewable energy today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(), sender: "bot", text, timestamp: new Date() },
    ]);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsgId = Math.random().toString();
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text, timestamp: new Date() },
    ]);
    setInputValue("");

    // Simulate thinking and answer
    setTimeout(() => {
      const query = text.toLowerCase();
      if (query.includes("subsidy") || query.includes("yojana") || query.includes("government")) {
        addBotMessage(PRESET_ANSWERS.subsidy);
      } else if (query.includes("cost") || query.includes("price") || query.includes("investment") || query.includes("calculator")) {
        addBotMessage(PRESET_ANSWERS.cost);
      } else if (query.includes("net") || query.includes("meter") || query.includes("grid")) {
        addBotMessage(PRESET_ANSWERS.netmeter);
      } else if (query.includes("contact") || query.includes("talk") || query.includes("expert") || query.includes("call")) {
        addBotMessage(PRESET_ANSWERS.advisor);
      } else {
        addBotMessage(
          "Interesting question! At ROXX, we offer end-to-end EPC solar rooftops, wind turbine setups, and AMC maintenance. To get direct pricing details, type 'cost', 'subsidy', or simply select the 'Contact Advisor' option below."
        );
      }
    }, 800);
  };

  const handleChipClick = (key: keyof typeof PRESET_ANSWERS, label: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(), sender: "user", text: label, timestamp: new Date() },
    ]);
    setTimeout(() => {
      addBotMessage(PRESET_ANSWERS[key]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[360px] h-[480px] rounded-2xl glass-panel border border-white/10 flex flex-col overflow-hidden shadow-2xl shadow-energy-green/10 mb-4"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-energy-green/20 to-accent-blue/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-energy-green/20 flex items-center justify-center border border-energy-green/30">
                  <Zap className="w-5 h-5 text-energy-green fill-energy-green/20 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white leading-tight">ROXX Energy Expert</h4>
                  <span className="text-[10px] text-energy-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-energy-green animate-pulse" />
                    AI Assistant Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar bg-slate-950/40">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div key={msg.id} className={`flex gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}>
                    <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${isBot ? "bg-energy-green/10 border border-energy-green/20 text-energy-green" : "bg-accent-blue/10 border border-accent-blue/20 text-accent-blue"}`}>
                      {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed border ${
                      isBot
                        ? "bg-dark-card/90 border-white/5 text-slate-200 rounded-tl-sm"
                        : "bg-gradient-to-r from-energy-green/20 to-energy-green/10 border-energy-green/20 text-white rounded-tr-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 border-t border-white/5 bg-slate-950/20 flex gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
              <button
                onClick={() => handleChipClick("subsidy", "What's the Solar Subsidy?")}
                className="px-3 py-1.5 rounded-full border border-white/5 hover:border-energy-green/30 hover:bg-energy-green/5 text-[10px] font-medium text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                ☀️ Solar Subsidy
              </button>
              <button
                onClick={() => handleChipClick("cost", "Estimate Installation Cost")}
                className="px-3 py-1.5 rounded-full border border-white/5 hover:border-energy-green/30 hover:bg-energy-green/5 text-[10px] font-medium text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                💰 Solar Cost
              </button>
              <button
                onClick={() => handleChipClick("netmeter", "How does Net Metering work?")}
                className="px-3 py-1.5 rounded-full border border-white/5 hover:border-energy-green/30 hover:bg-energy-green/5 text-[10px] font-medium text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                🔄 Net Metering
              </button>
              <button
                onClick={() => handleChipClick("advisor", "Talk to an Expert")}
                className="px-3 py-1.5 rounded-full border border-white/5 hover:border-energy-green/30 hover:bg-energy-green/5 text-[10px] font-medium text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                📞 Contact Advisor
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/5 flex gap-2 bg-dark-card">
              <input
                type="text"
                placeholder="Ask about solar rooftops, wind, subsidies..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/40 focus:ring-1 focus:ring-energy-green/40 transition-all"
              />
              <button
                onClick={() => handleSend(inputValue)}
                className="p-2 rounded-xl bg-energy-green text-dark-bg hover:bg-energy-hover transition-colors shrink-0 flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-energy-green to-energy-hover text-dark-bg flex items-center justify-center shadow-xl shadow-energy-green/25 hover:shadow-energy-green/45 focus:outline-none relative group border border-energy-green/30"
        aria-label="Toggle AI chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6 stroke-[2.5] fill-dark-bg/10" />
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-blue border-2 border-dark-bg animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
