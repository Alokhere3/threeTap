import { motion } from "framer-motion";
import Input from "../components/Input";
import {Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup,error,isLoading }= useAuthStore();


	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-md w-full mx-4 sm:mx-auto mt-6 sm:mt-10 p-6 sm:p-8 bg-[#EFEAE3] bg-opacity-100 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
>
  <div className="p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#B37865] to-[#B37865] text-transparent bg-clip-text">
      Don't Wait !!!
    </h2>

    <form onSubmit={handleSignUp}>
      <Input
        icon={User}
        type="text"
        placeholder="Full Name?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4"
      />
      <Input
        icon={Mail}
        type="email"
        placeholder="E-Mail Magic"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />
      <Input
        icon={Lock}
        type="password"
        placeholder="Password Sauce"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
      <PasswordStrengthMeter password={password} />

      <motion.button
        className="mt-5 w-full py-3 px-4 bg-[#B37865] text-white font-bold rounded-lg shadow-lg hover:bg-[#B37865] focus:outline-none focus:ring-2 focus:ring-[#B37865] focus:ring-offset-2 focus:ring-offset-white-900 transition duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader className="animate-spin mx-auto" size={24} />
        ) : (
          "Unlock the Door"
        )}
      </motion.button>
    </form>
  </div>

  <div className="px-6 sm:px-8 py-4 bg-[#B37865] bg-opacity-100 flex justify-center">
    <p className="text-sm text-[#CDC8C2]">
      Already have an account?😀{" "}
      <Link to={"/login"} className="text-[#FFFFFF] hover:underline">
        Click here
      </Link>
    </p>
  </div>
</motion.div>

	);
};
export default SignUpPage;