import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <div className="home w-full">
      <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-14">
        <SectionTitle title={`Our Foods`} />
      </div>
    </div>
  );
}
