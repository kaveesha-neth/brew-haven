document.addEventListener('DOMContentLoaded', () => {
    const targets = [
        document.querySelector('.typing-text'),
        document.querySelector('.image-coffee'),
        document.querySelector('.sub-card-animated-1'),
        document.querySelector('.sub-card-animated-2')
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('typing-text')) {
                    entry.target.classList.add('animate');
                } else if (entry.target.classList.contains('image-coffee')) {
                    entry.target.classList.add('imganimate');
                } else if (entry.target.classList.contains('sub-card-animated-1')) {
                    entry.target.classList.add('cardanimate');
                } else if (entry.target.classList.contains('sub-card-animated-2')) {
                    entry.target.classList.add('cardanimate');
                }
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    targets.forEach(target => observer.observe(target));
});

function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log(`Element with ID ${elementId} not found.`);
    }
}

const checkbox = document.getElementById('check');
const nav = document.getElementById('nav-header');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    nav.style.transform = 'translateX(0)';
  } else {
    nav.style.transform = 'translateX(-1000px)';
  }
});

function closeNav() {
    nav.style.transform = 'translateX(-1000px)';
}

// Code by Kaveesha Nethmal


// This autoscroll causes some lagging. I tried to fix it. but coulnd't. So I disconnected it


// const scrollBox = document.getElementById('scrollBox');
// const scrollContent = document.getElementById('scrollContent');

// let scrollSpeed = 5;
// let cloneCount = 0;
// const maxClones = 2;

// function cloneItems() {
//   const items = scrollContent.querySelectorAll('.menu-item');
//   const itemsArray = Array.from(items).slice(0, items.length / (cloneCount + 1)); 

//   itemsArray.forEach(item => {
//     const clone = item.cloneNode(true);
//     scrollContent.appendChild(clone);
//   });

//   cloneCount++;

//   if (cloneCount > maxClones) {
//     for (let i = 0; i < itemsArray.length; i++) {
//       const firstItem = scrollContent.querySelector('.item');
//       if (firstItem) {
//         scrollContent.removeChild(firstItem);
//       }
//     }
//     cloneCount--;
//     scrollBox.scrollLeft -= scrollBox.clientWidth;
//   }
// }

// function autoScroll() {
//   scrollBox.scrollLeft += scrollSpeed;

//   if (scrollBox.scrollLeft + scrollBox.clientWidth >= scrollContent.scrollWidth - 300) {
//     cloneItems();
//   }

//   requestAnimationFrame(autoScroll);
// }

// autoScroll();

