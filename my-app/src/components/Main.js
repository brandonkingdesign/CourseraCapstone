export default function Main({ className = "", children, ...props }) {
  const cls = `site-main${className ? " " + className : ""}`;
  return (
    <main id="main" className={cls} {...props}>
      {children}
    </main>
  );
}
