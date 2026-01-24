// Probable Lamp - Bug Fix
// Probable Lamp

/**
 * Safely divide two numbers with error handling
 */
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Parse configuration string with improved error handling
 */
function parseConfig(configStr) {
    if (!configStr) {
        return {};
    }
    
    try {
        return JSON.parse(configStr);
    } catch (e) {
        console.warn(`Warning: Invalid JSON config: ${e.message}`);
        return {};
    }
}

module.exports = { safeDivide, parseConfig };


// Probable Lamp - Code Improvement
// Probable Lamp

const logger = require('./logger');

/**
 * Optimized algorithm with better performance
 */
function optimizeAlgorithm(data) {
    return data
        .filter(item => item.active !== false)
        .map(item => ({
            ...item,
            processed: true
        }));
}

/**
 * Extract metadata from object
 */
function extractMetadata(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return null;
    }
    
    return {
        id: obj.id,
        timestamp: obj.timestamp,
        version: obj.version || '1.0.0'
    };
}

module.exports = { optimizeAlgorithm, extractMetadata };


// Probable Lamp - Code Improvement
// Probable Lamp

const logger = require('./logger');

/**
 * Optimized algorithm with better performance
 */
function optimizeAlgorithm(data) {
    return data
        .filter(item => item.active !== false)
        .map(item => ({
            ...item,
            processed: true
        }));
}

/**
 * Extract metadata from object
 */
function extractMetadata(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return null;
    }
    
    return {
        id: obj.id,
        timestamp: obj.timestamp,
        version: obj.version || '1.0.0'
    };
}

module.exports = { optimizeAlgorithm, extractMetadata };
