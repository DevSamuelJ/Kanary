const CustomButton = ({ label }: { label: string }) => {
  return (
    <button
      type="submit"
      className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70"
    >
      {label}
    </button>
  );
};

export default CustomButton;
