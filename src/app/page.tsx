import Image from "next/image";
import ApartmentInfo from "./components/apartmentInfo";
import ContactInfo from "./components/contactInfo";
import AddressInfo from "./components/adressInfo";
import Data from "../../types";
import action from "../app/actions/oppgave-action"

export default async function Home() {
  async function getData() {
    let res = await fetch("https://fortress.no/data/data-2020-interview.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }
    )
    return res.json()
  }
  let data = await getData() as Data;

  let title1 = data.title[0]
  let title2 = data.title[1]

  action()
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="w-8/12 h-4/6  flex-col">
        <div className="w-10/12 h-1/3 flex items-start justify-start text-white leading-snug">
          <h1 className="text-4xl">{title1} {title2}</h1>
        </div>
        <div className="w-9/12 h-1/3 flex">
          <div className="min-w-96 h-52 gap-x-28 grid grid-cols-2 grid-rows-3 ">
            {data.details.map((i) => {
              return <ApartmentInfo name={i.name} value={i.value} />
            })}
          </div>
        </div>
        <div className="w-[51rem] justify-between h-1/3 flex">
          <AddressInfo adress={data.address} />
          <ContactInfo contact={data.contact} />
        </div>
      </section>
    </main>
  );
}
