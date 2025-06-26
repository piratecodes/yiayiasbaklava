// utils/toast.js

// Create toast container if it doesn't exist
const createToastContainer = () => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }
  return container;
};

// Add CSS styles to document if not already added
const addToastStyles = () => {
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        pointer-events: auto;
        min-width: 300px;
        max-width: 400px;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 14px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        transform: translateX(0);
        opacity: 1;
      }
      
      .toast.removing {
        animation: slideOut 0.3s ease-in forwards;
      }
      
      .toast-success {
        background-color: #10b981;
        color: white;
      }
      
      .toast-error {
        background-color: #ef4444;
        color: white;
      }
      
      .toast-warning {
        background-color: #f59e0b;
        color: #000;
      }
      
      .toast-info {
        background-color: #3b82f6;
        color: white;
      }
      
      .toast-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        margin-left: 12px;
        padding: 0;
        line-height: 1;
        opacity: 0.8;
        transition: opacity 0.2s;
      }
      
      .toast-close:hover {
        opacity: 1;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Create individual toast element
const createToastElement = (message, type = 'success') => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const messageSpan = document.createElement('span');
  messageSpan.textContent = message;
  
  const closeButton = document.createElement('button');
  closeButton.className = 'toast-close';
  closeButton.innerHTML = '×';
  closeButton.setAttribute('aria-label', 'Close');
  
  toast.appendChild(messageSpan);
  toast.appendChild(closeButton);
  
  return { toast, closeButton };
};

// Remove toast with animation
const removeToast = (toast) => {
  toast.classList.add('removing');
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
};

// The magic function! 🪄
export const showToast = (message, type = 'success', duration = 3000) => {
  // Add styles if not already added
  addToastStyles();
  
  // Create container if not exists
  const container = createToastContainer();
  
  // Create toast element
  const { toast, closeButton } = createToastElement(message, type);
  
  // Add close button functionality
  closeButton.addEventListener('click', () => {
    removeToast(toast);
  });
  
  // Add to container
  container.appendChild(toast);
  
  // Auto remove after duration
  const autoRemoveTimer = setTimeout(() => {
    removeToast(toast);
  }, duration);
  
  // Clear timer if manually closed
  closeButton.addEventListener('click', () => {
    clearTimeout(autoRemoveTimer);
  });
  
  return toast; // Return element in case you need to manipulate it
};

// Convenience functions for different types
export const showSuccess = (message, duration = 3000) => {
  return showToast(message, 'success', duration);
};

export const showError = (message, duration = 4000) => {
  return showToast(message, 'error', duration);
};

export const showWarning = (message, duration = 4000) => {
  return showToast(message, 'warning', duration);
};

export const showInfo = (message, duration = 3000) => {
  return showToast(message, 'info', duration);
};

// Clear all toasts
export const clearAllToasts = () => {
  const container = document.getElementById('toast-container');
  if (container) {
    const toasts = container.querySelectorAll('.toast');
    toasts.forEach(toast => removeToast(toast));
  }
};