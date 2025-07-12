import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const getAllFoods = async() => {
  const res = await fetch('http://localhost:3000/api/items');
  const data = res;
  console.log(data);
  return data;
}

export default async function Home() {
  const foods = await getAllFoods();
  console.log("All foods from home page:", foods);

  return (
    <div className="home w-full">
      <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-14">
        <SectionTitle title={`Our Foods`} />
      </div>
    </div>
  );
}
