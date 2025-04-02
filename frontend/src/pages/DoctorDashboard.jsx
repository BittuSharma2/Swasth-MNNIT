import  Sidebar  from "../components/dashboard/Sidebar";
import  Header  from "../components/dashboard/Header";
import  MainContent  from "../components/dashboard/MainContent";
import { useState } from "react";
import { Bell, Calendar, Home, LogOut, Menu, Package, Settings, Users } from "lucide-react"

const DoctorDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const sidemenu = [
    {
      title: "Dashboard",
      href: `/doctor/dashboard`,
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Patient Records",
      href: "/doctor/patients",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Prescriptions",
      href: "/doctor/prescriptions",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Duty Schedule",
      href: "/doctor/schedule",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Medicine Stock",
      href: "/doctor/medicines",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Notifications",
      href: "/doctor/notifications",
      icon: <Bell className="h-5 w-5" />,
    },
    {
      title: "Change Password",
      href: `/doctor/change-password`,
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidemenu={sidemenu}/>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} role="Doctor" />

        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default DoctorDashboard;
