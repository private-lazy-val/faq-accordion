import './style.css';

const faqElement = document.querySelector('.faq__accordion');
faqElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion__question') || e.target.classList.contains('accordion__img')) {
        const accordionItem = e.target.closest('.accordion__item');

        if (accordionItem.open) {
            accordionItem.open = false;
        } else {
            const accordionItems = document.querySelectorAll('.accordion__item');
            accordionItems.forEach(item => item.open = false);
            accordionItem.open = true;
        }
        e.preventDefault(); // prevent the default click event action
    }
});