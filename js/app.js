(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (o.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    o = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (o.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function n(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let c = (e, o = !1, c = 500, l = 0) => {
    const d = document.querySelector(e);
    if (d) {
      let i = "",
        a = 0;
      o &&
        ((i = "header.header"), (a = document.querySelector(i).offsetHeight));
      let s = {
        speedAsDuration: !0,
        speed: c,
        header: i,
        offset: l,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (t(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(d, "", s);
      else {
        let e = d.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
      }
      n(`[gotoBlock]: ????????...???????? ?? ${e}`);
    } else n(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
  };
  let l = !1;
  setTimeout(() => {
    if (l) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let n = document.querySelector(".icon-menu");
      n &&
        n.addEventListener("click", function (n) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : o(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
              n = o.dataset.goto ? o.dataset.goto : "",
              l = !!o.hasAttribute("data-goto-header"),
              d = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            c(n, l, d), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            o = t.target;
          if ("navigator" === o.dataset.watch) {
            const e = o.id,
              n =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? n && n.classList.add("_navigator-active")
              : n && n.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
