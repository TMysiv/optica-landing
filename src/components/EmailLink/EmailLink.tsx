export const EmailLink = ({ className, email }: { className: string, email: string }) => (
  <a href={`mailto:${email}`} className={`no-underline ${className}`}>
    {email}
  </a>
);
