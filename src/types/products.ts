
export interface Product {
  selectedPlant: any;
  quantity: any;
  id: string;
  name: string;
  price: number;
  inventory: number;
  image?: {
    _type: 'image';
    asset: {
      url: string;
      _ref?: string;
      _type?: 'reference';
    };
    hotspot?: boolean;
  };
  category?: string; 
}

