import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot for React 18

const App = () => {
    return (
        <div className="bg-black p-12 text-white text-4xl">
            hello world from react

            get this working ooo

            ddddv23rfd
        </div>
    );
};

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Use createRoot instead of render
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
