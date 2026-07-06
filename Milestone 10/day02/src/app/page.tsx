import Header from "@/component/Header";
import Posts from "@/component/post";
import Users from "@/component/Users";

export default  function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans">
      <Header
        name={"Hossain Ahmmed Taufiq"}
        age={25}
        profession={"Developer"}
      />

      {/*  calling an api and fetching data from it */}
      {/* <h1 className="flex justify-center items-center font-bold mt-4">Home Page</h1> */}
      <Users />

      <Posts />
      
    </div>
  );
}
