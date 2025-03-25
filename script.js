document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
        const otherIndicator = item.querySelector('.toggle-indicator, .toggle-indicator-icon');
        if (otherIndicator) otherIndicator.textContent = '+';
      }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active', !isActive);
    
    // Update indicators
    const indicator = question.querySelector('.toggle-indicator, .toggle-indicator-icon');
    if (indicator) {
      indicator.textContent = faqItem.classList.contains('active') ? '+' : '-';
      indicator.style.transform = faqItem.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    }
  });
});