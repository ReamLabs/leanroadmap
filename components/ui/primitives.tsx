interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = '', ...props }: CardProps) {
  return <div className={`rounded-lg border ${className}`} {...props} />;
}

export function CardHeader({ className = '', ...props }: CardProps) {
  return <div className={`p-6 ${className}`} {...props} />;
}

export function CardTitle({ className = '', ...props }: CardProps) {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />;
}

export function CardContent({ className = '', ...props }: CardProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = '', ...props }: CardProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function Badge({
  className = '',
  variant = 'default',
  ...props
}: CardProps & { variant?: 'default' | 'outline' | 'success' }) {
  const variantClasses = {
    default: 'bg-slate-100 text-slate-900',
    outline: 'border border-slate-200 text-slate-900',
    success: 'bg-green-100 text-green-900',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

export function Separator({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`h-[1px] w-full bg-slate-200 ${className}`} {...props} />;
}
