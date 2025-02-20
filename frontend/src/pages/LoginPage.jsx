import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-md w-full bg-[#EFEAE3] bg-opacity-100 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mx-4 sm:mx-auto"
>
  <div className="p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#B37865]">
      Oh hey, you're back!
    </h2>

    <form onSubmit={handleLogin}>
      <Input
        icon={Mail}
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        icon={Lock}
        type="password"
        placeholder="Comeback Code"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <div className="text-xs text-[#595959] mb-2 sm:mb-0">
          Uh-oh, Brain Freeze?🥶
        </div>
        <Link
          to="/forgot-password"
          className="text-sm text-[#B37865] hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {error && (
        <p className="text-red-500 font-semibold mb-4 sm:mb-6">{error}</p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-[#B37865] text-white font-bold rounded-lg shadow-lg hover:bg-[#B37865] 
        focus:outline-none focus:ring-2 focus:ring-[#B37865] focus:ring-offset-2 
        focus:ring-offset-white-900 transition duration-200"
        type="submit"
      >
        {isLoading ? (
          <Loader className="w-6 h-6 animate-spin mx-auto" />
        ) : (
          "Login"
        )}
      </motion.button>
    </form>
  </div>
  <div className="px-6 sm:px-8 py-4 bg-[#B37865] bg-opacity-100 flex justify-center">
    <p className="text-xs sm:text-sm text-[#cdc8c2] text-center">
      Don't have an account?😕{" "}
      <Link to="/signup" className="text-[#ffffff] hover:underline">
        Click here
      </Link>
    </p>
  </div>
</motion.div>

	);
};
export default LoginPage;