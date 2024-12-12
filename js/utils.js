// Utility functions
export const updateFooterYear = () => {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} Portfolio. All rights reserved.`;
    }
};