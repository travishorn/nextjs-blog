import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout";

const RedLink = styled.a`
  color: red;
`;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref>
      <RedLink>{name}</RedLink>
    </Link>
  );
}

export default function Page() {
  return (
    <Layout>
      <NavLink href="/" name="Home" />
    </Layout>
  );
};
