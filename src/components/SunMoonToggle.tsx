import { FaSun, FaMoon } from "react-icons/fa";

type SunMoonToggleProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const SunMoonToggle: React.FC<SunMoonToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white ml-4"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-500" />
      )}
    </button>
  );
};

export default SunMoonToggle;
