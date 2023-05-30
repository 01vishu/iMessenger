"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
  id,
  placeholder,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        className="
      text-black
      font-light
    py-2
    px-4
    bg-neutral-100
    w-full
    rounded-full
    focus:outline-none
      "
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MessageInput;
