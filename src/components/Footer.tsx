const Footer = () => {
  return (
    <footer className="section-container py-8 border-t border-border">
      <p className="text-center text-sm text-muted-foreground">
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
