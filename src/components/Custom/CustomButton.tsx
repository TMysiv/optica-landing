interface Props {
  text: string;
  width: number;
  className?: string;
  iconClassName?: string;
  handleClick?: (value?: string | number) => void;
  value?: string | number;
}

export const CustomButton = ({ text, width, className, iconClassName, handleClick, value }: Props) => {
  return (
    <button
      className={`px-4 h-[60px] rounded-2xl flex items-center justify-around group ${className}`}
      style={{ width: `${width}px`, paddingLeft: 0, paddingRight: 0 }}
      onClick={() => handleClick && handleClick(value)}
    >
      {text}
    </button>
  )
}
