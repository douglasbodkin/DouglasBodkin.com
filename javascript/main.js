require.config({
	paths: {
		ractive: 'ractive',
		rv: 'rv',
		templates: '../templates'
	}
});

require(['imageLoader'], function(ImageLoader) {
	var imageLoader = new ImageLoader('indexImagesContainer');
});
