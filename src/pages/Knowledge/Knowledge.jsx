import React from 'react';
import './Knowledge.scss';
import { Search } from 'lucide-react';
const Knowledge = () => {
    const categories = [
        {
            title: 'Products',
            description: 'Information and details about our various product offerings.',
            icon: null
        },
        {
            title: 'Trainings',
            description: 'Details on training sessions and materials.',
            icon: null
        },
        {
            title: 'Courses',
            description: 'List of available courses for skill development.',
            icon: null
        },
        {
            title: 'FAQs',
            description: 'Frequently Asked Questions - get quick answers.',
            icon: null
        },
        {
            title: 'Videos',
            description: 'Video tutorials and demonstrations.',
            icon: null
        },
        {
            title: 'Documents',
            description: 'Important documents, guides, and manuals.',
            icon: null
        },
        {
            title: 'Blogs',
            description: 'Our blog with articles, insights, and updates.',
            icon: null
        },
        {
            title: 'Articles',
            description: 'In-depth articles on various topics.',
            icon: null
        },
        {
            title: 'Industry News',
            description: 'Latest news and developments in the industry.',
            icon: null
        }
    ];

    return (
        <div className="knowledge-base">
            <div className="knowledge-base__header">
                <h1 className="knowledge-base__title">Knowledge Base</h1>
                <div className="knowledge-base__search">
                    <Search className="search-icon" size={20}/>
                    <input
                        type="text"
                        placeholder="Search Knowledge Base"
                        className="search-input"
                    />
                </div>
            </div>

            <div className="knowledge-base__grid">
                {categories.map((category, index) => (
                    <div key={index} className="knowledge-card">
                        <h3 className="knowledge-card__title">{category.title}</h3>
                        <p className="knowledge-card__description">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Knowledge;
