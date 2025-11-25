import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  HelpCircle,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Activity,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacebookIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50975H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50975H7.19795L7.19795 13.4901H9.19795V21.5Z" />
  </svg>
);

const GoogleIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
  </svg>
);

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signin", form);
  };

  const inputWrapperVariants = {
    focused: { scale: 1.02, transition: { duration: 0.3 } },
    unfocused: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] p-4 sm:p-6 lg:p-8 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
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
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-full border border-white/10 hover:bg-white/5 cursor-pointer transition text-gray-400 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="text-sm font-medium">
              <span className="text-gray-500">New here? </span>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-blue-500 hover:text-blue-400 hover:underline font-bold transition-colors cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="flex flex-col grow max-w-md mx-auto w-full">
            <div className="relative mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-gray-500 font-medium">
                Enter your credentials to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={inputWrapperVariants}
                animate={focusedField === "email" ? "focused" : "unfocused"}
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
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="flex-1 bg-transparent outline-none text-white font-medium placeholder-gray-600"
                    placeholder="Email Address"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={inputWrapperVariants}
                animate={focusedField === "password" ? "focused" : "unfocused"}
                className="group relative"
              >
                <div
                  className={`flex items-center gap-4 border-b py-4 transition-all duration-300 ${
                    focusedField === "password"
                      ? "border-blue-500 shadow-[0_10px_20px_-10px_rgba(59,130,246,0.3)]"
                      : "border-white/10"
                  }`}
                >
                  <Lock
                    className={`transition-colors ${
                      focusedField === "password"
                        ? "text-blue-500"
                        : "text-gray-500"
                    }`}
                    size={22}
                  />
                  <input
                    name="password"
                    type={showPwd ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className="flex-1 bg-transparent outline-none text-white font-medium placeholder-gray-600 tracking-widest"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/PUI/login/forgot-password")}
                  className="text-xs font-medium text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden flex items-center justify-between px-8 py-4 rounded-full font-bold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all w-full sm:w-auto min-w-40"
                >
                  <div className="absolute cursor-pointer inset-0 bg-linear-to-r from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300" />
                  <span className="cursor-pointer relative z-10">Sign In</span>
                  <div className="cursor-pointer relative z-10 bg-white/20 p-1 rounded-full ml-4 group-hover:bg-white/30 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </motion.button>

                <span className="text-gray-600 text-sm font-medium">Or</span>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <FacebookIcon size={20} />
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <GoogleIcon size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-500 transition mt-8">
            <HelpCircle size={18} />
            <span>Need Help?</span>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[55%] relative overflow-hidden bg-[#000510]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-[#0a1124] via-black to-[#050505]"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative z-10 w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 10 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-20 right-16 w-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <Activity size={20} />
                </div>
                <span className="text-xs text-green-400 font-mono font-bold">
                  +24%
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">Encrypted Traffic</div>
                <div className="text-xl font-bold text-white">842.5 MB</div>
              </div>
              <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-green-500"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-20 z-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-white -rotate-12 border border-white/20">
                <Zap size={32} fill="currentColor" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-32 right-10 z-0"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-blue-400 shadow-lg">
                <Globe size={20} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative w-full bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none rounded-3xl" />

                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={{
                        rotateY: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]"
                    >
                      <ShieldCheck className="text-blue-400" size={40} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      Bank-Grade Security
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      Your data is encrypted with AES-256 bit encryption before
                      it leaves your device.
                    </p>

                    <div className="w-full h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-blue-300">
                      <span className="mr-2 text-green-400">●</span> System
                      Online
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
