function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Auth Feature</h2>
      {children}
    </div>
  );
}

export default AuthLayout;
