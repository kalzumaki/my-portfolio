import { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}
