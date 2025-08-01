import React from 'react';
import { User, Users } from 'lucide-react';
import './Contact.scss'
const ContactsPage = () => {
    const primaryContacts = [
        {
            id: 1,
            role: 'Your Account Manager',
            name: 'Amey Borade',
            email: 'amey.b@sciqus.com',
            phone: '+919999999999',
            icon: User
        },
        {
            id: 2,
            role: 'Technical Help',
            name: 'Sonal Patil',
            email: 'sonal.p@sciqus.com',
            phone: '+918888888888',
            icon: Users
        },
        {
            id: 3,
            role: 'Finance Help',
            name: 'Rahul Deshmukh',
            email: 'rahul.d@sciqus.com',
            phone: '+917777777777',
            icon: Users
        }
    ];

    const headContacts = [
        {
            id: 1,
            role: 'Head Of Account Manager',
            name: 'Priya Sharma',
            email: 'priya.sharma@sciqus.com',
            phone: '+919876543210',
            icon: User
        },
        {
            id: 2,
            role: 'Technical Head Help',
            name: 'Rohan Mehta',
            email: 'rohan.mehta@sciqus.com',
            phone: '+919123456780',
            icon: Users
        },
        {
            id: 3,
            role: 'Finance Head Help',
            name: 'Neha Kulkarni',
            email: 'neha.k@sciqus.com',
            phone: '+919012345678',
            icon: Users
        }
    ];

    const ContactCard = ({ contact }) => {
        const IconComponent = contact.icon;

        return (
            <div className="contact-card">
                <div className="contact-header">
                    <div className="contact-icon">
                        <IconComponent size={24} />
                    </div>
                    <span className="contact-role">{contact.role}</span>
                </div>
                <hr/>
                <div className="contact-details">
                    <h3 className="contact-name">{contact.name}</h3>
                    <p className="contact-email">{contact.email}</p>
                    <p className="contact-phone">{contact.phone}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="contacts-page">


            <div className="page-header">
                <h1 className="page-title">Contacts</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Contacts"
                        className="search-input"
                    />
                </div>
            </div>

            <section>
                <h2 className="section-title">Primary Contacts</h2>
                <div className="contacts-grid">
                    {primaryContacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))}
                </div>
            </section>

            <p className="escalation-notice">
                Not satisfied with primary help? Please contact on below details
            </p>

            <section>
                <div className="contacts-grid">
                    {headContacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ContactsPage;