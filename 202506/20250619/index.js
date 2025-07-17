document.querySelector("#default").addEventListener("click", ()=>{
  Swal.fire({
    html: '<div> 태그 적는거도 가능 </div>'
  })
})

document.querySelector("#icon").addEventListener("click", ()=>{
  Swal.fire({icon:"info", title: "사과", text:"당도가 높은 과일"})
})

document.querySelector("#input").addEventListener("click", ()=>{
  Swal.fire({title: "삭제할래?",
    showDenyButton:true,
    showCancleButton:false,
    confirmButtonText:"네",
    denyButtonText:"아니요"
  }).then(result=>{
    if(result.isConfirmed) Swal.fire("삭제 성공!")
    else Swal.fire("삭제 실패!")
  })
})

document.querySelector("#toast").addEventListener("click", ()=>{
  Swal.fire({
    toast:true,
    position:"top",
    showConfirmButton:false,
    timer:2000,
    timerProgressBar:true,
    icon:"success",
    title:"성공!"
  })
})

// Swal.fire()