import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaComments, FaMicrophone, FaHistory, FaTachometerAlt, FaSignOutAlt, FaTimes } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'p@gmail.com';

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/signin';
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 text-white font-semibold'
      : 'flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800';

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside className={`w-64 bg-gray-900 flex flex-col justify-between p-6 fixed md:static top-0 left-0 h-full z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-purple-700 rounded-lg p-2">
                <FaTachometerAlt className="text-white text-xl" />
              </div>
              <span className="text-purple-600 font-bold text-lg">ConvoAI</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-white"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaTachometerAlt /> Dashboard
            </NavLink>
            <NavLink to="/chat" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaComments /> Chat
            </NavLink>
            <NavLink to="/voice" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaMicrophone /> Voice
            </NavLink>
            <NavLink to="/history" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaHistory /> History
            </NavLink>
            <NavLink to="/analytics" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaTachometerAlt /> Analytics
            </NavLink>
            <NavLink to="/agents" className={linkClass} onClick={() => setSidebarOpen(false)}>
              <FaTachometerAlt /> Agents
            </NavLink>
          </nav>
        </div>
        <div className="mt-8">
          <p className="text-gray-400 mb-2 text-sm">{userEmail}</p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;