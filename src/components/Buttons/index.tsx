import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

const PrimaryButton: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`py-3 px-6 font-bold rounded-sm hover:bg-blue-400 transition duration-150 bg-blue-500 text-white ${className}`}
    >
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  className: "",
};

export default PrimaryButton;
