// Your code here

const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '0px'

// dodger.style.left = '0px'

// document.addEventListener('keydown', function(e){
//     if (e.key === 'ArrowLeft'){
//         const leftNumbers = dodger.style.left.replace('px' , '');
//         const left = parseInt(leftNumbers , 10);

//         dodger.style.left = `${left - 1}px`;
//     }
// })

dodger.addEventListener('keydown' , function(e){
    if (e === 'ArrowLeft'){
        moveDodgerLeft();
    } else if (e === 'ArrowRight'){
        moveDodgerRight();
    }
})

function moveDodgerLeft(e){
    const leftNumbers = dodger.style.left.replace('px' , '');
    const left = parseInt(leftNumbers , 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(e){
    // const rightNumbers = dodger.style.left.replace('px' , '');
    // const right = parseInt(rightNumbers , 10);
    const leftNumbers = dodger.style.left.replace('px' , '');
    const left = parseInt(leftNumbers , 10);

    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}