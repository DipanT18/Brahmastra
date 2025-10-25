/**
 * Brahmastra Dashboard JavaScript
 * Handles all interactive functionality for the learning dashboard
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initModals();
    initCourseForm();
    initChat();
    initInteractions();
    
    console.log('🎓 Brahmastra Dashboard Loaded Successfully');
});

// ===== NAVIGATION ===== //
function initNavigation() {
    const profileBtn = document.getElementById('profileBtn');
    const profileMenu = document.getElementById('profileMenu');
    
    // Profile dropdown
    if (profileBtn && profileMenu) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            profileMenu.classList.remove('active');
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    handleSearch(query);
                }
            }
        });
    }
    
    // Sidebar navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Handle navigation
            const text = item.querySelector('span').textContent;
            handleNavigation(text);
        });
    });
}

// ===== MODALS ===== //
function initModals() {
    // Course creation modal
    const createCourseBtn = document.getElementById('createCourseBtn');
    const startNewCourseBtn = document.getElementById('startNewCourse');
    const courseModal = document.getElementById('courseModal');
    const closeCourseModal = document.getElementById('closeCourseModal');
    
    // Open course modal
    [createCourseBtn, startNewCourseBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                courseModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    // Close course modal
    if (closeCourseModal) {
        closeCourseModal.addEventListener('click', () => {
            courseModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside
    if (courseModal) {
        courseModal.addEventListener('click', (e) => {
            if (e.target === courseModal) {
                courseModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Chat modal
    const openChatBtn = document.getElementById('openChatBtn');
    const chatModal = document.getElementById('chatModal');
    const closeChatBtn = document.getElementById('closeChatBtn');
    
    if (openChatBtn) {
        openChatBtn.addEventListener('click', () => {
            chatModal.classList.add('active');
        });
    }
    
    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            chatModal.classList.remove('active');
        });
    }
    
    if (chatModal) {
        chatModal.addEventListener('click', (e) => {
            if (e.target === chatModal) {
                chatModal.classList.remove('active');
            }
        });
    }
}

// ===== COURSE FORM ===== //
function initCourseForm() {
    const form = document.getElementById('courseForm');
    const steps = document.querySelectorAll('.form-step');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    let currentStep = 1;
    const totalSteps = steps.length;
    
    // Navigation functions
    function showStep(step) {
        steps.forEach((stepEl, index) => {
            stepEl.classList.toggle('active', index + 1 === step);
        });
        
        // Update buttons
        prevBtn.style.display = step > 1 ? 'block' : 'none';
        nextBtn.style.display = step < totalSteps ? 'block' : 'none';
        submitBtn.style.display = step === totalSteps ? 'block' : 'none';
        
        currentStep = step;
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (validateCurrentStep()) {
                if (currentStep < totalSteps) {
                    showStep(currentStep + 1);
                }
            }
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    }
    
    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCourseCreation();
        });
    }
    
    function validateCurrentStep() {
        const currentStepEl = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const requiredFields = currentStepEl.querySelectorAll('[required]');
        
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                field.focus();
                showNotification('Please fill in all required fields', 'error');
                return false;
            }
        }
        
        // Step 2: Check if level is selected
        if (currentStep === 2) {
            const levelSelected = document.querySelector('input[name="level"]:checked');
            if (!levelSelected) {
                showNotification('Please select your current level', 'error');
                return false;
            }
        }
        
        // Step 3: Check if at least one learning style is selected
        if (currentStep === 3) {
            const stylesSelected = document.querySelectorAll('input[name="learningStyle"]:checked');
            if (stylesSelected.length === 0) {
                showNotification('Please select at least one learning style', 'error');
                return false;
            }
        }
        
        return true;
    }
}

// ===== CHAT FUNCTIONALITY ===== //
function initChat() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse, 'ai');
        }, 1000);
    }
    
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    function addMessage(text, sender) {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${sender}-message`;
        
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageEl.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function generateAIResponse(userMessage) {
        const responses = [
            "That's a great question! Let me help you understand this concept better.",
            "I can see you're working on an interesting topic. Here's what I suggest...",
            "Based on your learning progress, I recommend focusing on these key areas.",
            "Let me break this down into simpler steps for you.",
            "That's exactly the kind of thinking that will help you master this subject!",
            "I notice you're making good progress. Would you like me to suggest the next topic?",
            "This is a common challenge. Here's a practical approach to solve it."
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// ===== INTERACTIONS ===== //
function initInteractions() {
    // Continue course button
    const continueBtns = document.querySelectorAll('.continue-btn, #continueCurrentCourse');
    continueBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showNotification('Continuing your Machine Learning course...', 'success');
            // Simulate navigation to course
            setTimeout(() => {
                window.location.href = 'course.html';
            }, 1500);
        });
    });
    
    // Practice skills button
    const practiceBtn = document.getElementById('practiceSkills');
    if (practiceBtn) {
        practiceBtn.addEventListener('click', () => {
            showNotification('Opening practice environment...', 'info');
            setTimeout(() => {
                window.location.href = 'practice.html';
            }, 1500);
        });
    }
    
    // Course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const courseTitle = card.querySelector('.course-title').textContent;
            showNotification(`Opening ${courseTitle}...`, 'info');
        });
    });
    
    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showNotificationPanel();
        });
    }
    
    // Help button
    const helpBtn = document.getElementById('helpBtn');
    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            showHelpPanel();
        });
    }
}

// ===== UTILITY FUNCTIONS ===== //

function handleSearch(query) {
    showNotification(`Searching for "${query}"...`, 'info');
    // Implement search functionality
    console.log('Search query:', query);
}

function handleNavigation(section) {
    showNotification(`Navigating to ${section}...`, 'info');
    // Implement navigation logic
    console.log('Navigate to:', section);
}

function handleCourseCreation() {
    const formData = new FormData(document.getElementById('courseForm'));
    const courseData = {};
    
    // Collect form data
    for (let [key, value] of formData.entries()) {
        if (courseData[key]) {
            // Handle multiple values (like learning styles)
            if (Array.isArray(courseData[key])) {
                courseData[key].push(value);
            } else {
                courseData[key] = [courseData[key], value];
            }
        } else {
            courseData[key] = value;
        }
    }
    
    console.log('Course Data:', courseData);
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Course...';
    submitBtn.disabled = true;
    
    // Simulate AI course generation
    setTimeout(() => {
        showNotification('🎉 Your personalized course has been created!', 'success');
        
        // Close modal
        document.getElementById('courseModal').classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        document.getElementById('courseForm').reset();
        document.querySelector('.form-step[data-step="1"]').classList.add('active');
        document.querySelectorAll('.form-step:not([data-step="1"])').forEach(step => {
            step.classList.remove('active');
        });
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Simulate navigation to new course
        setTimeout(() => {
            window.location.href = 'course.html?new=true';
        }, 2000);
        
    }, 3000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

function showNotificationPanel() {
    showNotification('You have 3 new notifications', 'info');
    // Implement notification panel
}

function showHelpPanel() {
    showNotification('Opening help center...', 'info');
    // Implement help panel
}

// ===== ANIMATIONS ===== //

// Animate stats on load
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const suffix = stat.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 30);
    });
}

// Initialize animations
setTimeout(animateStats, 500);

// ===== KEYBOARD SHORTCUTS ===== //
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-bar input').focus();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active, .chat-modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
    
    // Ctrl/Cmd + N for new course
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        document.getElementById('createCourseBtn').click();
    }
});

// ===== PROGRESS TRACKING ===== //
function updateProgress() {
    // Simulate progress updates
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.transition = 'width 1s ease';
    });
}

// Initialize progress tracking
setTimeout(updateProgress, 1000);

console.log('🚀 Dashboard ready! Use Ctrl+K to search, Ctrl+N for new course, ESC to close modals.');