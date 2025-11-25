import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowRight,
  HelpCircle,
  ArrowLeft,
  ShieldCheck,
  KeyRound,
  CheckCircle2,
  Unlock,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1000);
    console.log("reset password for", email);
  };

  const inputWrapperVariants = {
    focused: { scale: 1.02, transition: { duration: 0.3 } },
    unfocused: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] p-4 sm:p-6 lg:p-8 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-[#0f0f11] relative z-10"
      >
        <div className="w-full lg:w-[45%] p-8 md:p-12 flex flex-col justify-between relative z-10 bg-[#0f0f11]">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigate("/PUI/login")}
              className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition text-gray-400 hover:text-white group"
            >
              <ArrowLeft
                size={20}
                className="cursor-pointer group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <div />
          </div>

          <div className="flex flex-col grow max-w-md mx-auto w-full justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative mb-10">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                      <KeyRound size={24} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                      Forgot Password?
                    </h1>
                    <p className="text-gray-500 font-medium">
                      Don't worry, it happens. Enter your email to reset it.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      variants={inputWrapperVariants}
                      animate={
                        focusedField === "email" ? "focused" : "unfocused"
                      }
                      className="group relative"
                    >
                      <div
                        className={`flex items-center gap-4 border-b py-4 transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-blue-500 shadow-[0_10px_20px_-10px_rgba(59,130,246,0.3)]"
                            : "border-white/10"
                        }`}
                      >
                        <Mail
                          className={`transition-colors ${
                            focusedField === "email"
                              ? "text-blue-500"
                              : "text-gray-500"
                          }`}
                          size={22}
                        />
                        <input
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="flex-1 bg-transparent outline-none text-white font-medium placeholder-gray-600"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </motion.div>

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all w-full"
                      >
                        <div className="cursor-pointer absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300" />
                        <span className="cursor-pointer relative z-10">
                          Send Reset Link
                        </span>
                        <ArrowRight
                          className="cursor-pointer relative z-10"
                          size={20}
                        />
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400 border border-green-500/20 shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Check your email
                  </h2>
                  <p className="text-gray-400 mb-8">
                    We've sent password reset instructions to{" "}
                    <span className="text-white font-medium">{email}</span>
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to reset
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-500 transition mt-8">
            <HelpCircle size={18} />
            <span>Contact Support</span>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[55%] relative overflow-hidden bg-[#000510]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-[#0a1124] via-black to-[#050505]"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 10 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-20 right-16 w-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-xs text-gray-400 font-mono">
                  RECOVERY_MODE
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-orange-500"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Initiating...</span>
                  <span className="text-white">100%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-20 z-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center text-white -rotate-12 border border-white/20">
                <Unlock size={32} fill="currentColor" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

                <div className="relative w-full bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none rounded-3xl" />

                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]"
                    >
                      <ShieldCheck className="text-cyan-400" size={40} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      Secure Recovery
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      End-to-end encrypted link will be sent to your verified
                      email address.
                    </p>

                    <div className="w-full bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <Lock size={14} />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                          Link Status
                        </div>
                        <div className="text-xs text-white font-bold">
                          Encrypted & Safe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
