import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 style={{color: "white"}}>
          Hi I&apos;m Gabriel!
        </h1>
      </div>
        <Image
          src={"/nice-selfie-square.jpg"}
          alt={"Picture of Gabriel"}
          width={300}
          height={300}
          priority={true}
        />
    </>
  );
}