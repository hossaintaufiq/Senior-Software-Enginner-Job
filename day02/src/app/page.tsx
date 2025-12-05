import Header from "@/component/Header";
import Posts from "@/component/post";

export default  function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans">
      <Header
        name={"Hossain Ahmmed Taufiq"}
        age={25}
        profession={"Developer"}
      />

      {/*  calling an api and fetching data from it */}
      <h1>this is a home page</h1>
      <Posts />
    </div>
  );
}
