'use strict'; 
{
    const titles = document.querySelectorAll('#title > div');
    const descrips = document.querySelectorAll('#description > div');
    
    titles.forEach(title => {
        title.addEventListener('click', () => {

            titles.forEach(t => {
                if (t !== title) {
                    t.classList.remove('active');
                }
                title.classList.add('active');
            });
            descrips.forEach(des => {
                des.classList.add('hidden');
            });
            document.getElementById(title.dataset.id).classList.remove('hidden');
        });

    });
}