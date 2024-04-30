import Details from "../../../types";


export default function ApartmentInfo(props: { name: Details["name"] ; value: Details["value"]}) {
    let formatValue = props.value
    if (formatValue.toString().length > 4 && typeof formatValue == "number") {
        formatValue = new Intl.NumberFormat("de-DE").format(props.value) + ",-"
    }
    if (typeof formatValue == "number") {
        formatValue = formatValue.toString() + ",-"
    }
    return(
        <>
            <div className="">
                <div className="flex justify-between w-96">
                  <span className="text-white text-3xl">{props.name}</span>
                  <span className="text-[#d7b180] text-3xl">{formatValue}</span>
                </div>
                <div className="h-0.5 bg-white"></div>
            </div>
        </>
    )
}