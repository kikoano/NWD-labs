const products = [
	{ id: 1, title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png' },
	{ id: 2, title: 'Apple Macbook Pro', price: 2500.00, qty: 1, image: './img/MacBook-Pro.png' },
	{ id: 3, title: 'Amazon Kindle Ebook', price: 150.00, qty: 1, image: './img/Amazon_Kindle.png' },
	{ id: 4, title: 'USB-C to HDMI cable', price: 10, qty: 1, image: './img/usbC_to_hdmi.jpg' },
];

const formatNumber = (n, c, d, t) => {
	var c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d === undefined ? '.' : d,
		t = t === undefined ? ',' : t,
		s = n < 0 ? '-' : '',
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

Vue.filter('formatCurrency', function (value) {
	return formatNumber(value, 2, '.', ',');
});

Vue.component('shopping-cart', {
	props: ["items"],
	computed: {
		total: function () {
			return this.items.reduce((a, c) => a + (c.price * c.qty), 0);
		}
	},
	methods: {
		removeItem(index) {
			this.items.splice(index, 1);
		}
	}
})

const app = new Vue({
	el: "#app",
	data: {
		cartItems: [],
		items: products
	},
	methods: {
		addToCart(itemToAdd) {
			let found = false;
			for (item of this.cartItems) {
				if (item.id === itemToAdd.id) {
					found = true;
					item.qty += itemToAdd.qty;
				}
			}
			if (!found) {
				this.cartItems.push(Vue.util.extend({}, itemToAdd));
			}
			itemToAdd.qty = 1;
		}
	}
});
