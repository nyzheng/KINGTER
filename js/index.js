document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 768;

    const targets = [
        ...document.querySelectorAll('.area2 > .content > .left'),
        ...document.querySelectorAll('.area2 > .content > .right > .part-2 > .img-box'),
        ...document.querySelectorAll('.area3 > .content > .title-1'),
        ...document.querySelectorAll('.area3 > .content > .part-1'),
        ...document.querySelectorAll('.area3 > .content > .part-2'),
        ...document.querySelectorAll('.area3 > .content > .part-3'),
        ...document.querySelectorAll('.area4 > .content > .title-1'),
        ...document.querySelectorAll('.area4 > .content > .item-box > .item-1'),
        ...document.querySelectorAll('.area4 > .content > .item-box > .item-2'),
        ...document.querySelectorAll('.area4 > .content > .item-box > .item-3'),
        // 添加更多目标元素选择器
    ];

    const observerOptions = isMobile ? { threshold: 0.2 } : { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
                // 可选：动画执行一次后停止监听
            }
        });
    }, observerOptions);

    targets.forEach((target) => {
        if (target) {
            target.style.animationPlayState = 'paused'; // 初始化为暂停
            observer.observe(target);
        }
    });
});