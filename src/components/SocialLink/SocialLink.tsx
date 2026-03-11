export const SocialLink = ({ label, href, className }: { label: string; href: string; className: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`no-underline ${className}`}>
    {label}
  </a>
);
