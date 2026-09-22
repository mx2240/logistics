import {
  Package,
  Truck,
  Building2,
  ShoppingBag,
  Map,
  Globe,
  Container,
  Warehouse,
  Handshake,
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  LifeBuoy,
  Zap,
} from "lucide-react";

const icons = {
  Package,
  Truck,
  Building2,
  ShoppingBag,
  Map,
  Globe,
  Container,
  Warehouse,
  Handshake,
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  LifeBuoy,
  Zap,
};

export default function ServiceIcon({ name, size = 24, className = "" }) {
  const Icon = icons[name] || Package;
  return <Icon size={size} className={className} />;
}