import { ClasesType } from "@/shares/types"

type Props = {
  clase: ClasesType
}

const Clase = ({clase}: Props) => {
  const {image, title, description} = clase;

  const hoverStyles = "absolute flex items-center justify-center h-full w-full bg-primary-500 opacity-0 transition duration-500 hover:opacity-90"

  return (
    <li className="relative cursor-pointer h-[280px] md:h-[300px]">
      <div className={hoverStyles}>
        <div className="w-5/6 mx-auto text-white">
          <h4 className="text-center text-2xl font-bold mb-3">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <img src={image} alt="" className="h-full"/>
    </li>
  )
}

export default Clase