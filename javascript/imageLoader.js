define(['photoData', 'ractive', 'rv!templates/imageLoader'], function(PhotoData, Ractive, imageLoaderTemplate) {
	function ImageLoader(containerId) {
		this._ractive = new Ractive({
			template: imageLoaderTemplate,
			el: containerId,
			data: { photoData: PhotoData },
			twoway: false
		});
	}

	ImageLoader.prototype = {
		constructor: ImageLoader,
	}

	return ImageLoader;
});