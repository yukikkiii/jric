let Dashboard = (() => {
	let global = {
		tooltipOptions: {
			placement: "right"
		},
		menuClass: ".c-menu"
	};

	let menuChangeActive = el => {
		let hasSubmenu = ($(el).hasClass("has-submenu"));
		$(global.menuClass + " .is-active").removeClass("is-active");
		$(el).addClass("is-active");

	};

	let sidebarChangeWidth = () => {
		let $menuItemsTitle = $("li .menu-item__title");
		$(".hamburger-toggle").toggleClass("is-opened");
        $(".menu-box").toggleClass("menu-slidein");
	};

	return {
		init: () => {
			$(".js-hamburger").on("click", sidebarChangeWidth);

			$(".js-menu li").on("click", e => {
				menuChangeActive(e.currentTarget);
			});
		}
	};
})();

Dashboard.init();
