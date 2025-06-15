(function() {
  const body = document.body;
  const menu = document.querySelector('#menu'); // 主要選單
  const hamburger = document.querySelector('.toggle-menu'); // 漢堡按鈕

  function handleResize() {
    if(window.innerWidth > 1024) { // 超過這個寬度就是桌面版
      body.classList.remove('menu-open');  // 移除漢堡選單打開狀態

      if(menu) {
        menu.style.display = '';  // 確保選單顯示
      }

      if(hamburger) {
        hamburger.style.display = ''; 
        hamburger.classList.remove('active');
      }
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);
})();
