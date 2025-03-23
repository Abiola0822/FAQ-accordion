document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');

    const toggleIndicator = question.querySelector('.toggle-indicator');
    const toggleIndicatorIcon = question.querySelector('.toggle-indicator-icon');
    if (faqItem.classList.contains('active')) {
      toggleIndicator.textContent = '−'; // Minus sign for expanded state
    } else {
      toggleIndicatorIcon.textContent = '+'; // Plus sign for collapsed state
    }
  });
});