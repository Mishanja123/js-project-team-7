!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var c={id:e,exports:{}};return n[e]=c,t.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=c);var a=c("bpxeT"),o=c("2TvXO"),i=c("ccCAN"),s=(a=c("bpxeT"),c("8nrFW")),u=(o=c("2TvXO"),i=c("ccCAN"),document.querySelector(".js_side_categories_list")),l=document.querySelector(".wrap"),d=document.querySelector(".title_categories");function p(){l.classList.remove("hidden"),d.classList.add("hidden")}function f(){l.classList.add("hidden"),d.classList.remove("hidden")}var v=document.querySelector(".js_books_view");function m(){return(m=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.marckUpSideCategories)();case 2:n=e.sent,u.insertAdjacentHTML("beforeend",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function y(){return h.apply(this,arguments)}function h(){return(h=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.innerHTML="",p(),e.next=4,(0,i.marckAllCategories)();case 4:n=e.sent,v.innerHTML=n,f();case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function k(e){return g.apply(this,arguments)}function g(){return(g=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.innerHTML="",p(),e.next=4,(0,i.marckCategorieItem)(n);case 4:r=e.sent,v.innerHTML=r,f();case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=n.target.textContent,"A"===n.target.tagName){t.next=4;break}return t.abrupt("return");case 4:"All categories"===r?y():k(r),e(s)(n.currentTarget.children).map((function(e){return e.classList.remove("selected-category")})),n.target.parentNode.classList.add("selected-category");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.classList.contains("load-more-books")){t.next=3;break}return t.abrupt("return");case 3:return r=n.target.closest(".category-books").firstChild.textContent,t.next=6,w(r);case 6:n.target.classList.add("no-btn"),e(s)(n.target.previousSibling.children).map((function(e){return e.classList.remove("hidden")}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=e(a)(e(o).mark((function t(n){var r,c,a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelectorAll(".list-books"),c=e(s)(r).filter((function(e){return e.dataset.category===n})),t.next=4,(0,i.marckCategorieItemMore)(n);case 4:a=t.sent,c[0].innerHTML=a;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){m.apply(this,arguments)}(),y(),u.addEventListener("click",(function(e){return b.apply(this,arguments)})),v.addEventListener("click",(function(e){return L.apply(this,arguments)}));var _=c("cBnKf");function S(e){var t=JSON.parse(localStorage.getItem("bookCard")||"[]");t.push(e),localStorage.setItem("bookCard",JSON.stringify(t))}var E=document.querySelector(".add-book-button"),T=document.querySelector("#overlay-modal"),q=document.querySelector(".js-modal-close"),C=document.querySelector(".modal"),M=document.querySelector(".modal-content"),A="";function N(){C.classList.remove("active"),T.classList.remove("active"),document.body.style.overflow="",q.removeEventListener("click",N),T.removeEventListener("click",N),document.removeEventListener("keydown",H)}function H(e){"Escape"===e.key&&N()}function O(e){return j.apply(this,arguments)}function j(){return(j=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.marckModal)(n);case 2:r=e.sent,M.innerHTML=r;case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return D=e(a)(e(o).mark((function t(n){var r,c;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=function(){return c.apply(this,arguments)},c=function(){return(c=e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.classList.add("active"),T.classList.add("active"),document.body.style.overflow="hidden",q.addEventListener("click",N),T.addEventListener("click",N),document.addEventListener("keydown",H),q.removeEventListener("click",I),T.removeEventListener("click",I);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)},t.prev=2,A=n.target.closest(".outlineli").dataset.id,t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(2),t.abrupt("return");case 9:if(A){t.next=11;break}return t.abrupt("return");case 11:return t.next=13,O(A);case 13:r();case 16:case"end":return t.stop()}}),t,null,[[2,6]])}))),D.apply(this,arguments)}v.addEventListener("click",I),E.addEventListener("click",(function(){var e=document.querySelector(".book").getAttribute("data-book-id");(0,_.fetchBook)(e).then((function(e){S({book_image:e.book_image,title:e.title,author:e.author,description:e.description,_id:e._id,list_name:e.list_name,buy_links:e.buy_links})}))})),console.log(E),c("xpKCW"),c("cs7FV")}();
//# sourceMappingURL=index.4ba9740e.js.map
