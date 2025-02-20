import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const SettingsPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  const handleHome = () => {
    window.location.href = "/aim/aim-index.html";
  };

  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.5 }}
  className="max-w-md w-full mx-4 sm:mx-auto mt-6 sm:mt-10 p-6 sm:p-8 bg-[#EFEAE3] bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-[#B27965]"
>
  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-[#B27965] to-[#8C5A42] text-transparent bg-clip-text mb-4 sm:mb-0">
      Profile Setting
    </h2>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleHome}
      className="py-2 px-4 w-full sm:w-auto bg-[#B27965] text-white font-bold rounded-lg shadow-lg hover:bg-[#8C5A42] focus:outline-none focus:ring-2 focus:ring-[#B27965] focus:ring-offset-2 focus:ring-offset-gray-900 transition"
    >
      Home
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLogout}
      className="py-2 px-4 w-full sm:w-auto bg-[#B27965] text-white font-bold rounded-lg shadow-lg hover:bg-[#8C5A42] focus:outline-none focus:ring-2 focus:ring-[#B27965] focus:ring-offset-2 focus:ring-offset-gray-900 transition"
    >
      Logout
    </motion.button>
  </div>

  <div className="space-y-4 sm:space-y-6">
    <motion.div
      className="p-4 sm:p-6 bg-[#EFEAE3] bg-opacity-100 rounded-lg border border-[#B27965]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-[#B27965] mb-2 sm:mb-3">
        Profile Information
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">Name: {user.name}</p>
      <p className="text-gray-700 text-sm sm:text-base">Email: {user.email}</p>
    </motion.div>

    <motion.div
      className="p-4 sm:p-6 bg-[#EFEAE3] bg-opacity-100 rounded-lg border border-[#B27965]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-[#B27965] mb-2 sm:mb-3">
        Account Activity
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">
        <span className="font-bold">Joined: </span>
        {new Date(user.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="text-gray-700 text-sm sm:text-base">
        <span className="font-bold">Last Login: </span>
        {formatDate(user.lastLogin)}
      </p>
    </motion.div>
  </div>
</motion.div>

  );
};

export default SettingsPage;
