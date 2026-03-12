interface Props{
  label:string;
  onClick?: () => void;
  type?:"button" | "submit" | "reset";
  variant?:"primary-filled" | "secondary-filled" | "danger-filled"|
    "primary-outlined"|"secundary-outlined"|"danger-outlined";
  size?:"small"|"base"|"large"|"bigger"
  isDisabled?:boolean;
}

const Button = ({label,isDisabled=false,onClick,type="button",variant="primary-filled",
  size="base"
}:Props) => {
  const variantClass:string=variant==="primary-filled"
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
    const variantSize:string=size==="small"
      ?"py-1 px-2 text-sm"
      :size==="base"
        ?"py-2 px-4 text-base"
        :size==="large"
          ?"py-3 px-5 text-xl"
          :size==="bigger"
            ?"py-4.5 px-6.5 text-3xl"
            :""

  return (
    <button disabled={isDisabled} type={type} onClick={onClick} className={`${variantClass} ${variantSize}
      rounded cursor-pointer transition border-2 pc-ultra:py-3 pc-ultra:px-5
      pc-ultra:text-xl`}>{label}</button>
  )
}

export default Button
