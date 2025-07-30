import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './Home/Home.scss';
import {
    MessageCircleQuestion,
    FileText,
    BookOpen,
    FilePlus2,
    Phone,
    Gift,
    HelpCircle,
    Home,
    Briefcase,
    Package, X, Menu
} from 'lucide-react';

const sidebarItems = [
    { icon: Home, label: 'Home', key: 'home', path: '/' },
    { icon: Briefcase, label: 'Dashboard', key: 'dashboard', path: '/dashboard' },
    { icon: FilePlus2, label: 'Raise Ticket', key: 'raise-ticket', path: '/raise-ticket' },
    { icon: FileText, label: 'My Tickets', key: 'my-tickets', path: '/my-tickets' },
    { icon: FileText, label: 'Proposal', key: 'proposal', path: '/proposal' },
    { icon: Phone, label: 'Contact', key: 'contact', path: '/contact' },
    { icon: Package, label: 'Catalog', key: 'catalog', path: '/catalog' },
    { icon: Gift, label: 'Offers for Me', key: 'offers', path: '/offers' },
    { icon: MessageCircleQuestion, label: 'Ask Something', key: 'ask', path: '/ask' },
    { icon: HelpCircle, label: 'FAQ', key: 'faq', path: '/faq' },
    { icon: BookOpen, label: 'Knowledge', key: 'knowledge', path: '/knowledge' },
];

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    // Function to determine if a nav item is active
    const isActiveRoute = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <h1 className="logo">sciqus </h1>
                </div>
                <div className="header-right">
                    <div className="user-profile">
                        <div className="avatar">User</div>
                        <span>User</span>
                    </div>
                </div>
            </header>

            <div className="main-container">
                {/* Sidebar */}
                <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                    <nav className="sidebar-nav">
                        {sidebarItems.map((item) => (
                            <Link
                                key={item.key}
                                to={item.path}
                                className={`nav-item ${isActiveRoute(item.path) ? 'active' : ''}`}
                            >
                                <item.icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </aside>
                {/* Main Content */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;