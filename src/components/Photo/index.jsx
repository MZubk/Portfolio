import photo from "./photo.jpg";

export default function Photo() {
  return (
    <div>
      <img
        className="h-full w-32 md:h-48 md:w-48 lg:h-72 lg:w-72 sm:rounded-3xl rounded-full border-2 border-amber-950"
        src={photo}
        alt="Foto de perfil do Murillo Zubk no Github."
      />
    </div>
  );
}
