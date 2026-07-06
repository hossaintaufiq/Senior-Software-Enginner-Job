export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number|null;
  stock: number;
  tags: string[];
  brand: string|null|null;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[]|null;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[]|null;
  thumbnail: string|null;
}
