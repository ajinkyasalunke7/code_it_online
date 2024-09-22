const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default LoginLayout;

export async function generateMetadata({}) {
  return {
    title: "Login | Code_it_Online",
  };
}
