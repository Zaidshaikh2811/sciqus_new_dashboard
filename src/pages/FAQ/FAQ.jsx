import React, { useState } from 'react';
import './FAQ.scss';

const faqs = [
	{
		question: 'How do I reset my password?',
		answer:
			'Go to your account settings and click on "Reset Password". Follow the instructions sent to your email.',
	},
	{
		question: 'Where can I view my tickets?',
		answer:
			'Navigate to the "My Tickets" section from the sidebar to view all your submitted tickets.',
	},
	{
		question: 'How do I contact support?',
		answer: 'You can contact support via the "Contact" page or by emailing support@sciqus.com.',
	},
	{
		question: 'What is the response time for support?',
		answer: 'Our typical response time is within 24 hours on business days.',
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className="faq-page">
			<h2>Frequently Asked Questions</h2>
			<div className="faq-list">
				{faqs.map((faq, idx) => (
					<div className={`faq-item${openIndex === idx ? ' open' : ''}`} key={idx}>
						<button className="faq-question" onClick={() => toggleAccordion(idx)}>
							{faq.question}
							<span className="faq-toggle">{openIndex === idx ? '-' : '+'}</span>
						</button>
						{openIndex === idx && <div className="faq-answer">{faq.answer}</div>}
					</div>
				))}
			</div>
		</div>
	);
};
export default FAQ;
