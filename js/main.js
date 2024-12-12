import { initializeNavigation } from './navigation.js';
import { initializeAnimations } from './animations.js';
import { updateFooterYear } from './utils.js';

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeAnimations();
    updateFooterYear();
});