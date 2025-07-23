import React, { useState } from 'react';
import { Menu, X, Briefcase, Package, Gift, Eye, Download, ChevronDown, ChevronRight, Home, Settings, User, HelpCircle } from 'lucide-react';
import './Home.scss'
const SupportDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('tickets');

    const tickets = [
        { id: 'TT24/1231', type: 'Installation Issue', status: 'In-Process' },
        { id: 'TT24/123', type: 'Installation Issue', status: 'In-Process' },
        { id: 'TT24/123', type: 'Installation Issue', status: 'In-Process' },
        { id: 'TT24/123', type: 'Installation Issue', status: 'In-Process' },
    ];

    const faqs = [
        'What is the return policy?',
        'How do I apply the coupon?',
        'How do I become a member?',
        'What are the benefits of membership?',
        'How to fix connection issues?',
        'What to do if the app crashes?',
        'How can I reset my settings?'
    ];

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: false },
        { icon: Briefcase, label: 'My Tickets', active: true },
        { icon: Package, label: 'Orders', active: false },
        { icon: User, label: 'Profile', active: false },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: false },
    ];

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
                    <h1 className="logo">Support Portal</h1>
                </div>
                <div className="header-right">
                    <div className="user-profile">
                        <div className="avatar">JD</div>
                        <span>John Doe</span>
                    </div>
                </div>
            </header>

            <div className="main-container">
                {/* Sidebar */}
                <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                    <nav className="sidebar-nav">
                        {sidebarItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`nav-item ${item.active ? 'active' : ''}`}
                                onClick={(e) => e.preventDefault()}
                            >
                                <item.icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* Action Cards */}
                    <div className="action-cards">
                        <div className="card">
                            <div className="card-icon">
                                <Briefcase size={32} />
                            </div>
                            <h3>Raise a Ticket</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Package size={32} />
                            </div>
                            <h3>Catalogue</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <Gift size={32} />
                            </div>
                            <h3>Offers for me</h3>
                        </div>
                    </div>

                    <div className="content-grid">
                        {/* My Tickets Section */}
                        <section className="tickets-section">
                            <div className="section-header">
                                <h2>My Tickets</h2>
                                <button className="export-btn">
                                    <Download size={16} />
                                    Export
                                </button>
                            </div>

                            <div className="tickets-table">
                                <div className="table-header">
                                    <div className="header-cell">Ticket ID</div>
                                    <div className="header-cell">Request Type</div>
                                    <div className="header-cell">Status</div>
                                    <div className="header-cell"></div>
                                </div>

                                {tickets.map((ticket, index) => (
                                    <div key={index} className="table-row">
                                        <div className="cell">{ticket.id}</div>
                                        <div className="cell">{ticket.type}</div>
                                        <div className="cell">
                                            <span className="status-badge in-process">{ticket.status}</span>
                                        </div>
                                        <div className="cell">
                                            <button className="view-btn">
                                                <Eye size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-list">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="faq-item">
                                        <ChevronRight size={16} />
                                        <span>{faq}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>


        </div>
    );
};

export default SupportDashboard;