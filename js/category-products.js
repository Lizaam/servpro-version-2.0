$(document).ready(function () {
  const categoryString = "structured cabling";
  const productCount = $('#product-count');
  const parent = $("#product-section");
  const categoryArea = $("#category-area");
  const products = items.find(function(value) {
    return value.category === categoryString;
  }).products['boxed inserts'];

  categoryArea.text(categoryString);
  productCount.text(products.length);
  parent.append(
    `
    ${products.map(function(value) {
      return `
        <div class="col-md-4 mb-3">
          <div class="product__item border">
            <div
              class="product__item__pic set-bg"
              style="background: url('${value.imageSrc[0]}') no-repeat center / cover"
            >
              <ul class="product__item__pic__hover">
                <li>
                  <a href="#"><i class="fa fa-info-circle"></i></a>
                </li>
                
                <li>
                  <a href="#"><i class="fa fa-shopping-cart"></i></a>
                </li>
              </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">${value.name}</a></h6>
              <h6><a href="#">${value.sku}</a></h6>
              <h5>${value.manufacturer}</h5>
            </div>
          </div>
        </div>
      `
      }).join('')
    }
    `
  );
});
