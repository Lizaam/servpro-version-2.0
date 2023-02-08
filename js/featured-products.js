$(document).ready(function () {
  const parents = $(".latest-product__text");
  const displays = items
    .find(function (value) {
      return value.category === "displays and storage";
    })
    .products["screens/monitors"].slice(0, 3);
  const powerBanks = items
    .find(function (value) {
      return value.category === "power banks";
    })
    .products["power bank units"].slice(0, 3);
    
  // Displays
  $(parents[0]).append(
    `<div class="latest-product__slider owl-carousel">
        <div class="latest-prdouct__slider__item">
          ${displays
            .map(function (value) {
              return `<a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                  <img src=${value.imageSrc[0]} alt="" />
                </div>
                <div class="latest-product__item__text">
                  <h6>
                    ${value.name}
                  </h6>
                  <span>${value.manufacturer}</span>
                </div>
              </a>`;
            })
            .join("")}
        </div>
      </div>`
  );

  // Power Bankds
  $(parents[1]).append(
    `<div class="latest-product__slider owl-carousel">
        <div class="latest-prdouct__slider__item">
          ${powerBanks
            .map(function (value) {
              return `<a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                  <img src=${value.imageSrc[0]} alt="" />
                </div>
                <div class="latest-product__item__text">
                  <h6>
                    ${value.name}
                  </h6>
                  <span>${value.manufacturer}</span>
                </div>
              </a>`;
            })
            .join("")}
        </div>
      </div>`
  );

  $(".latest-product__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<span class='fa fa-angle-left'><span/>",
      "<span class='fa fa-angle-right'><span/>",
    ],
    smartSpeed: 200,
    autoHeight: false,
    autoplay: false,
  });
});
