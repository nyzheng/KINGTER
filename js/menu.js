document.addEventListener('DOMContentLoaded', function () {
    const menuControl = document.getElementById('menu-control');
    const header = document.getElementById('header');

    if (menuControl) {
        menuControl.checked = false;
    }

    const menuItems = document.querySelectorAll('.menu > li > a');

    menuControl.addEventListener('change', function () {
        // 當選單打開或關閉時更新 header 的類
        if (menuControl.checked) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            const parent = e.target.closest('li');
            const submenu = parent.querySelector('.pc-submenu');
            const span = parent.querySelector('a > span');

            if (submenu) {
                e.preventDefault();
                if (parent.classList.contains('open')) {
                    parent.classList.remove('open');
                    span.classList.remove('expand');
                    span.classList.add('close');
                } else {
                    document.querySelectorAll('.menu > li.open').forEach((openItem) => {
                        openItem.classList.remove('open');
                        const openSpan = openItem.querySelector('a > span');
                        if (openSpan) {
                            openSpan.classList.remove('close');
                            openSpan.classList.add('expand');
                        }
                    });
                    parent.classList.add('open');
                    span.classList.remove('close');
                    span.classList.add('expand');
                }
            } else {
                // 如果點擊的是一個連結，則重新加載頁面
                menuControl.checked = false; // 重置選單控制狀態
                header.classList.remove('active'); // 關閉選單時移除 active 類
                window.location.href = item.getAttribute('href');
            }
        });
    });
});
