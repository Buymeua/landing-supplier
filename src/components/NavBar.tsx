import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TgIcon } from "../icons";
import { Icon } from "@iconify/react";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const fullNavigation = [
    { label: "Про нас", path: "#about" },
    { label: "Переваги", path: "#feature" },
    { label: "Функціонал", path: "#functions" },
    { label: "Інтеграції", path: "#integration" },
    { label: "Відгуки", path: "#feedback" },
    { label: "Політика конфіденційності", path: "/privacy-policy" },
    { label: "Публічна оферта", path: "/offer" },
    { label: "FAQ", path: "#faq" }
  ];

  const limitedNavigation = [
    { label: "Політика конфіденційності", path: "/privacy-policy" },
    { label: "Публічна оферта", path: "/offer" }
  ];

  const navigation = location.pathname === "/providers" ? fullNavigation : limitedNavigation;

  useEffect(() => {
    if (location.pathname === "/providers" && activeSection) {
      setTimeout(() => {
        scroller.scrollTo(activeSection.replace("#", ""), {
          smooth: true,
          duration: 500,
          offset: -60, // Adjust for fixed navbar
        });
      }, 300);
      setActiveSection(null);
    }
  }, [location.pathname, activeSection]);

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      // If already on /providers, scroll to section
      if (location.pathname === "/providers") {
        scroller.scrollTo(path.replace("#", ""), {
          smooth: true,
          duration: 500,
          offset: -60
        });
      } else {
        // Otherwise, navigate to /providers first
        setActiveSection(path);
        navigate("/providers");
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
      <>
        <nav className="bg-[#191A1B] fixed top-0 left-0 w-full z-50 border-b border-b-[#FFFFFF1A] h-16 sm:h-20 flex items-center shadow-lg backdrop-blur-md">
          <div className="page container">
            <div className="items-center flex justify-between w-full">
              <div className="flex items-center">
                <a href="/">
                  <img src="/logo.svg" width={100} height={40} alt="Float UI logo" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden sm:flex justify-center gap-6 lg:gap-8">
                {navigation.map((item, idx) => (
                    <li key={idx}>
                      <button
                          onClick={() => handleNavigation(item.path)}
                          className={`text-white text-[10px] lg:text-base shadow cursor-pointer transition-all duration-200 ${
                              (location.pathname === "/providers" && location.hash === item.path) || location.pathname === item.path
                                  ? "border-b-2 border-[#ab0000]"
                                  : "border-b-2 border-transparent"
                          }`}
                      >
                        {item.label}
                      </button>
                    </li>
                ))}
              </ul>

              {/* Mobile Menu Toggle */}
              <button className="block sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <div className="w-[30px] h-[30px] border border-white/40 flex items-center justify-center rounded-lg">
                  <div className="grid grid-cols-2 grid-rows-2 gap-[4px]">
                    <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                    <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                    <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                    <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                  </div>
                </div>
              </button>

              {/* Telegram Button */}
              <a
                  href={"https://t.me/buy_me_ua"}
                  target={"_blank"}
                  className="hidden sm:flex transition-opacity duration-150 hover:opacity-80 ease-in-out max-h-[40px] bg-white font-medium text-base text-[#18191A] rounded-2xl py-3 px-4 gap-2 items-center"
              >
                <span>Telegram </span>
                <TgIcon />
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  className="fixed top-0 left-0 w-full h-screen bg-[#191a1bfc] flex flex-col items-center justify-center z-[100]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0, y: "-100%" },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: "-100%" }
                  }}
                  transition={{ duration: 0.3 }}
              >
                <button className="absolute top-4 right-4 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-[30px] h-[30px] border border-white/40 flex items-center justify-center rounded-lg">
                    <Icon icon={"line-md:close"} />
                  </div>
                </button>

                <ul className="flex flex-col gap-6 text-center -mt-10">
                  {navigation.map((item, idx) => (
                      <li key={idx}>
                        <button
                            onClick={() => handleNavigation(item.path)}
                            className={`text-white lg:text-base shadow cursor-pointer transition-all duration-200 ${
                                (location.pathname === "/providers" && location.hash === item.path) || location.pathname === item.path
                                    ? "border-b-2 border-[#ab0000]"
                                    : "border-b-2 border-transparent"
                            }`}
                        >
                          {item.label}
                        </button>
                      </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}
