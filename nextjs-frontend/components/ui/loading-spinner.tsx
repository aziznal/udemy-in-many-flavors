import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

type LoadingSpinnerProps = React.SVGAttributes<SVGElement> & {
  size?: number;
};

const LoadingSpinner = forwardRef<SVGElement, LoadingSpinnerProps>(
  (props, _ref) => (
    <Loader2
      {...props}
      className={cn("origin-center animate-spin", props.className)}
    />
  )
);

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
