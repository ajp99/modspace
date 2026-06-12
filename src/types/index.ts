export type VariantType = "solid" | "glassmorph";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface VariantProps extends BaseProps {
  variant?: VariantType;
}
