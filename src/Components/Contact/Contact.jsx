import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  HomeIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="pb-3">
        <h3 className="font-bold">Contato:</h3>
      </div>
      <div>
        <ul className="">
          <li className="flex pb-1 items-center">
            <i className="text-violet-600">
              <GitHubLogoIcon />
            </i>
            <span className="px-2">/mzubk</span>
            <a
              className="text-emerald-100 hover:text-emerald-500"
              href="https://github.com/MZubk"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          </li>
          <li className="flex pb-1 items-center">
            <i className="text-blue-500">
              <LinkedInLogoIcon />
            </i>
            <span className="px-2">in/mzubk</span>
            <a
              className="text-emerald-100 hover:text-emerald-500"
              href="https://www.linkedin.com/in/mzubk/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          </li>
          <li className="flex pb-1 items-center">
            <i className="text-rose-500">
              <EnvelopeClosedIcon />
            </i>
            <span className="px-2">mzubk.dev@gmail.com</span>
            <a
              className="text-emerald-100 hover:text-emerald-500"
              href="mailto:mzubk.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          </li>
          <li className="flex pb-1 items-center">
            <i className="text-sky-500">
              <HomeIcon />
            </i>
            <span className="px-2">Curitiba, PR - Brasil</span>
            <a
              className="text-emerald-100 hover:text-emerald-500"
              href="https://goo.gl/maps/YUqLLhEC4mTdGE9o8"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
