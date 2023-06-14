import './style.css';

const faqAccordion = document.querySelector('.faq__accordion');
const accordionItems = faqAccordion.querySelectorAll('.accordion__item');
faqAccordion.addEventListener(('click'), (e) => {
    const accordionItem = e.target.closest('.accordion__item');

    if (accordionItem.classList.contains('active')) {
        accordionItem.classList.remove('active');
        accordionItem.querySelector('.accordion__answer').style.maxHeight = null;
    } else {
        accordionItems.forEach((item) => {
            item.classList.remove("active");
            item.querySelector('.accordion__answer').style.maxHeight = null;
        });

        accordionItem.classList.add('active');
        let maxHeight = accordionItem.querySelector('.accordion__answer').scrollHeight + "px";
        accordionItem.querySelector('.accordion__answer').style.maxHeight = maxHeight;
    }
});
