
const navLinks = document.getElementsByClassName("nav-links")[0];
const toggleBtn = document.getElementsByClassName("toggle-button")[0];
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

$(window).scroll(function () {
  let myOffset = $("#grayHead").offset().top;
  // console.log(navOffset)
  let windowScroll = $(window).scrollTop();
  if (windowScroll > myOffset - 50) {
    $(".navbar").css("backgroundColor", "rgba(0 , 0 , 0 , .7)");
    $(".navbar").css("padding", "15px 60px");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
    $(".navbar").css("padding", "10px 30px");
  }
});

$("a[href^='#']").click(function (e) {
  let linkhref = $(e.target).attr("href");
  let secOffset = $("linkhref").offset().top;
  $("html, body").animate({ scrollTop: secOffset }, 2000);
});
