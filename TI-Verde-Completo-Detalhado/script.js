
const ctxEmpresas=document.getElementById('graficoEmpresas');
if(ctxEmpresas){
new Chart(ctxEmpresas,{type:'bar',data:{labels:['Empresa A','Empresa B','Empresa C'],datasets:[{label:'Redução consumo (%)',data:[28,35,22],backgroundColor:['#198754','#28a745','#45c06f']}]},options:{responsive:true,plugins:{tooltip:{enabled:true}}}});
}
const ctxPessoas=document.getElementById('graficoPessoas');
if(ctxPessoas){
new Chart(ctxPessoas,{type:'doughnut',data:{labels:['Sim','Não'],datasets:[{label:'Participação',data:[17,0],backgroundColor:['#28a745','#198754']}]},options:{responsive:true,plugins:{tooltip:{enabled:true}}}});
}
