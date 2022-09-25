import { FC } from "react";
import PrimaryButton from "../../components/Buttons";
import Layout from "../../layouts/main";

const HomePage: FC = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <PrimaryButton>
        <p>Hello World</p>
      </PrimaryButton>
    </Layout>
  );
};

export default HomePage;
