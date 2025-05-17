import { useState } from "react";

const ChatWidget = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! Ask me anything like 'How do I sell my license?'",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://crex-b.onrender.com/api/chat"
         ,
        //  "http://localhost:5000/api/chat", 
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();

      if (!response.ok || !data.response) {
        throw new Error(data.error || "Server error");
      }

      const botMessage = {
        from: "bot",
        text: data.response || "Sorry, I didn't understand that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error.message);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "cannot find the result" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className={`w-80 max-h-[32rem] flex flex-col rounded-lg shadow-lg border ${
            isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-gray-300 dark:border-gray-600">
            <h2 className="font-semibold">Chat Support</h2>
            <button
              onClick={toggleChat}
              className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-700"}`}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

        
          <div className="p-3 overflow-y-auto flex-1 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : isDark
                    ? "mr-auto bg-gray-700 text-white"
                    : "mr-auto bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-lg max-w-[80%]">
                Typing...
              </div>
            )}
          </div>

      
          <div className="flex p-2 border-t border-gray-300 dark:border-gray-600">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className={`flex-grow px-3 py-1 rounded-l-md outline-none ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-100 text-gray-900 placeholder-gray-600"
              }`}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
          title="Open Chat"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
