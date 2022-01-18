let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('A promise 1 deu certo');
    },2000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('A promise 2 deu errado');
    },2000);
});


Promise.all([promise1,promise2])
.then(([resultado1,resultado2])=>{
    console.log("Todas as promises deram certo");
    console.log("Resolvido: "+resultado1);
    console.log("Resolvido: "+resultado2);
})
.catch((error)=>{
    console.log("Uma das promises deu errado");
    console.log("Rejeitado: "+error);
})