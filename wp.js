
const wp_top_menu = document.querySelectorAll('.wp-top-menu ul li a');
const wp_tab_pane = document.querySelectorAll('.wp-tab-pane')

wp_top_menu.forEach(atag =>{
    atag.addEventListener('click',function(e){
        e.preventDefault();
        wp_top_menu.forEach(arrow =>{
            arrow.classList.remove('arrow-active');
        });
        atag.classList.add('arrow-active');
        let tabs_pane = document.querySelector(this.getAttribute('href'));

        wp_tab_pane.forEach(data =>{
            data.classList.remove('arrow-active')
        })

        tabs_pane.classList.add('arrow-active')

    })
});
/**
 * wp tabs body contant
 */
const theme_header_bottom = document.querySelectorAll('.theme-header-bottom ul li a');
const wp_tab_body_conta = document.querySelectorAll('.wp-tab-body-conta');

theme_header_bottom.forEach(items =>{

    items.addEventListener('click', function(e){
        e.preventDefault();
        theme_header_bottom.forEach(item =>{
            item.classList.remove('active2')
        })
        items.classList.add('active2');
        wp_tab_body_conta.forEach(itme =>{
            itme.classList.remove('active')
        })
        let all_idtsb_body = document.querySelector(this.getAttribute('href'));
        all_idtsb_body.classList.add('active');         
        /**
         * navigation header
         */
        let navi_header = document.querySelectorAll('.navi-header ul li a');
        let divfor_pages = document.querySelectorAll('.divfor-pages');
        navi_header.forEach(nhiteme =>{

            nhiteme.addEventListener('click', function(e){
                e.preventDefault();

                navi_header.forEach(nhitem2 =>{
                    nhitem2.classList.remove('active1')
                });

                nhiteme.classList.add('active1');

                divfor_pages.forEach(naite =>{
                    naite.classList.remove('active3')
                })
                let naviatag = document.querySelector(this.getAttribute('href'));
                naviatag.classList.add('active3')
                console.log(naviatag)
            });
        })
        /**
         * buil-menu
         */
        const buil_menu = document.querySelectorAll('.buil-menu ul li a');
        const buil_con_integra = document.querySelectorAll('.buil-con-integra');

        buil_menu.forEach(bmenu =>{
            bmenu.addEventListener('click', function(e){
                e.preventDefault();

                buil_menu.forEach(bmenu2 =>{
                    bmenu2.classList.remove('active4');
                });

                bmenu.classList.add('active4');
                let active5 = document.querySelector(this.getAttribute('href'))
                buil_con_integra.forEach(item =>{
                    item.classList.remove('active5')
                });
                active5.classList.add('active5')
            })
        })
        console.log()
    })

})
/**
 * reset button
 */
const reset_b1 = document.querySelector('.reset-b1');
const reset_pupap = document.querySelector('.reset-pupap');
const reset_close = document.querySelector('.reset-pupap .closee');

reset_b1.addEventListener('click', function(){
    reset_pupap.classList.add('activee')
});
reset_close.addEventListener('click', function(){
    reset_pupap.classList.remove('activee')
})