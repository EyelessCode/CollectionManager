interface Props{
  label:string;
  onClick?: () => void;
  type?:"button" | "submit" | "reset";
  variant?:"primary-filled" | "secondary-filled" | "danger-filled"|
    "primary-outlined"|"secundary-outlined"|"danger-outlined";
  isDisabled?:boolean;
}

const Button = ({label,isDisabled=false,onClick,type="button",variant="primary-filled"}:Props) => {
  const variantClass=variant==="primary-filled"
    ?"bg-blue-500 hover:bg-blue-700 font-bold text-white"
    :variant==="secondary-filled"
      ?"bg-gray-500 hover:bg-gray-700 font-bold text-white"
      :variant==="danger-filled"
        ?"bg-red-500 hover:bg-red-700 font-bold text-white"
        :variant==="primary-outlined"
          ?"border-blue-700 hover:bg-blue-700 hover:text-white font-bold text-blue-700"
          :variant==="secundary-outlined"
            ?"border-gray-700 hover:bg-gray-700 hover:text-white font-bold text-black"
            :variant==="danger-outlined"
              ?"border-red-700 hover:bg-red-700 hover:text-white font-bold text-red-700"
              :"";

  return (
    <button disabled={isDisabled} type={type} onClick={onClick} className={`py-2 px-4 rounded
      cursor-pointer transition border-2 ${variantClass}`}>{label}</button>
  )
}

export default Button
