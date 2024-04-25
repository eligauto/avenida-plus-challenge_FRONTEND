export interface IOrderDetailsProps {
    itemsCost: number;
    itemsCount: number;
    shippingCost: number;
    subtotal: number;
    interest?: number;
    CFT: string;
    total: number;
    onConfirm: () => void;
  }