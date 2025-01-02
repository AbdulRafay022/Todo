function BackGroundStyle() {
  const drakBackGround =
    "bg-gradient-to-br from-[#0A1128] via-[#003366] to-[#005f73] bg-[length:200%_200%] bg-[position:0_0] text-white";

  const lightBackGround =
    "bg-gradient-to-br from-[#D9E8F6] via-[#ffE8c1] to-[#C1E1DC] bg-[length:200%_200%] bg-[position:100%_100%]";

  const baseStyle = "min-h-screen transition-all duration-700 ease-in-out p-4";

  return { drakBackGround, lightBackGround, baseStyle };
}

export default BackGroundStyle;
