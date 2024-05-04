function handleClick(e){
    const icon = document.getElementById('icon-'+e.id)
    const src = icon.src.split('/').reverse()[0].split('.')[0]
    let url = icon.src.split('/')
    url.pop()
    url = url.join('/')
    if(src=='icon-plus'){
        icon.src = url + '/icon-minus.svg'
    }else{
        icon.src = url + '/icon-plus.svg'
    }
    if (e.style.maxHeight === '200px'){
        e.style.maxHeight = '45px'
    }else{
        e.style.maxHeight = '200px'
    }
}