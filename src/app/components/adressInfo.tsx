export default function AdressInfo( props:{adress: object }) {
    return(
        <>
            <div className="w-96 h-full space-y-2">
                <div className="flex flex-col ">
                    <span className="text-3xl text-white">Adresse</span>
                    <span className="text-3xl text-[#d7b180]">{props.adress.street} {props.adress.zipCode} {props.adress.city} </span>
                </div>
            </div>
        </>
    )
}