const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function()
{
    {
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
}
for (let i=0; i<btnsOpenModal.length; i++)
{
    console.log(btnsOpenModal[i].addEventListener('click',OpenModal()));
    
}

const CloseModal = function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);