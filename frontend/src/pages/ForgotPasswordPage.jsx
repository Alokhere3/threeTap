import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

    const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-md w-full bg-[#EFEAE3] bg-opacity-100 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mx-4 sm:mx-auto"
>
  <div className="p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#B27965]">
      Forgot Password
    </h2>

    {!isSubmitted ? (
      <form onSubmit={handleSubmit}>
        <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 sm:py-3 px-4 bg-[#B27965] text-white font-bold rounded-lg shadow-lg hover:bg-[#B27965] focus:outline-none focus:ring-2 focus:ring-[#B27965] focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
          type="submit"
        >
          {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Send Reset Link"}
        </motion.button>
      </form>
    ) : (
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-12 sm:w-16 h-12 sm:h-16 bg-[#B27965] rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Mail className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
        </motion.div>
        <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6">
          If an account exists for {email}, you will receive a password reset link shortly.
        </p>
      </div>
    )}
  </div>

  <div className="px-6 sm:px-8 py-3 sm:py-4 bg-[#B27965] bg-opacity-100 flex justify-center">
    <Link
      to={"/login"}
      className="text-sm text-white hover:underline flex items-center"
    >
      <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
    </Link>
  </div>
</motion.div>

	);
};
export default ForgotPasswordPage;