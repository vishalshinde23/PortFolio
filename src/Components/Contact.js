import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {
    damping: 25,
    stiffness: 700,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const handleChange = (
    e
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="min-h-screen poppins-regular bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-sm opacity-10 animate-float"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Let's create something amazing together. Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl" />
          <motion.form
            onSubmit={onSubmit}
            className="relative bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl space-y-6"
          >
            <div className="space-y-4">
              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg blur-sm" />
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2 ml-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg blur-sm" />
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2 ml-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg blur-sm" />
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2 ml-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-white/40" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              type="submit"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;