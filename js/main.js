$(document).ready(function () {
	$("ul")
		.find("li a")
		.click(function () {
			$("ul li a").removeClass("active");
			$(this).addClass("active");
		});
	$(".btn-burger").click(function () {
		//$("nav").slideToggle();
		//$("nav").toggleClass("visible oculto");
		if ($("nav").hasClass("visible")) $("nav").addClass("oculto").removeClass("visible");
		else $("nav").addClass("visible").removeClass("oculto");

		if ($("#burger").attr("src") == "img/burger-white.png") {
			$("#burger").attr("src", "img/close-white.png");
			$(".tarjeta").css("margin", "340px 0px 0px 0px");
		} else {
			$("#burger").attr("src", "img/burger-white.png");
			$(".tarjeta").css("margin", "120px 0px 0px 0px");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() < 340 && $("#burger").attr("src") == "img/close-white.png") {
			if ($(window).width() <= 1300) {
				$("#burger").attr("src", "img/burger-white.png");
				$("nav").addClass("oculto").removeClass("visible");
				$(".tarjeta").css("margin", "120px 0px 0px 0px");
			}
		}
	});
	if ($(window).width() < 1300) {
		$("nav").addClass("oculto").removeClass("visible");
		$("#burger").attr("src", "img/burger-white.png");
		$(".tarjeta").css("margin", "120px 0px 0px 0px");
	}
	$(window).resize(function () {
		if ($(window).width() > 1300) {
			$(".tarjeta").css("margin", "120px 0px 0px 0px");
			$("nav").addClass("visible").removeClass("oculto");
		} else {
			$("nav").addClass("oculto").removeClass("visible");
			$("#burger").attr("src", "img/burger-white.png");
		}
	});

	// para que cierre el menu, solo en resolución menor que 640px
	$("#menu-movil li a").click(function () {
		if ($(window).width() <= 1300 && $("#burger").attr("src") == "img/close-white.png") {
			$("#burger").attr("src", "img/burger-white.png");
			$("nav").addClass("oculto").removeClass("visible");
			$(".tarjeta").css("margin", "120px 0px 0px 0px");
		}
	});

	/*inicio*/

	$("#backend-1")
		.circleProgress({
			value: 0.7,
			fill: "green",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(70 * progress) + "<i>%</i>");
		});

	$("#backend-2")
		.circleProgress({
			value: 0.85,
			fill: "red",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(85 * progress) + "<i>%</i>");
		});
	$("#backend-3")
		.circleProgress({
			value: 0.9,
			fill: "orange",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(90 * progress) + "<i>%</i>");
		});

	$("#backend-4")
		.circleProgress({
			value: 0.75,
			fill: "purple",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(75 * progress) + "<i>%</i>");
		});

	$("#backend-5")
		.circleProgress({
			value: 0.65,
			fill: "blue",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(65 * progress) + "<i>%</i>");
		});

	$("#backend-6")
		.circleProgress({
			value: 0.8,
			fill: "yellow",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(80 * progress) + "<i>%</i>");
		});
	$("#backend-7")
		.circleProgress({
			value: 0.9,
			fill: "pink",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(90 * progress) + "<i>%</i>");
		});
	$("#backend-8")
		.circleProgress({
			value: 0.6,
			fill: "brown",
		})
		.on("circle-animation-progress", function (event, progress) {
			$(this)
				.find("strong")
				.html(Math.round(60 * progress) + "<i>%</i>");
		});
	/*fin*/
	var numbers = [1, 1, 1];
	var roots = numbers.map(function (num) {
		return Math.sqrt(num);
	});
	// Valor 3
	for (var i = 0; i < 5; i++) {
		if (i <= 2) {
			$("#ing-lectura").append("<span>");
			$("#fr-lectura").append("<span>");
		} else {
			$("#ing-lectura").append("<span class='gris'></span>");
			$("#fr-lectura").append("<span class='gris'></span>");
		}
	}
	//Valor 2
	for (var i = 0; i < 5; i++) {
		if (i <= 1) {
			$("#ing-escritura").append("<span>");
			$("#fr-escritura").append("<span>");
			$("#eu-lectura").append("<span>");
			$("#eu-escritura").append("<span>");
			$("#ing-oral").append("<span>");
			$("#fr-oral").append("<span>");
			$("#eu-oral").append("<span>");
		} else {
			$("#ing-escritura").append("<span class='gris'></span>");
			$("#fr-escritura").append("<span class='gris'></span>");
			$("#eu-lectura").append("<span class='gris'></span>");
			$("#eu-escritura").append("<span class='gris'></span>");
			$("#ing-oral").append("<span class='gris'></span>");
			$("#fr-oral").append("<span class='gris'></span>");
			$("#eu-oral").append("<span class='gris'></span>");
		}
	}
});

$(() => {
	/* Objeto banner imagenes*/
	var banner = {
		padre: $("#banner"),
		numeroSlides: $("#banner").children(".slide").length,
		posicion: 1,
	};
	/* Objeto banner info */
	var info = {
		padre: $("#info"),
		numeroSlides: $("#info").children(".slide").length,
		posicion: 1,
	};
	/*Banner colocar primera imagen*/
	banner.padre.children(".slide").first().css({ left: 0 });
	info.padre.children(".slide").first().css({ left: 0 });
	/* Banner  calcular altura*/
	var altoBanner = () => {
		var alto = banner.padre.children(".slide").first().outerHeight();
		banner.padre.css({ height: alto + "px" });
	};
	var altoInfo = () => {
		var alto = info.padre.children(".active").first().outerHeight();
		info.padre.animate({ height: alto + "px" });
	};
	altoBanner();
	altoInfo();

	$(window).resize(() => {
		altoBanner();
		altoInfo();
	});
	/*Botones
	$("#info")
		.children(".slide")
		.each(() => {
			$("#botones").append("<span>");
		});
	$("#botones").children().first().addClass("active");*/

	/* Banner  botones*/
	// Boton Siguiente
	$("#banner-next").on("click", (e) => {
		e.preventDefault();
		// Nos aseguramos de que las demas slides empiecen desde la derecha.
		banner.padre.children().not(".active").css({
			left: "100%",
		});
		info.padre.children().not(".active").css({
			left: "100%",
		});
		// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
		$("#banner .active").animate({
			left: "-100%",
		});
		$("#info .active").animate({
			left: "-100%",
		});

		if (banner.posicion < banner.numeroSlides) {
			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$("#banner .active").removeClass("active").next().addClass("active").animate({
				left: 0,
			});
			$("#info .active").removeClass("active").next().addClass("active").animate({
				left: 0,
			});
			//$("#botones").children(".active").removeClass().next().addClass("active");
			banner.posicion = banner.posicion + 1;
		} else {
			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$("#banner .active").removeClass("active");
			banner.padre.children().first().addClass("active").animate({
				left: 0,
			});
			$("#info .active").removeClass("active");
			info.padre.children().first().addClass("active").animate({
				left: 0,
			});
			//$("#botones").children(".active").removeClass();
			//$("#botones").children().not(".active").first().addClass("active");
			// Reseteamos la posicion a 1
			banner.posicion = 1;
		}
		altoInfo();
	});
	// Boton Anterior
	$("#banner-prev").on("click", (e) => {
		e.preventDefault();

		// Nos aseguramos de que las demas slides empiecen desde la izquierda.
		banner.padre.children().not(".active").css({
			left: "-100%",
		});
		info.padre.children().not(".active").css({
			left: "-100%",
		});

		// Desplazamos el  slide activo de izquierda a derecha
		$("#banner .active").animate({
			left: "100%",
		});
		$("#info .active").animate({
			left: "100%",
		});

		if (banner.posicion > 1) {
			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$("#banner .active").removeClass("active").prev().addClass("active").animate({
				left: 0,
			});
			$("#info .active").removeClass("active").prev().addClass("active").animate({
				left: 0,
			});
			//$("#botones").children(".active").removeClass().prev().addClass("active");
			banner.posicion = banner.posicion - 1;
		} else {
			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$("#banner .active").removeClass("active");
			banner.padre.children().last().addClass("active").animate({
				left: 0,
			});
			$("#info .active").removeClass("active");
			info.padre.children().last().addClass("active").animate({
				left: 0,
			});
			//$("#botones").children(".active").removeClass();
			//$("#botones").children().not(".active").last().addClass("active");
			// Reseteamos la posicion a 1
			banner.posicion = banner.numeroSlides;
		}
		altoInfo();
	});

	/*Portafolio*/
	var grid = new Muuri(".grid", {
		layout: {
			rounding: false,
		},
	});
	/*visualizamos  las imagenes una vez cargadas*/

	window.addEventListener("load", () => {
		grid.refreshItems().layout();
		document.getElementById("grid").classList.add("imagenes-cargadas");

		//Agregamos los listener para filtrar por categoría
		const enlaces = document.querySelectorAll("#categorias a");
		enlaces.forEach((enlace) => {
			//console.log(enlace);

			enlace.addEventListener("click", (evento) => {
				evento.preventDefault();
				enlaces.forEach((elemento) => elemento.classList.remove("activo"));
				evento.target.classList.add("activo");

				const categoria = evento.target.innerHTML.toLowerCase();
				categoria === "todos"
					? grid.filter("[data-categoria]")
					: grid.filter(`[data-categoria=${categoria}]`);
			});
		});
		//Agregamos los listener para filtrar desde la barra de búsqueda
		document.querySelector("#barra-busqueda").addEventListener("focus", (evento) => {
			evento.target.placeholder = "";
		});
		document.querySelector("#barra-busqueda").addEventListener("input", (evento) => {
			const busqueda = evento.target.value;
			console.log(busqueda.toLowerCase());
			grid.filter((elemento) => elemento.getElement().dataset.etiquetas.includes(busqueda.toLowerCase()));
			/*busqueda === "todos"
				? grid.filter("[data-etiquetas]")
				: grid.filter(`[data-etiquetas=${busqueda.toLowerCase()}]`);*/
		});
		//Agregamos los listener para las imágemes
		const overlay = document.getElementById("overlay");
		document.querySelectorAll(".grid .item img").forEach((elemento) => {
			elemento.addEventListener("click", (evento) => {
				const ruta = elemento.getAttribute("src");
				const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
				evento.preventDefault();
				overlay.classList.add("activo");
				document.querySelector(".overlay img").src = ruta;
				document.querySelector(".overlay a").href = elemento.parentNode.parentNode.dataset.url;
				document.querySelector(".overlay .descripcion").innerHTML = descripcion;
			});
		});
		//Agregamos  listener para el boton
		document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
			overlay.classList.remove("activo");
		});
		overlay.addEventListener("click", (evento) => {
			evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
		});
	});
});
function pruebaGit2() {
	alert("saludos2");
}
function pruebaGit() {
	alert("hola");
}
