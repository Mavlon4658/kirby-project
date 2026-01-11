const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const header = item.querySelector('.accordion-btn');
        const content = item.querySelector('.accordion-body__wrap');

        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    
        header.addEventListener('click', () => {
            item.classList.toggle('active');
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}


const licenseModal = document.querySelector('.license-modal');
const licenseModalBg = document.querySelector('.license-modal__bg');
const licenseModalBtn = document.querySelector('.license-modal__close');
const licenseModalOpenBtn = document.querySelectorAll('.license-modal__btn');

if (licenseModalOpenBtn.length) {
    licenseModalOpenBtn.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            licenseModal.classList.add('active');
            bodyHidden();
        }

        licenseModalBtn.onclick = () => {
            licenseModal.classList.remove('active')
            bodyVisible();
        }

        licenseModalBg.onclick = () => {
            licenseModal.classList.remove('active')
            bodyVisible();
        }
    })
}