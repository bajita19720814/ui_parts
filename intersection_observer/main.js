'use stirct'; 
{
    const targets = document.querySelectorAll('img');

    function appear(entries, obs) {
        console.log(entries);
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('active');
                obs.unobserve(entrie.target);
            }
        });

    }
    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(appear, options);

    targets.forEach(target => {
        observer.observe(target);
    });
}