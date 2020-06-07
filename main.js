let que = document.getElementById('question');

let done = document.getElementById('done');
done.addEventListener("click", function (e) {
    let ans = eval(que.value);
    que.value = ans;
});


let re = document.querySelector('.re');
re.addEventListener("click", function (e) {
    que.value = "";
});


let typo = document.querySelectorAll('.num_key').forEach(typo =>{
    typo.addEventListener("click",function(e){
        que.value += typo.innerText;
    });
});

let neg = document.querySelector(".op_key").addEventListener("click",function(e){
    que.value = -que.value;
});