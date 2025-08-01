import React, { useState } from 'react';
import { ChevronDown, Upload } from 'lucide-react';
import './RaiseTicket.scss'

const RaiseTicket = () => {
    const [form, setForm] = useState({
        ticketType: '',
        subType: '',
        priority: '',
        businessImpact: '',
        associatedWith: '',
        details: '',
        file: null
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const ticketTypes = ['Technical Issue', 'Billing', 'Account', 'Feature Request', 'Other'];
    const subTypes = ['Bug Report', 'System Error', 'Performance Issue', 'Integration', 'Data Issue'];
    const priorities = ['Low', 'Medium', 'High', 'Critical'];
    const businessImpacts = ['Low', 'Medium', 'High', 'Critical'];
    const associatedOptions = ['Project A', 'Project B', 'System Integration', 'Database', 'API'];

    const handleSelectChange = (name, value) => {
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm(prev => ({ ...prev, file }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            setForm(prev => ({ ...prev, file: files[0] }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.ticketType) newErrors.ticketType = 'Ticket type is required';
        if (!form.subType) newErrors.subType = 'Sub type is required';
        if (!form.priority) newErrors.priority = 'Priority is required';
        if (!form.businessImpact) newErrors.businessImpact = 'Business impact is required';
        if (!form.details.trim()) newErrors.details = 'Details are required';
        return newErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setForm({
                ticketType: '',
                subType: '',
                priority: '',
                businessImpact: '',
                associatedWith: '',
                details: '',
                file: null
            });
        }, 3000);
    };

    const CustomSelect = ({ label, value, options, onChange, error, placeholder = "Select" }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="select-container">
                <div className="select-wrapper">
                    <div
                        className={`custom-select ${error ? 'error' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={value ? 'selected' : 'placeholder'}>
                            {value || placeholder}
                        </span>
                        <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
                    </div>
                    {isOpen && (
                        <div className="select-dropdown">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="select-option"
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                    }}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    if (submitted) {
        return (
            <div className="ticket-page">

                <div className="success-container">
                    <h2 className="success-title">Ticket Submitted Successfully!</h2>
                    <p className="success-message">
                        Your support ticket has been created and our team will review it shortly.
                    </p>
                    <div className="ticket-id">
                        Ticket ID: #TKT-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="ticket-page">


            <div className="container">
                <h1 className="page-title">Raise a Ticket</h1>

                <div className="form-grid">
                    <div className="form-left">
                        <div className="form-row">
                            <label className="form-label">Ticket Type:</label>
                            <CustomSelect
                                value={form.ticketType}
                                options={ticketTypes}
                                onChange={(value) => handleSelectChange('ticketType', value)}
                                error={errors.ticketType}
                            />
                        </div>
                        {errors.ticketType && <div className="error-message">{errors.ticketType}</div>}

                        <div className="form-row">
                            <label className="form-label">Sub Type:</label>
                            <CustomSelect
                                value={form.subType}
                                options={subTypes}
                                onChange={(value) => handleSelectChange('subType', value)}
                                error={errors.subType}
                            />
                        </div>
                        {errors.subType && <div className="error-message">{errors.subType}</div>}

                        <div className="form-row">
                            <label className="form-label">Priority:</label>
                            <CustomSelect
                                value={form.priority}
                                options={priorities}
                                onChange={(value) => handleSelectChange('priority', value)}
                                error={errors.priority}
                            />
                        </div>
                        {errors.priority && <div className="error-message">{errors.priority}</div>}

                        <div className="form-row">
                            <label className="form-label">Business Impact:</label>
                            <CustomSelect
                                value={form.businessImpact}
                                options={businessImpacts}
                                onChange={(value) => handleSelectChange('businessImpact', value)}
                                error={errors.businessImpact}
                            />
                        </div>
                        {errors.businessImpact && <div className="error-message">{errors.businessImpact}</div>}
                    </div>

                    <div className="form-right">
                        <div className="form-row">
                            <label className="form-label">Associated with:</label>
                            <CustomSelect
                                value={form.associatedWith}
                                options={associatedOptions}
                                onChange={(value) => handleSelectChange('associatedWith', value)}
                            />
                        </div>

                        <div className="upload-section">
                            <div className="upload-row">
                                <label className="upload-label">Upload Files:</label>
                                <div
                                    className={`upload-area ${isDragging ? 'dragging' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('file-input').click()}
                                >
                                    <div className="upload-text">Drop file here</div>
                                    <div className="upload-or">OR</div>
                                    <button type="button" className="upload-button">
                                        Upload File
                                    </button>
                                    <input
                                        id="file-input"
                                        type="file"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                            {form.file && (
                                <div className="file-preview">
                                    <div className="file-name">{form.file.name}</div>
                                    <div className="file-size">{(form.file.size / 1024 / 1024).toFixed(2)} MB</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="details-section">
                    <label className="details-label">Details</label>
                    <textarea
                        name="details"
                        value={form.details}
                        onChange={handleInputChange}
                        className={`details-textarea ${errors.details ? 'error' : ''}`}
                        placeholder="Please provide detailed information about your issue..."
                    />
                    {errors.details && <div className="error-message">{errors.details}</div>}
                </div>

                <div className="submit-section">
                    <button
                        type="button"
                        className="submit-button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RaiseTicket;