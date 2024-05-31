export default function Banner() {
  return (
    <div className="max-[850px]:block flex justify-between items-center  min-h-[232px] bg-primary py-16 px-16 mt-16">
      <p className="text-[30px] font-bold text-white"> FAITES MODIFIER VOTRE CONTENEUR AUJOURD&apos;HUI !</p>
      <button className="max-[850px]:ml-0 ml-10 max-[850px]:mt-10 p-4 max-w-[270px]  bg-white font-bold text-xl">
        OBTENIR UN DEVIS
      </button>
    </div>
  );
}
