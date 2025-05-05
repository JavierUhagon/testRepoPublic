import React, { useState, useEffect } from 'react';

function InaccessibleApp() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    // Missing alt text for image
    return (
        <div>
            <h1 style={{ color: '#999' }}>Welcome to our Website</h1>
            
            {/* Missing form labels */}
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Enter your name"
                />
                <button onClick={() => alert('Submitted!')}>Submit</button>
            </form>
            
            {/* Non-descriptive link text */}
            <a href="https://example.com">Click here</a>
            
            {/* Missing button aria-label */}
            <button onClick={() => setIsOpen(!isOpen)}>☰</button>
            
            {/* Low contrast text */}
            <p style={{ color: '#aaa', backgroundColor: '#eee' }}>
                This text has low contrast and might be hard to read.
            </p>
            
            {/* Missing alt text */}
            <img src="profile.jpg" />
            
            {/* Non-semantic HTML structure */}
            <div className="header">Important Section</div>
            
            {/* Missing keyboard accessibility */}
            <div onClick={() => window.location.href='/about'} className="nav-link">
                About Us
            </div>
            
            {/* Missing ARIA attributes in custom controls */}
            <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
                Select an option
                {isOpen && (
                    <div className="dropdown-menu">
                        <div onClick={() => setIsOpen(false)}>Option 1</div>
                        <div onClick={() => setIsOpen(false)}>Option 2</div>
                    </div>
                )}
            </div>
            
            {/* Improper heading hierarchy */}
            <h1>Section Title</h1>
            <h3>Subsection Title</h3> {/* Skipped h2 */}
            
            {/* Empty button */}
            <button></button>
            
            {/* Autoplay video without controls */}
            <video autoPlay>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default InaccessibleApp;</video></div>