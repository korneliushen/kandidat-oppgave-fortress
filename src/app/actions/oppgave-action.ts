import actionData from "../../../types"

export default async function action() {
    async function getData() {
        let res = await fetch("https://fortress.no/data/oppgave-2-2020.json", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
        )
        return res.json()
      }
      let data = await getData() as actionData[]
      data.sort((a, b) => parseInt(a.value)- parseInt(b.value))
      console.log(data)

      let newData = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].description === "valid") {
            newData = [...newData, data[i]]
        }
      }
      console.log(newData)

}