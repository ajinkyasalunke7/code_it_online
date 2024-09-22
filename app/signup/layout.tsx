const SignupLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default SignupLayout;

export async function generateMetadata({}) {
  return {
    title: "Create account | Code_it_Online",
  };
}
