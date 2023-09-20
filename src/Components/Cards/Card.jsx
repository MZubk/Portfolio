import PropTypes from "prop-types";
export default function Card({
  title,
  description,
  skills,
  image,
  image2,
  alt,
  alt2,
  link,
}) {
  return (
    <div className="mb-5 p-3 bg-neutral-950 sm:rounded-xl sm:shadow-lg flex-col items-center gap-2 border-2 border-stone-800 sm:hover:shadow-stone-900 sm:hover:shadow-md">
      <h3 className="text-xl pb-3 text-slate-100 font-bold">{title}</h3>
      <div className="flex-row justify-end gap-2 p-2 ">
        {skills.map((skill) => (
          <span
            className="bg-stone-800 mx-1 px-3 py-1 rounded-xl text-emerald-400 text-xs uppercase font-mono"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {description.map((content, index) => (
          <p className="text-slate-300 pb-2" key={index}>
            {content}
          </p>
        ))}
      </div>
      {image && (
        <div className="card__image">
          <img className="sm:p-1 min-w-[100%]" src={image}></img>
          {alt && <p className="ard__image-alt ">{alt}</p>}
        </div>
      )}

      {image2 && (
        <div className="card__image">
          <img className="sm:p-1 min-w-[100%]" src={image2}></img>
          {alt && <p className="ard__image-alt ">{alt2}</p>}
        </div>
      )}
      <div className="my-5">
        <a
          className="bg-stone-800 rounded-lg font-bold px-6 py-2 hover:font-bold hover:text-green-400 hover:bg-stone-900"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Visitar
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  image2: PropTypes.string,
  alt2: PropTypes.string,
  link: PropTypes.string,
};
