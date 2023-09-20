export default function About() {
  return (
    <div className="p-2">
      <div>
        <h4 className="font-bold pb-2">Sobre mim:</h4>
      </div>
      <div>
        <p className="whitespace-normal px-3 pb-1">
          Olá. sou o Murillo Zubk, desenvolvedor front-end.
        </p>
        <p className="whitespace-normal px-3">
          Obrigado por visitar meu Portfólio, aqui apresento meus principais
          projetos que considero mais relevantes.
        </p>
      </div>
      <div className="py-2">
        <div>
          <h4 className="font-bold pb-2">Conheça meu trabalho:</h4>
        </div>
        <div>
          <p className="whitespace-normal px-3">
            Convido você a explorar meu portfólio, uma vitrine do meu trabalho.
            Cada um desses projetos foi uma oportunidade de aprender e aplicar
            minhas habilidades de maneira criativa e funcional. Fique à vontade
            também de vistar meu{" "}
            <a
              className="text-violet-100 hover:text-violet-600"
              href="https://github.com/MZubk"
            >
              Github
            </a>{" "}
            que é um espaço aberto onde compartilho minha jornada de
            desenvolvimento.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4 className="font-bold pb-2">Vamos Colaborar:</h4>
          </div>
          <div>
            <p className="whitespace-normal px-3">
              Se você tiver alguma pergunta, ideia ou oportunidade de
              colaboração, não hesite em entrar em contato através do meu{" "}
              <a
                className="text-rose-100 whitespace-nowrap hover:text-rose-500"
                href="mzubk.dev@gmail.com"
              >
                E-Mail
              </a>{" "}
              ou{" "}
              <a
                className="text-blue-100 hover:text-blue-500"
                href="https://www.linkedin.com/in/mzubk/"
              >
                Linkedin
              </a>
              .<br /> Estou animado para explorar novos horizontes e construir
              algo incrível juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
