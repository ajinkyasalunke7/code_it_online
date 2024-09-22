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
    title: "Dashboard | Code_it_Online",
  };
}
