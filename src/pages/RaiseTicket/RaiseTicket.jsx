import React, { useState } from 'react';
import './RaiseTicket.scss';

const RaiseTicket = () => {
    const [form, setForm] = useState({
        subject: '',
        description: '',
        category: '',
        file: null
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const categories = [
        'Technical Issue',
        'Billing',
        'Account',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.subject) newErrors.subject = 'Subject is required';
        if (!form.description) newErrors.description = 'Description is required';
        if (!form.category) newErrors.category = 'Category is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
        // Here you would send the form data to your backend
    };

    return (
        <div className="raise-ticket-page">
            <h2>Raise a Support Ticket</h2>
            {submitted ? (
                <div className="success-message">Your ticket has been submitted!</div>
            ) : (
                <form className="raise-ticket-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <span className="error">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                        {errors.description && <span className="error">{errors.description}</span>}
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        {errors.category && <span className="error">{errors.category}</span>}
                    </div>
                    <div className="form-group">
                        <label>Attachment (optional)</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit Ticket</button>
                </form>
            )}
        </div>
    );
};
export default RaiseTicket;
