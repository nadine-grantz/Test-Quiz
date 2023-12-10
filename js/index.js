const antwortElement1 = document.querySelector('[data-js="zeig-antwort1"]');
const buttonElement1 = document.querySelector('[data-js="Button1"]');
    
    buttonElement1.addEventListener('click', () => {
        if (antwortElement1.style.display === 'none') {
            antwortElement1.style.display = 'block';
        } else {
            antwortElement1.style.display = 'none';
        }
    });

const antwortElement2 = document.querySelector('[data-js="zeig-antwort2"]');
const buttonElement2 = document.querySelector('[data-js="Button2"]');
        
        buttonElement2.addEventListener('click', () => {
            if (antwortElement2.style.display === 'none') {
                antwortElement2.style.display = 'block';
            } else {
                antwortElement2.style.display = 'none';
            }
        });

const antwortElement3 = document.querySelector('[data-js="zeig-antwort3"]');
const buttonElement3 = document.querySelector('[data-js="Button3"]');
            
            buttonElement3.addEventListener('click', () => {
                if (antwortElement3.style.display === 'none') {
                    antwortElement3.style.display = 'block';
                } else {
                    antwortElement3.style.display = 'none';
                }
            });



   
    