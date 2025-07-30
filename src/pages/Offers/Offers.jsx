import './Offers.scss'
import React from 'react';

const OffersPage = () => {
    const discountOffers = [
        {
            title: "Loyalty Bonus",
            description: "Get additional discounts on repeat purchases."
        },
        {
            title: "Bundle Deals",
            description: "Buy two or more products/services and get an extra discount."
        },
        {
            title: "Cashback Offer",
            description: "Get a percentage of your purchase amount as cashback."
        },
        {
            title: "Subscription Discount",
            description: "Special pricing for long-term subscriptions."
        }
    ];

    const specialOffers = [
        {
            title: "Buy One, Get One (BOGO)",
            description: "Get a free product/service on select purchases."
        },
        {
            title: "Exclusive Early Access",
            description: "Be the first to access new products or premium features."
        },
        {
            title: "Free Gift with Purchase",
            description: "Receive a special gift on qualifying purchases."
        }
    ];

    const serviceOffers = [
        {
            title: "Free Consultation",
            description: "Enjoy a free 30-minute consultation on technical topics."
        },
        {
            title: "Priority Support",
            description: "Get faster response times for all support inquiries."
        },
        {
            title: "Extended Warranty",
            description: "Receive additional warranty months on select products."
        }
    ];

    const CheckIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#8b5cf6" />
            <path d="M7.5 10l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const OfferCard = ({ title, subtitle, offers }) => (
        <div className="offer-card">
            <div>
                <div className="card-header">
                    <h2>{title}</h2>
                    <p className="subtitle">{subtitle}</p>
                </div>
                <div className="offers-list">
                    {offers.map((offer, index) => (
                        <div key={index} className="offer-item">
                            <div className="checkmark">
                                <CheckIcon />
                            </div>
                            <div className="offer-content">
                                <span className="offer-title">{offer.title}</span>
                                <span className="offer-separator"> - </span>
                                <span className="offer-description">{offer.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="choose-plan-btn">Choose plan</button>
            </div>
        </div>
    );

    return (

        <div className="offers-page">
            <h1 className="page-title">Offers For Me</h1>
            <div className="offers-container">
                <OfferCard
                    title="Discount & Savings Offers"
                    subtitle="Discount & Savings Offers"
                    offers={discountOffers}
                />
                <OfferCard
                    title="Special Purchase Offers"
                    subtitle="Special Purchase Offers"
                    offers={specialOffers}
                />
                <OfferCard
                    title="Service & Support Offers"
                    subtitle="Service & Support Offers"
                    offers={serviceOffers}
                />
            </div>
        </div>

    );
}

export default OffersPage