$(function(){
	$('.product').each(function(){
		product($(this));
	});
});
var undertextValueDefault = 'Чего сидишь? Порадуй котэ, <a>купи.</a>';
var categorySelectedHover = '<div>Котэ не одобряет?</div>';
function product(element){
		var undertextElement = element.find('.product__undertext');
		var undertextValue = undertextElement.html();
		var undertextValueDisabled = 'Печалька, '+element.find('.product__type').text()+' закончился.';
		var category = element.find('.product__category');
		category.append(categorySelectedHover);
		if(element.hasClass('product_disabled')) undertextElement.html(undertextValueDisabled);
		else{
			undertextElement.html(undertextValueDefault);
			elementHover(element.find('.product__text'));
			elementHover(element.find('.product__undertext > a'));
			element.click(function(){
				var current = $(this);
				current.toggleClass('product_selected');
				if(current.hasClass('product_selected')){
					undertextElement.html(undertextValue);
					current.removeClass('product_hover');
				}
				else{
					undertextElement.html(undertextValueDefault);
					elementHover(element.find('.product__undertext > a'));
				}
			});
		}
		function elementHover(el){
			el.hover(function(){
				$(this).parents('.product').addClass('product_hover');
			},function(){
				$(this).parents('.product').removeClass('product_hover');
			});
		}
}
