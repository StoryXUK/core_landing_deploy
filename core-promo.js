const revealItems=document.querySelectorAll('.offer-card,.app-panel,.benefits-grid article,.promise-panel');
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);});},{threshold:.18});
revealItems.forEach(item=>{item.classList.add('reveal-item');revealObserver.observe(item);});
