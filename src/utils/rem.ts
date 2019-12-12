// 基准大小
const baseSize = 100
// 设置 rem 函数
function setRem () {
  const html = document.documentElement;
  const w_width = html.offsetWidth;
  let def_font_size = "100px";
  if(w_width <= 375){
      def_font_size = w_width / 3.75+ 'px';
  }
  html.style.fontSize = def_font_size;
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
