
// Tabs

const samad_tab_menu = document.querySelectorAll('.samad-tab-menu ul li a');
const samad_tab_pane = document.querySelectorAll('.samad-tab-pane');


samad_tab_menu.forEach(atag =>{
    atag.addEventListener('click', function(e){
        e.preventDefault();

        samad_tab_menu.forEach(items =>{
            items.classList.remove('active')
        });
        atag.classList.add('active');


        samad_tab_pane.forEach(data =>{
            data.classList.remove('active');
            console.log(data)
        });




        const tabpane = document.querySelector(this.getAttribute('href'));
        tabpane.classList.add('active')
        
    })
})
