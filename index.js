document.getElementById('click').addEventListener('click',()=>{
    const el = document.getElementById('click-count');
    let count = parseInt(el.innerText);
    count++;
    el.innerText= count;
});

document.getElementById('reset').addEventListener('click',()=>{
    const el = document.getElementById('click-count');
    el.innerText= '0';
});