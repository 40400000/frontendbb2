interface ProductListingProps {
  imageUrl?: string;
  productName?: string;
  ean?: string;
  material?: string;
  height?: string;
  rating?: number;
  reviewCount?: number;
}

export function ProductListing({
  imageUrl = "https://fotolooman.nl/media/catalog/product/cache/06e4c451197453e67f718945f1975457/1/_/1_2894_1.jpg",
  productName = "DroneX FlyingStar",
  ean = "EAN: 8720892533402",
  material = "Vliegt weg | 2 batterijen",
  rating = 5,
  reviewCount = 569
}: ProductListingProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={productName}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 text-2xl">
                      🦆
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              {productName}
            </h2>
            
            {/* EAN */}
            <p className="text-sm text-gray-500 mb-1">
              {ean}
            </p>
            
            {/* Material and Height */}
            <p className="text-sm text-gray-500 mb-1">
              {material}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm font-medium text-gray-900">
              ({reviewCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
