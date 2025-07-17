const dummy = await new Promise((resolve)=>setTimeout(()=>resolve(JSON.stringify([
  { title:'제목4', write:'2025/06/30', user:'관리자' },
  { title:'제목3', write:'2025/06/30', user:'관리자' },
  { title:'제목2', write:'2025/06/29', user:'관리자' },
  { title:'제목1', write:'2025/06/29', user:'관리자' }
])), 3000));
export { dummy };