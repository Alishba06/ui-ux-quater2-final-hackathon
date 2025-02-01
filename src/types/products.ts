
export interface Product {
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
  category?: string; // Added category to distinguish different types
}



// export interface Product {
//     id: string; 
//     name: string;
//     price: number; 
//     inventory: number;
//     image?: {
//       _type: 'image'; 
//       asset: {
//         url: string | StaticImport;
//         _ref: string;
//         _type: 'reference';
//       };
//       hotspot?: boolean;
//     }; 
//   }
  