import Contact from "../../../types"
import Address from "../../../types"
import { parsePhoneNumber } from "libphonenumber-js"

export default function ContactInfo(props: { contact: Contact}) {
    const phoneNumber = parsePhoneNumber(props.contact.phone, "NO")
    return(
        <>
            <div className="w-80 h-full space-y-2">
                <div className="flex flex-col ">
                    <span className="text-3xl text-white">Kontakt</span>
                    <span className="text-3xl text-[#d7b180]">{props.contact.name + " "}{phoneNumber.formatInternational()}</span>
                </div>
            </div>
        </>
    )
}