const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const tabs=$$('.tab-item')
const panes=$$('.tab-pane')

const my = tabs.forEach((tab,index) => {
    const tabActive=$('.tab-item.active')
    const line=$('.tabs .line')
    const pane=panes[index]
    line.style.left=tabActive.offsetLeft +'px'
    line.style.width=tabActive.offsetWidth +'px'
    tab.onclick =function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        line.style.left=this.offsetLeft +'px'
        line.style.width=this.offsetWidth +'px'
        tab.classList.add('active')
        pane.classList.add('active')
    }
})

