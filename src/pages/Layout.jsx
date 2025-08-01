import React, {useRef, useState , useEffect} from 'react';
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
    Package, X, Menu, Bell
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


    const [showNotifications, setShowNotifications] = useState(false);
    const [activeTab, setActiveTab] = useState('All');
    const notificationRef = useRef(null);

    const notifications = {
        All: [
            { id: 1, message: "Your profile has been updated.", type: 'info' },
            { id: 2, message: "You have a new message from John.", type: 'message' },
            { id: 3, message: "Your subscription is about to expire.", type: 'warning' },
            { id: 4, message: "Approval required for new project.", type: 'approval' },
            { id: 5, message: "You have a new message from Sarah.", type: 'message' }
        ],
        'New Tickets': [
            { id: 4, message: "Approval required for new project.", type: 'approval' }
        ],
        Messages: [
            { id: 2, message: "You have a new message from John.", type: 'message' },
            { id: 5, message: "You have a new message from Sarah.", type: 'message' }
        ]
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const markAllAsRead = () => {
        // Implementation for marking all as read
        console.log('Mark all as read');
    };

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

                    <div className="notification-container" ref={notificationRef}>
                        <button className="notification-bell" onClick={toggleNotifications}>
                            <Bell size={20} />
                            <span className="notification-badge">5</span>
                        </button>

                        {showNotifications && (
                            <div className="notification-modal-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="notification-popup" style={{position: 'relative', top: 'unset', right: 'unset', marginTop: 0, boxShadow: '0 10px 40px rgba(0,0,0,0.15)'}}>
                                    <div className="notification-header">
                                        <h3>Notifications</h3>
                                        <button className="mark-read-btn" onClick={markAllAsRead}>
                                            Mark All Read
                                        </button>
                                    </div>
                                    <div className="notification-tabs">
                                        {['All', 'New Tickets', 'Messages'].map(tab => (
                                            <button
                                                key={tab}
                                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="notification-list">
                                        {notifications[activeTab].map(notification => (
                                            <div key={notification.id} className="notification-item">
                                                {notification.message}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="notification-modal-close" style={{position: 'absolute', top: 0, right: 10, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer'}} onClick={() => setShowNotifications(false)}>&times;</button>
                                </div>
                            </div>
                        )}
                    </div>

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